package com.surah_j.advntrs.web;

import com.surah_j.advntrs.oshandler.OSBase;
import com.surah_j.advntrs.oshandler.OSHandlerFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class TerminalSimCollector {
    public String operatingSystem = System.getProperty("os.name");

    public String processCommand (String command) {
        OSBase handler = OSHandlerFactory.getHandler(operatingSystem);
        return handler.commandEntry(command);
    }
}
