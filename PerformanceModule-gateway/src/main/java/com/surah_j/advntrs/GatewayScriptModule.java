package com.surah_j.advntrs;
import com.surah_j.advntrs.scripting.AbstractScriptModule;
import com.surah_j.advntrs.web.BabySharkCollector;
import com.surah_j.advntrs.web.FlightRecordingCollector;
import org.json.JSONArray;
import org.json.JSONException;
import org.pcap4j.core.*;
import com.inductiveautomation.ignition.common.logging.Level;
import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.concurrent.CompletableFuture;

public class GatewayScriptModule extends AbstractScriptModule {

    private Thread captureThread;
    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());
    BabySharkCollector Nemo = new BabySharkCollector();
    FlightRecordingCollector Apollo = new FlightRecordingCollector();
    PcapDumper dump;
    PcapHandle handle;

    public JSONArray getNIFsImpl() throws IOException, JSONException{
        return Nemo.getNIFs();
    }

    @Override
    protected void startPacketCaptureImpl(String nif, String filter, String path) throws PcapNativeException, IOException, NotOpenException, JSONException {
        Nemo.setNif(nif);
        if(!filter.isEmpty()){
            Nemo.setFilter();
        }
        Nemo.capture();
    }

    @Override
    protected void stopPacketCaptureImpl() throws NotOpenException, IOException {
        Nemo.endCapture();
    }

    @Override
    public void startFlightRecordingImpl(String path, String configuration, long age, long duration, long size, boolean dumpOnExit) throws IOException{
        Apollo.setRecordsMap();
        Apollo.setConfiguration(configuration);
    }
}
