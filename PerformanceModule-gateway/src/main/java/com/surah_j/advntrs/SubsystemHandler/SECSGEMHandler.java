package com.surah_j.advntrs.SubsystemHandler;

import com.inductiveautomation.ignition.common.logging.Level;
import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.localdb.persistence.PersistenceSession;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;
import com.surah_j.advntrs.GatewayHook;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class SECSGEMHandler extends SubsystemBase {
    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());
    GatewayContext context = GatewayHook.context;

    public SECSGEMHandler(String subsystem) {
        super(subsystem);
    }

    @Override
    public List<Map> getConnectionNames(PersistenceSession session) {
        List<Map> results = new ArrayList<>();
        log.trace("Made it into Get Connection Details");
        try {
            results = session.rawQueryMaps(("SELECT NAME FROM " + recordsMap.get(subsystem)), true);
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
            ;
            log.trace("Starting query for device connection");
            if (subsystem != null && !subsystem.isEmpty()) {
                String queryString = "SELECT NAME, ACTIVEIPADDRESS, ACTIVEPORT, PASSIVEIPADDRESS, PASSIVEPORT FROM " + recordsMap.get(subsystem) +
                        " WHERE NAME = '" + connectionName + "'";
                log.info(queryString);
                results = session.rawQueryMaps((queryString), true);
                settingsJson.put("ActiveIP", results.get(0).get("ACTIVEIPADDRESS"));
                settingsJson.put("ActivePort", results.get(0).get("ACTIVEPORT"));
                settingsJson.put("PassiveIP", results.get(0).get("PASSIVEIPADDRESS"));
                settingsJson.put("PassivePort", results.get(0).get("PASSIVEPORT"));
                settingsJson.put("Filter", "(host " + results.get(0).get("ACTIVEIPADDRESS") + " and port " + results.get(0).get("ACTIVEPORT") +
                                 ") or (host " + results.get(0).get("PASSIVEIPADDRESS") + " and port " + results.get(0).get("PASSIVEPORT") + ")");
            }
        } finally {
            session.close();
        }
        return settingsJson;
    }

    @Override
    public void setLogging(String connectionName) {
        log.info("Changing logging level for " + connectionName + " MDC Key");
        context.getLoggingManager().setPropertyLevel("device-name", connectionName, Level.TRACE);
    }

    @Override
    public void clearLogging(String connectionName) {
        log.info("Clearing MDC Key for " + connectionName);
        context.getLoggingManager().clearPropertyLevel("device-name", connectionName);
    }
}
