package com.surah_j.advntrs.SubsystemHandler;

import com.inductiveautomation.ignition.common.logging.Level;
import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.localdb.persistence.PersistenceSession;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;
import com.surah_j.advntrs.GatewayHook;
import org.json.JSONException;
import org.json.JSONObject;

import java.net.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class OPCUAHandler extends SubsystemBase{
    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());
    GatewayContext context = GatewayHook.context;

    public OPCUAHandler(String subsystem) {
        super(subsystem);
    }

    @Override
    public List<Map> getConnectionNames(PersistenceSession session) {
        List<Map> results = new ArrayList<>();
        log.trace("Made it into Get Connection Details");
        try {
                results = session.rawQueryMaps(("SELECT NAME FROM " + recordsMap.get(subsystem) +
                                                " JOIN OPCSERVERS ON SERVERSETTINGSID = OPCSERVERS_ID"), true);
        } finally {
            session.close();
        }
        log.trace("Ending Session");

        return results;
    }

    @Override
    public JSONObject configureSettings(String connectionName) throws JSONException {
        log.trace("In configureSettings");
        PersistenceSession session = GatewayHook.context.getPersistenceInterface().getSession();
        List<Map> results;
        JSONObject settingsJson = new JSONObject();

        log.trace("Configuring settings");
        try {
            log.trace("Starting query for device connection");
            if (subsystem != null && !subsystem.isEmpty()) {
                results = session.rawQueryMaps(("SELECT ENDPOINTURL FROM " + recordsMap.get(subsystem) +
                                                " JOIN OPCSERVERS ON SERVERSETTINGSID = OPCSERVERS_ID" +
                                                " WHERE NAME = '" + connectionName + "'"), true);
                String endpoint = results.get(0).get("ENDPOINTURL").toString();
                log.trace(endpoint);
                URI url = new URI(endpoint);
                settingsJson.put("IP", url.getHost());
                String host = url.getHost();
                try{
                    InetAddress validIP = InetAddress.getByName(host);
                    settingsJson.put("Port", url.getPort());
                    settingsJson.put("Filter", "host " + validIP + " and port " + url.getPort());
                } catch (Exception e) {
                    log.info("Unable to get host address, manually enter IP address and port if filter required");
                }
            }
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        } finally {
            session.close();
        }
        return settingsJson;
    }

    @Override
    public void setLogging(String connectionName) {
        log.info("Changing logging level for " + connectionName + " MDC Key");
        log.info("WARNING: Cannot read encrypted packets, disable security on OPCUA Connection");
        context.getLoggingManager().setPropertyLevel("connection-name", connectionName, Level.TRACE);
    }

    @Override
    public void clearLogging(String connectionName) {
        log.info("Clearing MDC Key for " + connectionName);
        context.getLoggingManager().clearPropertyLevel("connection-name", connectionName);
    }
}
