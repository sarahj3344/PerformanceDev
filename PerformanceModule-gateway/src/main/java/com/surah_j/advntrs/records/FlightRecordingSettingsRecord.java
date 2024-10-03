package com.surah_j.advntrs.records;

import com.inductiveautomation.ignition.gateway.localdb.persistence.*;
import simpleorm.dataset.SFieldFlags;

public class FlightRecordingSettingsRecord extends PersistentRecord {


    public static final RecordMeta<FlightRecordingSettingsRecord> META = new RecordMeta<FlightRecordingSettingsRecord>(
            FlightRecordingSettingsRecord.class, "FlightRecordingSettingsRecord").setNounKey("FlightRecordingSettingsRecord.Noun").setNounPluralKey(
            "FlightRecordingSettingsRecords.Noun.Plural");
    public static final IdentityField Id = new IdentityField(META);


    // create categories for our record entries, getting titles from the PerformanceSettingsRecord.properties, and
    // ordering through integer ranking
    final Category Configuration = new Category("FlightRecordingSettingsRecord.Category.Configuration", 1000).include(Id);


    public void setId(Long id) {
        setLong(Id, id);
    }

    public Long getId() {
        return getLong(Id);
    }


    @Override
    public RecordMeta<?> getMeta() {
        return META;
    }

}