package com.surah_j.advntrs;
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

import com.inductiveautomation.ignition.gateway.model.DiagnosticsManager;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.concurrent.CompletableFuture;
import org.apache.commons.io.FileUtils;

public class DiagnosticsManagerImpl$PcapFileContributor implements DiagnosticsManager.Contributor {
    final GatewayContext context;

    public DiagnosticsManagerImpl$PcapFileContributor(GatewayContext context) {
        this.context = context;
    }

    public CompletableFuture<Void> contributeDiagnosticFiles(File folder) {
        File logsDir = this.context.getSystemManager().getLogsDir();
        File[] pcapFiles = logsDir.listFiles((file) -> {
            return file.getName().contains(".pcap") && !Files.isSymbolicLink(file.toPath());
        });
        if (pcapFiles != null) {
            File[] var4 = pcapFiles;
            int var5 = pcapFiles.length;

            for(int var6 = 0; var6 < var5; ++var6) {
                File pcap = var4[var6];
                File destination = new File(folder, pcap.getName());

                try {
                    FileUtils.copyFile(pcap, destination);
                } catch (IOException var10) {
                }
            }
        }
        return CompletableFuture.completedFuture(null);
    }
}