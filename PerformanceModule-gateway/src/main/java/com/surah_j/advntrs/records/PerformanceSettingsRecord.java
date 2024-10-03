package com.surah_j.advntrs.records;

import com.inductiveautomation.ignition.gateway.localdb.persistence.RecordMeta;
import com.inductiveautomation.ignition.gateway.localdb.persistence.Category;
import com.inductiveautomation.ignition.gateway.localdb.persistence.IdentityField;
import com.inductiveautomation.ignition.gateway.localdb.persistence.IntField;
import com.inductiveautomation.ignition.gateway.localdb.persistence.PersistentRecord;
import com.inductiveautomation.ignition.gateway.localdb.persistence.StringField;
import simpleorm.dataset.SFieldFlags;

//    //Hub Settings -- for our imaginary IoT controller device
//    public static final StringField HCHubName = new StringField(META, "HomeConnectHubName", SFieldFlags.SMANDATORY);
//    public static final BooleanField BroadcastSSID = new BooleanField(META, "BroadcastSSID").setDefault(false);
//    public static final IntField HCDeviceCount = new IntField(META, "DeviceCount", SFieldFlags.SMANDATORY);
//    public static final StringField HCIPAddress = new StringField(META, "IPAddress", SFieldFlags.SMANDATORY);
//    public static final BooleanField AllowInterop = new BooleanField(META, "AllowInterop").setDefault(true);
//    public static final IntField HCPowerOutput = new IntField(META, "PowerOutput", SFieldFlags.SMANDATORY).setDefault(23);

//    static final Category Security = new Category("HCSettingsRecord.Category.Security", 1001).include(BroadcastSSID, HCDeviceCount, AllowInterop);
//    static final Category Power = new Category("HCSettingsRecord.Category.Power", 1001).include(HCPowerOutput);


public class PerformanceSettingsRecord extends PersistentRecord {


    public static final RecordMeta<PerformanceSettingsRecord> META = new RecordMeta<PerformanceSettingsRecord>(
            PerformanceSettingsRecord.class, "PerformanceSettingsRecord").setNounKey("PerformanceSettingsRecord.Noun").setNounPluralKey(
            "PerformanceSettingsRecords.Noun.Plural");
    public static final IdentityField Id = new IdentityField(META);
    public static final IntField SnapshotLength = new IntField(META, "SnapshotLength", SFieldFlags.SMANDATORY).setDefault(65535);
    public static final IntField ReadTimeout = new IntField(META, "ReadTimeout", SFieldFlags.SMANDATORY).setDefault(1000);
    public static final IntField RetentionCount = new IntField(META, "RetentionCount", SFieldFlags.SMANDATORY).setDefault(3);
    public static final IntField PruneAge = new IntField(META, "PruneAge", SFieldFlags.SMANDATORY).setDefault(7);

    // create categories for our record entries, getting titles from the PerformanceSettingsRecord.properties, and
    // ordering through integer ranking
    final Category CaptureConfiguration = new Category("PerformanceSettingsRecord.Category.CaptureConfiguration", 1000).include(SnapshotLength, ReadTimeout, RetentionCount, PruneAge);
    final Category RecordingConfiguration = new Category("PerformanceSettingsRecord.Category.RecordingConfiguration", 1001).include(RetentionCount, PruneAge);

    public void setId(Long id) {
        setLong(Id, id);
    }

    public Long getId() {
        return getLong(Id);
    }

    public int getReadTimeout(){
        return getInt(ReadTimeout);
    }

    // maximum time (ms) to wait for a new packet -> default 1000
    public void setReadTimeout(Integer timeout){
        setInt(ReadTimeout, timeout);
    }

    public int getSnapshotLength(){
        return getInt(SnapshotLength);
    }

    // maximum length for a packet in bytes -> default 65535
    public void setSnapshotLength(Integer length){
        setInt(SnapshotLength, length);
    }

    public int getRetentionCount(){return getInt(RetentionCount);}

    public void setRetentionCount(Integer count) {setInt(RetentionCount, count);}

    public int getPruneAge(){ return getInt(PruneAge);}

    public void setPruneAge(Integer days) {setInt(PruneAge, days);}

//    public void setFilter(String filter){
//        setString(Filter, filter);
//    }
//
//    public String getFilter() {
//        return getString(Filter);
//    }
//
//    public void setPcapFilePath(String path){
//        setString(PcapFilePath, path);
//    }

    @Override
    public RecordMeta<?> getMeta() {
        return META;
    }

}