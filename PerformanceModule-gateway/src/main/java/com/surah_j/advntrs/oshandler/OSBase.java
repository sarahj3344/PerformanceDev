package com.surah_j.advntrs.oshandler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public abstract class OSBase {
    protected String os;

    public OSBase(String os){
        this.os = os;
    }

    public abstract String getEnvironmentDetails();

    public abstract String getMemoryAvailable();

    public abstract String getCPUStatistics();

    public abstract String getPortUsage();

    public String commandEntry (String command){
//        Map<Integer, String> commandMap = new HashMap<>();
//        commandMap.put(1, getEnvironmentDetails());
//        commandMap.put(2, getMemoryAvailable());
//        commandMap.put(3, getCPUStatistics());
//        commandMap.put(4, getPortUsage());

        switch (command){
            case "1":
                return getEnvironmentDetails();
            case "2":
                return getMemoryAvailable();
            case "3":
                return getCPUStatistics();
            case "4":
                return getPortUsage();
            default:
                throw new IllegalArgumentException("Unsupported command, try again...");
        }
    }
}
