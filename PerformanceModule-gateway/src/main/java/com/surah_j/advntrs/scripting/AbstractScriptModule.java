package com.surah_j.advntrs.scripting;

import com.inductiveautomation.ignition.common.BundleUtil;
import com.inductiveautomation.ignition.common.script.hints.ScriptArg;
import com.inductiveautomation.ignition.common.script.hints.ScriptFunction;
import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import org.json.JSONArray;
import org.json.JSONException;
import org.pcap4j.core.NotOpenException;
import org.pcap4j.core.PcapNativeException;

import java.io.IOException;

public abstract class AbstractScriptModule implements Performance {
    static final LoggerEx log = LogUtil.getLogger(AbstractScriptModule.class.getSimpleName());

    static {
        BundleUtil.get().addBundle(
                AbstractScriptModule.class.getSimpleName(),
                AbstractScriptModule.class.getClassLoader(),
                AbstractScriptModule.class.getName().replace('.', '/')
        );
    }

    @Override
    @ScriptFunction(docBundlePrefix = "AbstractScriptModule")
    public JSONArray getNIFs() throws IOException, JSONException, PcapNativeException {
        return getNIFsImpl();
    }

    protected abstract JSONArray getNIFsImpl() throws IOException, JSONException, PcapNativeException;


    @Override
    @ScriptFunction(docBundlePrefix = "AbstractScriptModule")
    public void startPacketCapture(@ScriptArg("nif") String nif, @ScriptArg("filter") String filter, @ScriptArg("path") String path) throws PcapNativeException, IOException, NotOpenException, JSONException {
        startPacketCaptureImpl(nif, filter, path);
    }

    protected abstract void startPacketCaptureImpl(String nif, String filter, String path) throws PcapNativeException, IOException, NotOpenException, JSONException;

    @Override
    @ScriptFunction(docBundlePrefix = "AbstractScriptModule")
    public void stopPacketCapture() throws NotOpenException, IOException{
        stopPacketCaptureImpl();
    }

    protected abstract void stopPacketCaptureImpl() throws NotOpenException, IOException;

    @Override
    @ScriptFunction(docBundlePrefix = "AbstractScriptModule")
    public void startFlightRecording(@ScriptArg("path") String path, @ScriptArg("configuration") String configuration, @ScriptArg("age") long age, @ScriptArg("duration") long duration, @ScriptArg("size") long size, @ScriptArg("dumpOnExit") boolean dumpOnExit) throws IOException {
        startFlightRecordingImpl(path, configuration, age, duration, size, dumpOnExit);
    }

    protected abstract void startFlightRecordingImpl(String path, String configuration, long age, long duration, long size, boolean dumpOnExit) throws IOException;
}