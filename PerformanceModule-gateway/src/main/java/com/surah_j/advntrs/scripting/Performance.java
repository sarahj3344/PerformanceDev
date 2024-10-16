package com.surah_j.advntrs.scripting;

import com.surah_j.advntrs.web.BabySharkCollector;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.pcap4j.core.NotOpenException;
import org.pcap4j.core.PcapNativeException;
import org.pcap4j.core.PcapNetworkInterface;

import java.io.IOException;

public interface Performance {
    public JSONArray getNIFs() throws IOException, JSONException, PcapNativeException;
    public void startPacketCapture(String Nif, String filter, String path) throws PcapNativeException, IOException, NotOpenException, JSONException;
    public void stopPacketCapture() throws NotOpenException, IOException;
    public void startFlightRecording(String path, String configuration, long age, long duration, long size, boolean dumpOnExit) throws IOException;
}
