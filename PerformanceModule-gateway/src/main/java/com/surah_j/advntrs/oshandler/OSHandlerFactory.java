package com.surah_j.advntrs.oshandler;

public class OSHandlerFactory {
    public static OSBase getHandler(String os){
        switch(os){
            case "Windows 10":
                return new WindowsHandler(os);
            default:
                throw new IllegalArgumentException("Unsupported OS: " + os);
        }
    }
}
