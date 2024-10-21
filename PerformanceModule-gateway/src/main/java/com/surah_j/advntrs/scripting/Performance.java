package com.surah_j.advntrs.scripting;

import com.surah_j.advntrs.web.BabySharkCollector;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.pcap4j.core.NotOpenException;
import org.pcap4j.core.PcapNativeException;
import org.pcap4j.core.PcapNetworkInterface;

import java.io.IOException;
import java.util.List;
import com.inductiveautomation.ignition.common.logging.Level;

public interface Performance {
//    public JSONArray getNIFs() throws IOException, JSONException, PcapNativeException;
    public void startPacketCapture(String ip, String filter, String name, String directory) throws PcapNativeException, IOException, NotOpenException, JSONException;
    public void stopPacketCapture() throws NotOpenException, IOException;
    public void startFlightRecording(String name, String directory, String configuration, long age, String ageType, long duration, String durationType, long size, String sizeType, boolean dumpOnExit) throws IOException;
    public void stopFlightRecording() throws IOException;
    public void setLogging(List<String> loggerNames, int level);
//    public void clearLogging();
}
