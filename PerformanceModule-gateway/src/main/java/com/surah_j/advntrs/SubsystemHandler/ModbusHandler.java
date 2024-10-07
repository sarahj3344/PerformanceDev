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


public class ModbusHandler extends SubsystemBase {

    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());
    GatewayContext context = GatewayHook.context;

    public ModbusHandler(String subsystem) {
        super(subsystem);
    }

    @Override
    public List<Map> getConnectionNames(PersistenceSession session) {
        List<Map> results = new ArrayList<>();
        log.trace("Made it into Get Connection Details");
        try {
            if(subsystem.contains("Modbus")){
                results = session.rawQueryMaps(("SELECT NAME FROM " + recordsMap.get(subsystem) + " JOIN DEVICESETTINGS ON DEVICESETTINGSID = DEVICESETTINGS_ID"), true);
            }
        } finally {
            session.close();
        }
        log.trace("Ending Session");

        return results;
    }

    @Override
    public JSONObject configureSettings(PersistenceSession session) throws JSONException {
        List<Map> results;
        JSONObject json = new JSONObject();

        log.trace("Starting query for records");
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

            log.trace("Starting query for device connection");
            if (subsystem != null && !subsystem.isEmpty()) {
                results = session.rawQueryMaps(("SELECT HOSTNAME, PORT FROM " + recordsMap.get(subsystem)), true);
                settingsJson.put("IP", results.get(0).get("HOSTNAME"));
                settingsJson.put("Port", results.get(0).get("PORT"));
                settingsJson.put("Filter", "host " + results.get(0).get("HOSTNAME") + " port " + "Port" + results.get(0).get("PORT"));
            }
            json = settingsJson;
        } finally {
            session.close();
        }
        return json;
    }

    @Override
    public void setLogging(String connectionName) {
        log.info("Changing logging level for Modbus MDC Key");
        if(subsystem.contains("Driver")){
            context.getLoggingManager().setPropertyLevel("device-name", connectionName, Level.TRACE);
        }
    }

    @Override
    public void clearLogging() {
        log.info("Clearing MDC Keys");
        context.getLoggingManager().clearPropertyLevels();
    }
}
