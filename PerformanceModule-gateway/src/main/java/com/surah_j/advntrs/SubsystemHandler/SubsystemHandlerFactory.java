package com.surah_j.advntrs.SubsystemHandler;

public class SubsystemHandlerFactory {


    public static SubsystemBase getHandler(String subsystem) {
        switch(subsystem) {
            case "Modbus TCP Driver":
                return new ModbusHandler(subsystem);
            case "Classic SMTP":
                return new ClassicSMTPHandler(subsystem);
            case "DNP3 Driver":
                return new DNP3Handler(subsystem);
            case "Logix Driver":
                return new LogixHandler(subsystem);
            case "OPCUA Connections":
                return new OPCUAHandler(subsystem);
            default:
                throw new IllegalArgumentException("Unsupported subsystem: " + subsystem);
        }
    }
}
