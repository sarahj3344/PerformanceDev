package com.surah_j.advntrs.SubsystemHandler;

import com.inductiveautomation.ignition.common.logging.Level;
import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.localdb.persistence.PersistenceSession;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;
import com.surah_j.advntrs.GatewayHook;
import com.surah_j.advntrs.records.PerformanceSettingsRecord;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import simpleorm.dataset.SQuery;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ClassicSMTPHandler extends SubsystemBase {
    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());
    GatewayContext context = GatewayHook.context;

    public ClassicSMTPHandler(String subsystem) {
        super(subsystem);
    }

    @Override
    public List<Map> getConnectionNames(PersistenceSession session) {
        List<Map> results = new ArrayList<>();
        log.trace("Made it into Get Connection Details");
        try {
            if(subsystem.contains("Classic SMTP")){
                results = session.rawQueryMaps(("SELECT NAME FROM " + recordsMap.get(subsystem) + " JOIN DEVICESETTINGS ON DEVICESETTINGSID = DEVICESETTINGS_ID"), true);
            }
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
                String queryString = "SELECT NAME, HOSTNAME, PORT FROM " + recordsMap.get(subsystem) +
                        " JOIN DEVICESETTINGS ON DEVICESETTINGSID = DEVICESETTINGS_ID" +
                        " WHERE NAME = '" + connectionName + "'";
                log.info(queryString);
                results = session.rawQueryMaps((queryString), true);
                settingsJson.put("IP", results.get(0).get("HOSTNAME"));
                settingsJson.put("Port", results.get(0).get("PORT"));
                settingsJson.put("Filter", "host " + results.get(0).get("HOSTNAME") + " and port " + results.get(0).get("PORT"));
            }
        } finally {
            session.close();
        }
        return settingsJson;
    }

    @Override
    public void setLogging(String connectionName) {
        log.info("Changing logging level for " + connectionName + "'s MDC Key");
            context.getLoggingManager().setPropertyLevel("name", connectionName, Level.TRACE);
    }

    @Override
    public void clearLogging(String connectionName) {
        log.info("Clearing MDC Key for " + connectionName);
        context.getLoggingManager().clearPropertyLevel("name", connectionName);
    }
}
