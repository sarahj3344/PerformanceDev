package com.surah_j.advntrs;
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.model.DiagnosticsManager;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;
import org.apache.commons.io.FileUtils;


import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.concurrent.CompletableFuture;

public class DiagnosticsManagerImpl$JfrFileContributor implements DiagnosticsManager.Contributor {
    final GatewayContext context;

    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());
    public DiagnosticsManagerImpl$JfrFileContributor(GatewayContext context) {
        this.context = context;
    }

    public CompletableFuture<Void> contributeDiagnosticFiles(File folder) {
        File logsDir = this.context.getSystemManager().getLogsDir();
        File[] jfrFiles = logsDir.listFiles((file) -> {
            return file.getName().contains(".jfr") && !Files.isSymbolicLink(file.toPath());
        });
        if (jfrFiles != null) {
            log.info("in first if statement");
            File[] var4 = jfrFiles;
            int var5 = jfrFiles.length;

            for(int var6 = 0; var6 < var5; ++var6) {
                log.info("in for loop");
                File jfr = var4[var6];
                File destination = new File(folder, jfr.getName());

                try {
                    FileUtils.copyFile(jfr, destination);
                } catch (IOException var10) {
                }
            }
        }
        return CompletableFuture.completedFuture(null);
    }
}