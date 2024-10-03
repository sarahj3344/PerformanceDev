package com.surah_j.advntrs.web;

import com.inductiveautomation.ignition.common.gson.Gson;
import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.dataroutes.HttpMethod;
import com.inductiveautomation.ignition.gateway.dataroutes.RequestContext;
import com.inductiveautomation.ignition.gateway.dataroutes.RouteGroup;
import com.inductiveautomation.ignition.gateway.dataroutes.WicketAccessControl;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;

import com.sun.jna.Library;
import com.sun.jna.Native;
import com.sun.jna.NativeLibrary;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.Runtime;
import java.lang.System;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.pcap4j.core.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import static com.inductiveautomation.ignition.gateway.dataroutes.RouteGroup.TYPE_JSON;


public class BabySharkRoutes {

    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());
    private final RouteGroup routes;
    private boolean pcapStatus = false;
    private GatewayContext context;
    BabySharkCollector Nemo = new BabySharkCollector();

    public BabySharkRoutes (GatewayContext context, RouteGroup group) {
        this.routes = group;
        this.context = context;
    }

    public void mountRoutes() {

        routes.newRoute("/network")
                .handler(this::initialState)
                .type(TYPE_JSON)
                .mount();

        routes.newRoute("/connections")
                .handler(this::connections)
                .type(TYPE_JSON)
                .method(HttpMethod.POST)
                .restrict(WicketAccessControl.STATUS_SECTION)
                .mount();

        routes.newRoute("/start-capture")
                .handler(this::startCapture)
                .type(TYPE_JSON)
                .method(HttpMethod.POST)
                .restrict(WicketAccessControl.STATUS_SECTION)
                .mount();

        routes.newRoute("/stop-capture")
                .handler(this::stopCapture)
                .type(TYPE_JSON)
                .restrict(WicketAccessControl.STATUS_SECTION)
                .mount();

        log.info("Routes mounted");
    }

    public Object initialState(RequestContext request, HttpServletResponse response) throws IOException, JSONException {
        NativeLibrary.getInstance("libpcap.so");
        log.info("Library path: " + System.getProperty("java.library.path"));
        log.info(Pcaps.libVersion());
        JSONArray nifs = Nemo.getNIFs();
        JSONObject state = new JSONObject();
        state.put("nifs", nifs);


        // get running state
        String running = "false";
        state.put("running", Nemo.isCapturing());

        // log.trace(state.toString());

        // Set response content type to JSON
        response.setContentType("application/json");

        return state;
    }

    public String connections(RequestContext req, HttpServletResponse resp) throws IOException, SQLException, JSONException {
        List<Map> connectionNames = Nemo.connectionDetails(req);

        // Set response content type to JSON
        resp.setContentType("application/json");
        Gson gson = new Gson();
        return gson.toJson(connectionNames);
    }

    public Object startCapture(RequestContext request, HttpServletResponse response) throws IOException, JSONException, PcapNativeException, NotOpenException {
        // Get the writer to send response
        try{
            if(!Nemo.isCapturing()){
                log.trace("In start capture block");
                String req = request.readBody();
                JSONObject body = new JSONObject(req);
                log.trace(body.toString());
                Nemo.setProperties(body);
                JSONObject settingsRec = Nemo.persistentRecs(request);
                PcapNetworkInterface device = Nemo.setNif(body.get("device").toString().replace("\\\\", "\\"));
                Nemo.createHandle(device, settingsRec);
                Nemo.setFilter();
                Nemo.capture();
            }
        } catch (Exception e) {
            String failure = "Capture failed.";
            JSONObject state = new JSONObject();
            state.put("running", false);
            state.put("failure", failure);
            return state;
        }
        return 0;
}

    public Object stopCapture(RequestContext context, HttpServletResponse response) throws NotOpenException, IOException {
        Nemo.endCapture();
//        Nemo.diagnosticFiles();
        return 0;
    }
}


// ideas for triggering the install of Npcap
 /*     if(!pcapStatus) {
String osName = System.getProperty("os.name");
String osVersion = System.getProperty("os.version");
String osArch = System.getProperty("os.arch");

            try{
//                log.trace(Pcaps.libVersion());
                    log.info(osName);
                log.info(osArch);
            } catch(Exception e){
        log.info("WARNING: No libcap version found, required for packet capture");
            }

Map<String, String> installCommands = new HashMap<>();

// Relative path to the Npcap executable in the resources folder
String npcapPath = "C:\\FlightRecording\\npcap-1.80.exe";

            installCommands.put("Windows", npcapPath);
            installCommands.put("Windows 10", npcapPath);
            installCommands.put("Windows 11", "start /wait " + npcapPath + " /S");
            installCommands.put("Linux (Ubuntu/Debian)", "sudo apt-get install libpcap-dev");
            installCommands.put("Linux (CentOS/RHEL)", "sudo yum install libpcap-devel");
            installCommands.put("Linux (Fedora)", "sudo dnf install libpcap-devel");
            installCommands.put("Linux (Arch)", "sudo pacman -S libpcap");
            installCommands.put("Mac", "echo 'Npcap installation not applicable on macOS.'");

//            ProcessBuilder pc = new ProcessBuilder("cmd.exe", "/c", npcapPath, "/wait");


            for(String key : installCommands.keySet()){
        if(key.contains(osName)){
Process process = null;
                    try {
String[] command = {"cmd.exe", "/c", "start", "/wait", npcapPath};
// Execute the command
process = Runtime.getRuntime().exec(command);

// Capture output and error streams
BufferedReader outputReader = new BufferedReader(new InputStreamReader(process.getInputStream()));
BufferedReader errorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));

String line;

// Read and log the standard output
                      while ((line = outputReader.readLine()) != null) {
        log.info("OUTPUT: " + line);
                        }

                                // Read and log the error output
                                while ((line = errorReader.readLine()) != null) {
        log.info("ERROR: " + line);
                        }

                                // Wait for the process to complete
                                process.waitFor();

                    } catch (IOException | InterruptedException e) {
        e.printStackTrace(); // Handle the exception
                    } finally {
                            if (process != null) {
        process.destroy(); // Clean up the process if it exists
                        }
                                }
//                    pc.command(installCommands.get(osName));
//                    pc.redirectErrorStream(true);
//                    try {
//                        ProcessBuilder pc = new ProcessBuilder("cmd.exe", "/c", "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Notepad++.lnk");
//                        log.info("Process builder started");
//                        Process process = pc.start();
////                        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
////                        String line;
////                        while ((line = reader.readLine()) != null) {
////                            log.info(line); // Log each line of output
////                        }
//                        process.waitFor(); // Wait for the process to finish
//                        Pcaps.libVersion();
//                        pcapStatus = true;
//                    } catch (IOException | InterruptedException e) {
//                        log.error("An error occurred while executing the command.", e);
//                    }
                                }
                                }
                                }

 */