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
            case "Omron Fins/TCP Driver":
                return new OmronFinsTCPHandler(subsystem);
            case "Mitsubishi Driver":
                return new MitsubishiHandler(subsystem);
            case "IEC61850 Driver":
                return new IEC61850Handler(subsystem);
            case "BACnet Driver":
                return new BACnetHandler(subsystem);
            case "Siemens Drivers":
                return new SiemensHandler(subsystem);
            case "MQTT Engine":
                return new MQTTEngineHandler(subsystem);
            case "MQTT Transmission":
                return new MQTTTransmissionHandler(subsystem);
            case "Voice Notification Profile":
                return new VoiceNotificationHandler(subsystem);
            case "SMS Notification Profile":
                return new SMSNotificationHandler(subsystem);
            case "SECS/GEM":
                return new SECSGEMHandler(subsystem);
            case "TCP Driver":
                return new TCPDriverHandler(subsystem);
            case "UDP Driver":
                return new UDPDriverHandler(subsystem);
            default:
                throw new IllegalArgumentException("Unsupported subsystem: " + subsystem);
        }
    }
}
