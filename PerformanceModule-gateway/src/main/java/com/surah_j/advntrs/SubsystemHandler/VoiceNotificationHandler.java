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

public class VoiceNotificationHandler extends SubsystemBase {
    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());
    GatewayContext context = GatewayHook.context;

    public VoiceNotificationHandler(String subsystem) {
        super(subsystem);
    }

    @Override
    public List<Map> getConnectionNames(PersistenceSession session) {
        List<Map> results = new ArrayList<>();
        log.trace("Made it into Get Connection Details");
        try {
            results = session.rawQueryMaps(("SELECT NAME FROM " + recordsMap.get(subsystem) +
                                            " JOIN ALARMNOTIFICATIONPROFILES ON PROFILEID = ALARMNOTIFICATIONPROFILES_ID " +
                                            "WHERE TYPE = 'SipNotification'"), true);
        } finally {
            session.close();
        }
        log.trace("Ending Session");

        return results;
    }

    @Override
    public JSONObject configureSettings(String connectionName) throws JSONException {
        List<Map> results;
        PersistenceSession session = GatewayHook.context.getPersistenceInterface().getSession();
        JSONObject settingsJson = new JSONObject();

        try {
            log.trace("Starting query for device connection");
            if (subsystem != null && !subsystem.isEmpty()) {
                String queryString = "SELECT NAME, HOST FROM " + recordsMap.get(subsystem) +
                        " JOIN ALARMNOTIFICATIONPROFILES ON PROFILEID = ALARMNOTIFICATIONPROFILES_ID" +
                        " WHERE NAME = '" + connectionName + "'";
                log.info(queryString);
                results = session.rawQueryMaps((queryString), true);
                String host = results.get(0).get("HOST").toString();
                URI url = new URI(host);
                settingsJson.put("IP", url.getHost());
                InetAddress validIP = InetAddress.getByName(host);
                settingsJson.put("Filter", "host " + validIP);
            }
        } catch (URISyntaxException | UnknownHostException e) {
            throw new RuntimeException(e);
        } finally {
            session.close();
        }
        return settingsJson;
    }

    @Override
    public void setLogging(String connectionName) {
        log.info("Changing logging level for " + connectionName + " MDC Key");
        context.getLoggingManager().setPropertyLevel("alarm-notification-profile", connectionName, Level.TRACE);
    }

    @Override
    public void clearLogging(String connectionName) {
        log.info("Clearing MDC Key for " + connectionName);
        context.getLoggingManager().clearPropertyLevel("alarm-notification-profile", connectionName);
    }
}
