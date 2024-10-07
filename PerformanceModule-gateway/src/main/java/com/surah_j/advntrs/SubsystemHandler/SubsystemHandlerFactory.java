package com.surah_j.advntrs.SubsystemHandler;

public class SubsystemHandlerFactory {


    public static SubsystemBase getHandler(String subsystem) {
        switch(subsystem) {
            case "Modbus TCP Driver":
                return new ModbusHandler(subsystem);
            default:
                throw new IllegalArgumentException("Unsupported subsystem: " + subsystem);
        }
    }
}
