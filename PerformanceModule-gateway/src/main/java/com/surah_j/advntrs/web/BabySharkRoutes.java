package com.surah_j.advntrs.web;

import com.inductiveautomation.ignition.common.gson.Gson;
import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.dataroutes.HttpMethod;
import com.inductiveautomation.ignition.gateway.dataroutes.RequestContext;
import com.inductiveautomation.ignition.gateway.dataroutes.RouteGroup;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.pcap4j.core.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import static com.inductiveautomation.ignition.gateway.dataroutes.RouteGroup.TYPE_JSON;


public class BabySharkRoutes {

    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());
    private final RouteGroup routes;
    BabySharkCollector Nemo = new BabySharkCollector();

    public BabySharkRoutes (GatewayContext context, RouteGroup group) {
        this.routes = group;
    }

    public void mountRoutes() {

        routes.newRoute("/network")
                .handler(this::initialState)
                .type(TYPE_JSON)
                .mount();

        routes.newRoute("/connections")
                .handler(this::connections)
                .type(TYPE_JSON)
                .method(HttpMethod.POST)
//                .restrict(WicketAccessControl.STATUS_SECTION)
                .mount();

        routes.newRoute("/start-capture")
                .handler(this::startCapture)
                .type(TYPE_JSON)
                .method(HttpMethod.POST)
//                .restrict(WicketAccessControl.STATUS_SECTION)
                .mount();

        routes.newRoute("/stop-capture")
                .handler(this::stopCapture)
                .type(TYPE_JSON)
//                .restrict(WicketAccessControl.STATUS_SECTION)
                .mount();

        log.info("Routes mounted");
    }

    public Object initialState(RequestContext request, HttpServletResponse response) throws IOException, JSONException {
        JSONArray nifs = Nemo.getNIFs();
        JSONObject state = new JSONObject();
        state.put("nifs", nifs);

        // get running state
        String running = "false";
        state.put("running", Nemo.isCapturing());

        log.trace(state.toString());
        // Set response content type to JSON
        response.setContentType("application/json");
        return state;
    }

    public String connections(RequestContext req, HttpServletResponse resp) throws IOException, SQLException, JSONException {
        List<Map> connectionNames = Nemo.connectionDetails(req);

        // Set response content type to JSON
        resp.setContentType("application/json");
        Gson gson = new Gson();
        return gson.toJson(connectionNames);
    }

    public Object startCapture(RequestContext request, HttpServletResponse response) throws IOException, JSONException, PcapNativeException, NotOpenException {
        // Get the writer to send response

        String req = request.readBody();
        JSONObject body = new JSONObject(req);
        Nemo.setProperties(body);
        JSONObject settingsRec = Nemo.persistentRecs(request);
        PcapNetworkInterface device = Nemo.setNif(body.get("device").toString());
        Nemo.createHandle(device, settingsRec);
        Nemo.setFilter();
        Nemo.capture(response);
        return 0;
}

    public Object stopCapture(RequestContext context, HttpServletResponse response) throws NotOpenException, IOException {
        Nemo.endCapture(response);
        Nemo.diagnosticFiles();
        return 0;
    }
}
