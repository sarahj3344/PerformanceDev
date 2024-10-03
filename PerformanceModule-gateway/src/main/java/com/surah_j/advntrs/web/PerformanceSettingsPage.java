package com.surah_j.advntrs.web;

import com.inductiveautomation.ignition.gateway.web.components.RecordEditForm;
import com.surah_j.advntrs.GatewayHook;
import com.surah_j.advntrs.records.PerformanceSettingsRecord;
import com.inductiveautomation.ignition.gateway.model.*;
import com.inductiveautomation.ignition.gateway.web.models.LenientResourceModel;
import com.inductiveautomation.ignition.gateway.web.pages.IConfigPage;
import org.apache.commons.lang3.tuple.Pair;
import org.apache.wicket.Application;

public class PerformanceSettingsPage extends RecordEditForm {
    public static final Pair<String, String> MENU_LOCATION = Pair.of(GatewayHook.CONFIG_CATEGORY.getName(), "performance");

    public PerformanceSettingsPage(final IConfigPage configPage) {
        super(configPage, null, new LenientResourceModel("Performance.nav.settings.panelTitle"),
                ((IgnitionWebApp) Application.get()).getContext().getPersistenceInterface().find(PerformanceSettingsRecord.META, 0L)
        );
    }

    @Override
    public Pair<String, String> getMenuLocation() {
        return MENU_LOCATION;
    }

}


