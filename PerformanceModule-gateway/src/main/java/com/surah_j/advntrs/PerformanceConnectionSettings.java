package com.surah_j.advntrs;

import com.inductiveautomation.ignition.gateway.localdb.persistence.PersistentRecord;
import com.inductiveautomation.ignition.gateway.localdb.persistence.RecordMeta;

public class PerformanceConnectionSettings extends PersistentRecord {
    public static final RecordMeta<PerformanceConnectionSettings> META = new RecordMeta<>(PerformanceConnectionSettings.class, "performance_connectionsettings");

    @Override
    public RecordMeta<?> getMeta() {
        return META;
    }
}
