package com.surah_j.advntrs;

import com.inductiveautomation.ignition.common.licensing.LicenseState;
import com.inductiveautomation.ignition.gateway.dataroutes.RouteGroup;
import com.inductiveautomation.ignition.gateway.model.AbstractGatewayModuleHook;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;
import com.inductiveautomation.ignition.gateway.web.models.*;
import com.inductiveautomation.ignition.gateway.web.pages.BasicReactPanel;
import com.inductiveautomation.ignition.gateway.web.pages.status.StatusCategories;
import com.surah_j.advntrs.web.BabySharkRoutes;
import com.surah_j.advntrs.web.FlightRecordingRoutes;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.SQLException;
import java.util.*;

import com.inductiveautomation.ignition.common.BundleUtil;
import com.surah_j.advntrs.records.PerformanceSettingsRecord;
import com.surah_j.advntrs.web.PerformanceSettingsPage;
import com.inductiveautomation.ignition.gateway.localdb.persistence.IRecordListener;
import com.inductiveautomation.ignition.gateway.web.components.AbstractNamedTab;
import com.inductiveautomation.ignition.gateway.web.components.ConfigPanel;
import org.apache.wicket.markup.html.WebMarkupContainer;
import com.inductiveautomation.ignition.gateway.web.models.ConfigCategory;
import com.inductiveautomation.ignition.gateway.web.models.DefaultConfigTab;
import com.inductiveautomation.ignition.gateway.web.models.IConfigTab;

public class GatewayHook extends AbstractGatewayModuleHook {

    private GatewayContext context;

    private final Logger log = LoggerFactory.getLogger(getClass().getSimpleName());

    /**
     * This sets up the status panel which we'll add to the statusPanels list. The controller will be
     * HomeConnectStatusRoutes.java, and the model and view will be in our javascript folder. The status panel is optional
     * Only add if your module will provide meaningful info.
     */
    private static final INamedTab PERFORMANCE_STATUS_PAGE = new AbstractNamedTab(
            "performance",
            StatusCategories.DIAGNOSTICS,
            "Performance.nav.status.header") {

        @Override
        public WebMarkupContainer getPanel(String panelId) {
            // We've set  GatewayHook.getMountPathAlias() to return hce, so we need to use that alias here.
            return new BasicReactPanel(panelId, "/res/performance/js/performancestatus.js", "performancestatus");
        }

        @Override
        public Iterable<String> getSearchTerms(){
            return Arrays.asList("performance", "capture", "recording");
        }
    };


    public static final ConfigCategory CONFIG_CATEGORY =
            new ConfigCategory("Performance", "Performance.nav.status", 700);

    @Override
    public List<ConfigCategory> getConfigCategories() {
        return Collections.singletonList(CONFIG_CATEGORY);
    }

    /**
     * An IConfigTab contains all the info necessary to create a link to your config page on the gateway nav menu.
     * In order to make sure the breadcrumb and navigation works properly, the 'name' field should line up
     * with the right-hand value returned from {@link ConfigPanel#getMenuLocation}. In this case name("homeconnect")
     * lines up with HCSettingsPage#getMenuLocation().getRight()
     */
    public static final IConfigTab PERFORMANCE_CONFIG_ENTRY = DefaultConfigTab.builder()
            .category(CONFIG_CATEGORY)
            .name("performance")
            .i18n("Performance.nav.header")
            .page(PerformanceSettingsPage.class)
            .terms("performance settings")
            .build();

    @Override
    public List<? extends IConfigTab> getConfigPanels() {
        return Collections.singletonList(
                PERFORMANCE_CONFIG_ENTRY
        );
    }


    @Override
    public void setup(GatewayContext gatewayContext) {
        context = gatewayContext;

        log.debug("Beginning setup of Performance Module");

        // Register GatewayHook.properties by registering the GatewayHook.class with BundleUtils
        log.info(String.valueOf(getClass()));

        BundleUtil.get().addBundle("Performance", getClass(), "Performance");

        //Verify tables for persistent records if necessary
        verifySchema(context);

        // create records if needed
        maybeCreatePerformanceSettings(context);

        // get the settings record and do something with it...
        PerformanceSettingsRecord theOneRecord = context.getLocalPersistenceInterface().find(PerformanceSettingsRecord.META, 0L);
        log.info("Record found for Performance");

        // listen for updates to the settings record...
        PerformanceSettingsRecord.META.addRecordListener(new IRecordListener<PerformanceSettingsRecord>() {
            @Override
            public void recordUpdated(PerformanceSettingsRecord PerformanceSettingsRecord) {
                log.info("recordUpdated()");
            }

            @Override
            public void recordAdded(PerformanceSettingsRecord PerformanceSettingsRecord) {
                log.info("recordAdded()");
            }

            @Override
            public void recordDeleted(KeyValue keyValue) {
                log.info("recordDeleted()");
            }
        });

        log.debug("Setup Complete.");
    }

    private void verifySchema(GatewayContext context) {
        try {
            this.context.getSchemaUpdater().updatePersistentRecords(PerformanceSettingsRecord.META);
        } catch (SQLException e) {
            log.error("Error verifying persistent record schemas for Performance records.", e);
        }
    }

    public void maybeCreatePerformanceSettings(GatewayContext context) {
        log.info("Attempting to create Baby Shark Settings Record");
        try {
            log.info("In the try block");
            PerformanceSettingsRecord settingsRecord = this.context.getLocalPersistenceInterface().createNew(PerformanceSettingsRecord.META);
            log.info("After settings record created");
            settingsRecord.setId(0L);
            settingsRecord.setReadTimeout(1000);
            settingsRecord.setSnapshotLength(65535);
            log.info("Settings record updated with id: 0L, readTimeout: 1000, snapshotLength: 65535");

            /*
             * This doesn't override existing settings, only replaces it with these if we didn't
             * exist already.
             */
            context.getSchemaUpdater().ensureRecordExists(settingsRecord);
        } catch (Exception e) {
            log.error("Failed to establish Performance Settings Record exists", e);
        }

        log.trace("Performance Settings Record Established");
    }


    @Override
    public void startup(LicenseState licenseState) {

    }

    @Override
    public void shutdown() {
        /* remove our bundle */
        BundleUtil.get().removeBundle("Performance");
        log.info("Performance removed");
    }

    /**
     * The following methods are used by the status panel. Only add these if you are providing a status panel.
     */


    // getMountPathAlias() allows us to use a shorter mount path. Use caution, because we don't want a conflict with
    // other modules by other authors.
    @Override
    public Optional<String> getMountPathAlias() {
        return Optional.of("performance");
    }

    // Use this whenever you have mounted resources
    @Override
    public Optional<String> getMountedResourceFolder() {
        return Optional.of("mounted");
    }

    // Define your route handlers here
    @Override
    public void mountRouteHandlers(RouteGroup routes) {
        new BabySharkRoutes(context, routes).mountRoutes();
        new FlightRecordingRoutes(context, routes).mountRoutes();
    }


    @Override
    public List<? extends INamedTab> getStatusPanels() {
        return Collections.singletonList(PERFORMANCE_STATUS_PAGE);
    }
}