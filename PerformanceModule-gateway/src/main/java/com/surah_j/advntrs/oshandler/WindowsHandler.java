package com.surah_j.advntrs.oshandler;

import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class WindowsHandler extends OSBase {
    public WindowsHandler(String os) {
        super(os);
    }

    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());

    @Override
    public String getEnvironmentDetails() {
        log.info("In Environment details");
        StringBuilder result = new StringBuilder();

        try {
            ProcessBuilder pc = new ProcessBuilder("powershell.exe", "-Command", "Get-ComputerInfo | Select-Object -Property OsName, OsVersion, OsLocale, OsLocalDateTime");
            log.info("Process builder started");
            Process process = pc.start();
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                result.append(line).append("\n"); // Log each line of output
            }
            process.waitFor(); // Wait for the process to finish
        } catch (IOException | InterruptedException e) {
            log.error("An error occurred while executing the command.", e);
        }
        return result.toString();
    }

    @Override
    public String getMemoryAvailable() {
        log.info("In Memory details");
        StringBuilder result = new StringBuilder();

        try {
            ProcessBuilder pc = new ProcessBuilder("powershell.exe", "-Command", "Get-CimInstance Win32_OperatingSystem | Select-Object -Property `\n" +
                    "    @{Name='TotalMemoryGB'; Expression={[math]::round($_.TotalVisibleMemorySize / 1MB, 2)}}, `\n" +
                    "    @{Name='FreeMemoryGB'; Expression={[math]::round($_.FreePhysicalMemory / 1MB, 2)}}, `\n" +
                    "    @{Name='TotalDiskSpaceGB'; Expression={[math]::round((Get-CimInstance Win32_LogicalDisk | \n" +
                    "        Where-Object { $_.DriveType -eq 3 } | \n" +
                    "        Measure-Object -Property Size -Sum).Sum / 1GB, 2)}}, `\n" +
                    "    @{Name='FreeDiskSpaceGB'; Expression={[math]::round((Get-CimInstance Win32_LogicalDisk | \n" +
                    "        Where-Object { $_.DriveType -eq 3 } | \n" +
                    "        Measure-Object -Property FreeSpace -Sum).Sum / 1GB, 2)}}\n");
            log.info("Process builder started");
            Process process = pc.start();
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                result.append(line).append("\n"); // Log each line of output
            }
            process.waitFor(); // Wait for the process to finish
        } catch (IOException | InterruptedException e) {
            log.error("An error occurred while executing the command.", e);
        }
        return result.toString();
    }

    @Override
    public String getCPUStatistics() {
        log.info("In CPU details");
        StringBuilder result = new StringBuilder();

        try {
            ProcessBuilder pc = new ProcessBuilder("powershell.exe", "-Command", "        $cpuInfo = Get-CimInstance Win32_Processor | Select-Object -Property NumberOfCores, MaxClockSpeed\n" +
                                                    "        $cpuUsage = (Get-Counter '\\Processor(_Total)\\% Processor Time').CounterSamples.CookedValue\n" +
                                                    "\n" +
                                                    "                [PSCustomObject]@{\n" +
                                                    "            TotalCores     = $cpuInfo.NumberOfCores\n" +
                                                    "            ClockSpeedGHz  = [math]::round($cpuInfo.MaxClockSpeed / 1000, 2)\n" +
                                                    "            CpuUsagePercent = [math]::round($cpuUsage, 2)\n" +
                                                    "        }");
            log.info("Process builder started");
            Process process = pc.start();
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                result.append(line).append("\n"); // Log each line of output
            }
            process.waitFor(); // Wait for the process to finish
        } catch (IOException | InterruptedException e) {
            log.error("An error occurred while executing the command.", e);
        }
        return result.toString();
    }

    @Override
    public String getPortUsage() {
        log.info("In port details");
        StringBuilder result = new StringBuilder();

        try {
            ProcessBuilder pc = new ProcessBuilder("powershell.exe", "-Command", "netstat -anon");
            log.info("Process builder started");
            Process process = pc.start();
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                result.append(line).append("\n"); // Log each line of output
            }
            process.waitFor(); // Wait for the process to finish
        } catch (IOException | InterruptedException e) {
            log.error("An error occurred while executing the command.", e);
        }
        return result.toString();
    }
}
