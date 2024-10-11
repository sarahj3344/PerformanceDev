package com.surah_j.advntrs.SubsystemHandler;

import java.util.List;
import java.util.Map;
import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.localdb.persistence.PersistenceSession;
import org.json.JSONException;
import org.json.JSONObject;
import java.util.*;


import javax.servlet.http.HttpServletResponse;

public abstract class SubsystemBase {
    protected String subsystem;
    public static final Map<String, String> recordsMap;

    public SubsystemBase(String subsystem) {
        this.subsystem = subsystem;
    }

    static {
        recordsMap = new HashMap<>();
        recordsMap.put("Modbus TCP Driver", "MODBUSTCPDRIVERSETTINGS");
        recordsMap.put("Logix Driver", "LOGIXDRIVERSETTINGS");
        recordsMap.put("DNP3 Driver", "DNP3DEVICESETTINGS");
        recordsMap.put("Classic SMTP", "CLASSICSMTPEMAILPROFILES");
        recordsMap.put("OPCUA Connections", "OPCUACONNECTIONSETTINGS");
        recordsMap.put("Omron Fins/TCP Driver", "FINSTCPDEVICESETTINGS");
        recordsMap.put("Mitsubishi Driver", "MITSUBISHITCPDEVICESETTINGS");
        recordsMap.put("IEC61850 Driver", "IEC61850DEVICESETTINGS");
        recordsMap.put("BACnet Driver", "BACNETIPLOCALDEVICESETTINGS");
        recordsMap.put("MQTT Engine", "ENGINESERVERRECORD");
        recordsMap.put("MQTT Transmission", "TRANSMISSIONSERVERRECORD");
        recordsMap.put("Siemens Drivers", "Check Handler");
        recordsMap.put("Voice Notification Profile", "SIPNOTIFICATIONSETTINGS");
        recordsMap.put("SMS Notification Profile", "SMSNOTIFICATIONPROFILESETTINGS");
        recordsMap.put("SECS/GEM", "EQUIPMENTRECORD");
        recordsMap.put("TCP Driver", "TCPDRIVERSETTINGS");
        recordsMap.put("UDP Driver", "UDPDRIVERSETTINGS");
    }


    public abstract List<Map> getConnectionNames(PersistenceSession session);

    public abstract JSONObject configureSettings(String connectionName) throws JSONException;

    public abstract void setLogging(String connectionName);

    public abstract void clearLogging(String connectionName);

}
