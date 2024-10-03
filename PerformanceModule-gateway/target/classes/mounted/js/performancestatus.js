var performancestatus;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_TabContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/TabContainer */ "./src/components/TabContainer.tsx");
// import ListGroup from "./components/ListGroup";

function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_components_TabContainer__WEBPACK_IMPORTED_MODULE_0__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/Alert.tsx":
/*!**********************************!*\
  !*** ./src/components/Alert.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Alert = function Alert(_ref) {
  var children = _ref.children,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "danger" : _ref$color;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "alert alert-" + color,
    role: "alert"
  }, children, " ", /*#__PURE__*/React.createElement("div", {
    className: "spinner-grow text-danger",
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "visually-hidden"
  }, "Loading..."))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

/***/ }),

/***/ "./src/components/BabySharkForm.tsx":
/*!******************************************!*\
  !*** ./src/components/BabySharkForm.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/components/Button.tsx");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert */ "./src/components/Alert.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




// Define the type for network interfaces

function BabySharkForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    networkInterfaces = _useState2[0],
    setNetworkInterfaces = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    connections = _useState4[0],
    setConnections = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedInterface = _useState6[0],
    setSelectedInterface = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    inputFilter = _useState8[0],
    setFilter = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState10 = _slicedToArray(_useState9, 2),
    subsystem = _useState10[0],
    setSubsystem = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    ip = _useState12[0],
    setIp = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    port = _useState14[0],
    setPort = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    connectionName = _useState16[0],
    setConnectionName = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    running = _useState18[0],
    setRunning = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    hasFetched = _useState20[0],
    setHasFetched = _useState20[1];
  var subsystems = ["Modbus TCP Driver", "Logix Driver", "DNP3 Driver", "SMTP", "Database"];

  // useEffect(() => {}, []);

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // the code we want to run

    var fetchInterfaces = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, text, ifaces, state;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("/data/performance/network");
            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();
            case 6:
              text = _context.sent;
              ifaces = text.nifs;
              state = text.running;
              if (state === true) setRunning(true);
              setNetworkInterfaces(ifaces);
              setHasFetched(true);
              _context.next = 17;
              break;
            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              console.error("Error fetching network interfaces:", _context.t0);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 14]]);
      }));
      return function fetchInterfaces() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchInterfaces();
    // optional return function
    return function () {
      console.log("Done");
    };
  }, [
    // tell use effect what to listen/react to in order to run code
  ]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    // the code we want to run
    var fetchConnectionNames = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var params, response, text, connectionNames;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              params = {
                table: subsystem
              };
              _context2.prev = 1;
              _context2.next = 4;
              return fetch("/data/performance/connections", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
              });
            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.json();
            case 7:
              text = _context2.sent;
              console.log(text);
              connectionNames = text;
              setConnections(connectionNames);
              _context2.next = 16;
              break;
            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](1);
              console.error("Error fetching connections:", _context2.t0);
            case 16:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 13]]);
      }));
      return function fetchConnectionNames() {
        return _ref2.apply(this, arguments);
      };
    }();
    if (hasFetched === true) fetchConnectionNames();
    // optional return function
    return function () {
      console.log("Done");
    };
  }, [
  // tell use effect what to listen/react to in order to run code
  subsystem]);
  var startCapture = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var params;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            params = {
              device: selectedInterface,
              ip: ip,
              port: port,
              filter: inputFilter,
              connection: connectionName
            };
            fetch("/data/performance/start-capture", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(params)
            });
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function startCapture() {
      return _ref3.apply(this, arguments);
    };
  }();
  var stopCapture = function stopCapture() {
    fetch("/data/performance/stop-capture", {
      method: "GET"
    }).then(function (data) {
      return console.log(data);
    })["catch"](function (error) {
      return console.error(error);
    });
  };
  var handleInterfaceChange = function handleInterfaceChange(event) {
    setSelectedInterface(event.target.value);
  };
  var handleSubsystemChange = function handleSubsystemChange(event) {
    setSubsystem(event.target.value);
  };
  var handleConnectionNameChange = function handleConnectionNameChange(event) {
    setConnectionName(event.target.value);
  };
  var handleIPChange = function handleIPChange(event) {
    setIp(event.target.value);
  };
  var handlePortChange = function handlePortChange(event) {
    setPort(event.target.value);
  };
  var handleFilterChange = function handleFilterChange(event) {
    setFilter(event.target.value);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "input-group-text",
    htmlFor: "inputGroupSelect02"
  }, "Interface"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    id: "inputGroupSelect02",
    value: selectedInterface,
    onChange: handleInterfaceChange
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select Network Interface"), networkInterfaces.map(function (iface, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: iface.name
    }, iface.name);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "input-group-text",
    htmlFor: "inputGroupSelect02"
  }, "Subsystem"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    id: "inputGroupSelect02",
    value: subsystem,
    onChange: handleSubsystemChange
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, "Select Subsystem"), subsystems.map(function (system, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: system
    }, system);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "input-group-text",
    htmlFor: "inputGroupSelect02"
  }, "Connection"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    id: "inputGroupSelect02",
    value: connectionName,
    onChange: handleConnectionNameChange
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, "Select Connection"), connections.map(function (conn, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: conn.NAME
    }, conn.NAME);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "input-group-text",
    id: "basic-addon1"
  }, "Destination IP Address"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Destination IP Address",
    "aria-label": "Destination IP Address",
    "aria-describedby": "basic-addon1",
    value: ip,
    onChange: handleIPChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "input-group-text",
    id: "basic-addon1"
  }, "Destination Port"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Destination Port",
    "aria-label": "Destination Port",
    "aria-describedby": "basic-addon1",
    value: port,
    onChange: handlePortChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "input-group-text",
    id: "basic-addon1"
  }, "Filter"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "Filter",
    "aria-label": "Filter",
    "aria-describedby": "basic-addon1",
    value: inputFilter,
    onChange: handleFilterChange
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-check form-switch"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    role: "switch",
    id: "flexSwitchCheckDefault"
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "flexSwitchCheckDefault"
  }, "Increase Logging During Capture")))), /*#__PURE__*/React.createElement(_Button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    color: running ? "stop" : "start",
    onClick: function onClick() {
      if (running === false) {
        setRunning(true);
        console.log("STARTING CAPTURE");
        startCapture();
      } else {
        setRunning(false);
        console.log("STOPPING CAPTURE");
        stopCapture();
      }
    }
  }, running === true ? "Stop Capture" : "Start Capture"), running && /*#__PURE__*/React.createElement(_Alert__WEBPACK_IMPORTED_MODULE_1__["default"], null, "Capture Running..."));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BabySharkForm);

/***/ }),

/***/ "./src/components/Button.tsx":
/*!***********************************!*\
  !*** ./src/components/Button.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _shark_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shark.css */ "./src/components/shark.css");
// import { useState } from "react";

// const [selectedIndex, setSelectedIndex] = useState(0);

var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "start" : _ref$color;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: color + "Button",
    onClick: onClick
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/FlightRecordingForm.tsx":
/*!************************************************!*\
  !*** ./src/components/FlightRecordingForm.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/components/Button.tsx");
/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert */ "./src/components/Alert.tsx");
/* harmony import */ var _InputDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputDropdown */ "./src/components/InputDropdown.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




function FlightRecordingForm() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    configuration = _useState2[0],
    setConfiguration = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    maxAge = _useState4[0],
    setMaxAge = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    time = _useState6[0],
    setTime = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    time2 = _useState8[0],
    setTime2 = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
    _useState10 = _slicedToArray(_useState9, 2),
    size = _useState10[0],
    setSize = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    maxDuration = _useState12[0],
    setMaxDuration = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    maxSize = _useState14[0],
    setMaxSize = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    running = _useState16[0],
    setRunning = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
    _useState18 = _slicedToArray(_useState17, 2),
    dumpOnExit = _useState18[0],
    setDumpOnExit = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    hasFetched = _useState20[0],
    setHasFetched = _useState20[1];
  var configurations = ["Threads", "Memory", "Threads and Memory"];
  var duration = [{
    value: "m",
    label: "minute(s)"
  }, {
    value: "h",
    label: "hour(s)"
  }, {
    value: "d",
    label: "day(s)"
  }];
  var filesize = [{
    value: "m",
    label: "MB"
  }, {
    value: "g",
    label: "GB"
  }];

  // useEffect(() => {}, []);

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    // the code we want to run

    var fetchInitialState = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, text, state;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("/data/performance/jfrstate");
            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();
            case 6:
              text = _context.sent;
              state = text.running;
              if (state === true) setRunning(true);
              setHasFetched(true);
              _context.next = 15;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              console.error("Error fetching inital state: ", _context.t0);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 12]]);
      }));
      return function fetchInitialState() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchInitialState();
    // optional return function
    return function () {
      console.log("Done");
    };
  }, [
    // tell use effect what to listen/react to in order to run code
  ]);
  var startCapture = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var params;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            params = {
              configuration: configuration,
              age: maxAge,
              ageTime: time,
              duration: maxDuration,
              durationTime: time2,
              size: maxSize,
              sizeMetric: size,
              exit: dumpOnExit
            };
            fetch("/data/performance/jfr-start-capture", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              body: JSON.stringify(params)
            });
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function startCapture() {
      return _ref2.apply(this, arguments);
    };
  }();
  var stopCapture = function stopCapture() {
    fetch("/data/performance/jfr-stop-capture", {
      method: "GET"
    }).then(function (data) {
      return console.log(data);
    })["catch"](function (error) {
      return console.error(error);
    });
  };
  var handleConfigurationChange = function handleConfigurationChange(event) {
    setConfiguration(event.target.value);
  };
  var handleMaxAgeChange = function handleMaxAgeChange(event) {
    setMaxAge(event.target.value);
  };
  var handleTimeChange = function handleTimeChange(event) {
    setTime(event.target.value);
  };
  var handleTime2Change = function handleTime2Change(event) {
    setTime2(event.target.value);
  };
  var handleSizeChange = function handleSizeChange(event) {
    setSize(event.target.value);
  };
  var handleMaxDurationChange = function handleMaxDurationChange(event) {
    setMaxDuration(event.target.value);
  };
  var handleMaxSizeChange = function handleMaxSizeChange(event) {
    setMaxSize(event.target.value);
  };
  var handleExitChange = function handleExitChange(event) {
    setMaxSize(event.target.value);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/React.createElement("label", {
    className: "input-group-text",
    htmlFor: "inputGroupSelect02"
  }, "Configuration"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    id: "inputGroupSelect02",
    value: configuration,
    onChange: handleConfigurationChange
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, "Select Configuration"), configurations.map(function (config, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: config
    }, config);
  }))), /*#__PURE__*/React.createElement(_InputDropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    placeholder: "Max Age",
    datatype: time,
    rowData: duration,
    onChange1: handleMaxAgeChange,
    onChange2: handleTimeChange
  }), /*#__PURE__*/React.createElement(_InputDropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    placeholder: "Max Duration",
    datatype: time2,
    rowData: duration,
    onChange1: handleMaxDurationChange,
    onChange2: handleTime2Change
  }), /*#__PURE__*/React.createElement(_InputDropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    placeholder: "Max Size",
    datatype: size,
    rowData: filesize,
    onChange1: handleMaxSizeChange,
    onChange2: handleSizeChange
  }), /*#__PURE__*/React.createElement("div", {
    className: "form-check form-switch"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    role: "switch",
    id: "flexSwitchCheckDefault",
    onChange: handleExitChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "flexSwitchCheckDefault"
  }, "Dump on Exit?")))), /*#__PURE__*/React.createElement(_Button__WEBPACK_IMPORTED_MODULE_0__["default"], {
    color: running ? "stop" : "start",
    onClick: function onClick() {
      if (running === false) {
        setRunning(true);
        console.log("STARTING CAPTURE");
        startCapture();
      } else {
        setRunning(false);
        console.log("STOPPING CAPTURE");
        stopCapture();
      }
    }
  }, running === true ? "Stop Capture" : "Start Capture"), running && /*#__PURE__*/React.createElement(_Alert__WEBPACK_IMPORTED_MODULE_1__["default"], null, "Capture Running..."));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlightRecordingForm);

/***/ }),

/***/ "./src/components/InputDropdown.tsx":
/*!******************************************!*\
  !*** ./src/components/InputDropdown.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var InputDropdown = function InputDropdown(_ref) {
  var placeholder = _ref.placeholder,
    datatype = _ref.datatype,
    rowData = _ref.rowData,
    onChange1 = _ref.onChange1,
    onChange2 = _ref.onChange2;
  return /*#__PURE__*/React.createElement("div", {
    className: "input-group mb-3"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    "aria-label": placeholder,
    placeholder: placeholder,
    onChange: onChange1,
    required: true
  }), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    id: "inputGroupSelect02",
    value: datatype,
    onChange: onChange2,
    required: true
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), rowData.map(function (config, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: config.value
    }, config.label);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputDropdown);

/***/ }),

/***/ "./src/components/TabContainer.tsx":
/*!*****************************************!*\
  !*** ./src/components/TabContainer.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BabySharkForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BabySharkForm */ "./src/components/BabySharkForm.tsx");
/* harmony import */ var _shark_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shark.css */ "./src/components/shark.css");
/* harmony import */ var _FlightRecordingForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FlightRecordingForm */ "./src/components/FlightRecordingForm.tsx");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




function TabContainer() {
  var tabs = ["Baby Shark", "Flight Recorder"];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    selectedIndex = _useState2[0],
    setSelectedIndex = _useState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("ul", {
    className: "nav nav-tabs"
  }, tabs.map(function (tab, index) {
    return /*#__PURE__*/React.createElement("li", {
      className: "nav-item",
      key: tab,
      onClick: function onClick() {
        setSelectedIndex(index);
      }
    }, /*#__PURE__*/React.createElement("a", {
      className: selectedIndex === index ? "nav-link active" : "nav-link",
      "aria-current": "page",
      href: "#"
    }, tab));
  })), /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, selectedIndex === 0 && /*#__PURE__*/React.createElement(_BabySharkForm__WEBPACK_IMPORTED_MODULE_1__["default"], null), selectedIndex === 1 && /*#__PURE__*/React.createElement(_FlightRecordingForm__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabContainer);

// event handler
// const handleClick = (event: MouseEvent) => console.log(event);
// import { MouseEvent } from "react";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/shark.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/shark.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; Center horizontally */
  /* align-items: center; Center vertically */
  /* height: 100vh; Full viewport height */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  /* margin-left: 10%;
  margin-right: 10%; */
  /* padding-left: 20px;
  padding-right: 20px; */
  /* border: 2px solid #f5f5f5; Border around the container */
  /* box-shadow: 0 4px 8px rgba(169, 197, 221, 0.2);  Shadow effect */
  background-color: #ffffff; /*Background color of the container*/
  border-radius: 8px; /* Optional: rounded corners */
  padding-bottom: 40px;
}

.tabtext {
  color: black;
}

.startButton {
  background-color: #28a745; /* Green background color */
  color: white; /* Text color */
  border: none; /* Remove default border */
  border-radius: 12px; /* Rounded corners */
  padding: 10px 20px; /* Padding inside the button */
  font-size: 16px; /* Font size */
  cursor: pointer; /* Pointer cursor on hover */
  width: 200px;
  /*box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);  Drop shadow with a lighter green shade */
  transition: background-color 0.3s, box-shadow 0.3s; /* Smooth transition for hover effects */
}

/* Button hover state */
.button:hover {
  background-color: #34c759; /* Light green background color on hover */
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.5); /* Slightly more intense shadow on hover */
}

.stopButton {
  background-color: #521212; /* Green background color */
  color: white; /* Text color */
  border: none; /* Remove default border */
  border-radius: 12px; /* Rounded corners */
  padding: 10px 20px; /* Padding inside the button */
  font-size: 16px; /* Font size */
  width: 200px;
  cursor: pointer; /* Pointer cursor on hover */
  box-shadow: 0 4px 8px rgba(214, 77, 81, 0.3); /* Drop shadow with a lighter green shade */
  transition: background-color 0.3s, box-shadow 0.3s; /* Smooth transition for hover effects */
}

.form-check-label {
  display: inline-block;
  margin-bottom: 0;
  vertical-align: middle;
  cursor: pointer;
}

.input-group {
  position: relative;
  display: flex; /* Ensures child elements are aligned in a row */
  flex-wrap: nowrap; /* Prevents wrapping; keeps elements on the same row */
  align-items: center; /* Vertically centers items */
  height: 2.5rem;
}

.input-group-text {
  display: flex; /* Allows child items to be aligned within this element */
  align-items: center; /* Centers child items vertically */
  padding: 0.375rem 0.75rem; /*Adjusts padding */
  margin-bottom: 0; /* Removes bottom margin */
  font-size: 1rem; /* Font size */
  font-weight: 400; /* Font weight */
  line-height: 1.5; /* Line height */
  color: #495057; /* Text color */
  background-color: #e9ecef; /* Background color */
  border: 1px solid #ced4da; /* Border */
  border-radius: 0.375rem; /* Border radius */
  height: 2.5rem; /* Set a fixed height */
  width: 300px;
  /* Adjust width or flex properties if needed to fit your design */
}

.input-group input {
  flex: 1; /* Allows input to take remaining space */
  height: 2.5rem; /* Ensure the input field height matches the .input-group-text height */
  /* padding: 0.375rem 0.75rem; Ensure padding matches .input-group-text */
  border: 1px solid #ced4da; /* Match the border style of .input-group-text */
  /* border-radius: 0.375rem; Match border radius of .input-group-text */
}

/* Optional: Adjust focus and hover states */
.input-group input:focus,
.input-group input:hover {
  border-color: #80bdff; /* Example focus border color */
  outline: none; /* Removes default outline */
}

.mb-3 {
  margin-bottom: 1rem; /* Standard margin size for spacing */
}

.form-select {
  display: block;
  /* width: 100%; */
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  margin-top: 0;
  margin-bottom: 0;
  appearance: none; /* Remove default styling in some browsers */
}

.nav-tabs {
  list-style-type: none; /* Removes bullet points */
  padding-left: 0; /* Removes default padding */
  margin-bottom: 0; /* Removes bottom margin */
  display: flex; /* Aligns items in a row */
}

/* Ensure each tab item (usually a <li>) does not have default margins and padding */
.nav-tabs .nav-item {
  margin-bottom: -1px; /* Removes the default margin between tab items */
}

/* Ensure the individual tab links are displayed as block-level elements */
.nav-tabs .nav-link {
  display: block; /* Makes each tab link a block element */
  padding: 0.5rem 1rem; /* Adjust padding as needed */
  color: black;
  margin: 0; /* Removes margin */
  border: 1px solid transparent; /* Sets border style */
  border-radius: 0.375rem 0.375rem 0 0; /* Adjust border radius as needed */
}

/* Style for the active tab */
.nav-tabs .nav-link.active {
  color: #284f93; /* Text color for active tab */
  font-weight: bold;
  background-color: #fff; /* Background color for active tab */
  border-color: #dee2e6 #dee2e6 #fff; /*Border color for active tab*/
}

/* Style for disabled tab */
.nav-tabs .nav-link.disabled {
  color: #6c757d; /* Text color for disabled tab */
  pointer-events: none; /* Disables interactions */
}

.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.375rem;
}

.alert-heading {
  font-size: 1.25rem;
  font-weight: 500;
}

.alert-link {
  font-weight: 500;
}

.alert-dismissible {
  padding-right: 4.5rem;
}

.alert-dismissible .btn-close {
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  z-index: 2;
}

.alert-danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}

.alert-danger hr {
  border-top-color: #f1b0b7;
}

.spinner-grow {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  vertical-align: text-bottom;
  border: 0.25em solid transparent;
  border-radius: 50%;
  border-top-color: currentColor;
  animation: spinner-grow 0.75s linear infinite;
}

@keyframes spinner-grow {
  0% {
    transform: scale(0.1);
    opacity: 1;
  }
  50% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(0.1);
    opacity: 0;
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.form-check-label {
  display: inline-block; /* Makes the label behave like an inline-block element */
  margin-bottom: 0; /* Removes bottom margin */
  font-weight: 400; /* Normal font weight */
  line-height: 1.5; /* Adjusts line height for better readability */
  cursor: pointer; /* Pointer cursor on hover for better UX */
}
`, "",{"version":3,"sources":["webpack://./src/components/shark.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iDAAiD;EACjD,2CAA2C;EAC3C,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf;sBACoB;EACpB;wBACsB;EACtB,2DAA2D;EAC3D,mEAAmE;EACnE,yBAAyB,EAAE,oCAAoC;EAC/D,kBAAkB,EAAE,8BAA8B;EAClD,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,yBAAyB,EAAE,2BAA2B;EACtD,YAAY,EAAE,eAAe;EAC7B,YAAY,EAAE,0BAA0B;EACxC,mBAAmB,EAAE,oBAAoB;EACzC,kBAAkB,EAAE,8BAA8B;EAClD,eAAe,EAAE,cAAc;EAC/B,eAAe,EAAE,4BAA4B;EAC7C,YAAY;EACZ,yFAAyF;EACzF,kDAAkD,EAAE,wCAAwC;AAC9F;;AAEA,uBAAuB;AACvB;EACE,yBAAyB,EAAE,0CAA0C;EACrE,6CAA6C,EAAE,0CAA0C;AAC3F;;AAEA;EACE,yBAAyB,EAAE,2BAA2B;EACtD,YAAY,EAAE,eAAe;EAC7B,YAAY,EAAE,0BAA0B;EACxC,mBAAmB,EAAE,oBAAoB;EACzC,kBAAkB,EAAE,8BAA8B;EAClD,eAAe,EAAE,cAAc;EAC/B,YAAY;EACZ,eAAe,EAAE,4BAA4B;EAC7C,4CAA4C,EAAE,2CAA2C;EACzF,kDAAkD,EAAE,wCAAwC;AAC9F;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa,EAAE,gDAAgD;EAC/D,iBAAiB,EAAE,sDAAsD;EACzE,mBAAmB,EAAE,6BAA6B;EAClD,cAAc;AAChB;;AAEA;EACE,aAAa,EAAE,yDAAyD;EACxE,mBAAmB,EAAE,mCAAmC;EACxD,yBAAyB,EAAE,mBAAmB;EAC9C,gBAAgB,EAAE,0BAA0B;EAC5C,eAAe,EAAE,cAAc;EAC/B,gBAAgB,EAAE,gBAAgB;EAClC,gBAAgB,EAAE,gBAAgB;EAClC,cAAc,EAAE,eAAe;EAC/B,yBAAyB,EAAE,qBAAqB;EAChD,yBAAyB,EAAE,WAAW;EACtC,uBAAuB,EAAE,kBAAkB;EAC3C,cAAc,EAAE,uBAAuB;EACvC,YAAY;EACZ,iEAAiE;AACnE;;AAEA;EACE,OAAO,EAAE,yCAAyC;EAClD,cAAc,EAAE,uEAAuE;EACvF,wEAAwE;EACxE,yBAAyB,EAAE,gDAAgD;EAC3E,sEAAsE;AACxE;;AAEA,4CAA4C;AAC5C;;EAEE,qBAAqB,EAAE,+BAA+B;EACtD,aAAa,EAAE,4BAA4B;AAC7C;;AAEA;EACE,mBAAmB,EAAE,qCAAqC;AAC5D;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,2BAA2B;EAC3B,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,cAAc;EACd,yBAAyB;EACzB,4BAA4B;EAC5B,yBAAyB;EACzB,aAAa;EACb,gBAAgB;EAChB,gBAAgB,EAAE,4CAA4C;AAChE;;AAEA;EACE,qBAAqB,EAAE,0BAA0B;EACjD,eAAe,EAAE,4BAA4B;EAC7C,gBAAgB,EAAE,0BAA0B;EAC5C,aAAa,EAAE,0BAA0B;AAC3C;;AAEA,oFAAoF;AACpF;EACE,mBAAmB,EAAE,iDAAiD;AACxE;;AAEA,0EAA0E;AAC1E;EACE,cAAc,EAAE,wCAAwC;EACxD,oBAAoB,EAAE,6BAA6B;EACnD,YAAY;EACZ,SAAS,EAAE,mBAAmB;EAC9B,6BAA6B,EAAE,sBAAsB;EACrD,oCAAoC,EAAE,mCAAmC;AAC3E;;AAEA,6BAA6B;AAC7B;EACE,cAAc,EAAE,8BAA8B;EAC9C,iBAAiB;EACjB,sBAAsB,EAAE,oCAAoC;EAC5D,kCAAkC,EAAE,8BAA8B;AACpE;;AAEA,2BAA2B;AAC3B;EACE,cAAc,EAAE,gCAAgC;EAChD,oBAAoB,EAAE,0BAA0B;AAClD;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;EACxB,mBAAmB;EACnB,6BAA6B;EAC7B,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,2BAA2B;EAC3B,gCAAgC;EAChC,kBAAkB;EAClB,8BAA8B;EAC9B,6CAA6C;AAC/C;;AAEA;EACE;IACE,qBAAqB;IACrB,UAAU;EACZ;EACA;IACE,mBAAmB;IACnB,YAAY;EACd;EACA;IACE,qBAAqB;IACrB,UAAU;EACZ;AACF;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,YAAY;EACZ,UAAU;EACV,gBAAgB;EAChB,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,qBAAqB,EAAE,wDAAwD;EAC/E,gBAAgB,EAAE,0BAA0B;EAC5C,gBAAgB,EAAE,uBAAuB;EACzC,gBAAgB,EAAE,+CAA+C;EACjE,eAAe,EAAE,0CAA0C;AAC7D","sourcesContent":[".container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  /* justify-content: center; Center horizontally */\r\n  /* align-items: center; Center vertically */\r\n  /* height: 100vh; Full viewport height */\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 5px;\r\n  /* margin-left: 10%;\r\n  margin-right: 10%; */\r\n  /* padding-left: 20px;\r\n  padding-right: 20px; */\r\n  /* border: 2px solid #f5f5f5; Border around the container */\r\n  /* box-shadow: 0 4px 8px rgba(169, 197, 221, 0.2);  Shadow effect */\r\n  background-color: #ffffff; /*Background color of the container*/\r\n  border-radius: 8px; /* Optional: rounded corners */\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.tabtext {\r\n  color: black;\r\n}\r\n\r\n.startButton {\r\n  background-color: #28a745; /* Green background color */\r\n  color: white; /* Text color */\r\n  border: none; /* Remove default border */\r\n  border-radius: 12px; /* Rounded corners */\r\n  padding: 10px 20px; /* Padding inside the button */\r\n  font-size: 16px; /* Font size */\r\n  cursor: pointer; /* Pointer cursor on hover */\r\n  width: 200px;\r\n  /*box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);  Drop shadow with a lighter green shade */\r\n  transition: background-color 0.3s, box-shadow 0.3s; /* Smooth transition for hover effects */\r\n}\r\n\r\n/* Button hover state */\r\n.button:hover {\r\n  background-color: #34c759; /* Light green background color on hover */\r\n  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.5); /* Slightly more intense shadow on hover */\r\n}\r\n\r\n.stopButton {\r\n  background-color: #521212; /* Green background color */\r\n  color: white; /* Text color */\r\n  border: none; /* Remove default border */\r\n  border-radius: 12px; /* Rounded corners */\r\n  padding: 10px 20px; /* Padding inside the button */\r\n  font-size: 16px; /* Font size */\r\n  width: 200px;\r\n  cursor: pointer; /* Pointer cursor on hover */\r\n  box-shadow: 0 4px 8px rgba(214, 77, 81, 0.3); /* Drop shadow with a lighter green shade */\r\n  transition: background-color 0.3s, box-shadow 0.3s; /* Smooth transition for hover effects */\r\n}\r\n\r\n.form-check-label {\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n}\r\n\r\n.input-group {\r\n  position: relative;\r\n  display: flex; /* Ensures child elements are aligned in a row */\r\n  flex-wrap: nowrap; /* Prevents wrapping; keeps elements on the same row */\r\n  align-items: center; /* Vertically centers items */\r\n  height: 2.5rem;\r\n}\r\n\r\n.input-group-text {\r\n  display: flex; /* Allows child items to be aligned within this element */\r\n  align-items: center; /* Centers child items vertically */\r\n  padding: 0.375rem 0.75rem; /*Adjusts padding */\r\n  margin-bottom: 0; /* Removes bottom margin */\r\n  font-size: 1rem; /* Font size */\r\n  font-weight: 400; /* Font weight */\r\n  line-height: 1.5; /* Line height */\r\n  color: #495057; /* Text color */\r\n  background-color: #e9ecef; /* Background color */\r\n  border: 1px solid #ced4da; /* Border */\r\n  border-radius: 0.375rem; /* Border radius */\r\n  height: 2.5rem; /* Set a fixed height */\r\n  width: 300px;\r\n  /* Adjust width or flex properties if needed to fit your design */\r\n}\r\n\r\n.input-group input {\r\n  flex: 1; /* Allows input to take remaining space */\r\n  height: 2.5rem; /* Ensure the input field height matches the .input-group-text height */\r\n  /* padding: 0.375rem 0.75rem; Ensure padding matches .input-group-text */\r\n  border: 1px solid #ced4da; /* Match the border style of .input-group-text */\r\n  /* border-radius: 0.375rem; Match border radius of .input-group-text */\r\n}\r\n\r\n/* Optional: Adjust focus and hover states */\r\n.input-group input:focus,\r\n.input-group input:hover {\r\n  border-color: #80bdff; /* Example focus border color */\r\n  outline: none; /* Removes default outline */\r\n}\r\n\r\n.mb-3 {\r\n  margin-bottom: 1rem; /* Standard margin size for spacing */\r\n}\r\n\r\n.form-select {\r\n  display: block;\r\n  /* width: 100%; */\r\n  height: calc(2.25rem + 2px);\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  background-color: #ffffff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ced4da;\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  appearance: none; /* Remove default styling in some browsers */\r\n}\r\n\r\n.nav-tabs {\r\n  list-style-type: none; /* Removes bullet points */\r\n  padding-left: 0; /* Removes default padding */\r\n  margin-bottom: 0; /* Removes bottom margin */\r\n  display: flex; /* Aligns items in a row */\r\n}\r\n\r\n/* Ensure each tab item (usually a <li>) does not have default margins and padding */\r\n.nav-tabs .nav-item {\r\n  margin-bottom: -1px; /* Removes the default margin between tab items */\r\n}\r\n\r\n/* Ensure the individual tab links are displayed as block-level elements */\r\n.nav-tabs .nav-link {\r\n  display: block; /* Makes each tab link a block element */\r\n  padding: 0.5rem 1rem; /* Adjust padding as needed */\r\n  color: black;\r\n  margin: 0; /* Removes margin */\r\n  border: 1px solid transparent; /* Sets border style */\r\n  border-radius: 0.375rem 0.375rem 0 0; /* Adjust border radius as needed */\r\n}\r\n\r\n/* Style for the active tab */\r\n.nav-tabs .nav-link.active {\r\n  color: #284f93; /* Text color for active tab */\r\n  font-weight: bold;\r\n  background-color: #fff; /* Background color for active tab */\r\n  border-color: #dee2e6 #dee2e6 #fff; /*Border color for active tab*/\r\n}\r\n\r\n/* Style for disabled tab */\r\n.nav-tabs .nav-link.disabled {\r\n  color: #6c757d; /* Text color for disabled tab */\r\n  pointer-events: none; /* Disables interactions */\r\n}\r\n\r\n.alert {\r\n  position: relative;\r\n  padding: 0.75rem 1.25rem;\r\n  margin-bottom: 1rem;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.375rem;\r\n}\r\n\r\n.alert-heading {\r\n  font-size: 1.25rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.alert-link {\r\n  font-weight: 500;\r\n}\r\n\r\n.alert-dismissible {\r\n  padding-right: 4.5rem;\r\n}\r\n\r\n.alert-dismissible .btn-close {\r\n  position: absolute;\r\n  top: 0.5rem;\r\n  right: 1rem;\r\n  z-index: 2;\r\n}\r\n\r\n.alert-danger {\r\n  color: #721c24;\r\n  background-color: #f8d7da;\r\n  border-color: #f5c6cb;\r\n}\r\n\r\n.alert-danger hr {\r\n  border-top-color: #f1b0b7;\r\n}\r\n\r\n.spinner-grow {\r\n  display: inline-block;\r\n  width: 2rem;\r\n  height: 2rem;\r\n  vertical-align: text-bottom;\r\n  border: 0.25em solid transparent;\r\n  border-radius: 50%;\r\n  border-top-color: currentColor;\r\n  animation: spinner-grow 0.75s linear infinite;\r\n}\r\n\r\n@keyframes spinner-grow {\r\n  0% {\r\n    transform: scale(0.1);\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    transform: scale(1);\r\n    opacity: 0.5;\r\n  }\r\n  100% {\r\n    transform: scale(0.1);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.visually-hidden {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n\r\n.form-check-label {\r\n  display: inline-block; /* Makes the label behave like an inline-block element */\r\n  margin-bottom: 0; /* Removes bottom margin */\r\n  font-weight: 400; /* Normal font weight */\r\n  line-height: 1.5; /* Adjusts line height for better readability */\r\n  cursor: pointer; /* Pointer cursor on hover for better UX */\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/components/shark.css":
/*!**********************************!*\
  !*** ./src/components/shark.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_shark_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./shark.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/shark.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_shark_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_shark_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_shark_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_shark_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.tsx */ "./src/App.tsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


// import * as bootstrap from 'bootstrap';
// import '../scss/styles.scss';
// import styles from  '../scss/styles.module.scss';
// return <div className={styles.appContainer}><App></App></div>

var MountableApp = /*#__PURE__*/function (_React$Component) {
  function StatusPageApp() {
    _classCallCheck(this, StatusPageApp);
    return _callSuper(this, StatusPageApp, arguments);
  }
  _inherits(StatusPageApp, _React$Component);
  return _createClass(StatusPageApp, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], null);
    }
  }]);
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MountableApp);
performancestatus = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=performancestatus.js.map