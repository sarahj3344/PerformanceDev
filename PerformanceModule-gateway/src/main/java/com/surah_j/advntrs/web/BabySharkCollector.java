package com.surah_j.advntrs.web;

import com.inductiveautomation.ignition.common.logging.Level;
import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.dataroutes.RequestContext;
import com.inductiveautomation.ignition.gateway.localdb.persistence.PersistenceSession;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;
import com.surah_j.advntrs.DiagnosticsManagerImpl$PcapFileContributor;
import com.surah_j.advntrs.SubsystemHandler.SubsystemBase;
import com.surah_j.advntrs.SubsystemHandler.SubsystemHandlerFactory;
import com.surah_j.advntrs.records.PerformanceSettingsRecord;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.pcap4j.core.*;
import simpleorm.dataset.SQuery;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.sql.SQLException;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.stream.Stream;

import javax.servlet.http.HttpServletResponse;

public class BabySharkCollector {

    GatewayContext context;
    private String dev;
    private String ip;
    private String port;
    private String filter;
    private String protocolFilter;
    private String subsystem;
    private Boolean logging;
    private String connectionName;
    private PcapDumper dump;
    private Thread captureThread;
    private PcapHandle handle;
    private final AtomicBoolean capturing = new AtomicBoolean(false);
    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());
    private final Map<String, String> recordsMap = new HashMap<>();
    private RequestContext reqContext;

    // map used to determine the correct config.idb table to query
    public void setRecordsMap() {
        recordsMap.put("Modbus TCP Driver", "MODBUSTCPDRIVERSETTINGS");
        recordsMap.put("Logix Driver", "LOGIXDRIVERSETTINGS");
        recordsMap.put("DNP3 Driver", "DNP3DRIVERSETTINGS");
        recordsMap.put("SMTP", "CLASSICSMTPEMAILPROFILES");
        recordsMap.put("Database", "DATASOURCES");
    }

    // retrieves the network interfaces on the Ignition server and send sends the name / description
    public JSONArray getNIFs() throws IOException, JSONException {
        List<PcapNetworkInterface> nif = null;

        try {
            nif = Pcaps.findAllDevs();
        } catch (PcapNativeException e) {
            throw new RuntimeException(e);
        }

        if (nif == null || nif.isEmpty()) throw new IOException("No NIF to capture");

        StringBuilder json = new StringBuilder("[");
        for (int i = 0; i < nif.size(); i++) {
            PcapNetworkInterface info = nif.get(i);
            if (i > 0) {
                json.append(",");
            }

            // Display the IP address of the NIC
            String addresses = info.getAddresses().toString();
            String template = "address: [/";
            String ipAddress = "Unavailable";
            int start = addresses.indexOf("address: [/") + template.length();
            int end = addresses.indexOf("]", start);
            if (end != -1){
                ipAddress = addresses.substring(start, end);
                log.trace(ipAddress);
            }
            json.append("{")
                    .append("\"name\":\"")
                    .append(info.getName().replace("\\", "\\\\"))
                    .append("\",")
                    .append("\"description\":\"").append(info.getDescription().replace("\\", "\\\\"))
                    .append(", NIC: ")
                    .append(ipAddress)
                    .append("\"")
                    .append("}");
        }
        json.append("]");

        log.trace(json.toString());

        JSONArray nifArray = new JSONArray(json.toString());
        JSONObject nifs = new JSONObject();
        nifs.append("nifs", nifArray);
        return nifArray;
    }

    // returns the network interface object based on the name
    public PcapNetworkInterface setNif(String name) throws PcapNativeException {
        this.dev = name;
        return Pcaps.getDevByName(dev);
    }

    // takes the body and sets the k/v to variables
    public void setProperties(JSONObject body) throws JSONException {
        connectionName = body.getString("connection");
        dev = body.getString("device");
        ip = body.getString("ip");
        port = body.getString("port");
        logging = body.getBoolean("logging");
        protocolFilter = body.getString("filter");
    }

    // queries the settings record to get the snapshot length and timeout.
    // Also queries the idb for devices.
    public JSONObject persistentRecs(RequestContext reqContext) throws JSONException {
        this.reqContext = reqContext;
        JSONObject json = new JSONObject();
        PersistenceSession session = reqContext.getGatewayContext().getPersistenceInterface().getSession();
        List<Map> results;

        try {
            SQuery<PerformanceSettingsRecord> query = new SQuery<>(PerformanceSettingsRecord.META);
            List<PerformanceSettingsRecord> settings = session.query(query);
            JSONArray jsonArray = new JSONArray();
            json.put("settings", jsonArray);
            JSONObject settingsJson = new JSONObject();
            for (PerformanceSettingsRecord record : settings) {
                if (record != null) {
                    jsonArray.put(settingsJson);
                    settingsJson.put("Snapshot Length", record.getSnapshotLength());
                    settingsJson.put("Read Timeout", record.getReadTimeout());
                }
            }

            if (subsystem != null && !subsystem.isEmpty()) {
                results = session.rawQueryMaps(("SELECT HOSTNAME, PORT FROM " + recordsMap.get(subsystem)), true);
                settingsJson.put("IP", results.get(0).get("HOSTNAME"));
                settingsJson.put("Port", results.get(0).get("PORT"));
                this.ip = settingsJson.getString("IP");
                this.port = settingsJson.getString("Port");
            }
            json = settingsJson;
        } finally {
            session.close();
        }
        return json;
    }

    // creates the handle for packet capture with the snapshot length and timeout
    public void createHandle(PcapNetworkInterface device, JSONObject persistentRecs) throws JSONException, PcapNativeException {
        int SnapshotLength = persistentRecs.getInt("Snapshot Length");
        int timeout = persistentRecs.getInt("Read Timeout");
        device = setNif(dev);
        handle = device.openLive(SnapshotLength, PcapNetworkInterface.PromiscuousMode.PROMISCUOUS, timeout);
    }

    // If device selected, queries the internal database for device information
    public List<Map> connectionDetails(RequestContext request) throws SQLException, IOException, JSONException {
//        setRecordsMap();
        List<Map> results = new ArrayList<>();
        String req = request.readBody();
        JSONObject body = new JSONObject(req);
        this.subsystem = body.getString("table");
//        String table = recordsMap.get(subsystem);
        GatewayContext context = request.getGatewayContext();
        PersistenceSession session = context.getPersistenceInterface().getSession();
        SubsystemBase handler = SubsystemHandlerFactory.getHandler(subsystem);
        results = handler.getConnectionNames(session);

//        try {
//            if(subsystem.contains("Driver")){
//            results = session.rawQueryMaps(("SELECT NAME FROM " + table + " JOIN DEVICESETTINGS ON DEVICESETTINGSID = DEVICESETTINGS_ID"), true);
//            }
//            if(subsystem.contains("SMTP")){
//                results = session.rawQueryMaps(("SELECT NAME FROM " + "EMAILPROFILES"), true);
//            }
//        } finally {
//            session.close();
//        }

        return results;
    }

    // if a filter passed from UI, sets filter on handle
    public void setFilter() throws NotOpenException, PcapNativeException {
        filter = "";
        if (!ip.isEmpty()) {
            filter = "host " + ip + " ";
            if (!port.isEmpty() || !protocolFilter.isEmpty()) {
                filter = filter + "and ";
            }
        }

        if (!port.isEmpty()){
            filter = filter + "port " + port + " ";
            if(!protocolFilter.isEmpty()){
                filter = filter + "and ";
            }
        }

        if(!protocolFilter.isEmpty()){
            filter = filter + protocolFilter;
        }

//        log.info("FILTER: " + filter);

        if (!filter.isEmpty()) {
            handle.setFilter(filter, BpfProgram.BpfCompileMode.OPTIMIZE);
        }
    }

    // turns up logging on MDC key for device
    public void setLogging(Level level) {
        GatewayContext context = reqContext.getGatewayContext();
        log.info("Changing logging level");
        if(subsystem.contains("Driver")){
            context.getLoggingManager().setPropertyLevel("device-name", connectionName, level);
        }
        if(subsystem.contains("SMTP")){
            context.getLoggingManager().setPropertyLevel("name", connectionName, level);
        }
    }

    // starts capture
    public void capture() throws IOException, NotOpenException, PcapNativeException {
        LocalDateTime currentDate = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyMMdd_HHmmss");
        String formattedDate = currentDate.format(formatter);
//        String responseBody;
        String filename = "pcapCapture_" + formattedDate + ".pcap";

        File directory = reqContext.getGatewayContext().getSystemManager().getLogsDir();
        File file = new File(directory, filename);

        if (!capturing.get()) {
            capturing.set(true);
            // capture thread responsible for dumping packets to file
            captureThread = new Thread(() -> {
                try {
                    PacketListener listener = new PacketListener() {
                        {
                            // opens file path to dump packets
                            try {
                                dump = handle.dumpOpen(file.getPath());
                            } catch (PcapNativeException | NotOpenException e) {
                                throw new RuntimeException(e);
                            }
                        }

                        // dumps packet
                        @Override
                        public void gotPacket(PcapPacket packet) {
                            try {
                                dump.dump(packet);
                            } catch (NotOpenException e) {
                                throw new RuntimeException(e);
                            }
                        }
                    };
                    // handle loops infinitely
                    handle.loop(-1, listener);
                } catch (PcapNativeException | InterruptedException | NotOpenException e) {
                    e.printStackTrace();
                } finally {
                    capturing.set(false);
                }
            });

            // capture thread start
            captureThread.start();

            // sets MDC key on device
            if(logging){
                setLogging(Level.TRACE);
            }
            log.info("Capture started");
//            responseBody = "Capture started";
//            response.setContentLength(responseBody.length());
//            response.getWriter().write(responseBody)
        }
    }

    public boolean isCapturing() throws IOException {
        if (capturing.get()) {
            String responseBody = "Capture already running";
        }
        return capturing.get();
    }

    public void setCapturing(Boolean value){
        capturing.set(value);
    }

    // ends capture
    public void endCapture() throws IOException, NotOpenException {
        String responseBody;

//        if (!capturing.get()) {
//            responseBody = "No capture running";
//            response.setContentLength(responseBody.length());
//            response.getWriter().write(responseBody);
//        }
        capturing.set(false);
        log.info("Capturing set to false");

        // stops capture thread
        if (captureThread != null) captureThread.interrupt();
        log.info("Capture thread interrupted");
//        CompletableFuture.runAsync(() -> {
            try {
                if (handle != null) {
                    log.info("Breaking loop to end capture...");
                    handle.breakLoop();
                    dump.close();
                    log.info("Closing handle...");
                    handle.close();
                }
            } catch (Exception e) {
                // Handle exception
                log.info("Exception thrown");
            }
//        }).exceptionally(e -> {
//            // Log exception
//            return null;
//        });

        removeLogging();
        cleanup();

        // resets values
        ip = null;
        port = null;
        subsystem = null;
        dev = null;
        logging = false;
        filter = "";

//        responseBody = "Capture stopped";
//        response.setContentLength(responseBody.length());
//        response.getWriter().write(responseBody);
    }


    public void removeLogging() {
        GatewayContext context = reqContext.getGatewayContext();
        log.info("Changing logging level");
        context.getLoggingManager().clearPropertyLevels();
    }

    // adds contributor to diagnostics manager
    public void diagnosticFiles() {
        GatewayContext context = reqContext.getGatewayContext();
        context.getDiagnosticsManager().addContributor(new DiagnosticsManagerImpl$PcapFileContributor(context));

    }


    // file system cleanup to remove old files
    public void cleanup() {
        int daysOld = 1;
        int maxFiles = 3;
        Instant cutoffDate = Instant.now().minus(daysOld, ChronoUnit.DAYS);
        File directory = reqContext.getGatewayContext().getSystemManager().getLogsDir();

        // Comparator for comparing file modification times
        Comparator<Path> comparator = Comparator.comparingLong(path -> {
            try {
                return Files.getLastModifiedTime(path).toMillis();
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });

        // Priority queue to keep track of oldest files
        PriorityQueue<Path> fileQueue = new PriorityQueue<>(comparator);

        try (Stream<Path> stream = Files.list(directory.toPath())) {
            stream.filter(path -> path.toString().endsWith(".pcap"))
                    .forEach(path -> {
                        try {
                            Instant lastModifiedTime = Files.getLastModifiedTime(path).toInstant();
                            if (lastModifiedTime.isBefore(cutoffDate)) {
                                Files.delete(path);
                                log.info("Deleted file: " + path);
                            } else {
                                fileQueue.add(path);
                            }
                        } catch (IOException e) {
                            log.error("Error processing file: " + path, e);
                        }
                    });

            // Delete oldest files if more than maxFiles exist
            while (fileQueue.size() > maxFiles) {
                Path oldestFile = fileQueue.poll();
                try {
                    Files.deleteIfExists(oldestFile);
                    log.info("Deleted oldest file: " + oldestFile);
                } catch (IOException e) {
                    log.error("Error deleting file: " + oldestFile, e);
                }
            }
        } catch (IOException e) {
            log.error("Error accessing directory: " + directory, e);
        }
    }
// end of collector
}

