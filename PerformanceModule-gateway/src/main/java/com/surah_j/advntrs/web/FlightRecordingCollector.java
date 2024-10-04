package com.surah_j.advntrs.web;

import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.dataroutes.RequestContext;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;
import com.surah_j.advntrs.DiagnosticsManagerImpl$JfrFileContributor;
import com.surah_j.advntrs.GatewayHook;
import org.json.JSONException;
import org.json.JSONObject;
import jdk.jfr.Configuration;
import jdk.jfr.Recording;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.text.ParseException;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.stream.Stream;

import static jdk.jfr.RecordingState.RUNNING;
import static jdk.jfr.RecordingState.STOPPED;

public class FlightRecordingCollector {

    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());
    private Recording recording;
    private String configuration;
    private final AtomicBoolean jfrCapturing = new AtomicBoolean(false);
    private final Map<String, String> recordsMap = new HashMap<>();
    private Boolean exit = false;
    private File file;

    private long age = 0;
    private long maxSize = 0;
    private long duration = 0;

    private String ageType = "m";
    private String sizeType = "m";
    private String durationType = "m";

    GatewayContext context;

    // takes the body of the response in start capture route and sets variables
    public void setProperties(JSONObject body) throws JSONException {
        configuration = body.getString("configuration");
        ageType = body.getString("ageTime");
        sizeType = body.getString("sizeMetric");
        exit = body.getBoolean("exit");
        String durationStr = body.getString("duration");
        String maxSizeStr = body.getString("size");
        String ageStr = body.getString("age");

        // Check if strings are not empty before parsing
        if (ageStr != null && !ageStr.isEmpty()) {
            try {
                age = Long.parseLong(ageStr);
            } catch (NumberFormatException e) {
                e.printStackTrace();
            }
        }

        if (durationStr != null && !durationStr.isEmpty()) {
            try {
                duration = Long.parseLong(durationStr);
            } catch (NumberFormatException e) {
                e.printStackTrace();
            }
        }

        if (maxSizeStr != null && !maxSizeStr.isEmpty()) {
            try {
                maxSize = Long.parseLong(maxSizeStr);
            } catch (NumberFormatException e) {
                e.printStackTrace();
            }
        }

        exit = body.getBoolean("exit");
    }

    // maps to jfr configuration files
    public void setRecordsMap(){
        recordsMap.put("Threads", "/com/surah_j/advntrs/ThreadMonitoring.jfc");
        recordsMap.put("Memory", "/com/surah_j/advntrs/MemoryandThreadMonitoringwHeap.jfc");
        recordsMap.put("Threads and Memory", "/com/surah_j/advntrs/MemoryandThreadMonitoringLite.jfc");
    }

    // takes path to configuration resource and sets the config
    public Configuration setConfiguration(String configuration) {
        Configuration config;
        setRecordsMap();
        try {
            String stream = recordsMap.getOrDefault(configuration, "/com/surah_j/advntrs/MemoryandThreadMonitoringLite.jfc");
            log.info(stream);
            InputStream configStream = getClass().getResourceAsStream(stream);
            assert configStream != null;
            BufferedReader reader = new BufferedReader(new InputStreamReader(configStream));
            config = Configuration.create(reader);
        } catch (ParseException | IOException e) {
            throw new RuntimeException(e);
        }
        return config;
    }

    // sets the maxiumum age of data to disk for recording.
    public void setMaxAge(long maxAge) {
        if (recording != null) {
            switch (ageType) {
                case "d":
                    recording.setMaxAge(Duration.ofDays(maxAge));
                    break;
                case "h":
                    recording.setMaxAge(Duration.ofHours(maxAge));
                    break;
                case "m":
                    recording.setMaxAge(Duration.ofMinutes(maxAge));
                    break;
            }
        }
    }

    // sets the maximum duration for the recording
    public void setMaxDuration(long duration) {
        if (recording != null) {
            switch (durationType) {
                case "d":
                    recording.setDuration(Duration.ofDays(duration));
                    break;
                case "h":
                    recording.setDuration(Duration.ofHours(duration));
                    break;
                case "m":
                    recording.setDuration(Duration.ofMinutes(duration));
                    break;
            }
        }
    }

    // Maximum size for the recording in bytes.
    public void setMaxSize(long maxSize) {
        if (recording != null) {
            long length;
            switch (sizeType) {
                case "m":
                    length = maxSize * 1048576;
                    recording.setMaxSize(length);
                    break;
                case "g":
                    length = maxSize * 1073741824;
                    recording.setMaxSize(length);
                    break;
            }
        }
    }

    // **** Starts Recording *****
    public void startRecording() throws IOException {
        GatewayContext context = GatewayHook.context;
        File file = dumpFile(context);
        this.file = file;
        log.info(String.valueOf(Path.of(file.getPath())));
        Configuration config = setConfiguration(configuration);
        recording = new Recording(config);
        if(age != 0){setMaxAge(age);}
        if(duration != 0){setMaxDuration(duration);}
        if(maxSize != 0){setMaxSize(maxSize);}
        if(exit){
            recording.setDumpOnExit(exit);
        }
        recording.setToDisk(true);
        recording.setDestination(Path.of(file.getPath()));
        recording.setName("FlightRecording");
        recording.start();

        jfrCapturing.set(true);
        log.info("JFR recording started.");

        // Start a new thread to monitor the recording. So we can see on status page if running.
        new Thread(() -> {
            try {
                monitorRecording(context, file);
            } catch (InterruptedException | IOException e) {
                throw new RuntimeException(e);
            }
        }).start();
    }

    public void monitorRecording(GatewayContext context, File file) throws InterruptedException, IOException {
        try {
            // Checks state of recording
            while (recording.getState().equals(RUNNING)) {
                Thread.sleep(1000);
            }
            log.info("Recording has stopped");
            cleanup(context);

            // sets capture thread to false
            jfrCapturing.set(false);

            // dumps to disk
            if(recording.getState() == STOPPED){
                try {
                    log.info("Stopping capture and dumping file Option A");
                    log.info(String.valueOf(Path.of(file.getPath())));
                    recording.dump(Path.of(file.getPath()));
                    log.info("JFR recording stopped. File saved to: " + file.getPath());
                    // performs clean up on filesystem
                    cleanup(context);
//                diagnosticFiles(reqContext);
                } catch (IOException e) {
                    throw new RuntimeException(e);
                } finally {
                    recording.close();
                }
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            log.error("Monitoring thread interrupted.", e);
            recording.close();
        }
    }

    // flag for UI to set status page
    public boolean isCapturing() throws IOException {
        if (jfrCapturing.get()) {
            String responseBody = "Capture already running";
        }
        return jfrCapturing.get();
    }

    // manual stop to recording
    public void stopRecording(GatewayContext context) throws IOException {
        String responseBody;

//        if (!jfrCapturing.get()) {
//            responseBody = "No capture running";
//            response.setContentLength(responseBody.length());
//            response.getWriter().write(responseBody);
//        }

        if (recording != null) {
            try {
                log.info("Manual stop Option B");
//                log.info(String.valueOf(Path.of(file.getPath())));
//                recording.dump(Path.of(file.getPath()));
                recording.stop();
                jfrCapturing.set(false);
            } finally {
                recording.close(); // Ensure recording is closed afterward
            }
            log.info("JFR recording stopped. File saved to: " + file.getPath());
        }

        // resets variables for next recording
        configuration = null;
        file = null;
        maxSize = 0;
        age = 0;
        duration = 0;
        ageType = "m";
        sizeType = "m";
        durationType = "m";

        cleanup(context);

//        responseBody = "Capture stopped";
//        response.setContentLength(responseBody.length());
//        response.getWriter().write(responseBody);
    }

    public File dumpFile(GatewayContext context){
        File directory = context.getSystemManager().getLogsDir();
        LocalDateTime currentDate = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyMMdd_HHmmss");
        String formattedDate = currentDate.format(formatter);
        String filename = "FlightRecording_" + formattedDate + ".jfr";
        File file = new File(directory, filename);
        return file;
    }

    public void diagnosticFiles(RequestContext reqContext) {
        log.info("In Diagnostics Files...");
        GatewayContext context = reqContext.getGatewayContext();
        context.getDiagnosticsManager().addContributor(new DiagnosticsManagerImpl$JfrFileContributor(context));
    }

    public void cleanup(GatewayContext context) {
        int daysOld = 1;
        int maxFiles = 3;
        Instant cutoffDate = Instant.now().minus(daysOld, ChronoUnit.DAYS);
        File directory = context.getSystemManager().getLogsDir();

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
            stream.filter(path -> path.toString().endsWith(".jfr"))
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
                    assert oldestFile != null;
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

