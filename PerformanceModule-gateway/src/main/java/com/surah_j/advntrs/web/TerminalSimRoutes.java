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

public class TerminalSimRoutes {
    private final LoggerEx log = LogUtil.getLogger(getClass().getSimpleName());
    private final RouteGroup routes;
    public final GatewayContext context;

    public TerminalSimRoutes(GatewayContext context, RouteGroup group) {
        this.routes = group;
        this.context = context;
    }

    public void mountRoutes() {

        log.info("Mounting routes " + routes.toString());

        routes.newRoute("/terminalSim")
                .handler(this::terminalCommand)
                .method(HttpMethod.POST)
                .type(TYPE_JSON)
//                .restrict(WicketAccessControl.STATUS_SECTION)
                .mount();

        log.info("Routes mounted");
    }

    public Object terminalCommand(RequestContext request, HttpServletResponse response) throws IOException, JSONException {
        // Get the writer to send response
        log.info("In Terminal command");
        String req = request.readBody();
        GatewayContext context = request.getGatewayContext();
        JSONObject body = new JSONObject(req);
        log.info(body.toString());
        TerminalSimCollector Gerty = new TerminalSimCollector();
        JSONObject result = new JSONObject();
        result.put("result", Gerty.processCommand(body.getString("command")));
        response.setContentType("application/json");
        return result;
    }
}
