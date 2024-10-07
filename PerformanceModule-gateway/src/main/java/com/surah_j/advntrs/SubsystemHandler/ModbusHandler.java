package com.surah_j.advntrs.SubsystemHandler;

import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.localdb.persistence.PersistenceSession;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


public class ModbusHandler extends SubsystemBase {

    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());

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
}
