package com.surah_j.advntrs.SubsystemHandler;

import java.util.List;
import java.util.Map;
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
    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());

    public SubsystemBase(String subsystem) {
        this.subsystem = subsystem;
    }

    public final Map<String, String> recordsMap = Map.of(
            "Modbus TCP Driver", "MODBUSTCPDRIVERSETTINGS",
            "Logix Driver", "LOGIXDRIVERSETTINGS",
            "DNP3 Driver", "DNP3DRIVERSETTINGS",
            "SMTP", "CLASSICSMTPEMAILPROFILES",
            "Database", "DATASOURCES"
    );

    public abstract List<Map> getConnectionNames(PersistenceSession session);

    public abstract JSONObject configureSettings(PersistenceSession session) throws JSONException;

    public abstract void setLogging(String connectionName);

    public abstract void clearLogging(String connectionName);

}
