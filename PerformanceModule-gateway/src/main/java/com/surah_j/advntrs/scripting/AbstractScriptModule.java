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

import java.io.File;
import java.io.IOException;
import java.util.List;
import com.inductiveautomation.ignition.common.logging.Level;

public abstract class AbstractScriptModule implements Performance {
    static final LoggerEx log = LogUtil.getLogger(AbstractScriptModule.class.getSimpleName());

    static {
        BundleUtil.get().addBundle(
                AbstractScriptModule.class.getSimpleName(),
                AbstractScriptModule.class.getClassLoader(),
                AbstractScriptModule.class.getName().replace('.', '/')
        );
    }

//    @Override
//    @ScriptFunction(docBundlePrefix = "AbstractScriptModule")
//    public JSONArray getNIFs() throws IOException, JSONException, PcapNativeException {
//        return getNIFsImpl();
//    }

//    protected abstract JSONArray getNIFsImpl() throws IOException, JSONException, PcapNativeException;


    @Override
    @ScriptFunction(docBundlePrefix = "AbstractScriptModule")
    public void startPacketCapture(@ScriptArg("ip") String ip, @ScriptArg("filter") String filter, @ScriptArg("name") String name, @ScriptArg("directory") String directory) throws PcapNativeException, IOException, NotOpenException, JSONException {
        startPacketCaptureImpl(ip, filter, name, directory);
    }

    protected abstract void startPacketCaptureImpl(String ip, String filter, String name, String directory) throws PcapNativeException, IOException, NotOpenException, JSONException;

    @Override
    @ScriptFunction(docBundlePrefix = "AbstractScriptModule")
    public void stopPacketCapture() throws NotOpenException, IOException{
        stopPacketCaptureImpl();
    }

    protected abstract void stopPacketCaptureImpl() throws NotOpenException, IOException;

    @Override
    @ScriptFunction(docBundlePrefix = "AbstractScriptModule")
    public void startFlightRecording(@ScriptArg("name") String name, @ScriptArg("directory") String directory, @ScriptArg("configuration") String configuration, @ScriptArg("age") long age, @ScriptArg("duration") long duration, @ScriptArg("size") long size, @ScriptArg("dumpOnExit") boolean dumpOnExit) throws IOException {
        startFlightRecordingImpl(name, directory, configuration, age, duration, size, dumpOnExit);
    }

    protected abstract void startFlightRecordingImpl(String name, String directory, String configuration, long age, long duration, long size, boolean dumpOnExit) throws IOException;

    @Override
    @ScriptFunction(docBundlePrefix = "AbstractScriptModule")
    public void stopFlightRecording() throws IOException {
        stopFlightRecordingImpl();
    }

    protected abstract void stopFlightRecordingImpl() throws IOException;

    @Override
    @ScriptFunction(docBundlePrefix = "AbstractScriptModule")
    public void setLogging(List<String> loggerNames, int level) {
        setLoggingImpl(loggerNames, level);
    }

    protected abstract void setLoggingImpl(List<String> LoggerNames, int level);

    @Override
    @ScriptFunction(docBundlePrefix = "AbstractScriptModule")
    public void clearLogging() {
        clearLoggingImpl();
    }

    protected abstract void clearLoggingImpl();
}