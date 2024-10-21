package com.surah_j.advntrs.scripting;
import com.inductiveautomation.ignition.common.logging.Level;
import com.surah_j.advntrs.GatewayHook;
import com.surah_j.advntrs.web.BabySharkCollector;
import com.surah_j.advntrs.web.FlightRecordingCollector;
import com.surah_j.advntrs.scripting.*;
import org.json.JSONArray;
import org.json.JSONException;
import org.pcap4j.core.*;
import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class GatewayScriptModule extends AbstractScriptModule {

    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());
    BabySharkCollector Nemo = new BabySharkCollector();
    FlightRecordingCollector Apollo = new FlightRecordingCollector();

//    public JSONArray getNIFsImpl() throws IOException, JSONException, PcapNativeException {
//        return Nemo.getNIFs();
//    }

    @Override
    protected void startPacketCaptureImpl(String ip, String filter, String name, String directory) throws PcapNativeException, IOException, NotOpenException, JSONException {
        PcapNetworkInterface device = Nemo.setNifbyAddress(ip);
        Nemo.createHandle(device);
        if(!filter.isEmpty()){
            Nemo.setFilter();
        }
        Nemo.capture(directory, name);
    }

    @Override
    protected void stopPacketCaptureImpl() throws NotOpenException, IOException {
        Nemo.endCapture();
    }

    @Override
    public void startFlightRecordingImpl(String name, String directory, String configuration, long age, String ageType, long duration, String durationType, long size, String sizeType, boolean dumpOnExit) throws IOException{
        Apollo.setRecordsMap();
        Apollo.setConfiguration(configuration);
        Apollo.startRecording(directory, name, configuration, age, ageType, duration, durationType, size, sizeType, dumpOnExit);
    }

    @Override
    protected void stopFlightRecordingImpl() throws IOException {
        Apollo.stopRecording(GatewayHook.context);
    }

    @Override
    protected void setLoggingImpl(List<String> loggerNames, int level) {
        for(String logger : loggerNames){
            GatewayHook.context.getLoggingManager().setLevel(logger, Level.values()[level]);
        }
    }

//    @Override
//    protected void clearLoggingImpl() {
//        GatewayHook.context.getLoggingManager().clearPropertyLevels();
//    }
}
