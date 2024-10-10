package com.surah_j.advntrs.SubsystemHandler;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import com.inductiveautomation.ignition.common.logging.Level;
import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.dataroutes.RequestContext;
import com.inductiveautomation.ignition.gateway.localdb.persistence.PersistenceSession;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;
import com.surah_j.advntrs.DiagnosticsManagerImpl$PcapFileContributor;
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

public abstract class SubsystemBase {
    protected String subsystem;
    public static final Map<String, String> recordsMap;
    private String connectionName;
    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());

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
        recordsMap.put("Siemens Driver", "Check Handler");
    }


    public abstract List<Map> getConnectionNames(PersistenceSession session);

    public abstract JSONObject configureSettings(String connectionName) throws JSONException;

    public abstract void setLogging(String connectionName);

    public abstract void clearLogging(String connectionName);

}
