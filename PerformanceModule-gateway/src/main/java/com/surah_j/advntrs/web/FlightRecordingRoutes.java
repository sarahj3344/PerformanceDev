package com.surah_j.advntrs.web;

import com.inductiveautomation.ignition.common.util.LogUtil;
import com.inductiveautomation.ignition.common.util.LoggerEx;
import com.inductiveautomation.ignition.gateway.dataroutes.HttpMethod;
import com.inductiveautomation.ignition.gateway.dataroutes.RequestContext;
import com.inductiveautomation.ignition.gateway.dataroutes.RouteGroup;
import com.inductiveautomation.ignition.gateway.dataroutes.WicketAccessControl;
import com.inductiveautomation.ignition.gateway.model.GatewayContext;
import org.json.JSONException;
import org.json.JSONObject;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static com.inductiveautomation.ignition.gateway.dataroutes.RouteGroup.TYPE_JSON;


public class FlightRecordingRoutes {

    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());
    private final RouteGroup routes;
    public final GatewayContext context;
    FlightRecordingCollector Apollo = new FlightRecordingCollector();

    public FlightRecordingRoutes(GatewayContext context, RouteGroup group) {
        this.routes = group;
        this.context = context;
    }

    public void mountRoutes() {

        log.info("Mounting routes " + routes.toString());

        routes.newRoute("/jfrstate")
                .handler(this::jfrInitialState)
                .type(TYPE_JSON)
                .restrict(WicketAccessControl.STATUS_SECTION)
                .mount();

        routes.newRoute("/jfr-start-capture")
                .handler(this::jfrStartCapture)
                .type(TYPE_JSON)
                .method(HttpMethod.POST)
                .restrict(WicketAccessControl.STATUS_SECTION)
                .mount();

        routes.newRoute("/jfr-stop-capture")
                .handler(this::jfrStopCapture)
                .type(TYPE_JSON)
                .restrict(WicketAccessControl.STATUS_SECTION)
                .mount();

        log.info("Routes mounted");
    }

    public Object jfrInitialState(RequestContext request, HttpServletResponse response) throws IOException, JSONException {
        JSONObject state = new JSONObject();

        // get running state
        state.put("running", Apollo.isCapturing());

        log.info(state.toString());
        response.setContentType("application/json");
        return state;
    }

    public Object jfrStartCapture(RequestContext request, HttpServletResponse response) throws IOException, JSONException {
        // Get the writer to send response

        String req = request.readBody();
        GatewayContext context = request.getGatewayContext();
        JSONObject body = new JSONObject(req);
        log.trace(body.toString());
        Apollo.setProperties(body);
        Apollo.startRecording(context.getSystemManager().getLogsDir().toString(),"FlightRecording_");
        return 0;
}

    public Object jfrStopCapture(RequestContext request, HttpServletResponse response) throws IOException {
        Apollo.stopRecording(context);
        log.info("Diagnostic files triggered");
//        Apollo.diagnosticFiles(context);
        return 0;
    }
}
