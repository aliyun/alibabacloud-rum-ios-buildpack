 (function webpackUniversalModuleDefinition(root, factory) {
     if(typeof exports === 'object' && typeof module === 'object')
         module.exports = factory();
     else if(typeof define === 'function' && define.amd)
         define([], factory);
     else if(typeof exports === 'object')
         exports["RumSDK"] = factory();
     else
         root["RumSDK"] = factory();
 })(window, function() {
 return /******/ (function(modules) { // webpackBootstrap
 /******/     // The module cache
 /******/     var installedModules = {};
 /******/
 /******/     // The require function
 /******/     function __webpack_require__(moduleId) {
 /******/
 /******/         // Check if module is in cache
 /******/         if(installedModules[moduleId]) {
 /******/             return installedModules[moduleId].exports;
 /******/         }
 /******/         // Create a new module (and put it into the cache)
 /******/         var module = installedModules[moduleId] = {
 /******/             i: moduleId,
 /******/             l: false,
 /******/             exports: {}
 /******/         };
 /******/
 /******/         // Execute the module function
 /******/         modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
 /******/
 /******/         // Flag the module as loaded
 /******/         module.l = true;
 /******/
 /******/         // Return the exports of the module
 /******/         return module.exports;
 /******/     }
 /******/
 /******/
 /******/     // expose the modules object (__webpack_modules__)
 /******/     __webpack_require__.m = modules;
 /******/
 /******/     // expose the module cache
 /******/     __webpack_require__.c = installedModules;
 /******/
 /******/     // define getter function for harmony exports
 /******/     __webpack_require__.d = function(exports, name, getter) {
 /******/         if(!__webpack_require__.o(exports, name)) {
 /******/             Object.defineProperty(exports, name, { enumerable: true, get: getter });
 /******/         }
 /******/     };
 /******/
 /******/     // define __esModule on exports
 /******/     __webpack_require__.r = function(exports) {
 /******/         if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 /******/             Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
 /******/         }
 /******/         Object.defineProperty(exports, '__esModule', { value: true });
 /******/     };
 /******/
 /******/     // create a fake namespace object
 /******/     // mode & 1: value is a module id, require it
 /******/     // mode & 2: merge all properties of value into the ns
 /******/     // mode & 4: return value when already ns object
 /******/     // mode & 8|1: behave like require
 /******/     __webpack_require__.t = function(value, mode) {
 /******/         if(mode & 1) value = __webpack_require__(value);
 /******/         if(mode & 8) return value;
 /******/         if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 /******/         var ns = Object.create(null);
 /******/         __webpack_require__.r(ns);
 /******/         Object.defineProperty(ns, 'default', { enumerable: true, value: value });
 /******/         if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
 /******/         return ns;
 /******/     };
 /******/
 /******/     // getDefaultExport function for compatibility with non-harmony modules
 /******/     __webpack_require__.n = function(module) {
 /******/         var getter = module && module.__esModule ?
 /******/             function getDefault() { return module['default']; } :
 /******/             function getModuleExports() { return module; };
 /******/         __webpack_require__.d(getter, 'a', getter);
 /******/         return getter;
 /******/     };
 /******/
 /******/     // Object.prototype.hasOwnProperty.call
 /******/     __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
 /******/
 /******/     // __webpack_public_path__
 /******/     __webpack_require__.p = "./dist/";
 /******/
 /******/
 /******/     // Load entry module and return exports
 /******/     return __webpack_require__(__webpack_require__.s = 40);
 /******/ })
 /************************************************************************/
 /******/ ([
 /* 0 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
   if (k2 === undefined) k2 = k;
   var desc = Object.getOwnPropertyDescriptor(m, k);
   if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
     desc = {
       enumerable: true,
       get: function get() {
         return m[k];
       }
     };
   }
   Object.defineProperty(o, k2, desc);
 } : function (o, m, k, k2) {
   if (k2 === undefined) k2 = k;
   o[k2] = m[k];
 });
 var __exportStar = this && this.__exportStar || function (m, exports) {
   for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
 };
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.Shell = exports.Reporter = exports.Context = exports.Client = void 0;
 var client_1 = __webpack_require__(22);
 exports.Client = client_1["default"];
 var context_1 = __webpack_require__(27);
 exports.Context = context_1["default"];
 var reporter_1 = __webpack_require__(43);
 exports.Reporter = reporter_1["default"];
 var shell_1 = __webpack_require__(45);
 exports.Shell = shell_1["default"];
 __exportStar(__webpack_require__(46), exports);
 __exportStar(__webpack_require__(23), exports);
 __exportStar(__webpack_require__(47), exports);
 __exportStar(__webpack_require__(48), exports);
 __exportStar(__webpack_require__(49), exports);
 __exportStar(__webpack_require__(17), exports);
 __exportStar(__webpack_require__(50), exports);
 __exportStar(__webpack_require__(51), exports);
 __exportStar(__webpack_require__(29), exports);
 __exportStar(__webpack_require__(30), exports);
 __exportStar(__webpack_require__(4), exports);
 __exportStar(__webpack_require__(26), exports);
 __exportStar(__webpack_require__(31), exports);
 __exportStar(__webpack_require__(52), exports);
 __exportStar(__webpack_require__(28), exports);
 __exportStar(__webpack_require__(16), exports);
 __exportStar(__webpack_require__(15), exports);
 __exportStar(__webpack_require__(53), exports);
 __exportStar(__webpack_require__(54), exports);
 __exportStar(__webpack_require__(55), exports);

 /***/ }),
 /* 1 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 exports.__esModule = !0, exports.location = exports.localStorage = exports.history = exports.global = exports.document = exports.VERSION = void 0;
 var hasWindow = "undefined" != typeof window,
   win = hasWindow ? window : {},
   global = exports.global = win,
   document = exports.document = hasWindow ? win.document : {},
   location = exports.location = hasWindow ? win.location : {},
   history = exports.history = hasWindow ? win.history : {},
   localStorage = exports.localStorage = hasWindow ? win.localStorage : void 0,
   VERSION = exports.VERSION = 'cdn-0.1.13';

 /***/ }),
 /* 2 */
 /***/ (function(module, exports) {

 function _interopRequireDefault(e) {
   return e && e.__esModule ? e : {
     "default": e
   };
 }
 module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 3 */
 /***/ (function(module, exports) {

 function _extends() {
   return module.exports = _extends = Object.assign ? Object.assign.bind() : function (n) {
     for (var e = 1; e < arguments.length; e++) {
       var t = arguments[e];
       for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
     }
     return n;
   }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
 }
 module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 4 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.isZero = exports.isObject = exports.isNull = exports.isNumber = exports.isBoolean = exports.isRegExp = exports.isArray = exports.isToString = exports.isString = exports.isFunction = exports.isTypeof = void 0;
 function isTypeof(value, type) {
   return _typeof(value) === type;
 }
 exports.isTypeof = isTypeof;
 var isFunction = function isFunction(func) {
   return typeof func === 'function';
 };
 exports.isFunction = isFunction;
 exports.isString = function (value) {
   return isTypeof(value, 'string');
 };
 function isToString(value, type) {
   return Object.prototype.toString.call(value) === "[object ".concat(type, "]");
 }
 exports.isToString = isToString;
 exports.isArray = function (value) {
   return isToString(value, 'Array');
 };
 exports.isRegExp = function (value) {
   return isToString(value, 'RegExp');
 };
 exports.isBoolean = function (value) {
   return isTypeof(value, 'boolean');
 };
 exports.isNumber = function (value) {
   return isTypeof(value, 'number') && !isNaN(value) || isTypeof(value, 'bigint');
 };
 exports.isNull = function (value) {
   return value === null;
 };
 exports.isObject = function (value) {
   return !(0, exports.isNull)(value) && isTypeof(value, 'object');
 };
 function isZero() {
   for (var i = 0; i < arguments.length; i++) {
     if ((i < 0 || arguments.length <= i ? undefined : arguments[i]) !== 0) return false;
   }
   return true;
 }
 exports.isZero = isZero;

 /***/ }),
 /* 5 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports.getCurrentTime = getCurrentTime, exports.hackFunction = hackFunction, exports.initPerfObserver = initPerfObserver, exports.restoreHackFunction = restoreHackFunction;
 var _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _rumCore = __webpack_require__(0),
   _global = __webpack_require__(1),
   PRE_SUF_FIX = "__";
 function hackFunction(a, b, c) {
   if ("object" == _typeof(a) && "function" == typeof a[b]) {
     var d = a[b];
     a["" + PRE_SUF_FIX + b + PRE_SUF_FIX] = d;
     var e = c(d);
     a[b] = e;
   }
 }
 function restoreHackFunction(a, b) {
   var c = "" + PRE_SUF_FIX + b + PRE_SUF_FIX;
   "function" == typeof a[c] && (a[b] = a[c], delete a[c]);
 }
 function getCurrentTime(a) {
   var b = _global.global.performance;
   return b && b.timeOrigin && b.now ? Math.round(b.timeOrigin + (a ? a : b.now())) : Date.now();
 }
 function initPerfObserver(a, b, c) {
   var d,
     e = _global.global.PerformanceObserver;
   if ((0, _rumCore.isFunction)(e) && null !== (d = e.supportedEntryTypes) && void 0 !== d && d.includes(a)) {
     var f = new e(function (a) {
       b(a.getEntries());
     });
     try {
       f.observe((0, _extends2["default"])({
         type: a,
         buffered: !0
       }, c));
     } catch (b) {
       f.observe((0, _extends2["default"])({
         entryTypes: [a]
       }, c));
     }
     return f;
   }
 }

 /***/ }),
 /* 6 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports.checkApiSubEnable = checkApiSubEnable, exports.checkEnable = checkEnable, exports["default"] = void 0;
 var _regenerator = _interopRequireDefault(__webpack_require__(8)),
   _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(9)),
   _inheritsLoose2 = _interopRequireDefault(__webpack_require__(14)),
   _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _rumCore = __webpack_require__(0),
   _global = __webpack_require__(1),
   LOCAL_STORE_CONFIG_KEY = "arms_rum2_local_config";
 function parseV2Config(a) {
   var b,
     c = {};
   c.enable = null === (b = a.enable) || void 0 === b || b;
   var d = a.session;
   if (d) {
     var e,
       f,
       g = {};
     g.sampling = null !== (e = d.sampling) && void 0 !== e ? e : 100, g.storage = null !== (f = d.storage) && void 0 !== f ? f : "auto", c.sessionConfig = g;
   }
   var h = a.report;
   if (h) {
     var i = {};
     i.flushTime = h.flush_interval, i.maxEventCount = h.max_batch_count, c.reportConfig = i;
   }
   var j = a.tracing;
   if (j) {
     var k,
       l = {};
     l.enable = null === (k = j.enable) || void 0 === k || k;
     var m = [];
     (j.rules || []).forEach(function (a) {
       var b = {
         enable: a.enable,
         tracestate: a.tracestate,
         baggage: a.baggage,
         propagatorTypes: a.protocols,
         sampling: a.sampling
       };
       return "{location.origin}" === a.match ? void (l = (0, _extends2["default"])({}, l, b)) : void (b.match = (0, _rumCore.parseRule2Match)(a), m.push(b));
     }), l.allowedUrls = m, c.tracing = l;
   }
   var n = a.collectors;
   if ((0, _rumCore.isArray)(n) && 0 < n.length) {
     var o = {};
     n.forEach(function (a) {
       var b = a.name;
       if (b) {
         var d = (0, _extends2["default"])({}, a),
           e = a.filters;
         0 < (null === e || void 0 === e ? void 0 : e.length) && (d.filters = d.filters.map(function (a) {
           return (0, _rumCore.parseRule2Match)(a);
         })), "view" === b && (c.spaMode = d.spaMode), o[b] = d;
       }
     }), c.collectors = (0, _extends2["default"])({}, c.collectors, o);
   }
   return c;
 }
 var BrowserConfigManager = exports["default"] = function (a) {
   function b() {
     for (var b, c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
     return b = a.call.apply(a, [this].concat(d)) || this, b.version = "v2", b;
   }
   (0, _inheritsLoose2["default"])(b, a);
   var c = b.prototype;
   return c.fetchRemoteCfg = function () {
     function a() {
       return b.apply(this, arguments);
     }
     var b = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function a() {
       var b;
       return _regenerator["default"].wrap(function (a) {
         for (;;) switch (a.prev = a.next) {
           case 0:
             if (b = this.getRemoteConfigUrl(), b) {
               a.next = 1;
               break;
             }
             return a.abrupt("return");
           case 1:
             if (!b.includes(".rum.aliyuncs.com")) {
               a.next = 2;
               break;
             }
             return this.version = "v1", a.abrupt("return", this.getV1Config(b));
           case 2:
             return a.abrupt("return", this.getV2Config(b));
           case 3:
           case "end":
             return a.stop();
         }
       }, a, this);
     }));
     return a;
   }(), c.getV1Config = function () {
     function a() {
       return b.apply(this, arguments);
     }
     var b = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function b(a) {
       return _regenerator["default"].wrap(function (b) {
         for (;;) switch (b.prev = b.next) {
           case 0:
             return b.abrupt("return", fetch(a).then(function (a) {
               return a.json();
             }));
           case 1:
           case "end":
             return b.stop();
         }
       }, b);
     }));
     return a;
   }(), c.getV2Config = function () {
     function a() {
       return b.apply(this, arguments);
     }
     var b = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function b(a) {
       var c, d;
       return _regenerator["default"].wrap(function (b) {
         for (;;) switch (b.prev = b.next) {
           case 0:
             return c = (0, _rumCore.getUrlParams)(a), d = {
               instanceId: "",
               agentType: "rum_web_sdk",
               attributes: c,
               instanceConfigs: [{
                 configType: "rum_web_config",
                 version: 1
               }],
               capabilities: 2
             }, b.abrupt("return", fetch(a, {
               method: "POST",
               headers: {
                 "Content-Type": "application/json",
                 "x-log-apiversion": "0.6.0"
               },
               body: JSON.stringify(d)
             }).then(function (a) {
               return a.json();
             }));
           case 1:
           case "end":
             return b.stop();
         }
       }, b);
     }));
     return a;
   }(), c.getCacheConfig = function () {
     try {
       var a = _global.global.localStorage.getItem(LOCAL_STORE_CONFIG_KEY);
       if (!a) return;
       var b = this.currentConfig,
         c = JSON.parse(a);
       if ("pid" in c && c.pid === b.pid || "endpoint" in c && c.endpoint === b.endpoint) return c;
     } catch (a) {
       _rumCore.logger.warn("configManager", "Failed to read cache config from localStorage", a);
     }
   }, c.setCacheConfig = function (a) {
     try {
       var b = this.currentConfig,
         c = (0, _extends2["default"])({}, a, {
           pid: b.pid,
           endpoint: b.endpoint
         });
       _global.global.localStorage.setItem(LOCAL_STORE_CONFIG_KEY, JSON.stringify(c));
     } catch (a) {
       _rumCore.logger.warn("configManager", "Failed to write cache config to localStorage", a);
     }
   }, c.getRemoteConfigUrl = function () {
     var a = this.currentConfig,
       b = a.pid,
       c = a.remoteConfig,
       d = a.endpoint,
       e = c || {},
       f = e.url,
       g = e.region;
     if (f) return f;
     if (b) {
       var h = b.split("@");
       return !h || 2 > h.length ? void 0 : "//" + h[0] + "-sdk.rum.aliyuncs.com/config/" + (g || "cn-hangzhou") + "/" + h[1] + "?t=" + Date.now();
     }
     try {
       var i = new URL(d);
       i.pathname = "/agentconfig";
       var j = i.searchParams.get("service_id");
       return j ? (i.searchParams["delete"]("service_id"), i.searchParams.set("service", j), i.toString()) : void 0;
     } catch (a) {
       _rumCore.logger.warn("configManager", "Failed to parse remote config URL", {
         error: a
       });
     }
   }, c.parseConfig = function (a) {
     try {
       return "v2" === this.version ? parseV2Config(JSON.parse(a.instanceConfigs[0].config)) : a;
     } catch (b) {
       return a;
     }
   }, c.init = function () {
     function b() {
       return c.apply(this, arguments);
     }
     var c = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function c(b) {
       return _regenerator["default"].wrap(function (c) {
         for (;;) switch (c.prev = c.next) {
           case 0:
             return c.next = 1, a.prototype.init.call(this, b);
           case 1:
             this.normalizeCollectors(this.currentConfig);
           case 2:
           case "end":
             return c.stop();
         }
       }, c, this);
     }));
     return b;
   }(), c.mergeRemoteCfg = function (b) {
     var c = a.prototype.mergeRemoteCfg.call(this, b);
     return this.normalizeCollectors(c), c;
   }, c.setConfig = function () {
     function b() {
       return c.apply(this, arguments);
     }
     var c = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function c(b) {
       return _regenerator["default"].wrap(function (c) {
         for (;;) switch (c.prev = c.next) {
           case 0:
             return c.next = 1, a.prototype.setConfig.call(this, b);
           case 1:
             this.normalizeCollectors(this.currentConfig);
           case 2:
           case "end":
             return c.stop();
         }
       }, c, this);
     }));
     return b;
   }(), c.normalizeCollectors = function (a) {
     if (a && a.collectors) {
       var b = a.collectors;
       "click" in b && !("action" in b) ? b.action = b.click : "action" in b && !("click" in b) && (b.click = b.action), "longtask" in b && !("longTask" in b) ? b.longTask = b.longtask : "longTask" in b && !("longtask" in b) && (b.longtask = b.longTask);
     }
   }, b;
 }(_rumCore.ConfigManager);
 function checkEnable(a, b, c) {
   var d;
   void 0 === c && (c = !0);
   var e = a.getConfig();
   if (!1 === e.enable) return !1;
   var f = null === (d = e.collectors) || void 0 === d ? void 0 : d[b];
   return (0, _rumCore.isBoolean)(f) ? f : (0, _rumCore.isObject)(f) && "enable" in f ? f.enable : c;
 }
 function checkApiSubEnable(a, b, c) {
   var d;
   if (void 0 === c && (c = !0), !checkEnable(a, "api")) return !1;
   var e = a.getConfig(),
     f = null === (d = e.collectors) || void 0 === d ? void 0 : d.api;
   if (!(0, _rumCore.isObject)(f)) return c;
   var g = f[b];
   return (0, _rumCore.isBoolean)(g) ? g : (0, _rumCore.isObject)(g) && "enable" in g ? g.enable : c;
 }

 /***/ }),
 /* 7 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 exports.__esModule = !0, exports.fixRelativeUrl = fixRelativeUrl, exports.getCurrentURL = getCurrentURL, exports.getPathByURL = getPathByURL, exports.getResourceName = getResourceName;
 var _rumCore = __webpack_require__(0),
   _global = __webpack_require__(1);
 function getCurrentURL() {
   return _global.location ? _global.location.href : "";
 }
 function getHashPath(a) {
   if (!(0, _rumCore.isString)(a) || !a) return "";
   var b = a.indexOf("#");
   0 === b && (a = a.substring(1));
   var c = a.indexOf("?");
   return 0 <= c && (a = a.substring(0, c)), a;
 }
 function getPathByURL(a, b) {
   void 0 === b && (b = !1);
   try {
     var c = new URL(fixRelativeUrl(a));
     if ("auto" === b || !0 === b) {
       var d = getHashPath(c.hash || "");
       return c.pathname + (d ? "#" : "") + d;
     }
     return "hash" === b ? getHashPath(c.hash || "") : c.pathname || "/";
   } catch (b) {
     return a;
   }
 }
 function fixRelativeUrl(a, b, c) {
   if (void 0 === b && (b = _global.location.protocol), void 0 === c && (c = _global.location.host), !(0, _rumCore.isString)(a)) throw new Error("Invalid URL provided");
   "" === a && (a = _global.location.href);
   var d = /^https?:\/\//i.test(a);
   if (d) return a;
   var e = /^\/\//i.test(a);
   if (e) return "" + b + a;
   var f = /^\//.test(a);
   return b + "//" + c + (f ? "" : "/") + a;
 }
 function getResourceName(a, b) {
   var c;
   return c = (0, _rumCore.isFunction)(b) ? b(a) : getPathByURL(a), c;
 }

 /***/ }),
 /* 8 */
 /***/ (function(module, exports, __webpack_require__) {

 // TODO(Babel 8): Remove this file.

 var runtime = __webpack_require__(58)();
 module.exports = runtime;

 // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
 try {
   regeneratorRuntime = runtime;
 } catch (accidentalStrictMode) {
   if (typeof globalThis === "object") {
     globalThis.regeneratorRuntime = runtime;
   } else {
     Function("r", "regeneratorRuntime = r")(runtime);
   }
 }


 /***/ }),
 /* 9 */
 /***/ (function(module, exports) {

 function asyncGeneratorStep(n, t, e, r, o, a, c) {
   try {
     var i = n[a](c),
       u = i.value;
   } catch (n) {
     return void e(n);
   }
   i.done ? t(u) : Promise.resolve(u).then(r, o);
 }
 function _asyncToGenerator(n) {
   return function () {
     var t = this,
       e = arguments;
     return new Promise(function (r, o) {
       var a = n.apply(t, e);
       function _next(n) {
         asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
       }
       function _throw(n) {
         asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
       }
       _next(void 0);
     });
   };
 }
 module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 10 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports.ResourceType = exports.RESOURCE_TYPES = void 0, exports.calcResourceTimingData = calcResourceTimingData, exports.delBadMea = delBadMea, exports.getResourceStatus = getResourceStatus, exports.getResourceSuccessByCode = getResourceSuccessByCode, exports.getResourceType = getResourceType, exports.getTimingStartTime = void 0, exports.initPerfObserver = initPerfObserver;
 var _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _rumCore = __webpack_require__(0),
   _global = __webpack_require__(1);
 function _createForOfIteratorHelperLoose(a, b) {
   var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
   if (c) return (c = c.call(a)).next.bind(c);
   if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && "number" == typeof a.length) {
     c && (a = c);
     var d = 0;
     return function () {
       return d >= a.length ? {
         done: !0
       } : {
         done: !1,
         value: a[d++]
       };
     };
   }
   throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
 }
 function _unsupportedIterableToArray(b, c) {
   if (b) {
     if ("string" == typeof b) return _arrayLikeToArray(b, c);
     var a = {}.toString.call(b).slice(8, -1);
     return "Object" === a && b.constructor && (a = b.constructor.name), "Map" === a || "Set" === a ? Array.from(b) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? _arrayLikeToArray(b, c) : void 0;
   }
 }
 function _arrayLikeToArray(b, c) {
   (null == c || c > b.length) && (c = b.length);
   for (var d = 0, f = Array(c); d < c; d++) f[d] = b[d];
   return f;
 }
 function getResourceSuccessByCode(a) {
   var b,
     c = [200, 300];
   if (a) {
     var d = +a;
     b = d >= c[0] && d < c[1] ? _rumCore.ResourceStatus.Success : _rumCore.ResourceStatus.Failed;
   } else b = _rumCore.ResourceStatus.Unknown;
   return b;
 }
 function getResourceStatus(a) {
   var b,
     c = a.responseStatus,
     d = a.transferSize,
     e = a.encodedBodySize,
     f = a.decodedBodySize,
     g = a.responseEnd,
     h = a.startTime;
   return b = c ? getResourceSuccessByCode(c) : (0, _rumCore.isZero)(d, e, f) ? _rumCore.ResourceStatus.Failed : g > h && (0 < d || 0 < e || 0 < f) ? _rumCore.ResourceStatus.Success : _rumCore.ResourceStatus.Unknown, b;
 }
 function areInOrder() {
   for (var a = 1; a < arguments.length; a += 1) if ((0 > a - 1 || arguments.length <= a - 1 ? void 0 : arguments[a - 1]) > (0 > a || arguments.length <= a ? void 0 : arguments[a])) return !1;
   return !0;
 }
 function calcResourceTimingData(a, b) {
   void 0 === b && (b = !1);
   var c = a.startTime,
     d = a.fetchStart,
     e = a.transferSize,
     f = a.encodedBodySize,
     g = a.decodedBodySize,
     h = a.redirectStart,
     i = a.redirectEnd,
     j = a.domainLookupStart,
     k = a.domainLookupEnd,
     l = a.connectStart,
     m = a.secureConnectionStart,
     n = a.connectEnd,
     o = a.requestStart,
     p = a.responseStart,
     q = a.responseEnd,
     r = a.duration;
   if (!b) {
     if (!areInOrder(c, d, j, k, l, n, o, p, q)) return;
     if ((0, _rumCore.isZero)(r) || (0, _rumCore.isZero)(p) || c > p || (0, _rumCore.isZero)(e) && 0 < f && 0 < g || "cache" === a.deliveryType || !("responseStatus" in a) && (0, _rumCore.isZero)(e, f, g)) return;
   }
   h < c && (h = c), i < c && (i = d);
   var s = {
     duration: r
   };
   return n && (s.connect_duration = (0, _rumCore.formatNumber)(n - l)), k && (s.dns_duration = (0, _rumCore.formatNumber)(k - j)), i && (s.redirect_duration = (0, _rumCore.formatNumber)(i - h)), p && (s.first_byte_duration = (0, _rumCore.formatNumber)(p - getTimingStartTime(a, "requestStart"))), q && (s.download_duration = (0, _rumCore.formatNumber)(q - getTimingStartTime(a, "responseStart"))), g && (s.size = (0, _rumCore.formatNumber)(g)), e && (s.transfer_size = (0, _rumCore.formatNumber)(e)), m && (s.ssl_duration = (0, _rumCore.formatNumber)(n - m)), delBadMea(s);
 }
 var ResourceType = exports.ResourceType = function (a) {
     return a.DOCUMENT = "document", a.XHR = "xmlhttprequest", a.BEACON = "beacon", a.FETCH = "fetch", a.CSS = "css", a.JS = "js", a.IMAGE = "image", a.FONT = "font", a.MEDIA = "media", a.OTHER = "other", a;
   }({}),
   RESOURCE_TYPES = exports.RESOURCE_TYPES = [[ResourceType.DOCUMENT, function (a) {
     return "navigation" === a;
   }], [ResourceType.XHR, function (a) {
     return "xmlhttprequest" === a;
   }], [ResourceType.FETCH, function (a) {
     return "fetch" === a;
   }], [ResourceType.BEACON, function (a) {
     return "beacon" === a;
   }], [ResourceType.CSS, function (a, b) {
     return /\.css$/i.test(b);
   }], [ResourceType.JS, function (a, b) {
     return /\.js$/i.test(b);
   }], [ResourceType.IMAGE, function (a, b) {
     return ["image", "img", "icon"].includes(a) || /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.test(b);
   }], [ResourceType.FONT, function (a, b) {
     return /\.(woff|eot|woff2|ttf)$/i.test(b);
   }], [ResourceType.MEDIA, function (a, b) {
     return ["audio", "video"].includes(a) || /\.(mp3|mp4)$/i.test(b);
   }]];
 function getResourceType(a, b) {
   var c;
   try {
     c = new URL(a);
   } catch (a) {
     return ResourceType.OTHER;
   }
   var d = c.search,
     e = c.pathname;
   if (d && (0, _rumCore.startsWith)(d, "??")) {
     var f = d.slice(2),
       g = f.split(",")[0];
     e = g || f;
   }
   for (var h, i = _createForOfIteratorHelperLoose(RESOURCE_TYPES); !(h = i()).done;) {
     var j = h.value,
       k = j[0],
       l = j[1];
     if (l(b, e)) return k;
   }
   return ResourceType.OTHER;
 }
 var resCheckKeys = ["duration", "connect_duration", "ssl_duration", "dns_duration", "redirect_duration", "first_byte_duration", "download_duration"];
 function delBadMea(a, b, c) {
   if (void 0 === b && (b = resCheckKeys), void 0 === c && (c = [0, _rumCore.ONE_HOUR]), !!(0, _rumCore.isObject)(a)) return b.forEach(function (b) {
     !(b in a) || (a[b] <= c[0] || a[b] >= c[1]) && delete a[b];
   }), a;
 }
 var TIMING_NODES = ["responseStart", "requestStart", "connectEnd", "domainLookupEnd", "fetchStart", "workerStart", "redirectEnd", "startTime"],
   getTimingStartTime = exports.getTimingStartTime = function (a, b) {
     var c;
     void 0 === b && (b = "fetchStart");
     for (var d = new Map(TIMING_NODES.map(function (a, b) {
         return [a, b];
       })), e = null !== (c = d.get(b)) && void 0 !== c ? c : 0, f = e; f < TIMING_NODES.length; f++) {
       var g = TIMING_NODES[f],
         h = a[g];
       if ("number" == typeof h && 0 < h) return h;
     }
     return 0;
   };
 function initPerfObserver(a, b, c) {
   var d = _global.global.PerformanceObserver;
   if ((0, _rumCore.isFunction)(d)) {
     var f = a.filter(function (a) {
       var b;
       return null === (b = d.supportedEntryTypes) || void 0 === b ? void 0 : b.includes(a);
     });
     if (0 !== f.length) {
       var g = new d(function (a) {
         b(a.getEntries());
       });
       try {
         f.forEach(function (a) {
           g.observe((0, _extends2["default"])({
             type: a,
             buffered: !0
           }, c));
         });
       } catch (a) {
         f.forEach(function (a) {
           try {
             g.observe((0, _extends2["default"])({
               entryTypes: [a]
             }, c));
           } catch (b) {
             console.warn("Failed to observe " + a + ":", b);
           }
         });
       }
       return g;
     }
   }
 }

 /***/ }),
 /* 11 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
 function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
 function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
 function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
 function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
 function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.callMonitored = exports.logger = void 0;
 var DEFAULT_REPORT_LEVELS = ['debug', 'error', 'crash'];
 var Logger = /*#__PURE__*/function () {
   function Logger() {
     _classCallCheck(this, Logger);
     this.console = false;
     this.reportLevels = DEFAULT_REPORT_LEVELS;
   }
   return _createClass(Logger, [{
     key: "setConsole",
     value: function setConsole(enabled) {
       this.console = enabled;
     }
   }, {
     key: "setReportLevels",
     value: function setReportLevels(levels) {
       this.reportLevels = levels;
     }
   }, {
     key: "setOnError",
     value: function setOnError(handler) {
       this.onError = handler;
     }
   }, {
     key: "debug",
     value: function debug() {
       for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
         args[_key] = arguments[_key];
       }
       this.log('debug', args);
     }
   }, {
     key: "info",
     value: function info() {
       for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
         args[_key2] = arguments[_key2];
       }
       this.log('info', args);
     }
   }, {
     key: "warn",
     value: function warn() {
       for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
         args[_key3] = arguments[_key3];
       }
       this.log('warn', args);
     }
   }, {
     key: "error",
     value: function error() {
       for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
         args[_key4] = arguments[_key4];
       }
       this.log('error', args);
     }
   }, {
     key: "crash",
     value: function crash() {
       for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
         args[_key5] = arguments[_key5];
       }
       this.log('crash', args);
     }
   }, {
     key: "log",
     value: function log(level, _ref) {
       var _ref2 = _slicedToArray(_ref, 4),
         module = _ref2[0],
         message = _ref2[1],
         error = _ref2[2],
         context = _ref2[3];
       var _a;
       if (this.console) {
         var consoleFn = level === 'crash' ? 'error' : level === 'debug' ? 'log' : level;
         console[consoleFn]("[RUM-SDK][".concat(module, "]"), message, error || '');
       }
       if (!this.reportLevels.includes(level)) return;
       var stack;
       if (error instanceof Error) {
         stack = error.stack;
       } else if (error && _typeof(error) === 'object' && 'stack' in error) {
         stack = String(error.stack);
       }
       if (stack && stack.length > 12288) {
         stack = stack.slice(0, 12288);
       }
       (_a = this.onError) === null || _a === void 0 ? void 0 : _a.call(this, Object.assign({
         level: level,
         content: message,
         type: module,
         stack: stack
       }, context));
     }
   }, {
     key: "wrap",
     value: function wrap(fn, module, message) {
       return function () {
         for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
           args[_key6] = arguments[_key6];
         }
         return callMonitored(fn, this, args, module, message);
       };
     }
   }]);
 }();
 exports.logger = new Logger();
 function callMonitored(fn, context, args, module, message) {
   try {
     var result = fn.apply(context, args);
     if (result && typeof result["catch"] === 'function') {
       result["catch"](function (e) {
         exports.logger.error(module || 'unknown', message || (e instanceof Error ? e.message : String(e)), e);
       });
     }
     return result;
   } catch (e) {
     exports.logger.error(module || 'unknown', message || (e instanceof Error ? e.message : String(e)), e);
   }
 }
 exports.callMonitored = callMonitored;

 /***/ }),
 /* 12 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports.DOM_EVENT = void 0, exports.addEventListeners = addEventListeners, exports.getClosestTargetAncestorElement = getClosestTargetAncestorElement, exports.getDocumentInfo = getDocumentInfo, exports.getElementSelector = getElementSelector, exports.getElementXpath = getElementXpath, exports.getScrollMetrics = getScrollMetrics, exports.onReadyState = onReadyState;
 var _regenerator = _interopRequireDefault(__webpack_require__(8)),
   _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(9)),
   _global = __webpack_require__(1),
   DOM_EVENT = exports.DOM_EVENT = function (a) {
     return a.READY_STATE = "readystatechange", a.BEFORE_UNLOAD = "beforeunload", a.LOAD = "load", a.SCROLL = "scroll", a.VISIBILITY_CHANGE = "visibilitychange", a.FREEZE = "freeze", a.FOCUS = "focus", a.BLUR = "blur", a.INPUT = "input", a.DOM_CONTENT_LOADED = "DOMContentLoaded", a.PAGE_HIDE = "pagehide", a.KEY_DOWN = "keydown", a.PAGE_SHOW = "pageshow", a.POINTER_DOWN = "pointerdown", a;
   }({});
 function getClosestTargetAncestorElement(a, b) {
   for (var c = a; c !== _global.document.documentElement;) {
     var d = c,
       e = d.localName,
       f = d.nodeName,
       g = d.parentElement;
     if (b.includes((e || f).toLocaleLowerCase())) return c;
     if (!g) break;
     c = g;
   }
   return null;
 }
 var domState = {
     loading: 1,
     interactive: 2,
     complete: 3
   },
   readyCache = {};
 "function" == typeof _global.document.addEventListener && _global.document.addEventListener(DOM_EVENT.READY_STATE, function (a) {
   var b = a.target.readyState;
   if (b in readyCache) {
     var c = readyCache[b] || [];
     c.forEach(function (a) {
       return a(!0);
     }), c.length = 0;
   }
 });
 function onReadyState() {
   return _onReadyState.apply(this, arguments);
 }
 function _onReadyState() {
   return _onReadyState = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function b(a) {
     return _regenerator["default"].wrap(function (b) {
       for (;;) switch (b.prev = b.next) {
         case 0:
           return void 0 === a && (a = "interactive"), b.abrupt("return", new Promise(function (b, c) {
             if (a in domState) {
               var d = _global.document.readyState,
                 e = domState[d],
                 f = domState[a];
               if (e >= f) b(!0);else {
                 var g = readyCache[a] || [];
                 readyCache[a] = [].concat(g, [b]);
               }
             } else c(!1);
           }));
         case 1:
         case "end":
           return b.stop();
       }
     }, b);
   })), _onReadyState.apply(this, arguments);
 }
 function getElementPosition(a) {
   for (var b = a.nodeName, c = 1, d = !1, e = a.previousSibling; e;) e.nodeType === Node.ELEMENT_NODE && e.nodeName === b && c++, e = e.previousSibling;
   for (e = a.nextSibling; e;) {
     if (e.nodeType === Node.ELEMENT_NODE && e.nodeName === b) {
       d = !0;
       break;
     }
     e = e.nextSibling;
   }
   return {
     position: c,
     hasSiblings: d
   };
 }
 function escapeXPathString(a) {
   return a.includes("\"") ? "'" + a.replace(/'/g, "''") + "'" : "\"" + a + "\"";
 }
 function getElementTextContent(a) {
   var b,
     c = null === (b = a.textContent) || void 0 === b ? void 0 : b.trim();
   return c ? 50 < c.length ? c.substring(0, 50) + "..." : c : "";
 }
 function getElementXpath(a, b) {
   void 0 === b && (b = {});
   var c = b,
     d = c.ignoreId,
     e = c.preferId,
     f = c.includeText,
     g = c.maxDepth,
     h = void 0 === g ? 50 : g,
     i = c.simplified;
   if (!a || !a.nodeType || a.nodeType !== Node.ELEMENT_NODE) return "";
   if ((!(void 0 !== e) || e) && !(void 0 !== d && d) && a.id) {
     var j = escapeXPathString(a.id);
     return "//*[@id=" + j + "]";
   }
   for (var k = [], l = a, m = 0; l && l.nodeType === Node.ELEMENT_NODE && m < h && l !== _global.document.body && l !== _global.document.documentElement;) {
     var n = l.localName || l.nodeName.toLowerCase(),
       o = getElementPosition(l),
       p = o.position,
       q = o.hasSiblings,
       r = n;
     if (!(void 0 !== i && i) && (1 < p || q) && (r += "[" + p + "]"), void 0 !== f && f) {
       var s = getElementTextContent(l);
       if (s) {
         var t = escapeXPathString(s);
         r += "[contains(text(), " + t + ")]";
       }
     }
     k.push(r), l = l.parentElement, m++;
   }
   return 0 < k.length ? "/" + k.reverse().join("/") : "";
 }
 function escapeSelector(a) {
   return a.replace(/([ !"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~])/g, "\\$1");
 }
 function getElementSelector(a) {
   if (!a || a.nodeType !== Node.ELEMENT_NODE) return "";
   for (var b, c = [], d = a, e = 0, f = function a() {
       if (d === _global.document.body || d === _global.document.documentElement) return 0;
       var b = (d.localName || d.nodeName).toLowerCase(),
         f = "";
       if (d.id) return f = "#" + escapeSelector(d.id), c.push(f), d = d.parentElement, e++, 1;
       f = b;
       var g = d.classList;
       if (g && 0 < g.length) {
         var h = Array.from(g).slice(0, 3).map(function (a) {
           return "." + escapeSelector(a);
         }).join("");
         f += h;
       }
       var i = d.parentElement;
       if (i) {
         var j = Array.from(i.children),
           k = j.filter(function (a) {
             return (a.localName || a.nodeName).toLowerCase() === b;
           });
         if (1 < k.length) {
           var l = j.indexOf(d) + 1;
           f += ":nth-child(" + l + ")";
         }
       }
       c.push(f), d = i, e++;
     }; d && d.nodeType === Node.ELEMENT_NODE && e < 20 && (b = f(), 0 !== b);) 1 === b;
   return 0 < c.length ? c.reverse().join(" > ") : "";
 }
 function addEventListeners(a, b, c, d) {
   return b.forEach(function (b) {
     a.addEventListener(b, c, d);
   }), function () {
     b.forEach(function (b) {
       a.removeEventListener(b, c, d);
     });
   };
 }
 function getDocumentInfo(a) {
   void 0 === a && (a = _global.document);
   var b = a.documentElement;
   return {
     isFocused: a.hasFocus(),
     isVisible: "visible" === a.visibilityState,
     width: _global.global.innerWidth || b.clientWidth || 0,
     height: _global.global.innerHeight || b.clientHeight || 0,
     scrollTop: _global.global.pageYOffset || b.scrollTop || 0,
     scrollHeight: b.scrollHeight || a.body.scrollHeight || 0,
     clientHeight: b.clientHeight || _global.global.innerHeight || 0
   };
 }
 function getScrollMetrics(a) {
   void 0 === a && (a = _global.document);
   var b = a.documentElement;
   return {
     scrollTop: _global.global.pageYOffset || b.scrollTop || 0,
     scrollHeight: b.scrollHeight || a.body.scrollHeight || 0,
     clientHeight: b.clientHeight || _global.global.innerHeight || 0
   };
 }

 /***/ }),
 /* 13 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 exports.__esModule = !0, exports.getCurView = getCurView, exports.onPageHide = onPageHide, exports.trackFirstHidden = trackFirstHidden;
 var _global = __webpack_require__(1),
   _dom = __webpack_require__(12);
 function getCurView(a) {
   var b = a.getViews();
   if (b && b.length) return b[b.length - 1];
 }
 function trackFirstHidden() {
   function a() {
     c || (c = !0, d());
   }
   if ("hidden" === _global.document.visibilityState) return {
     timeStamp: 0,
     stop: function stop() {}
   };
   var b = 1 / 0,
     c = !1,
     d = (0, _dom.addEventListeners)(_global.global, [_dom.DOM_EVENT.VISIBILITY_CHANGE, _dom.DOM_EVENT.PAGE_HIDE], function (c) {
       (c.type === _dom.DOM_EVENT.PAGE_HIDE || "hidden" === _global.document.visibilityState) && (b = c.timeStamp, a());
     }, {
       capture: !0,
       once: !0
     });
   return {
     get timeStamp() {
       return b;
     },
     stop: a
   };
 }
 function onPageHide(a) {
   return (0, _dom.addEventListeners)(_global.global, [_dom.DOM_EVENT.VISIBILITY_CHANGE, _dom.DOM_EVENT.PAGE_HIDE], function (b) {
     (b.type === _dom.DOM_EVENT.PAGE_HIDE || "hidden" === _global.document.visibilityState) && a(b);
   }, {
     capture: !0
   });
 }

 /***/ }),
 /* 14 */
 /***/ (function(module, exports, __webpack_require__) {

 var setPrototypeOf = __webpack_require__(63);
 function _inheritsLoose(t, o) {
   t.prototype = Object.create(o.prototype), t.prototype.constructor = t, setPrototypeOf(t, o);
 }
 module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 15 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.EventEmitter = void 0;
 var logger_1 = __webpack_require__(11);
 var EventEmitter = /*#__PURE__*/function () {
   function EventEmitter() {
     _classCallCheck(this, EventEmitter);
     this.events = {};
   }
   return _createClass(EventEmitter, [{
     key: "on",
     value: function on(eventName, handler) {
       if (!this.events[eventName]) {
         this.events[eventName] = [];
       }
       this.events[eventName].push(handler);
     }
   }, {
     key: "emit",
     value: function emit(eventName) {
       var handlers = this.events[eventName];
       if (handlers) {
         var handlersCopy = handlers.slice();
         for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
           args[_key - 1] = arguments[_key];
         }
         for (var i = 0; i < handlersCopy.length; i++) {
           try {
             handlersCopy[i].apply(handlersCopy, args);
           } catch (err) {
             logger_1.logger.error('EventEmitter', "Error in handler for \"".concat(eventName, "\""), err);
           }
         }
       }
     }
   }, {
     key: "off",
     value: function off(eventName, handler) {
       var handlers = this.events[eventName];
       if (!handlers) return;
       if (!handler) {
         delete this.events[eventName];
         return;
       }
       var i = handlers.length;
       while (i--) {
         if (handlers[i] === handler) {
           handlers.splice(i, 1);
         }
       }
       if (handlers.length === 0) {
         delete this.events[eventName];
       }
     }
   }, {
     key: "once",
     value: function once(eventName, handler) {
       var _this = this;
       var _onceWrapper = function onceWrapper() {
         _this.off(eventName, _onceWrapper);
         handler.apply(void 0, arguments);
       };
       this.on(eventName, _onceWrapper);
     }
   }]);
 }();
 exports.EventEmitter = EventEmitter;

 /***/ }),
 /* 16 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.getUrlParams = void 0;
 var safeDecode = function safeDecode(str) {
   if (str.length === 0) return "";
   try {
     return decodeURIComponent(str.replace(/\+/g, ' '));
   } catch (_a) {
     return str.replace(/\+/g, ' ').replace(/%20/g, ' ').replace(/%2F/g, '/').replace(/%3D/g, '=').replace(/%26/g, '&').replace(/%3F/g, '?');
   }
 };
 var getQueryString = function getQueryString(input) {
   if (input.length === 0) return "";
   var hashIndex = input.indexOf('#');
   var withoutHash = hashIndex >= 0 ? input.slice(0, hashIndex) : input;
   var queryStart = withoutHash.indexOf('?');
   if (queryStart === -1) return "";
   return withoutHash.slice(queryStart + 1);
 };
 function getUrlParams(input) {
   if (typeof input !== 'string' || !input.trim()) return {};
   var params = {};
   var query = getQueryString(input);
   if (!query) return params;
   var pairs = query.split('&');
   for (var i = 0; i < pairs.length; i++) {
     var pair = pairs[i];
     if (!pair) continue;
     var separatorIndex = pair.indexOf('=');
     if (separatorIndex <= 0) continue;
     var key = safeDecode(pair.slice(0, separatorIndex));
     var value = separatorIndex < pair.length - 1 ? safeDecode(pair.slice(separatorIndex + 1)) : "";
     var existing = params[key];
     if (existing !== undefined) {
       if (Array.isArray(existing)) {
         existing.push(value);
       } else {
         params[key] = [existing, value];
       }
     } else {
       params[key] = value;
     }
   }
   return params;
 }
 exports.getUrlParams = getUrlParams;

 /***/ }),
 /* 17 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.AppType = exports.ResourceStatus = exports.RumEventType = void 0;
 var RumEventType;
 (function (RumEventType) {
   RumEventType["VIEW"] = "view";
   RumEventType["RESOURCE"] = "resource";
   RumEventType["EXCEPTION"] = "exception";
   RumEventType["LONG_TASK"] = "longTask";
   RumEventType["ACTION"] = "action";
   RumEventType["CUSTOM"] = "custom";
   RumEventType["APPLICATION"] = "application";
 })(RumEventType = exports.RumEventType || (exports.RumEventType = {}));
 var ResourceStatus;
 (function (ResourceStatus) {
   ResourceStatus[ResourceStatus["Unknown"] = -1] = "Unknown";
   ResourceStatus[ResourceStatus["Failed"] = 0] = "Failed";
   ResourceStatus[ResourceStatus["Success"] = 1] = "Success";
 })(ResourceStatus = exports.ResourceStatus || (exports.ResourceStatus = {}));
 var AppType;
 (function (AppType) {
   AppType["browser"] = "browser";
   AppType["miniapp"] = "miniapp";
   AppType["minigame"] = "minigame";
   AppType["uniapp"] = "uniapp";
   AppType["reactnative"] = "reactnative";
 })(AppType = exports.AppType || (exports.AppType = {}));

 /***/ }),
 /* 18 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 exports.__esModule = !0, exports.ApiType = void 0;
 var ApiType = exports.ApiType = {
   XHR: "xmlhttprequest",
   FETCH: "fetch"
 };

 /***/ }),
 /* 19 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _exportNames = {
   ApiType: !0
 };
 var _api = __webpack_require__(18);
 var _base = __webpack_require__(73);
 var _sse = __webpack_require__(74);
 exports.__esModule = !0;
 exports.ApiType = void 0;
 exports.ApiType = _api.ApiType;
 Object.keys(_base).forEach(function (a) {
   "default" === a || "__esModule" === a || Object.prototype.hasOwnProperty.call(_exportNames, a) || a in exports && exports[a] === _base[a] || (exports[a] = _base[a]);
 });
 Object.keys(_sse).forEach(function (a) {
   "default" === a || "__esModule" === a || Object.prototype.hasOwnProperty.call(_exportNames, a) || a in exports && exports[a] === _sse[a] || (exports[a] = _sse[a]);
 });

 /***/ }),
 /* 20 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 exports.__esModule = !0, exports.getSelector = getSelector, exports.isINPSupported = isINPSupported, exports.isLayoutShiftSupported = isLayoutShiftSupported, exports.isPerfEntrySupported = isPerfEntrySupported;
 var _rumCore = __webpack_require__(0),
   _dom = __webpack_require__(12),
   _global = __webpack_require__(1);
 function getSelector(a) {
   var b = (0, _dom.getElementSelector)(a);
   return b || void 0;
 }
 function isPerfEntrySupported(a) {
   var b, c;
   return !!(0, _rumCore.isFunction)(_global.global.PerformanceObserver) && !(null === (b = null === (c = _global.global.PerformanceObserver.supportedEntryTypes) || void 0 === c ? void 0 : c.includes(a)) || void 0 === b) && b;
 }
 function isLayoutShiftSupported() {
   return isPerfEntrySupported("layout-shift") && "WeakRef" in _global.global;
 }
 function isINPSupported() {
   return isPerfEntrySupported("event") && "undefined" != typeof PerformanceEventTiming && "interactionId" in PerformanceEventTiming.prototype;
 }

 /***/ }),
 /* 21 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.onNativeReady = exports.onNativeMessage = exports.requestNative = exports.osType = exports.detectOS = exports.DetectedOS = exports.navigator = exports.document = exports.global = exports.VERSION = void 0;
 var rum_core_1 = __webpack_require__(0);
 exports.VERSION = 'npm-0.1.13';
 exports.global = window;
 exports.document = exports.global.document;
 exports.navigator = exports.global.navigator;
 var DetectedOS;
 (function (DetectedOS) {
   DetectedOS["iOS"] = "iOS";
   DetectedOS["Android"] = "Android";
   DetectedOS["HarmonyOS"] = "HarmonyOS";
   DetectedOS["Unknown"] = "Unknown";
 })(DetectedOS = exports.DetectedOS || (exports.DetectedOS = {}));
 function isValidDetectedOS(value) {
   return value === DetectedOS.iOS || value === DetectedOS.Android || value === DetectedOS.HarmonyOS || value === DetectedOS.Unknown;
 }
 function detectOS() {
   var nativeOSType = window.__webview_rum_ostype;
   if (nativeOSType && isValidDetectedOS(nativeOSType)) {
     return nativeOSType;
   }
   if (exports.global.webkit && exports.global.webkit.messageHandlers && exports.global.webkit.messageHandlers.ALRBridge) {
     return DetectedOS.iOS;
   }
   if (exports.global.ALRBridge && (0, rum_core_1.isFunction)(exports.global.ALRBridge.postMessage)) {
     return DetectedOS.Android;
   }
   try {
     var ua = exports.navigator.userAgent || '';
     var platformSection = (ua.match(/\(([^)]+)\)/) || [])[1] || '';
     if (/HarmonyOS|OpenHarmony/i.test(platformSection)) {
       return DetectedOS.HarmonyOS;
     }
     if (/android/i.test(platformSection)) {
       return DetectedOS.Android;
     }
     if (/Macintosh|Mac OS X/i.test(platformSection) && exports.navigator.maxTouchPoints > 1) {
       return DetectedOS.iOS;
     }
     if (/ipad|iphone|ipod/i.test(platformSection) && !exports.global.MSStream) {
       return DetectedOS.iOS;
     }
   } catch (e) {}
   return DetectedOS.Unknown;
 }
 exports.detectOS = detectOS;
 exports.osType = detectOS();
 var callbackCache = {};
 var messageEvents = {};
 exports.global.__ALRBridge = {
   handleMessageFromNative: handleMessageFromNative
 };
 var webviewPort = null;
 var portReady = false;
 var readyCallbacks = [];
 if (exports.osType === DetectedOS.Android || exports.osType === DetectedOS.HarmonyOS) {
   var _portInitHandler = function portInitHandler(event) {
     if (event.data !== '__init_alr_port__') return;
     var port = event.ports[0];
     if (!port) return;
     port.onmessage = function (msg) {
       handleMessageFromNative(msg.data);
     };
     webviewPort = exports.global.__ALRBridge.webviewPort = port;
     portReady = true;
     window.removeEventListener('message', _portInitHandler);
     while (readyCallbacks.length) {
       var cb = readyCallbacks.shift();
       if (cb) cb();
     }
   };
   window.addEventListener('message', _portInitHandler);
 }
 function callNative(data) {
   var _a, _b;
   try {
     if (webviewPort) {
       webviewPort.postMessage(data);
       return;
     }
     if (exports.osType === DetectedOS.iOS) {
       if ((_b = (_a = exports.global.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.ALRBridge) {
         exports.global.webkit.messageHandlers.ALRBridge.postMessage(data);
       } else {
         console.warn('[RUM_SDK_WEBVIEW] iOS ALRBridge not available, message dropped:', data);
       }
     } else if (exports.osType === DetectedOS.Android) {
       if (exports.global.ALRBridge && (0, rum_core_1.isFunction)(exports.global.ALRBridge.postMessage)) {
         exports.global.ALRBridge.postMessage(data);
       } else {
         console.warn('[RUM_SDK_WEBVIEW] Android ALRBridge not available, message dropped:', data);
       }
     } else if (exports.osType === DetectedOS.HarmonyOS) {
       console.warn('[RUM_SDK_WEBVIEW] HarmonyOS WebMessagePort not ready, message dropped:', data);
     }
   } catch (e) {
     console.error('[RUM_SDK_WEBVIEW] callNative Error', e);
   }
 }
 function handleMessageFromNative(message) {
   var resp;
   try {
     resp = JSON.parse(message);
   } catch (e) {
     return;
   }
   var _resp = resp,
     callback_id = _resp.callback_id,
     type = _resp.type,
     data = _resp.data,
     error = _resp.error;
   if (callback_id && callback_id in callbackCache) {
     var request = callbackCache[callback_id];
     if (request) {
       if (request.timeoutId) {
         clearTimeout(request.timeoutId);
       }
       if ((0, rum_core_1.isFunction)(request.success)) {
         request.success(data);
       }
       if (error && (0, rum_core_1.isFunction)(request.fail)) {
         request.fail(error);
       }
       delete callbackCache[callback_id];
     }
   }
   if (type && type in messageEvents) {
     var events = messageEvents[type] || [];
     events.forEach(function (callback) {
       if ((0, rum_core_1.isFunction)(callback)) {
         callback(data);
       }
     });
   }
 }
 var requestNative = function requestNative(option) {
   var callbackId = (0, rum_core_1.generateGUID)();
   var params = {
     callback_id: callbackId,
     type: option.action,
     data: option.data
   };
   if (option.success || option.fail) {
     var timeoutId = setTimeout(function () {
       delete callbackCache[callbackId];
       if ((0, rum_core_1.isFunction)(option.fail)) {
         option.fail({
           code: 'TIMEOUT',
           message: 'Native request timeout'
         });
       }
       console.warn('[RUM_SDK_WEBVIEW] Native request timeout, callback_id:', callbackId, 'action:', option.action);
     }, 30000);
     callbackCache[callbackId] = {
       success: option.success,
       fail: option.fail,
       timeoutId: timeoutId
     };
   }
   callNative(JSON.stringify(params));
 };
 exports.requestNative = requestNative;
 var onNativeMessage = function onNativeMessage(key, callback) {
   if (!(key in messageEvents)) {
     messageEvents[key] = [];
   }
   messageEvents[key].push(callback);
 };
 exports.onNativeMessage = onNativeMessage;
 var onNativeReady = function onNativeReady(callback) {
   if (exports.osType === DetectedOS.iOS) {
     callback();
     return;
   }
   if (portReady) {
     callback();
     return;
   }
   readyCallbacks.push(callback);
   if (exports.osType === DetectedOS.Unknown) {
     setTimeout(function () {
       var idx = readyCallbacks.indexOf(callback);
       if (idx !== -1) {
         readyCallbacks.splice(idx, 1);
         callback();
       }
     }, 5000);
   }
 };
 exports.onNativeReady = onNativeReady;

 /***/ }),
 /* 22 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
 function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
 function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 var client_1 = __webpack_require__(23);
 var events_1 = __webpack_require__(15);
 var telemetry_1 = __webpack_require__(24);
 var context_1 = __webpack_require__(27);
 var is_1 = __webpack_require__(4);
 var Client = /*#__PURE__*/function () {
   function Client() {
     var _this = this;
     _classCallCheck(this, Client);
     this.emitter = new events_1.EventEmitter();
     this.sendEvent = function (payload, options) {
       _this.emitter.emit(client_1.EventType.collect, payload, options);
     };
   }
   return _createClass(Client, [{
     key: "init",
     value: function init(config, rumSession, configManager, monitorReporter) {
       var _this2 = this;
       this.ctx = new context_1["default"](config, rumSession, configManager);
       if (monitorReporter) {
         var telemetryConfig = {
           appType: (rumSession === null || rumSession === void 0 ? void 0 : rumSession.appType) || '',
           sdkVersion: (rumSession === null || rumSession === void 0 ? void 0 : rumSession.sdkVersion) || '',
           endpoint: config.endpoint,
           getSessionId: rumSession ? function () {
             return rumSession.getSessionId();
           } : undefined,
           getSessionSampled: rumSession ? function () {
             return rumSession.getSampled();
           } : undefined,
           getViewId: function getViewId() {
             var _a;
             var views = (_a = _this2.ctx) === null || _a === void 0 ? void 0 : _a.getViews();
             return views && views.length ? views[views.length - 1].id : undefined;
           },
           selfMonitor: config.selfMonitor
         };
         if (config.pid) {
           telemetryConfig['app.id'] = config.pid;
         }
         telemetry_1.Telemetry.init(telemetryConfig, monitorReporter);
       }
       var ctx = this.ctx,
         collectors = this.collectors,
         processors = this.processors,
         reporter = this.reporter;
       processors.forEach(function (processor) {
         (0, is_1.isFunction)(processor.setup) && processor.setup(ctx);
       });
       this.emitter.on(client_1.EventType.collect, function (payload, options) {
         ctx.setRumEvent(payload);
         var _iterator = _createForOfIteratorHelper(processors),
           _step;
         try {
           for (_iterator.s(); !(_step = _iterator.n()).done;) {
             var processor = _step.value;
             if (!processor.match) {
               processor.match = function () {
                 return true;
               };
             }
             if (processor.match(ctx)) {
               var res = processor.process(ctx);
               ctx.setRumEvent(res);
             }
           }
         } catch (err) {
           _iterator.e(err);
         } finally {
           _iterator.f();
         }
         reporter.report(ctx, options);
       });
       collectors.forEach(function (collector) {
         collector.setup(ctx, _this2.sendEvent);
       });
     }
   }, {
     key: "setContext",
     value: function setContext(ctx) {
       this.ctx = ctx;
     }
   }, {
     key: "getContext",
     value: function getContext() {
       return this.ctx;
     }
   }, {
     key: "useCollectors",
     value: function useCollectors(collectors) {
       this.collectors = collectors;
     }
   }, {
     key: "getCollectors",
     value: function getCollectors() {
       return this.collectors;
     }
   }, {
     key: "useProcessors",
     value: function useProcessors(processors) {
       this.processors = processors;
     }
   }, {
     key: "useReporter",
     value: function useReporter(reporter) {
       this.reporter = reporter;
     }
   }]);
 }();
 exports["default"] = Client;

 /***/ }),
 /* 23 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.EventType = void 0;
 var EventType;
 (function (EventType) {
   EventType["collect"] = "collect";
 })(EventType = exports.EventType || (exports.EventType = {}));

 /***/ }),
 /* 24 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
 function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
 function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
 function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
 function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
 function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.convertBundlesToLogGroup = exports.Telemetry = void 0;
 var logger_1 = __webpack_require__(11);
 var url_1 = __webpack_require__(16);
 var protobuf_1 = __webpack_require__(25);
 var number_1 = __webpack_require__(26);
 var MAX_EVENTS_PER_PAGE = 15;
 var BUFFER_SIZE = 100;
 var LOG_CONTENT_MAX_SIZE = 12288;
 var FLUSH_TIME = 5000;
 var MAX_BATCH_SIZE = 10;
 var DEFAULT_SAMPLE_RATE = 100;
 var Telemetry = /*#__PURE__*/function () {
   function Telemetry(context, reporter) {
     _classCallCheck(this, Telemetry);
     this.buffer = [];
     this.queue = [];
     this.sentEvents = new Set();
     this.started = false;
     this.enabled = true;
     this.timer = null;
     this.isReporting = false;
     this.context = context;
     this.reporter = reporter;
     this.endpointParams = (0, url_1.getUrlParams)(context.endpoint);
     var selfMonitor = context.selfMonitor;
     if (typeof selfMonitor === 'boolean') {
       this.enabled = selfMonitor;
       this.sampled = (0, number_1.performDraw)(DEFAULT_SAMPLE_RATE);
     } else if (selfMonitor && _typeof(selfMonitor) === 'object') {
       this.enabled = selfMonitor.enable !== false;
       var rate = selfMonitor.sampling;
       this.sampled = (0, number_1.performDraw)(typeof rate === 'number' && rate >= 0 && rate <= 100 ? rate : DEFAULT_SAMPLE_RATE);
       if (selfMonitor.console) {
         logger_1.logger.setConsole(true);
       }
       if (selfMonitor.reportLevels) {
         logger_1.logger.setReportLevels(selfMonitor.reportLevels);
       }
     } else {
       this.enabled = true;
       this.sampled = (0, number_1.performDraw)(DEFAULT_SAMPLE_RATE);
     }
   }
   return _createClass(Telemetry, [{
     key: "start",
     value: function start() {
       var _this = this;
       if (this.started) return;
       this.started = true;
       logger_1.logger.setOnError(function (event) {
         return _this.addEvent(event);
       });
       this.flushBuffer();
     }
   }, {
     key: "addEvent",
     value: function addEvent(event) {
       var _a, _b, _c, _d;
       if (!this.enabled || !event) return;
       if (event.content && event.content.length > LOG_CONTENT_MAX_SIZE) {
         event = Object.assign(Object.assign({}, event), {
           content: event.content.slice(0, LOG_CONTENT_MAX_SIZE)
         });
       }
       if (event.stack && event.stack.length > LOG_CONTENT_MAX_SIZE) {
         event = Object.assign(Object.assign({}, event), {
           stack: event.stack.slice(0, LOG_CONTENT_MAX_SIZE)
         });
       }
       var snapshot = {
         event: event,
         sessionId: (_b = (_a = this.context).getSessionId) === null || _b === void 0 ? void 0 : _b.call(_a),
         viewId: (_d = (_c = this.context).getViewId) === null || _d === void 0 ? void 0 : _d.call(_c),
         timestamp: Date.now()
       };
       if (!this.started || !this.reporter) {
         if (this.buffer.length < BUFFER_SIZE) {
           this.buffer.push(snapshot);
         }
         return;
       }
       this.processSnapshot(snapshot);
     }
   }, {
     key: "flush",
     value: function flush() {
       if (this.timer) {
         clearTimeout(this.timer);
         this.timer = null;
       }
       this.sendBatch();
     }
   }, {
     key: "setReporter",
     value: function setReporter(reporter) {
       this.reporter = reporter;
       if (this.started) {
         this.flushBuffer();
       }
     }
   }, {
     key: "flushBuffer",
     value: function flushBuffer() {
       var _this2 = this;
       var buffered = this.buffer.splice(0);
       buffered.forEach(function (snapshot) {
         return _this2.processSnapshot(snapshot);
       });
     }
   }, {
     key: "processSnapshot",
     value: function processSnapshot(snapshot) {
       var _this3 = this;
       if (!this.shouldSend(snapshot.event)) return;
       var bundle = this.buildBundle(snapshot);
       this.queue.push(bundle);
       if (this.queue.length >= MAX_BATCH_SIZE) {
         this.flush();
       } else if (!this.timer) {
         this.timer = setTimeout(function () {
           return _this3.flush();
         }, FLUSH_TIME);
       }
     }
   }, {
     key: "shouldSend",
     value: function shouldSend(event) {
       if (this.context.getSessionSampled && !this.context.getSessionSampled()) return false;
       if (!this.sampled) return false;
       if (this.sentEvents.size >= MAX_EVENTS_PER_PAGE) return false;
       var key = (event.content || '') + (event.stack || '');
       if (this.sentEvents.has(key)) return false;
       this.sentEvents.add(key);
       return true;
     }
   }, {
     key: "buildBundle",
     value: function buildBundle(snapshot) {
       var _this$context = this.context,
         appType = _this$context.appType,
         sdkVersion = _this$context.sdkVersion,
         endpoint = _this$context.endpoint;
       return Object.assign({
         'app.type': appType,
         _v: sdkVersion,
         endpoint: endpoint,
         'session.id': snapshot.sessionId,
         'view.id': snapshot.viewId,
         timestamp: snapshot.timestamp,
         event_type: 'log',
         log: snapshot.event
       }, this.endpointParams);
     }
   }, {
     key: "sendBatch",
     value: function sendBatch() {
       if (this.queue.length === 0 || !this.reporter) return;
       if (this.isReporting) return;
       var batch = this.queue.splice(0);
       this.isReporting = true;
       try {
         this.reporter.send(batch);
       } catch (e) {
         try {
           console.warn('[RUM-Telemetry] send failed:', e);
         } catch (_) {}
       } finally {
         this.isReporting = false;
       }
     }
   }], [{
     key: "init",
     value: function init(context, reporter) {
       if (Telemetry.instance) {
         Telemetry.instance.flush();
       }
       Telemetry.instance = new Telemetry(context, reporter);
       Telemetry.instance.start();
       return Telemetry.instance;
     }
   }, {
     key: "get",
     value: function get() {
       return Telemetry.instance;
     }
   }]);
 }();
 exports.Telemetry = Telemetry;
 function convertBundlesToLogGroup(data) {
   var logs = data.map(function (bundle) {
     var contents = [];
     for (var _i = 0, _Object$entries = Object.entries(bundle); _i < _Object$entries.length; _i++) {
       var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
         key = _Object$entries$_i[0],
         val = _Object$entries$_i[1];
       if (key === 'timestamp') continue;
       if (val !== undefined && val !== null) {
         contents.push({
           key: key,
           value: _typeof(val) === 'object' ? JSON.stringify(val) : String(val)
         });
       }
     }
     return {
       time: Math.floor(bundle.timestamp / 1000),
       contents: contents
     };
   });
   return (0, protobuf_1.encodeLogGroup)(logs);
 }
 exports.convertBundlesToLogGroup = convertBundlesToLogGroup;

 /***/ }),
 /* 25 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.encodeLogGroup = void 0;
 var WIRE_TYPE_VARINT = 0;
 var WIRE_TYPE_LEN = 2;
 function encodeUtf8Fallback(str) {
   var bytes = [];
   for (var i = 0; i < str.length; i++) {
     var charCode = str.charCodeAt(i);
     if (charCode < 0x80) {
       bytes.push(charCode);
     } else if (charCode < 0x800) {
       bytes.push(0xc0 | charCode >> 6);
       bytes.push(0x80 | charCode & 0x3f);
     } else if (charCode >= 0xd800 && charCode <= 0xdbff) {
       i++;
       var low = str.charCodeAt(i);
       charCode = 0x10000 + (charCode - 0xd800 << 10) + (low - 0xdc00);
       bytes.push(0xf0 | charCode >> 18);
       bytes.push(0x80 | charCode >> 12 & 0x3f);
       bytes.push(0x80 | charCode >> 6 & 0x3f);
       bytes.push(0x80 | charCode & 0x3f);
     } else {
       bytes.push(0xe0 | charCode >> 12);
       bytes.push(0x80 | charCode >> 6 & 0x3f);
       bytes.push(0x80 | charCode & 0x3f);
     }
   }
   return new Uint8Array(bytes);
 }
 var utf8Encoder = typeof TextEncoder !== 'undefined' ? new TextEncoder() : {
   encode: encodeUtf8Fallback
 };
 var ProtobufWriter = /*#__PURE__*/function () {
   function ProtobufWriter() {
     _classCallCheck(this, ProtobufWriter);
     this.buf = [];
   }
   return _createClass(ProtobufWriter, [{
     key: "writeVarint",
     value: function writeVarint(value) {
       var v = value >>> 0;
       while (v > 0x7f) {
         this.buf.push(v & 0x7f | 0x80);
         v = v >>> 7;
       }
       this.buf.push(v & 0x7f);
     }
   }, {
     key: "writeTag",
     value: function writeTag(fieldNumber, wireType) {
       this.writeVarint(fieldNumber << 3 | wireType);
     }
   }, {
     key: "writeString",
     value: function writeString(fieldNumber, value) {
       var bytes = utf8Encoder.encode(value);
       this.writeTag(fieldNumber, WIRE_TYPE_LEN);
       this.writeVarint(bytes.length);
       for (var i = 0; i < bytes.length; i++) {
         this.buf.push(bytes[i]);
       }
     }
   }, {
     key: "writeUint32",
     value: function writeUint32(fieldNumber, value) {
       this.writeTag(fieldNumber, WIRE_TYPE_VARINT);
       this.writeVarint(value);
     }
   }, {
     key: "writeBytes",
     value: function writeBytes(fieldNumber, data) {
       this.writeTag(fieldNumber, WIRE_TYPE_LEN);
       this.writeVarint(data.length);
       for (var i = 0; i < data.length; i++) {
         this.buf.push(data[i]);
       }
     }
   }, {
     key: "finish",
     value: function finish() {
       return new Uint8Array(this.buf);
     }
   }]);
 }();
 function encodeContent(key, value) {
   var w = new ProtobufWriter();
   w.writeString(1, key);
   w.writeString(2, value);
   return w.finish();
 }
 function encodeLog(time, contents) {
   var w = new ProtobufWriter();
   w.writeUint32(1, time);
   for (var i = 0; i < contents.length; i++) {
     var c = contents[i];
     w.writeBytes(2, encodeContent(c.key, c.value));
   }
   return w.finish();
 }
 function encodeLogGroup(logs, topic, source) {
   var w = new ProtobufWriter();
   for (var i = 0; i < logs.length; i++) {
     var log = logs[i];
     w.writeBytes(1, encodeLog(log.time, log.contents));
   }
   if (topic !== undefined) {
     w.writeString(3, topic);
   }
   if (source !== undefined) {
     w.writeString(4, source);
   }
   return w.finish();
 }
 exports.encodeLogGroup = encodeLogGroup;

 /***/ }),
 /* 26 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.formatNumber = exports.performDraw = exports.ONE_DAY = exports.ONE_HOUR = exports.ONE_MINUTE = exports.ONE_SECOND = void 0;
 exports.ONE_SECOND = 1e3;
 exports.ONE_MINUTE = 60 * exports.ONE_SECOND;
 exports.ONE_HOUR = 60 * exports.ONE_MINUTE;
 exports.ONE_DAY = 24 * exports.ONE_HOUR;
 function performDraw(threshold) {
   return threshold !== 0 && Math.random() * 100 <= threshold;
 }
 exports.performDraw = performDraw;
 function formatNumber(num) {
   var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
   var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
   if (!num) {
     return num;
   }
   var str = num.toString();
   var index = str.indexOf('.');
   if (index !== -1) {
     str = str.substring(0, decimal + index + 1);
   } else {
     str = str.substring(0);
   }
   var result = parseFloat(str);
   return result >= min ? result : undefined;
 }
 exports.formatNumber = formatNumber;

 /***/ }),
 /* 27 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 var events_1 = __webpack_require__(15);
 var Context = /*#__PURE__*/function () {
   function Context(config, rumSession, configManager) {
     _classCallCheck(this, Context);
     this.config = config;
     this.views = [];
     this.emitter = new events_1.EventEmitter();
     if (rumSession) {
       this.session = rumSession;
       this.session.init(this);
     }
     if (configManager) {
       this.configManager = configManager;
     }
   }
   return _createClass(Context, [{
     key: "getConfig",
     value: function getConfig() {
       if (this.configManager) {
         return this.configManager.getConfig();
       }
       return this.config;
     }
   }, {
     key: "setConfig",
     value: function setConfig(config) {
       if (this.configManager) {
         this.configManager.setConfig(config);
       } else {
         this.config = config;
       }
     }
   }, {
     key: "getViews",
     value: function getViews() {
       return this.views;
     }
   }, {
     key: "addView",
     value: function addView(view) {
       var index = this.views.findIndex(function (v) {
         return v.id === view.id;
       });
       if (index >= 0) {
         this.views.splice(index, 1);
       }
       this.views.push(view);
     }
   }, {
     key: "removeView",
     value: function removeView(viewId) {
       this.views = this.views.filter(function (view) {
         return view.id !== viewId;
       });
     }
   }, {
     key: "getRumEvent",
     value: function getRumEvent() {
       return this.rumEvent;
     }
   }, {
     key: "setRumEvent",
     value: function setRumEvent(rumEvent) {
       this.rumEvent = rumEvent;
     }
   }]);
 }();
 exports["default"] = Context;

 /***/ }),
 /* 28 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.verifyProperties = void 0;
 var is_1 = __webpack_require__(4);
 function verifyProperties(attrs) {
   if (!(0, is_1.isObject)(attrs)) {
     return;
   }
   var copyAttrs = Object.assign({}, attrs);
   Object.keys(copyAttrs).forEach(function (key) {
     var val = copyAttrs[key];
     if (key.length > 50) {
       var shortKey = key.substring(0, 50);
       copyAttrs[shortKey] = val;
       delete copyAttrs[key];
       key = shortKey;
     }
     if (!(0, is_1.isString)(val) && !(0, is_1.isNumber)(val)) {
       delete copyAttrs[key];
     } else if ((0, is_1.isString)(val) && val.length > 2e3) {
       copyAttrs[key] = val.substring(0, 2e3);
     }
   });
   var keys = Object.keys(copyAttrs);
   if (!keys.length) {
     return;
   }
   if (keys.length > 20) {
     keys.forEach(function (key, index) {
       if (index > 19) {
         delete copyAttrs[key];
       }
     });
   }
   return copyAttrs;
 }
 exports.verifyProperties = verifyProperties;

 /***/ }),
 /* 29 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.parseRegExpString = exports.delay = exports.debounce = exports.generateEventId = exports.generateSpanId = exports.generateTraceId = exports.generateGUID = exports.restoreFunction = exports.interceptFunction = void 0;
 var is_1 = __webpack_require__(4);
 var logger_1 = __webpack_require__(11);
 function interceptFunction(target, name, callback) {
   var isPrototype = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
   try {
     var registeredMethod = target[name];
     var proxyMethod = function proxyMethod() {
       var ctx = isPrototype ? this : target;
       for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
         args[_key] = arguments[_key];
       }
       try {
         callback.apply(ctx, args);
       } catch (e) {
         logger_1.logger.warn('interceptFunction', "callback error in \"".concat(name, "\""), e);
       }
       if ((0, is_1.isFunction)(registeredMethod)) {
         return registeredMethod.apply(ctx, args);
       }
     };
     disguiseProxy(proxyMethod, registeredMethod);
     target[name] = proxyMethod;
   } catch (e) {
     logger_1.logger.warn('interceptFunction', "install proxy failed for \"".concat(name, "\""), e);
   }
 }
 exports.interceptFunction = interceptFunction;
 function disguiseProxy(proxyMethod, originalMethod) {
   try {
     if ((0, is_1.isFunction)(originalMethod)) {
       Object.defineProperty(proxyMethod, 'toString', {
         value: function value() {
           return originalMethod.toString();
         },
         writable: true,
         configurable: true
       });
       Object.defineProperty(proxyMethod, 'name', {
         value: originalMethod.name,
         configurable: true
       });
       Object.defineProperty(proxyMethod, 'length', {
         value: originalMethod.length,
         configurable: true
       });
     }
     Object.defineProperty(proxyMethod, '_rum_intercepted', {
       value: originalMethod,
       enumerable: false,
       writable: true,
       configurable: true
     });
   } catch (e) {
     try {
       proxyMethod._rum_intercepted = originalMethod;
     } catch (err) {
       logger_1.logger.warn('interceptFunction', 'disguiseProxy fallback failed', err);
     }
   }
 }
 function restoreFunction(target, name) {
   var proxyMethod = target[name];
   if (!(0, is_1.isFunction)(proxyMethod)) return;
   var originalMethod = proxyMethod._rum_intercepted;
   if (!(0, is_1.isFunction)(originalMethod)) return;
   target[name] = originalMethod;
 }
 exports.restoreFunction = restoreFunction;
 function generateGUID() {
   var guid = '';
   try {
     if (crypto && crypto.randomUUID) {
       guid = crypto.randomUUID();
     } else if (crypto && crypto.getRandomValues) {
       var buf = new Uint8Array(16);
       crypto.getRandomValues(buf);
       buf[6] = buf[6] & 0x0f | 0x40;
       buf[8] = buf[8] & 0x3f | 0x80;
       guid = buf.reduce(function (str, _byte) {
         return str + _byte.toString(16).padStart(2, '0');
       }, '').replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, '\$1-\$2-\$3-\$4-\$5');
     }
   } catch (e) {
     guid = '';
   }
   if (!guid) {
     guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
       var r = Math.random() * 16 | 0,
         v = c == 'x' ? r : r & 0x3 | 0x8;
       return v.toString(16);
     });
   }
   return guid;
 }
 exports.generateGUID = generateGUID;
 function generateTraceId() {
   var traceId = generateGUID().replace(/-/g, '');
   if (traceId[0] === '0') {
     traceId = '1' + traceId.substring(1);
   }
   if (traceId[16] === '0') {
     traceId = traceId.substring(0, 16) + '1' + traceId.substring(17);
   }
   return traceId;
 }
 exports.generateTraceId = generateTraceId;
 function generateSpanId() {
   var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
   var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
   var result = '';
   for (var i = 0; i < len; i++) {
     result += Math.floor(Math.random() * radix).toString(radix);
   }
   return result;
 }
 exports.generateSpanId = generateSpanId;
 function generateEventId(sessionId) {
   var spanId = generateSpanId();
   return "00-".concat(sessionId, "-").concat(spanId);
 }
 exports.generateEventId = generateEventId;
 function debounce(func, wait) {
   var timer;
   if (!(0, is_1.isFunction)(func)) {
     return;
   }
   return function () {
     var context = this;
     var args = arguments;
     if (timer) {
       clearTimeout(timer);
     }
     timer = setTimeout(function () {
       func.apply(context, args);
     }, wait);
   };
 }
 exports.debounce = debounce;
 function delay(func, wait) {
   if (!(0, is_1.isFunction)(func)) {
     return;
   }
   for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
     args[_key2 - 2] = arguments[_key2];
   }
   return setTimeout.apply(void 0, [func, +wait || 0].concat(args));
 }
 exports.delay = delay;
 function parseRegExpString(str) {
   if (typeof str !== 'string') {
     throw new TypeError('input must be a string');
   }
   if (str.length > 2 && str[0] === '/') {
     var lastSlashIndex = str.lastIndexOf('/');
     if (lastSlashIndex > 0) {
       var pattern = str.substring(1, lastSlashIndex);
       var flags = str.substring(lastSlashIndex + 1);
       return new RegExp(pattern, flags);
     }
     return new RegExp(str.substring(1, str.length - 1));
   }
   return new RegExp(str);
 }
 exports.parseRegExpString = parseRegExpString;

 /***/ }),
 /* 30 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.assign = exports.endsWith = exports.startsWith = exports.find = void 0;
 function find(array, predicate) {
   for (var i = 0; i < array.length; i += 1) {
     var item = array[i];
     if (predicate(item, i)) {
       return item;
     }
   }
   return undefined;
 }
 exports.find = find;
 function startsWith(candidate, search) {
   return candidate.slice(0, search.length) === search;
 }
 exports.startsWith = startsWith;
 function endsWith(candidate, search) {
   return candidate.slice(-search.length) === search;
 }
 exports.endsWith = endsWith;
 function assign(target) {
   for (var _len = arguments.length, toAssign = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
     toAssign[_key - 1] = arguments[_key];
   }
   toAssign.forEach(function (source) {
     for (var key in source) {
       if (Object.prototype.hasOwnProperty.call(source, key)) {
         target[key] = source[key];
       }
     }
   });
   return target;
 }
 exports.assign = assign;

 /***/ }),
 /* 31 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
 function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
 function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
 function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
 function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
 function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.parseRule2Match = exports.urlMatch = exports.matchList = exports.isMatchOption = void 0;
 var is_1 = __webpack_require__(4);
 var polyfills_1 = __webpack_require__(30);
 var base_1 = __webpack_require__(29);
 function isMatchOption(item) {
   return (0, is_1.isString)(item) || (0, is_1.isFunction)(item) || (0, is_1.isRegExp)(item);
 }
 exports.isMatchOption = isMatchOption;
 function matchList(list, value) {
   var useStartsWith = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
   var options = arguments.length > 3 ? arguments[3] : undefined;
   return list.some(function (item) {
     try {
       if (typeof item === 'function') {
         return item(value, options);
       } else if (item instanceof RegExp) {
         return item.test(value);
       } else if (typeof item === 'string') {
         return useStartsWith ? (0, polyfills_1.startsWith)(value, item) : item === value;
       }
     } catch (e) {}
     return false;
   });
 }
 exports.matchList = matchList;
 function urlMatch(url) {
   var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
   try {
     if (!(0, is_1.isArray)(list)) {
       list = [list];
     }
     var rules = [/^(https?:)?\/\/.*rum|retcode|log-global|log\.aliyuncs\.com/, /^(https?:)?\/\/.*\.mmstat\.com/, /^(https?:)?\/\/.*hm\.baidu\.com/, /^(https?:)?\/\/.*google-analytics\.com/, /data:(.+?)(;base64)?,(.+)$/].concat(_toConsumableArray(list));
     return matchList(rules, url);
   } catch (e) {
     return false;
   }
 }
 exports.urlMatch = urlMatch;
 function parseRule2Match(rule) {
   if (isMatchOption(rule)) {
     return rule;
   }
   var match;
   switch (rule.match_exp) {
     case 'equals':
       match = function match(value) {
         return value === rule.match;
       };
       break;
     case 'not_equals':
       match = function match(value) {
         return value !== rule.match;
       };
       break;
     case 'regex':
       match = (0, base_1.parseRegExpString)(rule.match);
       break;
     case 'includes':
       match = function match(value) {
         return value.includes(rule.match);
       };
       break;
     case 'starts_with':
     default:
       match = function match(value) {
         return (0, polyfills_1.startsWith)(value, rule.match);
       };
       break;
   }
   return match;
 }
 exports.parseRule2Match = parseRule2Match;

 /***/ }),
 /* 32 */
 /***/ (function(module, exports) {

 function _OverloadYield(e, d) {
   this.v = e, this.k = d;
 }
 module.exports = _OverloadYield, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 33 */
 /***/ (function(module, exports, __webpack_require__) {

 var regeneratorDefine = __webpack_require__(34);
 function _regenerator() {
   /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
   var e,
     t,
     r = "function" == typeof Symbol ? Symbol : {},
     n = r.iterator || "@@iterator",
     o = r.toStringTag || "@@toStringTag";
   function i(r, n, o, i) {
     var c = n && n.prototype instanceof Generator ? n : Generator,
       u = Object.create(c.prototype);
     return regeneratorDefine(u, "_invoke", function (r, n, o) {
       var i,
         c,
         u,
         f = 0,
         p = o || [],
         y = !1,
         G = {
           p: 0,
           n: 0,
           v: e,
           a: d,
           f: d.bind(e, 4),
           d: function d(t, r) {
             return i = t, c = 0, u = e, G.n = r, a;
           }
         };
       function d(r, n) {
         for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
           var o,
             i = p[t],
             d = G.p,
             l = i[2];
           r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
         }
         if (o || r > 1) return a;
         throw y = !0, n;
       }
       return function (o, p, l) {
         if (f > 1) throw TypeError("Generator is already running");
         for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
           i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
           try {
             if (f = 2, i) {
               if (c || (o = "next"), t = i[o]) {
                 if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                 if (!t.done) return t;
                 u = t.value, c < 2 && (c = 0);
               } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
               i = e;
             } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
           } catch (t) {
             i = e, c = 1, u = t;
           } finally {
             f = 1;
           }
         }
         return {
           value: t,
           done: y
         };
       };
     }(r, o, i), !0), u;
   }
   var a = {};
   function Generator() {}
   function GeneratorFunction() {}
   function GeneratorFunctionPrototype() {}
   t = Object.getPrototypeOf;
   var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {
       return this;
     }), t),
     u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
   function f(e) {
     return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
   }
   return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), regeneratorDefine(u), regeneratorDefine(u, o, "Generator"), regeneratorDefine(u, n, function () {
     return this;
   }), regeneratorDefine(u, "toString", function () {
     return "[object Generator]";
   }), (module.exports = _regenerator = function _regenerator() {
     return {
       w: i,
       m: f
     };
   }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
 }
 module.exports = _regenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 34 */
 /***/ (function(module, exports) {

 function _regeneratorDefine(e, r, n, t) {
   var i = Object.defineProperty;
   try {
     i({}, "", {});
   } catch (e) {
     i = 0;
   }
   module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {
     function o(r, n) {
       _regeneratorDefine(e, r, function (e) {
         return this._invoke(r, n, e);
       });
     }
     r ? i ? i(e, r, {
       value: n,
       enumerable: !t,
       configurable: !t,
       writable: !t
     }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
   }, module.exports.__esModule = true, module.exports["default"] = module.exports, _regeneratorDefine(e, r, n, t);
 }
 module.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 35 */
 /***/ (function(module, exports, __webpack_require__) {

 var regenerator = __webpack_require__(33);
 var regeneratorAsyncIterator = __webpack_require__(36);
 function _regeneratorAsyncGen(r, e, t, o, n) {
   return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);
 }
 module.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 36 */
 /***/ (function(module, exports, __webpack_require__) {

 var OverloadYield = __webpack_require__(32);
 var regeneratorDefine = __webpack_require__(34);
 function AsyncIterator(t, e) {
   function n(r, o, i, f) {
     try {
       var c = t[r](o),
         u = c.value;
       return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {
         n("next", t, i, f);
       }, function (t) {
         n("throw", t, i, f);
       }) : e.resolve(u).then(function (t) {
         c.value = t, i(c);
       }, function (t) {
         return n("throw", t, i, f);
       });
     } catch (t) {
       f(t);
     }
   }
   var r;
   this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function () {
     return this;
   })), regeneratorDefine(this, "_invoke", function (t, o, i) {
     function f() {
       return new e(function (e, r) {
         n(t, i, e, r);
       });
     }
     return r = r ? r.then(f, f) : f();
   }, !0);
 }
 module.exports = AsyncIterator, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 37 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _exportNames = {
   ExceptionSource: !0,
   ExceptionEventType: !0
 };
 var _api = __webpack_require__(18);
 exports.__esModule = !0;
 exports.ExceptionSource = exports.ExceptionEventType = void 0;
 Object.keys(_api).forEach(function (a) {
   "default" === a || "__esModule" === a || Object.prototype.hasOwnProperty.call(_exportNames, a) || a in exports && exports[a] === _api[a] || (exports[a] = _api[a]);
 });
 var ExceptionSource = exports.ExceptionSource = function (a) {
     return a.console = "console.error", a.onError = "onError", a.unhandled = "onUnhandledRejection", a;
   }({}),
   ExceptionEventType = exports.ExceptionEventType = function (a) {
     return a.error = "error", a.unhandled = "unhandledrejection", a.console = "consoleError", a;
   }({});

 /***/ }),
 /* 38 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 exports.__esModule = !0, exports.getTrueArea = exports.getElementsBySelectors = void 0;
 var _global = __webpack_require__(1),
   getElementsBySelectors = exports.getElementsBySelectors = function (a, b) {
     void 0 === b && (b = _global.document);
     var c = [];
     return a.forEach(function (a) {
       var d = Array.from(b.querySelectorAll(a));
       d && c.push.apply(c, d);
     }), c;
   },
   getTrueArea = exports.getTrueArea = function (a) {
     var b = a.getBoundingClientRect(),
       c = b.left,
       d = b.top,
       e = b.right,
       f = b.bottom,
       g = _global.global.innerHeight || _global.document.documentElement.clientHeight,
       h = _global.global.innerWidth || _global.document.documentElement.clientWidth,
       i = Math.max(0, c),
       j = Math.max(0, d),
       k = Math.min(h, e),
       l = Math.min(g, f);
     return {
       left: i,
       top: j,
       right: k,
       bottom: l,
       width: k - i,
       height: l - j
     };
   };

 /***/ }),
 /* 39 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 exports.__esModule = !0, exports.LifeCycleEventType = void 0;
 var LifeCycleEventType = exports.LifeCycleEventType = function (a) {
   return a.VIEW_CREATED = "VIEW_CREATED", a.VIEW_ENDED = "VIEW_ENDED", a;
 }({});

 /***/ }),
 /* 40 */
 /***/ (function(module, exports, __webpack_require__) {

 module.exports = __webpack_require__(41);


 /***/ }),
 /* 41 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.WebviewRum = void 0;
 var shell_1 = __webpack_require__(42);
 Object.defineProperty(exports, "WebviewRum", {
   enumerable: true,
   get: function get() {
     return shell_1.WebviewRum;
   }
 });
 exports["default"] = shell_1["default"];

 /***/ }),
 /* 42 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
 function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
 function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
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
 function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
 function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
 function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
 function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
 function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
 function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
 var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
   function adopt(value) {
     return value instanceof P ? value : new P(function (resolve) {
       resolve(value);
     });
   }
   return new (P || (P = Promise))(function (resolve, reject) {
     function fulfilled(value) {
       try {
         step(generator.next(value));
       } catch (e) {
         reject(e);
       }
     }
     function rejected(value) {
       try {
         step(generator["throw"](value));
       } catch (e) {
         reject(e);
       }
     }
     function step(result) {
       result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
     }
     step((generator = generator.apply(thisArg, _arguments || [])).next());
   });
 };
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.WebviewRum = void 0;
 var rum_core_1 = __webpack_require__(0);
 var collectors = __webpack_require__(56);
 var default_processor_1 = __webpack_require__(84);
 var session_processor_1 = __webpack_require__(85);
 var session_1 = __webpack_require__(86);
 var global_1 = __webpack_require__(21);
 var reporter_1 = __webpack_require__(87);
 var configManager_1 = __webpack_require__(88);
 var monitor_reporter_1 = __webpack_require__(89);
 var builtInCollectors = _toConsumableArray(Object.values(collectors).filter(function (Collector) {
   return (0, rum_core_1.isFunction)(Collector);
 }));
 var WebviewRum = function (_rum_core_1$Shell) {
   function WebviewRum() {
     var _this;
     _classCallCheck(this, WebviewRum);
     _this = _callSuper(this, WebviewRum, arguments);
     _this.version = global_1.VERSION;
     _this.inited = false;
     _this.updateConfig = function (config) {
       var _a, _b, _c, _d, _e;
       if ((0, rum_core_1.isString)(config)) {
         try {
           config = JSON.parse(config);
         } catch (e) {
           return;
         }
       }
       if (!(0, rum_core_1.isObject)(config)) return;
       config.reportConfig = {
         flushTime: (_b = (_a = config.reportConfig) === null || _a === void 0 ? void 0 : _a.flushTime) !== null && _b !== void 0 ? _b : 1,
         maxEventCount: (_d = (_c = config.reportConfig) === null || _c === void 0 ? void 0 : _c.maxEventCount) !== null && _d !== void 0 ? _d : 20
       };
       (_e = _this.configManager) === null || _e === void 0 ? void 0 : _e.setConfig(config);
       var context = _this.client.getContext();
       if (!context) return;
       var collectors = _this.client.getCollectors();
       if (!collectors || !collectors.length) return;
       collectors.forEach(function (collector) {
         if ((0, rum_core_1.isFunction)(collector.destroy)) {
           collector.destroy();
           collector.setup(context, _this.client.sendEvent);
         }
       });
     };
     return _this;
   }
   _inherits(WebviewRum, _rum_core_1$Shell);
   return _createClass(WebviewRum, [{
     key: "init",
     value: function init(configuration) {
       var _a, _b, _c, _d;
       return __awaiter(this, void 0, void 0, _regenerator().m(function _callee() {
         var _this2 = this;
         var config;
         return _regenerator().w(function (_context) {
           while (1) switch (_context.n) {
             case 0:
               if (!this.inited) {
                 _context.n = 1;
                 break;
               }
               return _context.a(2);
             case 1:
               if (!(!configuration || _typeof(configuration) !== 'object')) {
                 _context.n = 2;
                 break;
               }
               return _context.a(2);
             case 2:
               this.inited = true;
               this.configManager = new configManager_1["default"]();
               configuration.reportConfig = {
                 flushTime: (_b = (_a = configuration.reportConfig) === null || _a === void 0 ? void 0 : _a.flushTime) !== null && _b !== void 0 ? _b : 1,
                 maxEventCount: (_d = (_c = configuration.reportConfig) === null || _c === void 0 ? void 0 : _c.maxEventCount) !== null && _d !== void 0 ? _d : 20
               };
               _context.n = 3;
               return this.configManager.init(configuration);
             case 3:
               config = this.configManager.getConfig();
               (0, global_1.onNativeMessage)('updateConfig', function (config) {
                 if ((0, rum_core_1.isString)(config)) {
                   try {
                     config = JSON.parse(config);
                   } catch (e) {
                     return;
                   }
                 }
                 if (!(0, rum_core_1.isObject)(config)) return;
                 _this2.updateConfig(config);
               });
               if (!(config.enable === false)) {
                 _context.n = 4;
                 break;
               }
               return _context.a(2);
             case 4:
               this.client.useCollectors(builtInCollectors.map(function (Collector) {
                 return new Collector();
               }));
               this.client.useProcessors([new default_processor_1["default"](), new session_processor_1["default"]()]);
               this.client.useReporter(new reporter_1["default"]());
               this.client.init(config, new session_1.RumSession(), this.configManager, new monitor_reporter_1.WebviewMonitorReporter(config.endpoint));
               if (typeof global_1.document !== 'undefined' && global_1.document.addEventListener) {
                 global_1.document.addEventListener('visibilitychange', function () {
                   var _a;
                   if (global_1.document.visibilityState === 'hidden') {
                     (_a = rum_core_1.Telemetry.get()) === null || _a === void 0 ? void 0 : _a.flush();
                   }
                 });
               }
               return _context.a(2, this);
           }
         }, _callee, this);
       }));
     }
   }, {
     key: "getConfig",
     value: function getConfig() {
       var _a;
       return (_a = this.configManager) === null || _a === void 0 ? void 0 : _a.getConfig();
     }
   }, {
     key: "setConfig",
     value: function setConfig() {
       if (!this.configManager) return;
       if (arguments.length === 2) {
         var oldConfig = this.configManager.getConfig();
         this.configManager.setConfig(Object.assign(Object.assign({}, oldConfig), _defineProperty({}, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1])));
       } else {
         this.configManager.setConfig(arguments.length <= 0 ? undefined : arguments[0]);
       }
     }
   }, {
     key: "getCollector",
     value: function getCollector(name) {
       return this.client.getCollectors().find(function (collector) {
         return collector.name === name;
       });
     }
   }]);
 }(rum_core_1.Shell);
 exports.WebviewRum = WebviewRum;
 try {
   if (!global_1.global.__webviewRum) {
     global_1.global.__webviewRum = new WebviewRum(global_1.global.__webview_rum);
   }
 } catch (e) {
   console.error('[WebviewRum] Initialization failed:', e);
 }
 var defaultClient = global_1.global.__webviewRum;
 (0, global_1.onNativeReady)(function () {
   (0, global_1.requestNative)({
     action: 'getConfig',
     data: {},
     success: function success(config) {
       if (!config) return;
       if ((0, rum_core_1.isString)(config)) {
         try {
           config = JSON.parse(config);
         } catch (e) {
           console.warn('getConfig error', e);
           return;
         }
       }
       if (!config.pid) {
         config.pid = "webview@".concat(global_1.VERSION);
       }
       if (!config.endpoint) {
         config.endpoint = "http://127.0.0.1/?version=".concat(global_1.VERSION);
       }
       defaultClient.init(config);
     }
   });
 });
 exports["default"] = defaultClient;

 /***/ }),
 /* 43 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
 function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
   function adopt(value) {
     return value instanceof P ? value : new P(function (resolve) {
       resolve(value);
     });
   }
   return new (P || (P = Promise))(function (resolve, reject) {
     function fulfilled(value) {
       try {
         step(generator.next(value));
       } catch (e) {
         reject(e);
       }
     }
     function rejected(value) {
       try {
         step(generator["throw"](value));
       } catch (e) {
         reject(e);
       }
     }
     function step(result) {
       result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
     }
     step((generator = generator.apply(thisArg, _arguments || [])).next());
   });
 };
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 var logger_1 = __webpack_require__(11);
 var rum_event_1 = __webpack_require__(17);
 var exception_1 = __webpack_require__(44);
 var is_1 = __webpack_require__(4);
 var verify_1 = __webpack_require__(28);
 var url_1 = __webpack_require__(16);
 var FLUSH_TIME = 3000;
 var MAX_EVENT_COUNT = 20;
 var attrs = ['app', 'user', 'device', 'os', 'geo', 'isp', 'net', 'properties'];
 var Reporter = /*#__PURE__*/function () {
   function Reporter() {
     _classCallCheck(this, Reporter);
     this.name = 'reporter';
     this.eventQueue = [];
     this._init = false;
   }
   return _createClass(Reporter, [{
     key: "getReportCfg",
     value: function getReportCfg() {
       var cfg = this.ctx.getConfig().reportConfig;
       if (!(0, is_1.isObject)(cfg)) {
         cfg = {};
       }
       if (!cfg.flushTime || cfg.flushTime < 0 || cfg.flushTime > 10000) {
         cfg.flushTime = FLUSH_TIME;
       }
       if (!cfg.maxEventCount || cfg.maxEventCount < 1 || cfg.maxEventCount > 100) {
         cfg.maxEventCount = MAX_EVENT_COUNT;
       }
       return cfg;
     }
   }, {
     key: "report",
     value: function report(ctx, options) {
       var _this = this;
       this.ctx = ctx;
       if (!this._init) {
         this.init(ctx);
         this._init = true;
       }
       if (options && options.single) {
         this.flushSingleEvent(ctx);
         return;
       }
       clearTimeout(this.timer);
       this.pushToQueue();
       var reportConfig = this.getReportCfg();
       if (options && options.immediate || this.eventQueue.length >= reportConfig.maxEventCount) {
         this.flushEventQueue();
       } else {
         this.timer = setTimeout(function () {
           _this.flushEventQueue();
         }, reportConfig.flushTime);
       }
     }
   }, {
     key: "flushSingleEvent",
     value: function flushSingleEvent(ctx) {
       var _a;
       var session = ctx.session;
       var sampled = session ? session.getSampled() : true;
       if (!sampled) return;
       var event = ctx.getRumEvent();
       if (!event) return;
       var views = ctx.getViews();
       var curView = views[views.length - 1];
       if (((_a = event.view) === null || _a === void 0 ? void 0 : _a.id) === curView.id) {
         delete event.view;
       }
       this.dispatchEvents(ctx, [event], curView);
     }
   }, {
     key: "pushToQueue",
     value: function pushToQueue() {
       var ctx = this.ctx,
         eventQueue = this.eventQueue;
       var event = ctx.getRumEvent();
       if (!event) return;
       if (event.event_type === rum_event_1.RumEventType.EXCEPTION) {
         var message = event.message,
           stack = event.stack;
         var curErrorId = (0, exception_1.getErrorID)({
           message: message,
           stack: stack
         });
         var targetEvent = this.eventQueue.find(function (cacheEvent) {
           if (cacheEvent.event_type === rum_event_1.RumEventType.EXCEPTION) {
             var _message = cacheEvent.message,
               _stack = cacheEvent.stack;
             return (0, exception_1.getErrorID)({
               message: _message,
               stack: _stack
             }) === curErrorId;
           }
         });
         if (targetEvent) {
           targetEvent.times++;
           return;
         }
       }
       if (event.event_type === rum_event_1.RumEventType.ACTION) {
         var target_name = event.target_name;
         var _targetEvent = this.eventQueue.find(function (cacheEvent) {
           if (cacheEvent.event_type === rum_event_1.RumEventType.ACTION) {
             return target_name === cacheEvent.target_name;
           }
         });
         if (_targetEvent) {
           _targetEvent.times++;
           return;
         }
       }
       eventQueue.push(event);
     }
   }, {
     key: "flushEventQueue",
     value: function flushEventQueue() {
       var ctx = this.ctx,
         eventQueue = this.eventQueue;
       if (!eventQueue.length) {
         return;
       }
       var views = ctx.getViews();
       var curView = views[views.length - 1];
       views.forEach(function (view) {
         if (view.id === curView.id) {
           var events = eventQueue.filter(function (event) {
             var _a;
             return ((_a = event.view) === null || _a === void 0 ? void 0 : _a.id) === view.id;
           });
           events.forEach(function (event) {
             delete event.view;
           });
         }
       });
       var session = ctx.session;
       var sampled = session ? session.getSampled() : true;
       sampled && this.dispatchEvents(ctx, eventQueue, curView);
       this.eventQueue = [];
     }
   }, {
     key: "dispatchEvents",
     value: function dispatchEvents(ctx, events, view) {
       var config = ctx.getConfig();
       var session = ctx.session;
       var sessionId = session.getSessionId();
       var currentSessionEvents = [];
       var otherSessionEventsMap = {};
       for (var i = 0; i < events.length; i++) {
         var e = events[i];
         if (!e.session_id || e.session_id === sessionId) {
           delete e.session_id;
           currentSessionEvents.push(e);
         } else {
           var sid = e.session_id;
           if (!otherSessionEventsMap[sid]) {
             otherSessionEventsMap[sid] = [];
           }
           delete e.session_id;
           otherSessionEventsMap[sid].push(e);
         }
       }
       if (currentSessionEvents.length > 0) {
         this.buildAndSend(ctx, config, session, sessionId, currentSessionEvents, view);
       }
       var otherSessionIds = Object.keys(otherSessionEventsMap);
       for (var _i = 0; _i < otherSessionIds.length; _i++) {
         var _sid = otherSessionIds[_i];
         this.buildAndSend(ctx, config, session, _sid, otherSessionEventsMap[_sid], view);
       }
     }
   }, {
     key: "buildAndSend",
     value: function buildAndSend(ctx, config, session, sessionId, events, view) {
       var extend = (0, url_1.getUrlParams)(config.endpoint);
       var bundle = Object.assign({
         app: {
           id: config.pid,
           env: config.env || 'prod',
           version: config.version,
           type: ''
         },
         user: {
           id: session.getUserId()
         },
         session: {
           id: sessionId
         },
         net: {},
         view: view,
         events: events
       }, extend);
       attrs.forEach(function (key) {
         var obj = config[key];
         (0, is_1.isObject)(obj) && Object.keys(obj).forEach(function (k) {
           var val = obj[k];
           if (key === 'user' && k === 'id') return;
           if (key === 'properties') {
             bundle[key] = (0, verify_1.verifyProperties)(obj);
           } else if ((0, is_1.isString)(val) || (0, is_1.isNumber)(val)) {
             if (!(key in bundle)) {
               bundle[key] = {};
             }
             bundle[key][k] = val;
           }
         });
       });
       if (typeof config.beforeReport === 'function') {
         bundle = config.beforeReport(bundle);
         if (!bundle) return;
       }
       this.tryRequest(bundle);
     }
   }, {
     key: "tryRequest",
     value: function tryRequest(bundle) {
       var retry = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
       var _a, _b, _c;
       return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
         var _this2 = this;
         var reportConfig, maxRetryCount, retryDelay, _t;
         return _regenerator().w(function (_context) {
           while (1) switch (_context.p = _context.n) {
             case 0:
               reportConfig = (_a = this.ctx.getConfig()) === null || _a === void 0 ? void 0 : _a.reportConfig;
               maxRetryCount = (_b = reportConfig === null || reportConfig === void 0 ? void 0 : reportConfig.maxRetryCount) !== null && _b !== void 0 ? _b : 0;
               retryDelay = (_c = reportConfig === null || reportConfig === void 0 ? void 0 : reportConfig.retryDelay) !== null && _c !== void 0 ? _c : 3000;
               _context.p = 1;
               bundle._retry = retry;
               _context.n = 2;
               return this.request(this.ctx, bundle);
             case 2:
               _context.n = 4;
               break;
             case 3:
               _context.p = 3;
               _t = _context.v;
               if (retry < maxRetryCount - 1) {
                 setTimeout(function () {
                   return _this2.tryRequest(bundle, retry + 1);
                 }, retryDelay);
               } else {
                 logger_1.logger.error('reporter', "Request failed after ".concat(retry + 1, " attempts"), _t);
               }
             case 4:
               return _context.a(2);
           }
         }, _callee, this, [[1, 3]]);
       }));
     }
   }, {
     key: "init",
     value: function init(ctx) {}
   }]);
 }();
 exports["default"] = Reporter;

 /***/ }),
 /* 44 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.getErrorID = void 0;
 var getErrorID = function getErrorID(error) {
   var _error$message = error.message,
     message = _error$message === void 0 ? '' : _error$message,
     _error$stack = error.stack,
     stack = _error$stack === void 0 ? '' : _error$stack;
   return message + stack;
 };
 exports.getErrorID = getErrorID;

 /***/ }),
 /* 45 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 var rum_event_1 = __webpack_require__(17);
 var client_1 = __webpack_require__(22);
 var is_1 = __webpack_require__(4);
 var Shell = /*#__PURE__*/function () {
   function Shell(config) {
     _classCallCheck(this, Shell);
     this.client = new client_1["default"]();
     if (config && this.init) {
       this.init(config);
     }
   }
   return _createClass(Shell, [{
     key: "sendEvent",
     value: function sendEvent(payload, options) {
       if (this.client) {
         this.client.sendEvent(payload, options);
       }
     }
   }, {
     key: "getConfig",
     value: function getConfig() {
       if (this.client) {
         return this.client.getContext().getConfig();
       }
     }
   }, {
     key: "sendCustom",
     value: function sendCustom(payload) {
       if (!payload.name || !payload.type) {
         return;
       }
       var data = Object.assign(Object.assign({}, payload), {
         event_type: rum_event_1.RumEventType.CUSTOM
       });
       this.sendEvent(data);
     }
   }, {
     key: "sendView",
     value: function sendView(payload) {
       if (!(0, is_1.isObject)(payload)) {
         return;
       }
       if (!payload.type) {
         payload.type = 'custom';
       }
       if (payload.type === 'custom') {
         var n = 0;
         ['t1', 't2', 't3'].forEach(function (key) {
           if (!(0, is_1.isNumber)(payload[key])) {
             delete payload[key];
           }
           key in payload && n++;
         });
         if (n === 0) return;
       }
       var data = Object.assign(Object.assign({}, payload), {
         event_type: rum_event_1.RumEventType.VIEW
       });
       this.sendEvent(data);
     }
   }, {
     key: "sendException",
     value: function sendException(payload) {
       if (!payload.name || !payload.message) {
         return;
       }
       var name = payload.name,
         message = payload.message,
         stack = payload.stack;
       var data = Object.assign(Object.assign({
         times: 1,
         name: name,
         message: message,
         stack: stack
       }, payload), {
         event_type: rum_event_1.RumEventType.EXCEPTION,
         type: 'custom',
         source: 'custom'
       });
       this.sendEvent(data);
     }
   }, {
     key: "sendResource",
     value: function sendResource(payload) {
       if (!payload.name || !payload.type || !(0, is_1.isNumber)(payload.duration)) {
         return;
       }
       var data = Object.assign(Object.assign({
         times: 1
       }, payload), {
         event_type: rum_event_1.RumEventType.RESOURCE
       });
       this.sendEvent(data);
     }
   }]);
 }();
 exports["default"] = Shell;

 /***/ }),
 /* 46 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
 function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
   function adopt(value) {
     return value instanceof P ? value : new P(function (resolve) {
       resolve(value);
     });
   }
   return new (P || (P = Promise))(function (resolve, reject) {
     function fulfilled(value) {
       try {
         step(generator.next(value));
       } catch (e) {
         reject(e);
       }
     }
     function rejected(value) {
       try {
         step(generator["throw"](value));
       } catch (e) {
         reject(e);
       }
     }
     function step(result) {
       result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
     }
     step((generator = generator.apply(thisArg, _arguments || [])).next());
   });
 };
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.ConfigManager = void 0;
 function parseRemoteConfig(config) {
   var remoteConfig = config.remoteConfig || {};
   var enable = false;
   if ('enable' in remoteConfig) {
     enable = !!remoteConfig.enable;
   } else if (remoteConfig.region || remoteConfig.url) {
     enable = true;
   }
   return {
     enable: enable,
     url: remoteConfig.url || '',
     mode: remoteConfig.mode || 'launch-first',
     cacheTimeout: remoteConfig.cacheTimeout || 3600000,
     region: remoteConfig.region
   };
 }
 var ConfigManager = /*#__PURE__*/function () {
   function ConfigManager() {
     _classCallCheck(this, ConfigManager);
     this.currentConfig = null;
     this.initialized = false;
   }
   return _createClass(ConfigManager, [{
     key: "init",
     value: function init(config) {
       return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee() {
         var _this = this;
         var remoteConfig, cacheConfig, asyncConfigPromise;
         return _regenerator().w(function (_context) {
           while (1) switch (_context.n) {
             case 0:
               if (!this.initialized) {
                 _context.n = 1;
                 break;
               }
               return _context.a(2);
             case 1:
               this.currentConfig = Object.assign({}, config);
               this.initialized = true;
               remoteConfig = parseRemoteConfig(config);
               this.currentConfig.remoteConfig = remoteConfig;
               if (remoteConfig.enable) {
                 _context.n = 2;
                 break;
               }
               return _context.a(2);
             case 2:
               _context.n = 3;
               return this.getCacheConfig();
             case 3:
               cacheConfig = _context.v;
               if (cacheConfig && cacheConfig.content) {
                 this.currentConfig = this.mergeRemoteCfg(cacheConfig.content);
               }
               if (!this.isCacheValid(cacheConfig, remoteConfig.cacheTimeout)) {
                 _context.n = 4;
                 break;
               }
               return _context.a(2);
             case 4:
               asyncConfigPromise = this.fetchRemoteCfg(this.currentConfig).then(function (resp) {
                 if (!resp) return;
                 var asyncRemoteConfig = _this.parseConfig(resp);
                 _this.currentConfig = _this.mergeRemoteCfg(asyncRemoteConfig);
                 _this.setCacheConfig({
                   timestamp: Date.now(),
                   content: resp
                 });
               });
               if (!(remoteConfig.mode === 'remote-first')) {
                 _context.n = 5;
                 break;
               }
               _context.n = 5;
               return asyncConfigPromise;
             case 5:
               return _context.a(2);
           }
         }, _callee, this);
       }));
     }
   }, {
     key: "getConfig",
     value: function getConfig() {
       if (!this.currentConfig) {
         throw new Error('Config not initialized');
       }
       return this.currentConfig;
     }
   }, {
     key: "setConfig",
     value: function setConfig(config) {
       return __awaiter(this, void 0, void 0, /*#__PURE__*/_regenerator().m(function _callee2() {
         return _regenerator().w(function (_context2) {
           while (1) switch (_context2.n) {
             case 0:
               if (this.currentConfig) {
                 _context2.n = 1;
                 break;
               }
               return _context2.a(2);
             case 1:
               this.currentConfig = Object.assign(Object.assign({}, this.currentConfig), config);
             case 2:
               return _context2.a(2);
           }
         }, _callee2, this);
       }));
     }
   }, {
     key: "isCacheValid",
     value: function isCacheValid(cachedData, cacheTimeout) {
       if (!cachedData || !cachedData.timestamp) {
         return false;
       }
       var timeout = cacheTimeout || 3600000;
       return Date.now() - cachedData.timestamp < timeout;
     }
   }, {
     key: "mergeRemoteCfg",
     value: function mergeRemoteCfg(remoteCfg) {
       var _this$currentConfig = this.currentConfig,
         pid = _this$currentConfig.pid,
         app = _this$currentConfig.app,
         endpoint = _this$currentConfig.endpoint,
         remoteConfig = _this$currentConfig.remoteConfig,
         beforeReport = _this$currentConfig.beforeReport,
         properties = _this$currentConfig.properties;
       return Object.assign(Object.assign(Object.assign({}, this.currentConfig), remoteCfg), {
         pid: pid,
         app: app,
         endpoint: endpoint,
         remoteConfig: remoteConfig,
         beforeReport: beforeReport,
         properties: properties
       });
     }
   }, {
     key: "destroy",
     value: function destroy() {
       this.currentConfig = null;
       this.initialized = false;
     }
   }]);
 }();
 exports.ConfigManager = ConfigManager;

 /***/ }),
 /* 47 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });

 /***/ }),
 /* 48 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });

 /***/ }),
 /* 49 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });

 /***/ }),
 /* 50 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });

 /***/ }),
 /* 51 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });

 /***/ }),
 /* 52 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.parseTracingOptions = exports.makeTracingHeaders = exports.isTraceOption = void 0;
 var match_1 = __webpack_require__(31);
 var is_1 = __webpack_require__(4);
 function isTraceOption(option) {
   return option && (0, match_1.isMatchOption)(option.match) && (0, is_1.isArray)(option.propagatorTypes);
 }
 exports.isTraceOption = isTraceOption;
 function makeTracingHeaders(traceId, spanId, sampled, propagatorTypes) {
   var subOption = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
   var tracingHeaders = {};
   var sample = sampled ? '1' : '0';
   if (propagatorTypes.includes('sw8')) {
     propagatorTypes = ['sw8'];
   }
   if (!(0, is_1.isArray)(propagatorTypes)) {
     propagatorTypes = [propagatorTypes];
   }
   propagatorTypes.forEach(function (propagatorType) {
     switch (propagatorType) {
       case 'jaeger':
         tracingHeaders['uber-trace-id'] = "".concat(traceId, ":").concat(spanId, ":0:").concat(sample);
         break;
       case 'b3':
         tracingHeaders['b3'] = "".concat(traceId, "-").concat(spanId, "-").concat(sample);
         break;
       case 'b3multi':
         tracingHeaders['X-B3-TraceId'] = traceId;
         tracingHeaders['X-B3-SpanId'] = spanId;
         tracingHeaders['X-B3-Sampled'] = sample;
         break;
       case 'sw8':
         if ((0, is_1.isFunction)(btoa)) {
           var traceIdStr = btoa(traceId);
           var segmentId = btoa(spanId);
           var service = btoa(subOption.appId);
           var instance = btoa(subOption.appVersion);
           var endpoint = btoa(subOption.viewName);
           var peer = btoa(subOption.host);
           tracingHeaders['sw8'] = "".concat(sample, "-").concat(traceIdStr, "-").concat(segmentId, "-", 0, "-").concat(service, "-").concat(instance, "-").concat(endpoint, "-").concat(peer);
         }
         break;
       case 'tracecontext':
       default:
         tracingHeaders['traceparent'] = "00-".concat(traceId, "-").concat(spanId, "-0").concat(sample);
         if (subOption.tracestate) {
           tracingHeaders['tracestate'] = subOption.tracestate;
         }
         break;
     }
   });
   if (subOption.baggage) {
     tracingHeaders['baggage'] = subOption.baggage;
   }
   return tracingHeaders;
 }
 exports.makeTracingHeaders = makeTracingHeaders;
 function parseTracingOptions(tracingOption) {
   var defPropagatorTypes = ['tracecontext'];
   if ((0, is_1.isBoolean)(tracingOption) || !tracingOption) {
     return {
       enable: !!tracingOption,
       sample: 100,
       propagatorTypes: defPropagatorTypes,
       allowedUrls: [],
       tracestate: true,
       baggage: false
     };
   }
   var _tracingOption$enable = tracingOption.enable,
     enable = _tracingOption$enable === void 0 ? true : _tracingOption$enable,
     _tracingOption$sample = tracingOption.sample,
     sample = _tracingOption$sample === void 0 ? 100 : _tracingOption$sample,
     _tracingOption$propag = tracingOption.propagatorTypes,
     propagatorTypes = _tracingOption$propag === void 0 ? defPropagatorTypes : _tracingOption$propag,
     _tracingOption$allowe = tracingOption.allowedUrls,
     allowedUrls = _tracingOption$allowe === void 0 ? [] : _tracingOption$allowe,
     _tracingOption$traces = tracingOption.tracestate,
     tracestate = _tracingOption$traces === void 0 ? true : _tracingOption$traces,
     _tracingOption$baggag = tracingOption.baggage,
     baggage = _tracingOption$baggag === void 0 ? false : _tracingOption$baggag;
   var traceOptions = [];
   if ((0, is_1.isArray)(allowedUrls) && allowedUrls.length) {
     allowedUrls.forEach(function (item) {
       if ((0, match_1.isMatchOption)(item)) {
         traceOptions.push({
           match: item,
           propagatorTypes: propagatorTypes
         });
       } else if (isTraceOption(item)) {
         traceOptions.push(item);
       }
     });
   }
   return {
     enable: (0, is_1.isBoolean)(enable) ? enable : true,
     sample: (0, is_1.isNumber)(sample) ? sample : 100,
     propagatorTypes: propagatorTypes,
     allowedUrls: traceOptions,
     tracestate: tracestate,
     baggage: baggage
   };
 }
 exports.parseTracingOptions = parseTracingOptions;

 /***/ }),
 /* 53 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.throttle = void 0;
 function throttle(fn, wait) {
   var lastInvoke = 0;
   var timer = null;
   var invoke = function invoke() {
     lastInvoke = Date.now();
     timer = null;
     fn();
   };
   var wrapped = function wrapped() {
     var remaining = wait - (Date.now() - lastInvoke);
     if (remaining <= 0) {
       if (timer) {
         clearTimeout(timer);
         timer = null;
       }
       invoke();
     } else if (!timer) {
       timer = setTimeout(invoke, remaining);
     }
   };
   wrapped.cancel = function () {
     if (timer) {
       clearTimeout(timer);
       timer = null;
     }
     lastInvoke = 0;
   };
   return wrapped;
 }
 exports.throttle = throttle;

 /***/ }),
 /* 54 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.createDisposableGroup = void 0;
 function createDisposableGroup() {
   var cleanups = [];
   return {
     add: function add() {
       cleanups.push.apply(cleanups, arguments);
     },
     dispose: function dispose() {
       cleanups.forEach(function (fn) {
         return fn();
       });
       cleanups.length = 0;
     }
   };
 }
 exports.createDisposableGroup = createDisposableGroup;

 /***/ }),
 /* 55 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.encodeLogGroup = exports.convertBundlesToLogGroup = exports.Telemetry = exports.callMonitored = exports.logger = void 0;
 var logger_1 = __webpack_require__(11);
 Object.defineProperty(exports, "logger", {
   enumerable: true,
   get: function get() {
     return logger_1.logger;
   }
 });
 Object.defineProperty(exports, "callMonitored", {
   enumerable: true,
   get: function get() {
     return logger_1.callMonitored;
   }
 });
 var telemetry_1 = __webpack_require__(24);
 Object.defineProperty(exports, "Telemetry", {
   enumerable: true,
   get: function get() {
     return telemetry_1.Telemetry;
   }
 });
 Object.defineProperty(exports, "convertBundlesToLogGroup", {
   enumerable: true,
   get: function get() {
     return telemetry_1.convertBundlesToLogGroup;
   }
 });
 var protobuf_1 = __webpack_require__(25);
 Object.defineProperty(exports, "encodeLogGroup", {
   enumerable: true,
   get: function get() {
     return protobuf_1.encodeLogGroup;
   }
 });

 /***/ }),
 /* 56 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.WebVitalsCollector = exports.PerfCollector = exports.PvCollector = exports.StaticResourceCollector = exports.FetchCollector = exports.XhrCollector = exports.LongTaskCollector = exports.WhiteScreenCollector = exports.ExceptionCollector = exports.ClickCollector = void 0;
 var click_1 = __webpack_require__(57);
 Object.defineProperty(exports, "ClickCollector", {
   enumerable: true,
   get: function get() {
     return click_1["default"];
   }
 });
 var index_1 = __webpack_require__(64);
 Object.defineProperty(exports, "ExceptionCollector", {
   enumerable: true,
   get: function get() {
     return index_1["default"];
   }
 });
 var blank_1 = __webpack_require__(66);
 Object.defineProperty(exports, "WhiteScreenCollector", {
   enumerable: true,
   get: function get() {
     return blank_1["default"];
   }
 });
 var longtask_1 = __webpack_require__(71);
 Object.defineProperty(exports, "LongTaskCollector", {
   enumerable: true,
   get: function get() {
     return longtask_1["default"];
   }
 });
 var xhr_1 = __webpack_require__(72);
 Object.defineProperty(exports, "XhrCollector", {
   enumerable: true,
   get: function get() {
     return xhr_1["default"];
   }
 });
 var fetch_1 = __webpack_require__(75);
 Object.defineProperty(exports, "FetchCollector", {
   enumerable: true,
   get: function get() {
     return fetch_1["default"];
   }
 });
 var static_resource_1 = __webpack_require__(76);
 Object.defineProperty(exports, "StaticResourceCollector", {
   enumerable: true,
   get: function get() {
     return static_resource_1["default"];
   }
 });
 var pv_1 = __webpack_require__(77);
 Object.defineProperty(exports, "PvCollector", {
   enumerable: true,
   get: function get() {
     return pv_1["default"];
   }
 });
 var perf_1 = __webpack_require__(78);
 Object.defineProperty(exports, "PerfCollector", {
   enumerable: true,
   get: function get() {
     return perf_1["default"];
   }
 });
 var webvitals_1 = __webpack_require__(79);
 Object.defineProperty(exports, "WebVitalsCollector", {
   enumerable: true,
   get: function get() {
     return webvitals_1["default"];
   }
 });

 /***/ }),
 /* 57 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports["default"] = void 0;
 var _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _rumCore = __webpack_require__(0),
   _base = __webpack_require__(5),
   _dom = __webpack_require__(12),
   _global = __webpack_require__(1),
   _configManager = __webpack_require__(6),
   NO_TRACK_USER_LIST = ["button", "a", "input", "select", "option", "textarea"],
   ATTRIBUTES_LIST = ["id", "name", "className", "href", "src"],
   INTERACTIVE_ELEMENTS = ["button", "a", "input", "select", "option", "textarea", "details", "summary", "audio", "video"],
   ClickCollector = exports["default"] = function () {
     function a() {
       var a = this;
       this.name = "click-collector", this.ctx = void 0, this.sendEvent = void 0, this.actionHandler = _rumCore.logger.wrap(function (b) {
         var c,
           d = b.target;
         if (d instanceof HTMLElement) {
           var e = a.getConfig();
           if (e.enable) {
             var f = a.getTargetElement(d, e);
             if (f) {
               var g = (0, _base.getCurrentTime)(b.timeStamp),
                 h = (0, _rumCore.formatNumber)((null === (c = _global.global.performance) || void 0 === c ? void 0 : c.now()) - b.timeStamp),
                 i = a.ctx.session.getBaseEvent(),
                 j = (0, _extends2["default"])({}, i, {
                   timestamp: g,
                   event_type: _rumCore.RumEventType.ACTION,
                   type: "click",
                   name: a.getElementName(f),
                   target_name: (0, _dom.getElementXpath)(f),
                   duration: h,
                   snapshots: a.getElementSnapshots(f)
                 });
               if (e.trackUserInteractions) {
                 j.position = a.getClickPosition(b, f), j.target = a.getTargetInfo(f, b);
                 var k = (0, _dom.getDocumentInfo)(),
                   l = k.width,
                   m = k.height;
                 j.viewport = {
                   width: l,
                   height: m
                 };
               }
               a.sendEvent(j);
             }
           }
         }
       }, "click-collector", "actionHandler failed");
     }
     var b = a.prototype;
     return b.setup = function (a, b) {
       (0, _configManager.checkEnable)(a, "click") && (this.ctx = a, this.sendEvent = b, _global.document.addEventListener("click", this.actionHandler, !0));
     }, b.getConfig = function () {
       var a,
         b,
         c = {
           name: "click",
           enable: !1,
           trackUserInteractions: !1
         },
         d = null === (a = this.ctx.getConfig()) || void 0 === a || null === (b = a.collectors) || void 0 === b ? void 0 : b.click;
       return !1 === d ? c : !0 === d ? (0, _extends2["default"])({}, c, {
         enable: !0
       }) : (0, _rumCore.isObject)(d) ? (0, _extends2["default"])({}, c, {
         enable: !0
       }, d) : c;
     }, b.getTargetElement = function (a, b) {
       return b.enable ? b.trackUserInteractions ? a : (0, _dom.getClosestTargetAncestorElement)(a, NO_TRACK_USER_LIST) : null;
     }, b.getElementName = function (a) {
       var b = a.localName,
         c = a.nodeName,
         d = a.innerText,
         e = (b || c).toLowerCase(),
         f = a.getAttribute("type"),
         g = d ? ": " + (20 < d.length ? d.slice(0, 20) + "..." : d) : "",
         h = f ? f + "-" : "";
       return "click on " + h + e + g;
     }, b.getElementSnapshots = function (a) {
       var b = {};
       return ATTRIBUTES_LIST.forEach(function (c) {
         var d;
         "id" === c ? d = a.id : "name" === c ? d = a.name : "className" === c ? d = a.className : "href" === c ? d = a.href : "src" === c ? d = a.src : void 0, d && (b[c] = d);
       }), 0 < Object.keys(b).length ? JSON.stringify(b).substring(0, 1e3) : void 0;
     }, b.getClickPosition = function (a, b) {
       var c,
         d,
         e = null !== (c = a.pageX) && void 0 !== c ? c : a.clientX + (_global.global.pageXOffset || _global.document.documentElement.scrollLeft || 0),
         f = null !== (d = a.pageY) && void 0 !== d ? d : a.clientY + (_global.global.pageYOffset || _global.document.documentElement.scrollTop || 0),
         g = b.getBoundingClientRect(),
         h = g.left + (_global.global.pageXOffset || _global.document.documentElement.scrollLeft || 0),
         i = g.top + (_global.global.pageYOffset || _global.document.documentElement.scrollTop || 0);
       return {
         x: Math.round(e),
         y: Math.round(f),
         ex: Math.round(e - h),
         ey: Math.round(f - i)
       };
     }, b.isInteractiveElement = function (a) {
       var b = (a.localName || a.nodeName).toLowerCase();
       return INTERACTIVE_ELEMENTS.includes(b) ? 1 : a.hasAttribute("onclick") || a.hasAttribute("role") && ["button", "link", "tab"].includes(a.getAttribute("role") || "") || null !== a.getAttribute("tabindex") || "pointer" === a.style.cursor ? 1 : 0;
     }, b.isTrustedInteraction = function (a, b) {
       if (!b.isTrusted) return 0;
       var c = a.getBoundingClientRect(),
         d = 20;
       if (c.width < d || c.height < d) return 0;
       var e = _global.global.getComputedStyle(a);
       return "none" === e.display || "hidden" === e.visibility || "0" === e.opacity ? 0 : 1;
     }, b.getTargetInfo = function (a, b) {
       var c = a.getBoundingClientRect();
       return {
         selector: (0, _dom.getElementSelector)(a),
         width: Math.round(c.width),
         height: Math.round(c.height),
         reaction: this.isInteractiveElement(a),
         trust: this.isTrustedInteraction(a, b)
       };
     }, b.destroy = function () {
       _global.document.removeEventListener("click", this.actionHandler, !0);
     }, a;
   }();

 /***/ }),
 /* 58 */
 /***/ (function(module, exports, __webpack_require__) {

 var OverloadYield = __webpack_require__(32);
 var regenerator = __webpack_require__(33);
 var regeneratorAsync = __webpack_require__(59);
 var regeneratorAsyncGen = __webpack_require__(35);
 var regeneratorAsyncIterator = __webpack_require__(36);
 var regeneratorKeys = __webpack_require__(60);
 var regeneratorValues = __webpack_require__(61);
 function _regeneratorRuntime() {
   "use strict";

   var r = regenerator(),
     e = r.m(_regeneratorRuntime),
     t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;
   function n(r) {
     var e = "function" == typeof r && r.constructor;
     return !!e && (e === t || "GeneratorFunction" === (e.displayName || e.name));
   }
   var o = {
     "throw": 1,
     "return": 2,
     "break": 3,
     "continue": 3
   };
   function a(r) {
     var e, t;
     return function (n) {
       e || (e = {
         stop: function stop() {
           return t(n.a, 2);
         },
         "catch": function _catch() {
           return n.v;
         },
         abrupt: function abrupt(r, e) {
           return t(n.a, o[r], e);
         },
         delegateYield: function delegateYield(r, o, a) {
           return e.resultName = o, t(n.d, regeneratorValues(r), a);
         },
         finish: function finish(r) {
           return t(n.f, r);
         }
       }, t = function t(r, _t, o) {
         n.p = e.prev, n.n = e.next;
         try {
           return r(_t, o);
         } finally {
           e.next = n.n;
         }
       }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;
       try {
         return r.call(this, e);
       } finally {
         n.p = e.prev, n.n = e.next;
       }
     };
   }
   return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
     return {
       wrap: function wrap(e, t, n, o) {
         return r.w(a(e), t, n, o && o.reverse());
       },
       isGeneratorFunction: n,
       mark: r.m,
       awrap: function awrap(r, e) {
         return new OverloadYield(r, e);
       },
       AsyncIterator: regeneratorAsyncIterator,
       async: function async(r, e, t, o, u) {
         return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);
       },
       keys: regeneratorKeys,
       values: regeneratorValues
     };
   }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
 }
 module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 59 */
 /***/ (function(module, exports, __webpack_require__) {

 var regeneratorAsyncGen = __webpack_require__(35);
 function _regeneratorAsync(n, e, r, t, o) {
   var a = regeneratorAsyncGen(n, e, r, t, o);
   return a.next().then(function (n) {
     return n.done ? n.value : a.next();
   });
 }
 module.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 60 */
 /***/ (function(module, exports) {

 function _regeneratorKeys(e) {
   var n = Object(e),
     r = [];
   for (var t in n) r.unshift(t);
   return function e() {
     for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;
     return e.done = !0, e;
   };
 }
 module.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 61 */
 /***/ (function(module, exports, __webpack_require__) {

 var _typeof = __webpack_require__(62)["default"];
 function _regeneratorValues(e) {
   if (null != e) {
     var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"],
       r = 0;
     if (t) return t.call(e);
     if ("function" == typeof e.next) return e;
     if (!isNaN(e.length)) return {
       next: function next() {
         return e && r >= e.length && (e = void 0), {
           value: e && e[r++],
           done: !e
         };
       }
     };
   }
   throw new TypeError(_typeof(e) + " is not iterable");
 }
 module.exports = _regeneratorValues, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 62 */
 /***/ (function(module, exports) {

 function _typeof(o) {
   "@babel/helpers - typeof";

   return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
     return typeof o;
   } : function (o) {
     return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
   }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
 }
 module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 63 */
 /***/ (function(module, exports) {

 function _setPrototypeOf(t, e) {
   return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
     return t.__proto__ = e, t;
   }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
 }
 module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

 /***/ }),
 /* 64 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports["default"] = void 0;
 var _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _rumCore = __webpack_require__(0),
   _global = __webpack_require__(1),
   _stackParser = __webpack_require__(65),
   _configManager = __webpack_require__(6),
   _types = __webpack_require__(37),
   ExceptionCollector = exports["default"] = function () {
     function a() {
       this.name = "exception-collector", this.ctx = void 0, this.sendEvent = void 0, this.errorHandle = void 0, this.rejectHandle = void 0;
     }
     var b = a.prototype;
     return b.setup = function (a, b) {
       this.ctx = a, this.sendEvent = b;
       var c = this;
       (0, _configManager.checkEnable)(a, "consoleError") && (0, _rumCore.interceptFunction)(_global.global.console, _types.ExceptionEventType.error, _rumCore.logger.wrap(function () {
         for (var a = arguments.length, b = Array(a), d = 0; d < a; d++) b[d] = arguments[d];
         (b || []).forEach(function (a) {
           return c.sendError(_types.ExceptionSource.console, a);
         });
       }, "exception-collector", "Failed to process console.error")), (0, _configManager.checkEnable)(a, "jsError") && (!this.errorHandle && (this.errorHandle = this.sendError.bind(this, _types.ExceptionSource.onError)), !this.rejectHandle && (this.rejectHandle = this.sendError.bind(this, _types.ExceptionSource.unhandled)), _global.global.addEventListener(_types.ExceptionEventType.error, this.errorHandle, !0), _global.global.addEventListener(_types.ExceptionEventType.unhandled, this.rejectHandle, !0));
     }, b.destroy = function () {
       (0, _rumCore.restoreFunction)(_global.global.console, _types.ExceptionEventType.error), _global.global.removeEventListener(_types.ExceptionEventType.error, this.errorHandle, !0), _global.global.removeEventListener(_types.ExceptionEventType.unhandled, this.rejectHandle, !0);
     }, b.sendError = function (a, b) {
       try {
         if (!(0, _rumCore.isObject)(b)) return;
         var c = b.target || b.srcElement;
         if (c && c.nodeName && 1 === c.nodeType) return;
         var d, e, f, g;
         if (b instanceof PromiseRejectionEvent ? d = b.reason : b instanceof ErrorEvent ? (d = b.error, e = b.colno, f = b.lineno, g = b.filename) : d = b, !(0, _rumCore.isObject)(d)) return;
         var h = d,
           i = h.name,
           j = h.message,
           k = h.stack;
         if (!i || !j || this.errorFilter(d)) return;
         var l = this.ctx.session.getBaseEvent(),
           m = (0, _extends2["default"])({}, l, {
             event_type: _rumCore.RumEventType.EXCEPTION,
             type: _types.ExceptionEventType.error,
             source: a,
             name: i,
             message: j,
             stack: k,
             file: g,
             line: f,
             column: e
           }),
           n = (0, _stackParser.getDebugIdsMap)(k);
         n && (m.binary_images = n), this.sendEvent(m);
       } catch (a) {
         _rumCore.logger.error("exception-collector", "sendError processing failed", a);
       }
     }, b.errorFilter = function (a) {
       var b,
         c = this.ctx.getConfig().filters || {},
         d = c.exception;
       if (!d) b = [];else if ((0, _rumCore.isMatchOption)(d)) b = [d];else if ((0, _rumCore.isArray)(d)) b = d;else return !1;
       var e = [].concat(b, [/^Script error\.?$/, /failed[\w\s]+fetch/i]);
       return (0, _rumCore.matchList)(e, a.name, !0, a) || (0, _rumCore.matchList)(e, a.message, !0, a) || (0, _rumCore.matchList)(e, a.stack, !0, a);
     }, a;
   }();

 /***/ }),
 /* 65 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 exports.__esModule = !0, exports.getDebugIdsMap = void 0;
 var _global = __webpack_require__(1),
   recordDebugIdsMap = new Map(),
   getDebugIdsMap = exports.getDebugIdsMap = function (a) {
     var b = parseStack(a),
       c = b.reduce(function (a, b) {
         var c = b.filename;
         return c ? (recordDebugIdsMap.has(c) || updateRecordDebugIdsMap(), recordDebugIdsMap.has(c) && (a[c] = recordDebugIdsMap.get(c)), a) : a;
       }, {});
     return c;
   },
   updateRecordDebugIdsMap = function updateRecordDebugIdsMap() {
     [_global.global._armsRumDebugIds, _global.global._sentryDebugIds].forEach(function (a) {
       a && Object.keys(a).forEach(function (b) {
         var c = parseStack(b, {
             onlyTop: !0
           }),
           d = c.length && c[0].filename;
         d && !recordDebugIdsMap.has(d) && recordDebugIdsMap.set(d, a[b]);
       });
     });
   },
   parseStack = function parseStack(a, b) {
     var c = b || {},
       d = c.initLine,
       e = void 0 === d ? 0 : d,
       f = c.onlyTop,
       g = [];
     if ("string" != typeof a) return g;
     var h = a.split("\n");
     if (h.length) for (var j, k = e; k < h.length; k++) if (j = h[k], isParseableLine(j)) try {
       j = preprocessLine(j);
       var l = parseLine(j);
       if (l && (g.push(l), void 0 !== f && f)) break;
     } catch (a) {}
     return g;
   },
   isParseableLine = function isParseableLine(a) {
     return !(1024 < a.length);
   },
   WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/,
   preprocessLine = function preprocessLine(a) {
     return WEBPACK_ERROR_REGEXP.test(a) ? a.replace(WEBPACK_ERROR_REGEXP, "$1") : a;
   },
   parseLine = function parseLine(a) {
     var b;
     return b = parseChromeLine(a), b || (b = parseGeckoLine(a)), b;
   },
   chromeRegexNoFnName = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
   chromeRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
   chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/,
   parseChromeLine = function parseChromeLine(a) {
     var b = chromeRegexNoFnName.exec(a);
     if (b) {
       var c = b[1],
         d = b[2],
         e = b[3];
       return createFrame(c, UNKNOWN_FUNCTION, +d, +e);
     }
     var f = chromeRegex.exec(a);
     if (f) {
       var g = f[2] && 0 === f[2].indexOf("eval");
       if (g) {
         var h = chromeEvalRegex.exec(f[2]);
         h && (f[2] = h[1], f[3] = h[2], f[4] = h[3]);
       }
       var i = extractSafariExtensionDetails(f[1] || UNKNOWN_FUNCTION, f[2]),
         j = i[0],
         k = i[1];
       return createFrame(k, j, f[3] ? +f[3] : void 0, f[4] ? +f[4] : void 0);
     }
     return null;
   },
   geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
   geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
   parseGeckoLine = function parseGeckoLine(a) {
     var b = geckoREgex.exec(a);
     if (b) {
       var c = b[3] && -1 < b[3].indexOf(" > eval");
       if (c) {
         var d = geckoEvalRegex.exec(b[3]);
         d && (b[1] = b[1] || "eval", b[3] = d[1], b[4] = d[2], b[5] = "");
       }
       var e = b[3],
         f = b[1] || UNKNOWN_FUNCTION,
         g = extractSafariExtensionDetails(f, e);
       return f = g[0], e = g[1], createFrame(e, f, b[4] ? +b[4] : void 0, b[5] ? +b[5] : void 0);
     }
     return null;
   },
   extractSafariExtensionDetails = function extractSafariExtensionDetails(a, b) {
     var c = -1 !== a.indexOf("safari-extension"),
       d = -1 !== a.indexOf("safari-web-extension");
     return c || d ? [-1 === a.indexOf("@") ? UNKNOWN_FUNCTION : a.split("@")[0], c ? "safari-extension:" + b : "safari-web-extension:" + b] : [a, b];
   },
   UNKNOWN_FUNCTION = "UNKNOWN_FUNCTION",
   createFrame = function createFrame(a, b, c, d) {
     var e = {
       filename: a,
       "function": "<anonymous>" === b ? UNKNOWN_FUNCTION : b
     };
     return void 0 !== c && (e.lineno = c), void 0 !== d && (e.colno = d), e;
   };

 /***/ }),
 /* 66 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports["default"] = void 0;
 var _regenerator = _interopRequireDefault(__webpack_require__(8)),
   _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(9)),
   _rumCore = __webpack_require__(0),
   _blank = __webpack_require__(67),
   _global = __webpack_require__(1),
   _url2 = __webpack_require__(7),
   _event = __webpack_require__(39);
 function _createForOfIteratorHelperLoose(a, b) {
   var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
   if (c) return (c = c.call(a)).next.bind(c);
   if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && "number" == typeof a.length) {
     c && (a = c);
     var d = 0;
     return function () {
       return d >= a.length ? {
         done: !0
       } : {
         done: !1,
         value: a[d++]
       };
     };
   }
   throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
 }
 function _unsupportedIterableToArray(b, c) {
   if (b) {
     if ("string" == typeof b) return _arrayLikeToArray(b, c);
     var a = {}.toString.call(b).slice(8, -1);
     return "Object" === a && b.constructor && (a = b.constructor.name), "Map" === a || "Set" === a ? Array.from(b) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? _arrayLikeToArray(b, c) : void 0;
   }
 }
 function _arrayLikeToArray(b, c) {
   (null == c || c > b.length) && (c = b.length);
   for (var d = 0, f = Array(c); d < c; d++) f[d] = b[d];
   return f;
 }
 var timer = null,
   eventRegistrationMap = {
     LEAVE: function LEAVE(a) {
       return _global.document.addEventListener("beforeunload", a), function () {
         return _global.document.removeEventListener("beforeunload", a);
       };
     },
     ERROR: function ERROR(a) {
       return _global.global.addEventListener("error", a), function () {
         return _global.global.removeEventListener("error", a);
       };
     },
     LOAD: function LOAD(a) {
       return "complete" === _global.document.readyState ? (setTimeout(a, 0), function () {}) : (_global.global.addEventListener("load", a), function () {
         return _global.global.removeEventListener("load", a);
       });
     }
   },
   WhiteScreenCollector = exports["default"] = function () {
     function a() {
       var a = this;
       this.name = "white-screen-collector", this.observers = (0, _rumCore.createDisposableGroup)(), this.ctx = void 0, this.sendEvent = void 0, this.abort = function () {
         a.observers.dispose();
       }, this.blankHandler = function () {
         var b = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function e(b, c, d) {
           var f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
           return _regenerator["default"].wrap(function (e) {
             for (;;) switch (e.prev = e.next) {
               case 0:
                 if (f = b.target, g = b.tester, h = b.delay, i = void 0 === h ? 0 : h, j = b.configOptions, k = void 0 === j ? {} : j, l = b.ignoreUrlList, m = void 0 === l ? [] : l, void 0 === d && (d = !0), !d) {
                   e.next = 6;
                   break;
                 }
                 if (!(m.includes(_global.location.pathname) || m.includes(_global.location.hash))) {
                   e.next = 1;
                   break;
                 }
                 return e.abrupt("return");
               case 1:
                 e.prev = 1, n = _createForOfIteratorHelperLoose(m);
               case 2:
                 if ((o = n()).done) {
                   e.next = 4;
                   break;
                 }
                 if (p = o.value, q = new RegExp(p), !q.test(_global.location.href)) {
                   e.next = 3;
                   break;
                 }
                 return e.abrupt("return");
               case 3:
                 e.next = 2;
                 break;
               case 4:
                 e.next = 6;
                 break;
               case 5:
                 e.prev = 5, t = e["catch"](1), _rumCore.logger.warn("blank-collector", "Failed to check ignoreUrlList", {
                   error: t
                 });
               case 6:
                 if (r = _global.document.querySelector(f), r && g) {
                   e.next = 7;
                   break;
                 }
                 return e.abrupt("return");
               case 7:
                 if ((0, _blank.testerValidator)(g)) {
                   e.next = 8;
                   break;
                 }
                 return _rumCore.logger.warn("blank-collector", "Invalid tester type, expected either a function or a string"), e.abrupt("return");
               case 8:
                 timer && (clearTimeout(timer), timer = null), s = (0, _url2.getCurrentURL)(), timer = "LEAVE" !== c && "ERROR" !== c ? setTimeout(function () {
                   a.blankChecker(g, r, k, c, s);
                 }, i) : setTimeout(function () {
                   a.blankChecker(g, r, k, c, s);
                 }, 0);
               case 9:
               case "end":
                 return e.stop();
             }
           }, e, null, [[1, 5]]);
         }));
         return function () {
           return b.apply(this, arguments);
         };
       }(), this.blankChecker = function () {
         var b = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function g(b, c, d, e, f) {
           var h, i, j, k, l, m, n;
           return _regenerator["default"].wrap(function (g) {
             for (;;) switch (g.prev = g.next) {
               case 0:
                 return g.next = 1, (0, _blank.blankCheck)(b, c, d);
               case 1:
                 if (h = g.sent, i = h.hasContent, j = h.message, k = void 0 === j ? "" : j, l = h.snapshot, !i) {
                   g.next = 2;
                   break;
                 }
                 return g.abrupt("return");
               case 2:
                 m = a.ctx.session.getBaseEvent(), n = (0, _extends2["default"])({}, m, {
                   event_type: _rumCore.RumEventType.EXCEPTION,
                   name: "A white screen occurs at " + e,
                   type: "blank",
                   message: k,
                   snapshots: JSON.stringify((0, _extends2["default"])({}, l, {
                     when: e,
                     url: f
                   }))
                 }), a.sendEvent(n), a.abort();
               case 3:
               case "end":
                 return g.stop();
             }
           }, g);
         }));
         return function () {
           return b.apply(this, arguments);
         };
       }(), this.checkWhiteBlank = function () {
         var b = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function c(b) {
           return _regenerator["default"].wrap(function (c) {
             for (;;) switch (c.prev = c.next) {
               case 0:
                 a.blankHandler(b, "CUSTOM");
               case 1:
               case "end":
                 return c.stop();
             }
           }, c);
         }));
         return function () {
           return b.apply(this, arguments);
         };
       }();
     }
     var b = a.prototype;
     return b.setup = function (a, b) {
       var c = this;
       this.ctx = a, this.sendEvent = b;
       var d = a.getConfig(),
         e = d.whiteScreen,
         f = d.spaMode;
       if (e) {
         var g = e.detectionRules;
         Array.isArray(g) && g.length && g.forEach(function (b) {
           b.test_when && b.test_when.forEach(function (d) {
             var e = _rumCore.logger.wrap(function () {
               c.blankHandler(b, d);
             }, "blank-collector", "Failed to inject blank handler");
             if ("ROUTE_CHANGE" === d) {
               var g = function g(a) {
                 "initial_load" === (null === a || void 0 === a ? void 0 : a.loading_type) || e();
               };
               return a.emitter.on(_event.LifeCycleEventType.VIEW_CREATED, g), void c.observers.add(function () {
                 return a.emitter.off(_event.LifeCycleEventType.VIEW_CREATED, g);
               });
             }
             var h = eventRegistrationMap[d];
             if (h) {
               var i = h(e, f);
               c.observers.add(i);
             }
           });
         });
       }
     }, b.destroy = function () {
       this.abort();
     }, a;
   }();

 /***/ }),
 /* 67 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports.testerValidator = exports.blankCheckWithSingleMethod = exports.blankCheck = void 0;
 var _regenerator = _interopRequireDefault(__webpack_require__(8)),
   _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(9)),
   _screenshotCheck = __webpack_require__(68),
   _sampleCheck = __webpack_require__(70),
   testerValidator = exports.testerValidator = function (a) {
     if ("function" == typeof a) return !0;
     return !("string" != typeof a) && ["HAS_CONTENT", "SCREENSHOT", "SAMPLE"].includes(a);
   },
   blankCheck = exports.blankCheck = function () {
     var a = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function d(a, b, c) {
       var e, f, g, h, i, j;
       return _regenerator["default"].wrap(function (d) {
         for (;;) switch (d.prev = d.next) {
           case 0:
             if ("function" != typeof a) {
               d.next = 2;
               break;
             }
             return d.next = 1, a(b);
           case 1:
             return e = d.sent, f = e.hasContent, g = e.message, h = void 0 === g ? "" : g, i = e.snapshot, j = void 0 === i ? {} : i, d.abrupt("return", {
               hasContent: f,
               message: h,
               snapshot: (0, _extends2["default"])({}, j, {
                 method: "CUSTOM"
               })
             });
           case 2:
             if ("string" != typeof a) {
               d.next = 4;
               break;
             }
             return d.next = 3, blankCheckWithSingleMethod(a, b, c);
           case 3:
             return d.abrupt("return", d.sent);
           case 4:
           case "end":
             return d.stop();
         }
       }, d);
     }));
     return function () {
       return a.apply(this, arguments);
     };
   }(),
   blankCheckWithSingleMethod = exports.blankCheckWithSingleMethod = function () {
     var a = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function d(a, b, c) {
       var e, f, g, h, i, j;
       return _regenerator["default"].wrap(function (d) {
         for (;;) switch (d.prev = d.next) {
           case 0:
             if ("HAS_CONTENT" !== a) {
               d.next = 1;
               break;
             }
             return d.abrupt("return", {
               hasContent: null !== b && void 0 !== b && b.textContent,
               snapshot: {
                 method: a
               }
             });
           case 1:
             if ("SCREENSHOT" !== a) {
               d.next = 3;
               break;
             }
             return d.next = 2, (0, _screenshotCheck.performScreenshotCheck)(b, c);
           case 2:
             return e = d.sent, f = e.result, g = Object.assign({}, e), delete g.result, d.abrupt("return", {
               hasContent: f,
               message: f ? "" : generateMessage(g),
               snapshot: (0, _extends2["default"])({
                 method: a
               }, g)
             });
           case 3:
             if ("SAMPLE" !== a) {
               d.next = 4;
               break;
             }
             return h = (0, _sampleCheck.performSampleCheck)(b, c), i = h.result, j = Object.assign({}, h), delete j.result, d.abrupt("return", {
               hasContent: i,
               message: i ? "" : generateMessage(j),
               snapshot: (0, _extends2["default"])({
                 method: a
               }, j)
             });
           case 4:
           case "end":
             return d.stop();
         }
       }, d);
     }));
     return function () {
       return a.apply(this, arguments);
     };
   }(),
   generateMessage = function generateMessage(a) {
     return "The white screen occurrence rate is " + a.rate + ", exceeding the threshold of " + a.threshold + ". A total of " + a.checkPoints + " detection points were set, and " + a.whitePixels + " of them were hit.";
   };

 /***/ }),
 /* 68 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports.performScreenshotCheck = void 0;
 var _regenerator = _interopRequireDefault(__webpack_require__(8)),
   _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(9)),
   _html2canvas = __webpack_require__(69),
   _global = __webpack_require__(1),
   performScreenshotCheck = exports.performScreenshotCheck = function () {
     var a = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function c(a, b) {
       var d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, z, A, B, C, D, E, F, G, H, I, J, K;
       return _regenerator["default"].wrap(function (c) {
         for (;;) switch (c.prev = c.next) {
           case 0:
             if (void 0 === b && (b = {}), c.prev = 1, d = _global.global.innerWidth, e = _global.global.innerHeight, f = {
               colorRange: ["rgb(255, 255, 255)"],
               horizontalOffset: 0,
               verticalOffset: 0,
               pixels: 10,
               threshold: .8,
               dpr: .3,
               debug: !1,
               ignoreElements: [],
               fillColor: "rgba(0, 100, 200, 255)"
             }, g = (0, _extends2["default"])({}, f, b), h = g.debug, i = g.colorRange, j = g.horizontalOffset, k = g.verticalOffset, l = g.pixels, m = g.threshold, n = g.dpr, o = d * n, p = e * n, q = _global.document.createElement("canvas"), q.height = p, q.width = o, q.style.width = o + "px", q.style.height = p + "px", r = q.getContext("2d", {
               willReadFrequently: !0
             }), s = (0, _html2canvas.html2canvas)(a, {
               ignoreElements: g.ignoreElements,
               fillColor: g.fillColor
             }), "string" != typeof s) {
               c.next = 2;
               break;
             }
             return c.abrupt("return", {
               result: !0,
               image: null,
               error: null
             });
           case 2:
             return t = new Image(), t.src = s.toDataURL("image/png"), t.crossOrigin = "Anonymous", c.next = 3, new Promise(function (a) {
               t.addEventListener("load", function () {
                 return a();
               });
             });
           case 3:
             for (r.drawImage(t, 0, 0, o, p), u = 0, v = 2 * l, w = 2 * l, z = Math.floor((o - j * n) / v), A = Math.floor((p - k * n) / w), B = z * A, C = 0; C < z; C++) for (D = 0; D < A; D++) E = C * v, F = D * w, G = r.getImageData(E + j * n, F + k * n, l, l), H = G.data, isPureColor(H, i) && u++;
             return I = {
               result: u < B * m,
               rate: u / B,
               image: t.src,
               whitePixels: u,
               checkPoints: B,
               threshold: m
             }, h && console.log(I), c.abrupt("return", I);
           case 4:
             return c.prev = 4, K = c["catch"](1), (null === (J = b) || void 0 === J ? void 0 : J.debug) && console.log("[RUM] Failed to inject blank handler: ", K), c.abrupt("return", {
               result: !0,
               image: null,
               error: K.toString()
             });
           case 5:
           case "end":
             return c.stop();
         }
       }, c, null, [[1, 4]]);
     }));
     return function () {
       return a.apply(this, arguments);
     };
   }(),
   isPureColor = function isPureColor(a, b) {
     for (var c, d = !0, e = 0; e < a.length; e += 4) if (c = "rgb(" + a[e] + ", " + a[e + 1] + ", " + a[e + 2] + ")", !b.includes(c)) {
       d = !1;
       break;
     }
     return d;
   };

 /***/ }),
 /* 69 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports.html2canvas = void 0;
 var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(14)),
   _utils = __webpack_require__(38),
   _global = __webpack_require__(1),
   Bounds = function () {
     function a(a) {
       this.top = void 0, this.left = void 0, this.width = void 0, this.height = void 0;
       var b = a.getBoundingClientRect(),
         c = b.top,
         d = b.left,
         e = b.width,
         f = b.height;
       this.top = c, this.left = d, this.width = e, this.height = f;
     }
     return a.getPoints = function (a) {
       var b = a.top,
         c = a.left,
         d = a.width,
         e = a.height;
       return [[c, b], [c + d, b], [c + d, b + e], [c, b + e]];
     }, a;
   }(),
   StackingContext = function () {
     function a(a) {
       this.container = void 0, this.nonInlineLevel = void 0, this.inlineLevel = void 0, this.negativeZIndex = void 0, this.positiveZIndex = void 0, this.zeroOrAutoZIndexOrTransformedOrOpacity = void 0, this.container = a, this.negativeZIndex = [], this.nonInlineLevel = [], this.inlineLevel = [], this.positiveZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
     }
     return a.stackingSortCompare = function (c, a) {
       return +c.container.styles.zIndex - +a.container.styles.zIndex;
     }, a;
   }(),
   TextContainer = function () {
     function a(a, b, c) {
       this.bounds = void 0, this.text = void 0, this.parent = void 0, this.bounds = this.getTrueBounds(b, c), this.text = a, this.parent = b;
     }
     var b = a.prototype;
     return b.getTrueBounds = function (a, b) {
       if (b) try {
         var c = _global.document.createRange();
         c.selectNodeContents(b);
         var d = c.getBoundingClientRect();
         return {
           top: d.top,
           left: d.left,
           width: d.width,
           height: d.height
         };
       } catch (a) {}
       return this.getTrueBoundsFallback(a);
     }, b.getTrueBoundsFallback = function (a) {
       var b = a.bounds,
         c = b.top,
         d = b.left,
         e = b.width,
         f = b.height,
         g = a.styles,
         h = g.paddingLeft,
         i = g.paddingTop,
         j = g.borderWidth,
         k = g.fontSize;
       return c += parseInt(i) + parseInt(j) + parseInt(k), d += parseInt(h) + parseInt(j), {
         top: c,
         left: d,
         width: e,
         height: f
       };
     }, a;
   }(),
   ElementContainer = function ElementContainer(a) {
     this.styles = void 0, this.bounds = void 0, this.elements = void 0, this.textNodes = void 0, this.stackingFlag = void 0, this.element = void 0, this.styles = _global.global.getComputedStyle(a), this.bounds = new Bounds(a), this.elements = [], this.textNodes = [], this.stackingFlag = !1, this.element = a;
   },
   ImageElementContainer = function (a) {
     function b(b) {
       var c;
       return c = a.call(this, b) || this, c.intrinsicWidth = void 0, c.intrinsicHeight = void 0, c.intrinsicWidth = b.width, c.intrinsicHeight = b.height, c;
     }
     return (0, _inheritsLoose2["default"])(b, a), b;
   }(ElementContainer),
   InputElementContainer = function (a) {
     function b(b) {
       var c;
       return c = a.call(this, b) || this, c.type = void 0, c.value = void 0, c.type = b.type.toLowerCase(), c.value = "password" === b.type ? Array(b.value.length + 1).join("\u2022") : b.value || b.placeholder, c;
     }
     return (0, _inheritsLoose2["default"])(b, a), b;
   }(ElementContainer),
   SelectElementContainer = function (a) {
     function b(b) {
       var c;
       c = a.call(this, b) || this, c.value = void 0;
       var d = b.options[b.selectedIndex || 0];
       return c.value = d ? d.text || "" : "", c;
     }
     return (0, _inheritsLoose2["default"])(b, a), b;
   }(ElementContainer),
   CanvasElementContainer = function (a) {
     function b(b) {
       var c;
       return c = a.call(this, b) || this, c.intrinsicWidth = void 0, c.intrinsicHeight = void 0, c.intrinsicWidth = b.width, c.intrinsicHeight = b.height, c;
     }
     return (0, _inheritsLoose2["default"])(b, a), b;
   }(ElementContainer),
   VideoElementContainer = function (a) {
     function b(b) {
       var c;
       return c = a.call(this, b) || this, c.intrinsicWidth = void 0, c.intrinsicHeight = void 0, c.intrinsicWidth = b.offsetWidth, c.intrinsicHeight = b.offsetHeight, c;
     }
     return (0, _inheritsLoose2["default"])(b, a), b;
   }(ElementContainer),
   SVGElementContainer = function (a) {
     function b(b) {
       var c;
       return c = a.call(this, b) || this, c.intrinsicWidth = void 0, c.intrinsicHeight = void 0, c.intrinsicWidth = b.width.baseVal.value, c.intrinsicHeight = b.height.baseVal.value, c;
     }
     return (0, _inheritsLoose2["default"])(b, a), b;
   }(ElementContainer),
   IFrameElementContainer = function (a) {
     function b(b) {
       var c;
       c = a.call(this, b) || this, c.intrinsicWidth = void 0, c.intrinsicHeight = void 0;
       var d = new Bounds(b),
         e = d.width,
         f = d.height;
       return c.intrinsicWidth = e, c.intrinsicHeight = f, c;
     }
     return (0, _inheritsLoose2["default"])(b, a), b;
   }(ElementContainer),
   CanvasRenderer = function () {
     function a(a) {
       this.canvas = void 0, this.ctx2d = void 0, this.options = void 0, this.canvas = _global.document.createElement("canvas"), this.ctx2d = this.canvas.getContext("2d"), this.options = a;
     }
     var b = a.prototype;
     return b.renderStack = function (a) {
       var b = this,
         c = a.negativeZIndex,
         d = void 0 === c ? [] : c,
         e = a.nonInlineLevel,
         f = void 0 === e ? [] : e,
         g = a.inlineLevel,
         h = void 0 === g ? [] : g,
         i = a.positiveZIndex,
         j = void 0 === i ? [] : i,
         k = a.zeroOrAutoZIndexOrTransformedOrOpacity,
         l = void 0 === k ? [] : k;
       d.sort(StackingContext.stackingSortCompare), j.sort(StackingContext.stackingSortCompare), this.ctx2d.save(), this.setOpacity(a.container), this.renderNodeBackgroundAndBorders(a.container), d.map(function (a) {
         return b.renderStack(a);
       }), this.renderNodeContent(a.container), f.map(function (a) {
         return b.renderNode(a);
       }), h.map(function (a) {
         return b.renderNode(a);
       }), l.map(function (a) {
         return b.renderStack(a);
       }), j.map(function (a) {
         return b.renderStack(a);
       }), this.ctx2d.restore();
     }, b.renderNode = function (a) {
       this.renderNodeBackgroundAndBorders(a), this.renderNodeContent(a);
     }, b.setOpacity = function (a) {
       var b = a.styles,
         c = this.ctx2d,
         d = +b.opacity;
       1 > d && (c.globalAlpha = d);
     }, b.renderNodeBackgroundAndBorders = function (a) {
       var b = a.bounds,
         c = a.styles,
         d = c.backgroundColor,
         e = c.backgroundImage,
         f = parseInt(c.borderWidth),
         g = Bounds.getPoints(b);
       if ("none" !== e) {
         var h = this.options.fillColor;
         this.drawFillRect(g, h);
       } else "0" !== d.slice(5, -1).split(", ")[3] && this.drawFillRect(g, d);
       if (f) {
         var i = c.borderColor;
         this.drawBorderRect(g, f, i);
       }
     }, b.renderNodeContent = function (a) {
       var b = this;
       ("I" === a.element.tagName || a instanceof ImageElementContainer || a instanceof IFrameElementContainer || a instanceof CanvasElementContainer || a instanceof VideoElementContainer || a instanceof SVGElementContainer) && this.renderReplacedElement(a), a instanceof SelectElementContainer && this.renderText(new TextContainer(a.value, a), a.styles), a instanceof InputElementContainer && this.renderInput(a), a.textNodes.length && a.textNodes.map(function (c) {
         return b.renderText(c, a.styles);
       });
     }, b.renderText = function (a, b) {
       var c = this.ctx2d;
       c.save(), c.font = b.fontWeight + " " + b.fontSize + " " + b.fontFamily, c.fillStyle = b.color;
       try {
         var d = c.measureText("M"),
           e = parseFloat(b.fontSize) || 16,
           f = parseFloat(b.lineHeight) || 1.2 * e,
           g = a.bounds.height > 1.5 * f,
           h = ["pre", "pre-wrap", "pre-line"].includes(b.whiteSpace),
           j = h ? a.text : a.text.replace(/\n/g, " ");
         if (g) {
           var k = a.bounds.top + d.fontBoundingBoxAscent;
           if (h && j.includes("\n")) {
             var l = j.split("\n");
             l.forEach(function (b) {
               c.fillText(b, a.bounds.left, k), k += f;
             });
           } else {
             var m = c.measureText(j.trim()).width,
               n = Math.ceil(m / a.bounds.width);
             if (1 >= n) c.fillText(j, a.bounds.left, k);else for (var o = Math.ceil(j.length / n), p = 0; p < n; p++) {
               var q = p * o,
                 r = Math.min(q + o, j.length),
                 s = j.substring(q, r);
               c.fillText(s, a.bounds.left, k), k += f;
             }
           }
         } else c.fillText(j, a.bounds.left, a.bounds.top + d.fontBoundingBoxAscent);
       } catch (b) {
         c.fillText(a.text, a.bounds.left, a.bounds.top);
       }
       c.restore();
     }, b.renderInput = function (a) {
       var b = a.value,
         c = a.styles,
         d = new TextContainer(b, a);
       this.renderText(d, c);
     }, b.renderReplacedElement = function (a) {
       if (0 < a.intrinsicWidth && 0 < a.intrinsicHeight || "I" === a.element.tagName) {
         var b = a.bounds,
           c = a.styles,
           d = this.options.fillColor,
           e = parseInt(c.borderWidth),
           f = Bounds.getPoints(b);
         this.drawFillRect(f, d), e && this.drawBorderRect(f, e, d);
       }
     }, b.render = function (a) {
       var b = this.canvas,
         c = this.ctx2d,
         d = (0, _utils.getTrueArea)(a),
         e = d.width,
         f = d.height,
         g = d.left,
         h = d.top;
       b.width = e, b.height = f, b.style.width = e + "px", b.style.height = f + "px", c.scale(1, 1), c.fillStyle = "#fff", c.translate(-g, -h), c.fillRect(g, h, e, f);
       var i = parseTree(a, this.options),
         j = parseStackingContext(i);
       return this.renderStack(j), this.canvas;
     }, b.drawPathByPoints = function (a) {
       var b = this;
       a.map(function (a, c) {
         0 === c ? b.ctx2d.moveTo(a[0], a[1]) : b.ctx2d.lineTo(a[0], a[1]);
       });
     }, b.drawFillRect = function (a, b) {
       var c = this.ctx2d;
       c.save(), c.beginPath(), this.drawPathByPoints(a), c.closePath(), c.fillStyle = b, c.fill(), c.restore();
     }, b.drawBorderRect = function (a, b, c) {
       var d = this.ctx2d,
         e = this.getBorderPoints(a, b);
       d.save(), d.beginPath(), this.drawPathByPoints(e), d.closePath(), d.lineWidth = b, d.strokeStyle = c, d.stroke(), d.restore();
     }, b.getBorderPoints = function (a, b) {
       var c = a[0],
         d = a[1],
         e = a[2],
         f = a[3];
       return [[c[0] + b / 2, c[1] + b / 2], [d[0] - b / 2, d[1] + b / 2], [e[0] - b / 2, e[1] - b / 2], [f[0] + b / 2, f[1] - b / 2]];
     }, a;
   }(),
   isElementOutOfViewport = function isElementOutOfViewport(a) {
     try {
       var b = a.getBoundingClientRect(),
         c = _global.global.innerHeight || _global.document.documentElement.clientHeight,
         d = _global.global.innerWidth || _global.document.documentElement.clientWidth,
         e = 0 > b.bottom || 0 > b.right || b.left >= d || b.top >= c;
       return e;
     } catch (a) {}
   },
   html2canvas = exports.html2canvas = function (a, b) {
     return void 0 === b && (b = {}), renderElement(a, b);
   },
   renderElement = function renderElement(a, b) {
     if (!a || "object" != _typeof(a)) return "Invalid element provided as first argument";
     var c = {
         fillColor: b.fillColor,
         ignoreElements: b.ignoreElements
       },
       d = new CanvasRenderer(c),
       e = d.render(a);
     return e;
   },
   parseTree = function parseTree(a, b) {
     var c = createContainer(a),
       d = (0, _utils.getElementsBySelectors)(b.ignoreElements);
     return _parseNodeTree2(a, c, d), c;
   },
   _parseNodeTree2 = function _parseNodeTree(a, b, c) {
     Array.from(a.childNodes).map(function (a) {
       if (!c.includes(a)) if (!isTextNode(a)) {
         if (isCommentNode(a) || isElementOutOfViewport(a)) return;
         var d = createContainer(a),
           e = d.styles,
           f = e.position,
           g = e.transform,
           h = +e.zIndex,
           i = +e.opacity;
         ("static" !== f && !isNaN(h) || 1 > i || "none" !== g) && (d.stackingFlag = !0), b.elements.push(d), a.shadowRoot ? _parseNodeTree2(a.shadowRoot, d, c) : "TEXTAREA" !== a.tagName && "svg" !== a.tagName && "SELECT" !== a.tagName && _parseNodeTree2(a, d, c);
       } else if (0 < a.textContent.trim().length) {
         var j = new TextContainer(a.textContent, b, a);
         b.textNodes.push(j);
       }
     });
   },
   createContainer = function createContainer(a) {
     return isImageElement(a) ? new ImageElementContainer(a) : isCanvasElement(a) ? new CanvasElementContainer(a) : isVideoElement(a) ? new VideoElementContainer(a) : isSVGElement(a) ? new SVGElementContainer(a) : isSelectElement(a) ? new SelectElementContainer(a) : isInputElement(a) ? new InputElementContainer(a) : isIframeElement(a) ? new IFrameElementContainer(a) : new ElementContainer(a);
   },
   parseStackingContext = function parseStackingContext(a) {
     var b = new StackingContext(a);
     return _parseStackTree2(a, b), b;
   },
   _parseStackTree2 = function _parseStackTree(a, b) {
     a.elements.map(function (a) {
       if (a.stackingFlag) {
         var c = new StackingContext(a),
           d = a.styles.position,
           e = +a.styles.zIndex;
         "static" !== d && 0 < e ? b.positiveZIndex.push(c) : "static" !== d && 0 > e ? b.negativeZIndex.push(c) : b.zeroOrAutoZIndexOrTransformedOrOpacity.push(c), _parseStackTree2(a, c);
       } else 0 <= a.styles.display.indexOf("inline") ? b.inlineLevel.push(a) : b.nonInlineLevel.push(a), _parseStackTree2(a, b);
     });
   },
   isTextNode = function isTextNode(a) {
     return 3 === a.nodeType;
   },
   isCommentNode = function isCommentNode(a) {
     return 8 === a.nodeType;
   },
   isImageElement = function isImageElement(a) {
     return "IMG" === a.tagName;
   },
   isVideoElement = function isVideoElement(a) {
     return "VIDEO" === a.tagName;
   },
   isCanvasElement = function isCanvasElement(a) {
     return "CANVAS" === a.tagName;
   },
   isSVGElement = function isSVGElement(a) {
     return "svg" === a.tagName;
   },
   isSelectElement = function isSelectElement(a) {
     return "SELECT" === a.tagName;
   },
   isInputElement = function isInputElement(a) {
     return "INPUT" === a.tagName;
   },
   isIframeElement = function isIframeElement(a) {
     return "IFRAME" === a.tagName;
   };

 /***/ }),
 /* 70 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 exports.__esModule = !0, exports.performSampleCheck = void 0;
 var _utils = __webpack_require__(38),
   _global = __webpack_require__(1),
   performSampleCheck = exports.performSampleCheck = function (a, b) {
     void 0 === b && (b = {});
     var c = b,
       d = c.checkPoints,
       e = void 0 === d ? 10 : d,
       f = c.sampleMethod,
       g = void 0 === f ? 2 : f,
       h = c.threshold,
       i = void 0 === h ? .8 : h,
       j = c.whiteBoxElements,
       k = void 0 === j ? [] : j,
       l = c.debug,
       m = [].concat((0, _utils.getElementsBySelectors)(k, a), [a]),
       n = getSampleCheckPoints(a, e, g),
       o = n.length,
       p = 0;
     n.forEach(function (a) {
       m.includes(_global.document.elementFromPoint.apply(_global.document, a)) && p++;
     });
     var q = p / o,
       r = {
         result: q < i,
         rate: q,
         whitePixels: p,
         checkPoints: o,
         threshold: i
       };
     return void 0 !== l && l && console.log(r, m, n), r;
   },
   getSampleCheckPoints = function getSampleCheckPoints(a, b, c) {
     var d = (0, _utils.getTrueArea)(a),
       e = d.top,
       f = d.left,
       g = d.width,
       h = d.height,
       j = f + g / 2,
       k = e + h / 2,
       l = g / 2 / (b + 1),
       m = h / 2 / (b + 1),
       n = [[j, k]];
     if ([1, 3].includes(c)) for (var o = 1; o <= b; o++) n.push([j + o * l, k]), n.push([j, k + o * m]), n.push([j - o * l, k]), n.push([j, k - o * m]);
     if ([2, 3].includes(c)) for (var p = 1; p <= b; p++) n.push([j + p * l, k + p * m]), n.push([j + p * l, k - p * m]), n.push([j - p * l, k - p * m]), n.push([j - p * l, k + p * m]);
     return n;
   };

 /***/ }),
 /* 71 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports["default"] = void 0;
 var _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _rumCore = __webpack_require__(0),
   _base = __webpack_require__(5),
   _view = __webpack_require__(13),
   _configManager = __webpack_require__(6),
   CONTINUOUS_FRAME_GAP = 33,
   REPORT_THRESHOLD = 150,
   LT_REPORT_THRESHOLD = 50,
   MAX_ATTRIBUTION = 5,
   FLUSH_DELAY = 200,
   ENTRY_LOAF = "long-animation-frame";
 function toRelativeOffset(a, b) {
   if (!("number" != typeof a || 0 >= a)) {
     var c = a - b;
     return 0 <= c ? c : void 0;
   }
 }
 function toAttribution(a) {
   return a.map(function (a) {
     var b = a;
     return {
       name: a.name,
       duration: a.duration,
       start_time: a.startTime,
       execution_start: b.executionStart,
       invoker: b.invoker,
       invoker_type: b.invokerType,
       source_url: b.sourceURL || b.sourceUrl,
       source_function_name: b.sourceFunctionName,
       source_char_position: b.sourceCharPosition,
       pause_duration: b.pauseDuration,
       forced_style_and_layout_duration: b.forcedStyleAndLayoutDuration,
       window_attribution: b.windowAttribution
     };
   });
 }
 var LongTaskCollector = exports["default"] = function () {
   function a() {
     this.name = "longtask-collector", this.ctx = void 0, this.sendEvent = void 0, this.loafSeqCache = void 0, this.flushTimer = void 0, this.cleanups = (0, _rumCore.createDisposableGroup)();
   }
   var b = a.prototype;
   return b.setup = function (a, b) {
     (0, _configManager.checkEnable)(a, _rumCore.RumEventType.LONG_TASK, !1) && (this.ctx = a, this.sendEvent = b, this.setupFlushTriggers(), this.startObserving());
   }, b.destroy = function () {
     this.flush(), this.cleanups.dispose();
   }, b.startObserving = function () {
     var a = (0, _base.initPerfObserver)(ENTRY_LOAF, this.handleLoaf.bind(this));
     if (a) this.cleanups.add(function () {
       return a.disconnect();
     });else {
       var b = (0, _base.initPerfObserver)("longtask", this.handleLongTask.bind(this));
       b && this.cleanups.add(function () {
         return b.disconnect();
       });
     }
   }, b.setupFlushTriggers = function () {
     var a = this,
       b = (0, _view.onPageHide)(function () {
         return a.flush();
       });
     this.cleanups.add(b);
   }, b.handleLoaf = function (a) {
     var b = this;
     a.forEach(function (a) {
       try {
         var d = a.startTime,
           e = a.duration,
           f = a.scripts,
           g = void 0 === f ? [] : f,
           h = d + e,
           i = a.blockingDuration || 0;
         b.clearFlushTimer();
         var j = b.loafSeqCache;
         if (j && d - j.endTime < CONTINUOUS_FRAME_GAP) {
           var k = j.startTime;
           j.frameCount++, j.endTime = h, j.attribution = [].concat(j.attribution, g), j.blockingDuration += i, void 0 === j.renderStart && (j.renderStart = toRelativeOffset(a.renderStart, k)), void 0 === j.styleAndLayoutStart && (j.styleAndLayoutStart = toRelativeOffset(a.styleAndLayoutStart, k)), void 0 === j.firstUIEventTimestamp && (j.firstUIEventTimestamp = toRelativeOffset(a.firstUIEventTimestamp, k));
         } else j && b.reportLoafSequence(j), j = b.loafSeqCache = {
           view: (0, _view.getCurView)(b.ctx),
           startTime: d,
           endTime: h,
           frameCount: 1,
           attribution: g,
           blockingDuration: i,
           renderStart: toRelativeOffset(a.renderStart, d),
           styleAndLayoutStart: toRelativeOffset(a.styleAndLayoutStart, d),
           firstUIEventTimestamp: toRelativeOffset(a.firstUIEventTimestamp, d)
         };
         j.endTime - j.startTime >= REPORT_THRESHOLD && (b.flushTimer = setTimeout(function () {
           b.loafSeqCache && (b.reportLoafSequence(b.loafSeqCache), b.loafSeqCache = null);
         }, FLUSH_DELAY));
       } catch (a) {
         _rumCore.logger.error("longtask-collector", "handleLoaf entry processing failed", a);
       }
     });
   }, b.handleLongTask = function (a) {
     var b = this;
     a.forEach(function (a) {
       try {
         var c = a.startTime,
           d = a.duration,
           e = a.attribution,
           f = void 0 === e ? [] : e;
         if (d < LT_REPORT_THRESHOLD) return;
         b.send("long-task", (0, _view.getCurView)(b.ctx), (0, _base.getCurrentTime)(c), d, void 0, {
           attribution: toAttribution(f)
         });
       } catch (a) {
         _rumCore.logger.error("longtask-collector", "handleLongTask entry processing failed", a);
       }
     });
   }, b.reportLoafSequence = function (a) {
     var b = a.endTime - a.startTime;
     if (!(b < REPORT_THRESHOLD)) {
       var c = this.filterAttribution(a.attribution),
         d = Math.round(1e3 * a.frameCount / b);
       this.send(ENTRY_LOAF, a.view, (0, _base.getCurrentTime)(a.startTime), b, d, {
         frame_count: a.frameCount,
         blocking_duration: a.blockingDuration || void 0,
         render_start: a.renderStart,
         style_and_layout_start: a.styleAndLayoutStart,
         first_ui_event_timestamp: a.firstUIEventTimestamp,
         attribution: toAttribution(c)
       });
     }
   }, b.send = function (a, b, c, d, e, f) {
     try {
       var g = this.ctx.session.getBaseEvent(),
         h = (0, _extends2["default"])({}, g, b, {
           event_type: _rumCore.RumEventType.LONG_TASK,
           type: "fps",
           source: a,
           timestamp: c,
           duration: d,
           fps: e,
           snapshots: JSON.stringify(f)
         });
       this.sendEvent(h);
     } catch (a) {
       _rumCore.logger.error("longtask-collector", "send event failed", a);
     }
   }, b.flush = function () {
     this.clearFlushTimer(), this.loafSeqCache && (this.reportLoafSequence(this.loafSeqCache), this.loafSeqCache = null);
   }, b.clearFlushTimer = function () {
     this.flushTimer && (clearTimeout(this.flushTimer), this.flushTimer = null);
   }, b.filterAttribution = function (a) {
     var b = a.filter(function (a) {
       return "unknown" !== a.name;
     });
     return b.length > MAX_ATTRIBUTION && (b = b.sort(function (c, a) {
       return (a.duration || 0) - (c.duration || 0);
     }).slice(0, MAX_ATTRIBUTION)), b;
   }, a;
 }();

 /***/ }),
 /* 72 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports["default"] = void 0;
 var _regenerator = _interopRequireDefault(__webpack_require__(8)),
   _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(9)),
   _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _inheritsLoose2 = _interopRequireDefault(__webpack_require__(14)),
   _rumCore = __webpack_require__(0),
   _base = __webpack_require__(5),
   _url = __webpack_require__(7),
   _api = __webpack_require__(19),
   _configManager = __webpack_require__(6),
   XhrCollector = exports["default"] = function (a) {
     function b() {
       for (var b, c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
       return b = a.call.apply(a, [this].concat(d)) || this, b.name = "xhr-collector", b;
     }
     (0, _inheritsLoose2["default"])(b, a);
     var c = b.prototype;
     return c.setup = function (a, b) {
       (0, _configManager.checkApiSubEnable)(a, "xhr") && (this.baseSetup(a, b), this.hackXhr());
     }, c.destroy = function () {
       var a;
       this.sendEvent = function () {}, null === (a = this.pfObserver) || void 0 === a ? void 0 : a.disconnect(), this.entryCacheMap = {};
       var b = XMLHttpRequest.prototype;
       (0, _rumCore.restoreFunction)(b, "open"), (0, _rumCore.restoreFunction)(b, "setRequestHeader"), (0, _rumCore.restoreFunction)(b, "send");
     }, c.hackXhr = function () {
       var a = XMLHttpRequest.prototype,
         b = this;
       (0, _rumCore.interceptFunction)(a, "open", _rumCore.logger.wrap(function (a, c, d, e, f) {
         var g = c + "",
           h = a.toUpperCase();
         if (!b.filter(g, h)) {
           this.apiCache = {
             type: _api.ApiType.XHR,
             method: a,
             url: c,
             async: d,
             user: e,
             password: f,
             headers: {}
           };
           var i = b.ctx.session.getBaseEvent();
           this.apiAttr = (0, _extends2["default"])({}, i, {
             url: (0, _url.fixRelativeUrl)(g),
             method: h
           });
         }
       }, "xhr-collector", "hackXhr open failed"), !0), (0, _rumCore.interceptFunction)(a, "setRequestHeader", function (a, b) {
         this.apiCache && (this.apiCache.headers[a] = b);
       }, !0), (0, _rumCore.interceptFunction)(a, "send", function (a) {
         var c = this;
         if (this.apiAttr) {
           var d = this.apiAttr;
           this.apiCache.data = a;
           try {
             b.injectTracing(this.apiAttr, function (a) {
               Object.keys(a).forEach(function (b) {
                 c.setRequestHeader(b, a[b]);
               });
             });
           } catch (a) {
             _rumCore.logger.error("xhr-collector", "injectTracing failed", a);
           }
           var e = null,
             f = 0,
             g = !1;
           this.addEventListener("readystatechange", _rumCore.logger.wrap(function () {
             if (3 === c.readyState) {
               var a = c.getResponseHeader("Content-Type");
               (0, _api.isSseResponse)(a) && !e && (e = new _api.SseMetricsTracker(), e.start(d.timestamp));
             }
           }, "xhr-collector", "readystatechange handler failed")), this.addEventListener("progress", function () {
             if (e) {
               var a;
               try {
                 a = c.responseText;
               } catch (a) {
                 return void _rumCore.logger.error("xhr-collector", "SSE progress responseText access denied", a);
               }
               if (a && !(a.length <= f)) {
                 for (var b, d = a.substring(f), g = d.split("\n\n"), h = 0; h < g.length - 1; h++) b = g[h].trim(), b && e.onMessage();
                 if (d.endsWith("\n\n")) {
                   var j = g[g.length - 1].trim();
                   j && e.onMessage(), f = a.length;
                 } else {
                   var k = g[g.length - 1];
                   f = a.length - k.length;
                 }
               }
             }
           }), this.addEventListener("loadend", (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function a() {
             var f, h, i, j, k, l, m, n, o, p;
             return _regenerator["default"].wrap(function (a) {
               for (;;) switch (a.prev = a.next) {
                 case 0:
                   if (f = c.status, h = c.statusText, i = c.response, j = b.ctx.getConfig(), k = j.evaluateApi, d.status_code = f, d.message = h, e && !g && (g = !0, l = e.finish("success"), d.sse = l), m = {
                     name: c.apiAttr.url,
                     entryType: _api.ApiType.XHR,
                     duration: (0, _base.getCurrentTime)() - d.timestamp
                   }, !(0, _rumCore.isFunction)(k)) {
                     a.next = 4;
                     break;
                   }
                   return a.prev = 1, d.success === _rumCore.ResourceStatus.Failed && (n = new Error(_api.ApiType.XHR + " error")), a.next = 2, k(c.apiCache, i, n, c);
                 case 2:
                   o = a.sent, c.apiAttr = d = (0, _extends2["default"])({}, d, (0, _api.reviseApiAttr)(o)), a.next = 4;
                   break;
                 case 3:
                   a.prev = 3, p = a["catch"](1), _rumCore.logger.error("xhr-collector", "evaluateApi failed", p);
                 case 4:
                   b.delayHandle({
                     attr: d,
                     entry: m
                   });
                 case 5:
                 case "end":
                   return a.stop();
               }
             }, a, null, [[1, 3]]);
           }))), this.addEventListener("error", function () {
             if (c.apiAttr.success = _rumCore.ResourceStatus.Failed, e && !g) {
               g = !0;
               var a = e.finish("error");
               c.apiAttr.sse = a;
             }
           }), this.addEventListener("abort", function () {
             if (c.apiAttr.success = _rumCore.ResourceStatus.Failed, c.apiAttr.message = "abort", e && !g) {
               g = !0;
               var a = e.finish("abort");
               c.apiAttr.sse = a;
             }
           });
         }
       }, !0);
     }, b;
   }(_api.BaseApiCollector);

 /***/ }),
 /* 73 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports.BaseApiCollector = void 0, exports.reviseApiAttr = reviseApiAttr;
 var _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _rumCore = __webpack_require__(0),
   _performance = __webpack_require__(10),
   _url = __webpack_require__(7),
   _global = __webpack_require__(1),
   _api = __webpack_require__(18);
 function reviseApiAttr(a) {
   if ((0, _rumCore.isObject)(a)) {
     var b = {};
     (0, _rumCore.isString)(a.name) && (b.name = a.name.substring(0, 1e3)), (0, _rumCore.isString)(a.message) && (b.message = a.message.substring(0, 1e3)), (0, _rumCore.isNumber)(a.success) && -1 <= a.success && 1 >= a.success && (b.success = a.success), (0, _rumCore.isNumber)(a.duration) && 0 <= a.duration && (b.duration = a.duration), (0, _rumCore.isString)(a.status_code) && (b.status_code = a.status_code.substring(0, 100)), (0, _rumCore.isNumber)(a.status_code) && (b.status_code = a.status_code), (0, _rumCore.isString)(a.snapshots) && (b.snapshots = a.snapshots.substring(0, 5e3)), (0, _rumCore.isString)(a.trace_id) && (b.trace_id = a.trace_id.substring(0, 100));
     var c = (0, _rumCore.verifyProperties)(a.properties);
     return c && (b.properties = c), a.sse && (b.sse = a.sse), b;
   }
 }
 var BaseApiCollector = exports.BaseApiCollector = function () {
   function a() {
     this.name = void 0, this.entryTypes = Object.values(_api.ApiType), this.entryCacheMap = {}, this.ctx = void 0, this.pfObserver = void 0, this.sendEvent = void 0, this._serviceId = void 0;
   }
   var b = a.prototype;
   return b.baseSetup = function (a, b) {
     this.sendEvent = b, this.ctx = a, this.initPerfObserver();
   }, b.getServiceId = function (a) {
     if (void 0 !== this._serviceId) return this._serviceId;
     try {
       this._serviceId = new URL(a, _global.location.origin).searchParams.get("service_id") || "";
     } catch (a) {
       this._serviceId = "";
     }
     return this._serviceId;
   }, b.filter = function (a, b) {
     var c, d;
     if ("HEAD" === b || 8182 < a.length) return !0;
     var e = this.ctx.getConfig(),
       f = (null === e || void 0 === e || null === (c = e.filters) || void 0 === c ? void 0 : c.resource) || [];
     (0, _rumCore.isArray)(f) || (f = [f]);
     var g = null === e || void 0 === e || null === (d = e.collectors) || void 0 === d ? void 0 : d.api;
     return (0, _rumCore.isObject)(g) && (0, _rumCore.isArray)(g.filters) && (f = [].concat(f, g.filters)), (0, _rumCore.urlMatch)(a, f);
   }, b.injectTracing = function (a, b) {
     var c,
       d,
       e = this.ctx.getConfig(),
       f = e.tracing,
       g = e.version,
       h = void 0 === g ? "1.0.0" : g,
       i = e.pid || (null === (c = e.app) || void 0 === c ? void 0 : c.id) || this.getServiceId(e.endpoint) || "",
       j = (0, _rumCore.parseTracingOptions)(f),
       k = j.enable,
       l = j.sample,
       m = j.propagatorTypes,
       n = j.allowedUrls,
       o = j.tracestate,
       p = j.baggage;
     if (k) {
       var q = [].concat(n, [{
           match: function match(a) {
             return /^https?:\/\/*/.test(a) && (0, _rumCore.startsWith)(a, _global.location.origin);
           },
           propagatorTypes: m
         }]),
         r = (0, _rumCore.find)(q, function (b) {
           return (0, _rumCore.matchList)([b.match], a.url);
         });
       if (r) {
         var s = r.propagatorTypes;
         0 === s.length && (s = m);
         var t = !1;
         -1 < s.indexOf("sw8") && (s = ["sw8"], t = !0);
         var u = this.ctx.session,
           v = t ? (0, _rumCore.generateGUID)() : (0, _rumCore.generateTraceId)(),
           w = t ? (0, _rumCore.generateGUID)() : (0, _rumCore.generateSpanId)(),
           x = (0, _rumCore.performDraw)(l),
           y = u.getUserId(),
           z = u.getSessionId(),
           A = void 0 === o || o ? "rum=v2&browser&" + i + "&" + z + "&" + y : void 0,
           B = void 0 !== p && p ? "rum=v2,appType=browser,pid=" + i + ",sid=" + z + ",uid=" + y : void 0,
           C = (0, _rumCore.makeTracingHeaders)(v, w, x, s, {
             tracestate: A,
             baggage: B,
             appId: i,
             appVersion: h,
             viewName: null === (d = a.view) || void 0 === d ? void 0 : d.name,
             host: _global.location.host
           });
         x && (a.trace_id = v, a.trace_data = JSON.stringify({
           spanId: w,
           sample: l,
           sampled: x,
           headers: C
         })), b(C);
       }
     }
   }, b.initPerfObserver = function () {
     var a = this,
       b = _global.global.PerformanceObserver;
     !(0, _rumCore.isFunction)(b) || this.pfObserver || (this.pfObserver = new b(function (b) {
       var c = b.getEntries().filter(function (b) {
         return a.entryTypes.includes(b.initiatorType);
       });
       c && c.length && c.forEach(function (b) {
         var c = b.name;
         a.entryCacheMap[c] ? a.entryCacheMap[c].push(b) : a.entryCacheMap[c] = [b];
       });
     }), this.pfObserver.observe({
       entryTypes: ["resource"]
     }));
   }, b.delayHandle = function (a) {
     var b = this;
     (0, _rumCore.delay)(function () {
       b.mergeEntry(a);
     }, 200);
   }, b.mergeEntry = function (a) {
     var b = a.attr,
       c = a.entry;
     c = this.findRealEntry(c);
     var d = this.ctx.getConfig(),
       e = d.parseResourceName,
       f = b.url,
       g = b.status_code,
       h = b.view,
       i = (0, _performance.getResourceSuccessByCode)(g),
       j = (0, _performance.calcResourceTimingData)(c) || {
         duration: c.duration
       },
       k = (0, _extends2["default"])({
         event_type: _rumCore.RumEventType.RESOURCE,
         url: f,
         name: (0, _url.getResourceName)(f, e),
         type: c.initiatorType || c.entryType,
         success: i
       }, b, {
         timing_data: JSON.stringify(c)
       }, j, {
         view: h
       });
     this.sendEvent(k);
   }, b.findRealEntry = function (a) {
     var b = a.name,
       c = this.entryCacheMap[b] || [],
       d = c.shift();
     return c.length || delete this.entryCacheMap[b], d || a;
   }, a;
 }();

 /***/ }),
 /* 74 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _base = __webpack_require__(5);
 exports.__esModule = !0, exports.SseMetricsTracker = void 0, exports.isSseResponse = isSseResponse, exports.parseSseEvent = parseSseEvent;
 function isSseResponse(a) {
   return /^text\/event-stream\s*(;|$)/i.test(a);
 }
 var SseMetricsTracker = exports.SseMetricsTracker = function () {
   function a() {
     this.startTime = 0, this.firstMessageTime = 0, this.lastMessageTime = 0, this.messageCount = 0, this.intervals = [];
   }
   var b = a.prototype;
   return b.start = function (a) {
     this.startTime = a || Date.now(), this.firstMessageTime = 0, this.lastMessageTime = 0, this.messageCount = 0, this.intervals = [];
   }, b.onMessage = function () {
     var a = (0, _base.getCurrentTime)();
     0 === this.messageCount ? this.firstMessageTime = a : this.intervals.push(a - this.lastMessageTime), this.lastMessageTime = a, this.messageCount++;
   }, b.finish = function (a) {
     var b = {
       status: a
     };
     return 0 < this.firstMessageTime && (b.time_to_first_token = this.firstMessageTime - this.startTime), 0 < this.intervals.length && (b.inter_token_latency_avg = Math.round(this.intervals.reduce(function (a, b) {
       return a + b;
     }, 0) / this.intervals.length), b.inter_token_latency_max = Math.max.apply(Math, this.intervals)), b.message_count = this.messageCount, b;
   }, a;
 }();
 function parseSseEvent(a) {
   for (var b, c, d = [], e = a.split(/\r?\n/), f = 0; f < e.length; f++) if (c = e[f], c && 58 !== c.charCodeAt(0)) {
     var g = c.indexOf(":"),
       h = -1 === g ? c : c.slice(0, g),
       j = -1 === g ? "" : c.slice(g + 1);
     32 === j.charCodeAt(0) && (j = j.slice(1)), "event" === h ? b = j : "data" === h && d.push(j);
   }
   return {
     event: b,
     data: d.join("\n"),
     raw: a
   };
 }

 /***/ }),
 /* 75 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports["default"] = void 0;
 var _regenerator = _interopRequireDefault(__webpack_require__(8)),
   _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(9)),
   _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _inheritsLoose2 = _interopRequireDefault(__webpack_require__(14)),
   _rumCore = __webpack_require__(0),
   _base = __webpack_require__(5),
   _url = __webpack_require__(7),
   _global = __webpack_require__(1),
   _api = __webpack_require__(19),
   _configManager = __webpack_require__(6),
   FetchCollector = exports["default"] = function (a) {
     function b() {
       for (var b, c = arguments.length, d = Array(c), e = 0; e < c; e++) d[e] = arguments[e];
       return b = a.call.apply(a, [this].concat(d)) || this, b.name = "fetch-collector", b;
     }
     (0, _inheritsLoose2["default"])(b, a);
     var c = b.prototype;
     return c.setup = function (a, b) {
       (0, _configManager.checkApiSubEnable)(a, "fetch") && (this.baseSetup(a, b), this.hackFetch());
     }, c.destroy = function () {
       var a;
       this.sendEvent = function () {}, null === (a = this.pfObserver) || void 0 === a ? void 0 : a.disconnect(), this.entryCacheMap = {}, (0, _base.restoreHackFunction)(_global.global, "fetch");
     }, c.hackFetch = function () {
       var a = this;
       (0, _base.hackFunction)(_global.global, "fetch", function (b) {
         return function (c, d) {
           function f() {
             return g.apply(this, arguments);
           }
           function g() {
             return g = (0, _asyncToGenerator2["default"])(_regenerator["default"].mark(function b() {
               var e, f, g, k, l;
               return _regenerator["default"].wrap(function (b) {
                 for (;;) switch (b.prev = b.next) {
                   case 0:
                     if (e = a.ctx.getConfig(), f = e.evaluateApi, g = {
                       name: h.url,
                       entryType: _api.ApiType.FETCH,
                       duration: (0, _base.getCurrentTime)() - h.timestamp
                     }, !(0, _rumCore.isFunction)(f)) {
                       b.next = 4;
                       break;
                     }
                     return b.prev = 1, b.next = 2, f((0, _extends2["default"])({
                       url: c
                     }, d), i, j);
                   case 2:
                     k = b.sent, h = (0, _extends2["default"])({}, h, (0, _api.reviseApiAttr)(k)), b.next = 4;
                     break;
                   case 3:
                     b.prev = 3, l = b["catch"](1), _rumCore.logger.error("fetch-collector", "evaluateApi failed", l);
                   case 4:
                     a.delayHandle({
                       attr: h,
                       entry: g
                     });
                   case 5:
                   case "end":
                     return b.stop();
                 }
               }, b, null, [[1, 3]]);
             })), g.apply(this, arguments);
           }
           void 0 === d && (d = {});
           var h,
             i,
             j,
             k = !1,
             l = (0, _extends2["default"])({}, d),
             m = null,
             n = !1;
           try {
             var o = c instanceof Request;
             k = o;
             var p = o ? c.url : (0, _rumCore.isString)(c) ? c : c.toString(),
               q = d.method,
               r = d.headers;
             if (o && (!q && (q = c.method), !r && (r = c.headers)), q = q ? q.toUpperCase() : "GET", a.filter(p, q)) return b.call(_global.global, c, d);
             var s = a.ctx.session.getBaseEvent();
             if (h = (0, _extends2["default"])({}, s, {
               url: (0, _url.fixRelativeUrl)(p),
               type: _api.ApiType.FETCH,
               method: q
             }), !r) try {
               r = new Headers();
             } catch (a) {
               r = null;
             } else r = r instanceof Headers ? new Headers(r) : Array.isArray(r) ? new Headers(r) : (0, _extends2["default"])({}, r);
             r && (l.headers = r), r && !Object.isFrozen(r) && a.injectTracing(h, function (a) {
               Object.keys(a).forEach(function (b) {
                 r instanceof Headers ? r.set(b, a[b]) : r[b] = a[b];
               });
             });
           } catch (a) {
             return _rumCore.logger.error("fetch-collector", "hackFetch internal error, fallback to original fetch", a), b.call(_global.global, c, d);
           }
           var t = b.call(_global.global, c, l);
           return t.then(function (a) {
             if (a && (0, _rumCore.isFunction)(a.clone)) {
               i = a.clone();
               var b = i,
                 e = b.status,
                 g = b.statusText;
               h.status_code = e, h.message = g;
               var j = a.headers.get("content-type") || "";
               if ((0, _api.isSseResponse)(j) && "undefined" != typeof TransformStream && "undefined" != typeof TextDecoder && a.body) {
                 var l = a.clone();
                 m = new _api.SseMetricsTracker(), n = !1, m.start(h.timestamp);
                 var o = "",
                   p = new TextDecoder(),
                   q = d.signal || (k ? c.signal : void 0);
                 q && q.addEventListener("abort", function () {
                   if (!n) {
                     n = !0;
                     var a = m.finish("abort");
                     h.sse = a, f().then();
                   }
                 }, {
                   once: !0
                 });
                 var r = new TransformStream({
                   transform: function transform(a, b) {
                     try {
                       var c = p.decode(a, {
                         stream: !0
                       });
                       o += c;
                       var d = o.split("\n\n");
                       o = d.pop() || "", d.forEach(function (a) {
                         0 < a.length && m.onMessage();
                       });
                     } catch (a) {
                       _rumCore.logger.error("fetch-collector", "SSE transform error", a);
                     }
                     b.enqueue(a);
                   },
                   flush: function flush() {
                     try {
                       if (n) return;
                       n = !0, 0 < o.length && m.onMessage();
                       var a = m.finish("success");
                       h.sse = a, f().then();
                     } catch (a) {
                       _rumCore.logger.error("fetch-collector", "SSE flush error", a);
                     }
                   },
                   cancel: function cancel() {
                     try {
                       if (n) return;
                       n = !0;
                       var a = m.finish("abort");
                       h.sse = a, f().then();
                     } catch (a) {
                       _rumCore.logger.error("fetch-collector", "SSE cancel error", a);
                     }
                   }
                 });
                 try {
                   var s = new Response(a.body.pipeThrough(r), {
                     status: a.status,
                     statusText: a.statusText,
                     headers: a.headers
                   });
                   return Object.defineProperties(s, {
                     url: {
                       value: a.url
                     },
                     redirected: {
                       value: a.redirected
                     },
                     type: {
                       value: a.type
                     },
                     ok: {
                       value: a.ok
                     }
                   }), s;
                 } catch (a) {
                   if (_rumCore.logger.error("fetch-collector", "SSE response wrapping failed", a), !n) {
                     n = !0;
                     var t = m.finish("error");
                     h.sse = t;
                   }
                   return f().then(), l;
                 }
               }
               f().then();
             }
             return a;
           })["catch"](function (a) {
             if (j = a, h.message = a + "", h.success = _rumCore.ResourceStatus.Failed, m && !n) {
               n = !0;
               var b = m.finish("error");
               h.sse = b;
             }
             throw f().then(), a;
           });
         };
       });
     }, b;
   }(_api.BaseApiCollector);

 /***/ }),
 /* 76 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports["default"] = void 0;
 var _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _rumCore = __webpack_require__(0),
   _performance = __webpack_require__(10),
   _url = __webpack_require__(7),
   _view = __webpack_require__(13),
   _global = __webpack_require__(1),
   _base = __webpack_require__(5),
   _configManager = __webpack_require__(6),
   PerfObserver = _global.global.PerformanceObserver,
   initiatorTypes = ["navigation", "audio", "video", "track", "script", "css", "img", "image", "link", "other"],
   WAIT_FOR_ERROR_TIME = 1e3,
   StaticResourceCollector = exports["default"] = function () {
     function a() {
       var a = this;
       this.name = "static-resource-collector", this.errorsCache = [], this.sendEvent = void 0, this.ctx = void 0, this.cleanups = (0, _rumCore.createDisposableGroup)(), this.initialized = !1, this.errorHandler = function (b) {
         var c = b.target || b.srcElement;
         if (c) {
           var d = c.nodeName && 1 === c.nodeType,
             e = c.src || c.href;
           d && (0, _rumCore.isString)(e) && 0 === e.indexOf("http") && a.errorsCache.push({
             src: e,
             timeStamp: (0, _base.getCurrentTime)()
           });
         }
       }, this.perfHandler = _rumCore.logger.wrap(function (b) {
         var c = [],
           d = [];
         b.forEach(function (a) {
           if (initiatorTypes.includes(a.initiatorType)) {
             var b = (0, _performance.getResourceStatus)(a);
             b === _rumCore.ResourceStatus.Success ? c.push(a) : d.push(a);
           }
         });
         var e = (0, _view.getCurView)(a.ctx);
         c.length && c.forEach(function (b) {
           a.sendResource(b, e);
         }), d.length && setTimeout(function () {
           d.forEach(function (b) {
             a.sendResource(b, e);
           });
         }, WAIT_FOR_ERROR_TIME);
       }, "static-resource-collector", "perfHandler failed");
     }
     var b = a.prototype;
     return b.setup = function (a, b) {
       var c,
         d = this;
       if ((0, _configManager.checkEnable)(a, "staticResource") && (this.ctx = a, this.sendEvent = b, (0, _rumCore.isFunction)(PerfObserver) && null !== (c = PerfObserver.supportedEntryTypes) && void 0 !== c && c.includes("resource") && !this.initialized)) {
         this.initialized = !0;
         var e = (0, _performance.initPerfObserver)(["navigation", "resource"], this.perfHandler);
         e && this.cleanups.add(function () {
           return e.disconnect();
         }), _global.global.addEventListener("error", this.errorHandler, !0), this.cleanups.add(function () {
           return _global.global.removeEventListener("error", d.errorHandler, !0);
         });
       }
     }, b.sendResource = function (a, b) {
       try {
         var c = this.ctx.getConfig(),
           d = c.parseResourceName,
           e = c.filters,
           f = void 0 === e ? {} : e,
           g = a.responseStatus,
           h = a.name,
           i = (0, _performance.getResourceType)(h, a.initiatorType),
           j = this.checkError(h),
           k = j ? _rumCore.ResourceStatus.Failed : (0, _performance.getResourceStatus)(a),
           l = (0, _performance.calcResourceTimingData)(a, j);
         if (!l) return;
         var m = this.ctx.session.getBaseEvent(),
           n = (0, _extends2["default"])({}, m, {
             event_type: _rumCore.RumEventType.RESOURCE,
             url: h,
             name: (0, _url.getResourceName)(h, d),
             type: i,
             method: "GET",
             status_code: g,
             success: k
           }, l, {
             timing_data: JSON.stringify(a),
             view: b
           });
         if ((0, _rumCore.urlMatch)(n.url, f.resource)) return;
         this.sendEvent(n);
       } catch (a) {
         _rumCore.logger.error("static-resource-collector", "sendResource failed", a);
       }
     }, b.checkError = function (a) {
       var b = !1,
         c = (0, _base.getCurrentTime)();
       return this.errorsCache = this.errorsCache.filter(function (d) {
         return !(1e4 < c - d.timeStamp) && (a === d.src && (b = !0), !0);
       }), b;
     }, b.destroy = function () {
       this.cleanups.dispose();
     }, a;
   }();

 /***/ }),
 /* 77 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports["default"] = void 0;
 var _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _rumCore = __webpack_require__(0),
   _url = __webpack_require__(7),
   _global = __webpack_require__(1),
   _view = __webpack_require__(13),
   _event = __webpack_require__(39),
   supportsHistory = _global.history && !!_global.history.pushState && !!_global.history.replaceState,
   PvCollector = exports["default"] = function () {
     function a() {
       var a = this;
       this.name = "pv-collector", this.ctx = void 0, this.sendEvent = void 0, this.prevUrl = void 0, this.sendPv = function (b, c, d) {
         void 0 === d && (d = "route_change");
         var e = a.ctx,
           f = (0, _view.getCurView)(e),
           g = a.getViewName(b),
           h = a.prevUrl;
         if (a.prevUrl = b, !(h && f && g === f.name)) {
           f && e.emitter.emit(_event.LifeCycleEventType.VIEW_ENDED, (0, _extends2["default"])({
             type: "pv"
           }, f)), e.addView({
             id: e.session.getViewId(),
             loading_type: d,
             name: g
           });
           var i = e.session.getBaseEvent(),
             j = (0, _extends2["default"])({}, i, {
               event_type: _rumCore.RumEventType.VIEW,
               type: "pv",
               name: g,
               url: b,
               referrer: c,
               loading_type: d
             });
           e.emitter.emit(_event.LifeCycleEventType.VIEW_CREATED, j), a.sendEvent(j);
         }
       }, this.historyFn = function () {
         var b = a.prevUrl;
         (0, _rumCore.delay)(_rumCore.logger.wrap(function () {
           a.sendPv(_global.location.href, b);
         }, "pv-collector", "historyFn sendPv failed"), 1);
       }, this.popstateFn = _rumCore.logger.wrap(function () {
         var b = (0, _url.getCurrentURL)(),
           c = a.prevUrl;
         a.sendPv(b, c);
       }, "pv-collector", "popstateFn sendPv failed");
     }
     var b = a.prototype;
     return b.setup = function (a, b) {
       this.ctx = a, this.sendEvent = b, this.sendPv((0, _url.getCurrentURL)(), _global.document.referrer || "", "initial_load");
       var c = this.getSpaMode();
       supportsHistory && c && ((0, _rumCore.interceptFunction)(_global.global.history, "pushState", this.historyFn), (0, _rumCore.interceptFunction)(_global.global.history, "replaceState", this.historyFn), _global.global.addEventListener("popstate", this.popstateFn));
     }, b.getSpaMode = function () {
       var a = this.ctx.getConfig().spaMode;
       return !!a && ("history" !== a && "hash" !== a ? "auto" : a);
     }, b.getViewName = function (a) {
       var b = this.ctx.getConfig(),
         c = (0, _url.getPathByURL)(a, this.getSpaMode());
       if ((0, _rumCore.isFunction)(b.parseViewName)) try {
         c = b.parseViewName(a);
       } catch (a) {
         _rumCore.logger.error("pv-collector", "parseViewName failed", a);
       }
       return c;
     }, b.destroy = function () {
       supportsHistory && ((0, _rumCore.restoreFunction)(_global.global.history, "pushState"), (0, _rumCore.restoreFunction)(_global.global.history, "replaceState"), _global.global.removeEventListener("popstate", this.popstateFn));
     }, a;
   }();

 /***/ }),
 /* 78 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports["default"] = void 0;
 var _global$performance,
   _global$performance$t,
   _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _rumCore = __webpack_require__(0),
   _url = __webpack_require__(7),
   _global = __webpack_require__(1),
   _performance = __webpack_require__(10),
   _base = __webpack_require__(5),
   _configManager = __webpack_require__(6),
   _dom = __webpack_require__(12),
   MAX_DELAY = 10 * _rumCore.ONE_MINUTE,
   navigationStart = (null === (_global$performance = _global.global.performance) || void 0 === _global$performance || null === (_global$performance$t = _global$performance.timing) || void 0 === _global$performance$t ? void 0 : _global$performance$t.navigationStart) || (0, _base.getCurrentTime)(),
   checkKeys = ["dom_interactive", "dom_content_loaded", "dom_complete", "load_event", "first_paint", "first_contentful_paint", "first_byte_duration"],
   PerfCollector = exports["default"] = function () {
     function a() {
       var a = this;
       this.name = "perf-collector", this.ctx = void 0, this.sendEvent = void 0, this.perfObserver = void 0, this.eventCache = void 0, this.eventTiming = {}, this.cleanups = (0, _rumCore.createDisposableGroup)(), this.sent = !1, this.onState = function () {
         var b = _global.document.readyState;
         "interactive" !== b || a.eventTiming.domInteractive || (a.eventTiming.domInteractive = (0, _base.getCurrentTime)() - navigationStart), "complete" === b && (a.eventTiming.domComplete = (0, _base.getCurrentTime)() - navigationStart);
       }, this.onDomLoaded = function () {
         a.eventTiming.domContentLoaded = (0, _base.getCurrentTime)() - navigationStart;
       }, this.onLoad = function () {
         a.eventTiming.loadEvent = (0, _base.getCurrentTime)() - navigationStart, (0, _rumCore.delay)(a.sendPerf, 200);
       }, this.perfHandler = function (b) {
         for (var c = a.eventCache, d = 0; d < b.length; d++) try {
           var e = b[d];
           switch (e.entryType) {
             case "navigation":
               var f = e.fetchStart,
                 g = e.responseStart,
                 h = e.responseEnd,
                 j = e.domInteractive,
                 k = e.domContentLoadedEventEnd,
                 l = e.domComplete,
                 m = e.loadEventEnd;
               c.dom_interactive = (0, _rumCore.formatNumber)(j - f), c.dom_content_loaded = (0, _rumCore.formatNumber)(k - f), c.dom_complete = (0, _rumCore.formatNumber)(l - f), c.load_event = (0, _rumCore.formatNumber)(m - f), c.first_byte_duration = (0, _rumCore.formatNumber)(g - f), c.first_paint = (0, _rumCore.formatNumber)(h - f), c.snapshots = JSON.stringify(e);
               break;
             case "paint":
               "first-paint" === e.name && e.startTime < MAX_DELAY ? c.first_paint = (0, _rumCore.formatNumber)(e.startTime) : "first-contentful-paint" === e.name && e.startTime < MAX_DELAY && (c.first_contentful_paint = (0, _rumCore.formatNumber)(e.startTime));
               break;
             default:
               return;
           }
         } catch (a) {
           _rumCore.logger.error("perf-collector", "Failed to process performance entry", a);
         }
       }, this.sendPerf = _rumCore.logger.wrap(function () {
         var b,
           c = a.eventCache;
         if (!a.sent && c) {
           a.sent = !0;
           var d = a.eventTiming,
             e = d.domInteractive,
             f = d.domContentLoaded,
             g = d.loadEvent,
             h = d.domComplete;
           !c.dom_interactive && e && (c.dom_interactive = (0, _rumCore.formatNumber)(e)), !c.dom_content_loaded && f && (c.dom_content_loaded = (0, _rumCore.formatNumber)(f)), !c.dom_complete && h && (c.dom_complete = (0, _rumCore.formatNumber)(h)), !c.load_event && g && (c.load_event = (0, _rumCore.formatNumber)(g));
           var i = null === (b = _global.global.performance) || void 0 === b ? void 0 : b.timing;
           if (i && i.navigationStart) {
             var j = i.navigationStart;
             !c.dom_interactive && i.domInteractive && (c.dom_interactive = (0, _rumCore.formatNumber)(i.domInteractive - j)), !c.dom_content_loaded && i.domContentLoadedEventEnd && (c.dom_content_loaded = (0, _rumCore.formatNumber)(i.domContentLoadedEventEnd - j)), !c.dom_complete && i.domComplete && (c.dom_complete = (0, _rumCore.formatNumber)(i.domComplete - j)), !c.load_event && i.loadEventEnd && (c.load_event = (0, _rumCore.formatNumber)(i.loadEventEnd - j)), !c.first_byte_duration && i.responseStart && (c.first_byte_duration = (0, _rumCore.formatNumber)(i.responseStart - j));
           }
           var k = (0, _performance.delBadMea)(c, checkKeys);
           a.sendEvent(k), a.clear();
         }
       }, "perf-collector", "sendPerf failed");
     }
     var b = a.prototype;
     return b.setup = function (a, b) {
       var c = this;
       if ((0, _configManager.checkEnable)(a, "perf") && (this.ctx = a, this.sendEvent = b, this.sent = !1, this.sendPerf = (0, _rumCore.debounce)(this.sendPerf, 200), this.perfObserver = (0, _performance.initPerfObserver)(["navigation", "paint"], function (a) {
         (0, _rumCore.delay)(c.perfHandler, 100, a);
       }), !!this.perfObserver)) {
         var d = this.ctx.session.getBaseEvent();
         this.eventCache = (0, _extends2["default"])({}, d, {
           event_type: _rumCore.RumEventType.VIEW,
           type: "perf",
           url: (0, _url.getCurrentURL)(),
           referrer: _global.document.referrer || ""
         }), this.cleanups.add((0, _dom.addEventListeners)(_global.document, [_dom.DOM_EVENT.READY_STATE], this.onState), (0, _dom.addEventListeners)(_global.document, [_dom.DOM_EVENT.DOM_CONTENT_LOADED], this.onDomLoaded), (0, _dom.addEventListeners)(_global.global, [_dom.DOM_EVENT.LOAD], this.onLoad)), "complete" === _global.document.readyState && (this.eventTiming.loadEvent = (0, _base.getCurrentTime)() - navigationStart, this.onState(), (0, _rumCore.delay)(this.sendPerf, 200));
       }
     }, b.clear = function () {
       this.cleanups.dispose(), this.eventTiming = {}, this.perfObserver && (this.eventCache = null, this.perfObserver.disconnect(), this.perfObserver = null);
     }, b.destroy = function () {
       this.clear();
     }, a;
   }();

 /***/ }),
 /* 79 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports["default"] = void 0;
 var _extends3 = _interopRequireDefault(__webpack_require__(3)),
   _rumCore = __webpack_require__(0),
   _url = __webpack_require__(7),
   _view = __webpack_require__(13),
   _global = __webpack_require__(1),
   _configManager = __webpack_require__(6),
   _trackLCP = __webpack_require__(80),
   _trackCLS = __webpack_require__(81),
   _trackINP = __webpack_require__(82),
   _trackFID = __webpack_require__(83),
   WebVitalsCollector = exports["default"] = function () {
     function a() {
       this.name = "web-vitals-collector", this.ctx = void 0, this.sendEvent = void 0, this.baseEvent = void 0, this.measures = {}, this.timer = void 0, this.stopFns = [], this.firstHidden = void 0;
     }
     var b = a.prototype;
     return b.setup = function (a, b) {
       (0, _configManager.checkEnable)(a, "webVitals") && (this.ctx = a, this.sendEvent = b, this.baseEvent = {
         event_type: _rumCore.RumEventType.VIEW,
         type: "webvitals",
         referrer: _global.document.referrer || "",
         view: (0, _view.getCurView)(this.ctx)
       }, this.firstHidden = (0, _view.trackFirstHidden)(), this.initVitals());
     }, b.initVitals = function () {
       var a = this;
       try {
         var b = (0, _trackLCP.trackLCP)(this.firstHidden, function (b) {
           a.sendWebVitals("largest_contentful_paint", (0, _rumCore.formatNumber)(b.value));
         });
         this.stopFns.push(b.stop);
       } catch (a) {
         _rumCore.logger.error("WebVitals", "Failed to initialize LCP tracking", a);
       }
       try {
         var c = (0, _trackFID.trackFID)(this.firstHidden, function (b) {
           a.sendWebVitals("first_input_delay", (0, _rumCore.formatNumber)(b.value)), a.sendWebVitals("first_input_time", (0, _rumCore.formatNumber)(b.startTime));
         });
         this.stopFns.push(c.stop);
       } catch (a) {
         _rumCore.logger.error("WebVitals", "Failed to initialize FID tracking", a);
       }
       try {
         var d = (0, _trackCLS.trackCLS)(function (b) {
           a.sendWebVitals("cumulative_layout_shift", (0, _rumCore.formatNumber)(b.value));
         });
         this.stopFns.push(d.stop);
       } catch (a) {
         _rumCore.logger.error("WebVitals", "Failed to initialize CLS tracking", a);
       }
       var e;
       try {
         e = (0, _trackINP.trackINP)(), this.stopFns.push(e.stop);
       } catch (a) {
         _rumCore.logger.error("WebVitals", "Failed to initialize INP tracking", a);
       }
       if (e) {
         var f = (0, _view.onPageHide)(_rumCore.logger.wrap(function () {
           var b = e.getINP();
           b && 0 < b.value && a.sendWebVitals("interaction_to_next_paint", (0, _rumCore.formatNumber)(b.value));
         }, "WebVitals", "INP pagehide report error"));
         this.stopFns.push(f);
       }
     }, b.sendWebVitals = function (a, b) {
       var c,
         d = this;
       clearTimeout(this.timer);
       var e = this.ctx.getConfig().collectors || {};
       !1 === e.webVitals || (this.measures = (0, _extends3["default"])({}, this.measures, (c = {}, c[a] = b, c)), this.timer = setTimeout(function () {
         var a = d.ctx.session.getBaseEvent();
         d.sendEvent((0, _extends3["default"])({}, a, d.baseEvent, d.measures, {
           url: (0, _url.getCurrentURL)()
         })), d.measures = {};
       }, 200));
     }, b.stop = function () {
       var a;
       null === (a = this.firstHidden) || void 0 === a ? void 0 : a.stop(), this.stopFns.forEach(function (a) {
         return a();
       }), this.stopFns = [], clearTimeout(this.timer);
     }, a;
   }();

 /***/ }),
 /* 80 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 exports.__esModule = !0, exports.trackLCP = trackLCP;
 var _rumCore = __webpack_require__(0),
   _performance = __webpack_require__(10),
   _dom = __webpack_require__(12),
   _global = __webpack_require__(1),
   _helpers = __webpack_require__(20),
   LCP_MAXIMUM_DELAY = 10 * _rumCore.ONE_MINUTE;
 function trackLCP(a, b) {
   var c = 1 / 0,
     d = 0,
     e = (0, _dom.addEventListeners)(_global.global, [_dom.DOM_EVENT.POINTER_DOWN, _dom.DOM_EVENT.KEY_DOWN], function (a) {
       c = a.timeStamp;
     }, {
       capture: !0,
       once: !0
     }),
     f = (0, _performance.initPerfObserver)(["largest-contentful-paint"], function (e) {
       try {
         for (var f = e.length - 1; 0 <= f; f--) {
           var g = e[f],
             h = g.startTime;
           if (h < c && h < a.timeStamp && h < LCP_MAXIMUM_DELAY && g.size > d) {
             d = g.size;
             var j = g.url && "" !== g.url ? g.url : void 0,
               k = g.element ? (0, _helpers.getSelector)(g.element) : void 0,
               l = computeLcpSubParts(j, h);
             b({
               value: h,
               targetSelector: k,
               resourceUrl: j,
               subParts: l
             });
             break;
           }
         }
       } catch (a) {
         _rumCore.logger.error("WebVitals", "LCP observer callback error", a);
       }
     });
   return {
     stop: function stop() {
       null === f || void 0 === f ? void 0 : f.disconnect(), e();
     }
   };
 }
 function computeLcpSubParts(a, b) {
   try {
     var c = _global.global.performance;
     if (!c) return;
     var d = c.getEntriesByType("navigation")[0];
     if (!d || !d.responseStart) return;
     var e,
       f = d.responseStart;
     if (a) for (var g = c.getEntriesByType("resource"), h = g.length - 1; 0 <= h; h--) if (g[h].name === a) {
       e = g[h];
       break;
     }
     var j = e,
       k = j ? Math.max(f, j.requestStart || j.startTime) : f,
       l = Math.min(b, Math.max(k, (null === j || void 0 === j ? void 0 : j.responseEnd) || 0));
     return {
       loadDelay: k - f,
       loadTime: l - k,
       renderDelay: b - l
     };
   } catch (a) {
     return void _rumCore.logger.error("WebVitals", "LCP subParts computation error", a);
   }
 }

 /***/ }),
 /* 81 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 exports.__esModule = !0, exports.trackCLS = trackCLS;
 var _rumCore = __webpack_require__(0),
   _performance = __webpack_require__(10),
   _helpers = __webpack_require__(20);
 function _createForOfIteratorHelperLoose(a, b) {
   var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
   if (c) return (c = c.call(a)).next.bind(c);
   if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && "number" == typeof a.length) {
     c && (a = c);
     var d = 0;
     return function () {
       return d >= a.length ? {
         done: !0
       } : {
         done: !1,
         value: a[d++]
       };
     };
   }
   throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
 }
 function _unsupportedIterableToArray(b, c) {
   if (b) {
     if ("string" == typeof b) return _arrayLikeToArray(b, c);
     var a = {}.toString.call(b).slice(8, -1);
     return "Object" === a && b.constructor && (a = b.constructor.name), "Map" === a || "Set" === a ? Array.from(b) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? _arrayLikeToArray(b, c) : void 0;
   }
 }
 function _arrayLikeToArray(b, c) {
   (null == c || c > b.length) && (c = b.length);
   for (var d = 0, f = Array(c); d < c; d++) f[d] = b[d];
   return f;
 }
 var MAX_WINDOW_DURATION = 5 * _rumCore.ONE_SECOND,
   MAX_UPDATE_GAP = _rumCore.ONE_SECOND;
 function trackCLS(a) {
   if (!(0, _helpers.isLayoutShiftSupported)()) return {
     stop: function stop() {}
   };
   var b = 0;
   a({
     value: 0
   });
   var c = slidingSessionWindow(),
     d = (0, _performance.initPerfObserver)(["layout-shift"], function (d) {
       try {
         for (var e, f = 0, g = d; f < g.length; f++) if (e = g[f], !e.hadRecentInput) {
           var h = c.update(e),
             i = h.cumulatedValue,
             j = h.isMaxValue;
           if (i > b) {
             var k;
             b = i;
             var l = void 0;
             if (j && null !== (k = e.sources) && void 0 !== k && k.length) {
               var m = getTopImpactedSource(e.sources);
               (null === m || void 0 === m ? void 0 : m.node) instanceof Element && (l = (0, _helpers.getSelector)(m.node));
             }
             a({
               value: Math.round(1e4 * b) / 1e4,
               targetSelector: l
             });
           }
         }
       } catch (a) {
         _rumCore.logger.error("WebVitals", "CLS observer callback error", a);
       }
     });
   return {
     stop: function stop() {
       null === d || void 0 === d ? void 0 : d.disconnect();
     }
   };
 }
 function slidingSessionWindow() {
   var a,
     b,
     c = 0,
     d = 0;
   return {
     update: function update(e) {
       var f,
         g = e.startTime,
         h = e.value,
         i = void 0 === a || g - b >= MAX_UPDATE_GAP || g - a >= MAX_WINDOW_DURATION;
       return i ? (a = b = g, d = c = h, f = !0) : (c += h, b = g, f = h > d, f && (d = h)), {
         cumulatedValue: c,
         isMaxValue: f
       };
     }
   };
 }
 function getTopImpactedSource(a) {
   for (var b, c, d, e = 0, f = _createForOfIteratorHelperLoose(a); !(c = f()).done;) if (d = c.value, d.node && d.previousRect && d.currentRect) {
     var g = getImpactedArea(d.previousRect, d.currentRect);
     g > e && (e = g, b = d);
   }
   return b;
 }
 function getImpactedArea(a, b) {
   var c = Math.min(a.x, b.x),
     d = Math.min(a.y, b.y),
     e = Math.max(a.x + a.width, b.x + b.width),
     f = Math.max(a.y + a.height, b.y + b.height);
   return (e - c) * (f - d);
 }

 /***/ }),
 /* 82 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 exports.__esModule = !0, exports.trackINP = trackINP;
 var _rumCore = __webpack_require__(0),
   _performance = __webpack_require__(10),
   _global = __webpack_require__(1),
   _helpers = __webpack_require__(20);
 function _createForOfIteratorHelperLoose(a, b) {
   var c = "undefined" != typeof Symbol && a[Symbol.iterator] || a["@@iterator"];
   if (c) return (c = c.call(a)).next.bind(c);
   if (Array.isArray(a) || (c = _unsupportedIterableToArray(a)) || b && a && "number" == typeof a.length) {
     c && (a = c);
     var d = 0;
     return function () {
       return d >= a.length ? {
         done: !0
       } : {
         done: !1,
         value: a[d++]
       };
     };
   }
   throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
 }
 function _unsupportedIterableToArray(b, c) {
   if (b) {
     if ("string" == typeof b) return _arrayLikeToArray(b, c);
     var a = {}.toString.call(b).slice(8, -1);
     return "Object" === a && b.constructor && (a = b.constructor.name), "Map" === a || "Set" === a ? Array.from(b) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? _arrayLikeToArray(b, c) : void 0;
   }
 }
 function _arrayLikeToArray(b, c) {
   (null == c || c > b.length) && (c = b.length);
   for (var d = 0, f = Array(c); d < c; d++) f[d] = b[d];
   return f;
 }
 var MAX_INTERACTION_ENTRIES = 10,
   MAX_INP_VALUE = _rumCore.ONE_MINUTE;
 function trackINP() {
   function a(a) {
     var c,
       d = a.interactionId;
     if (d) {
       var f = e.findIndex(function (a) {
         return a.interactionId === d;
       });
       -1 === f ? (e.length < MAX_INTERACTION_ENTRIES || a.duration > (null === (c = e[e.length - 1]) || void 0 === c ? void 0 : c.duration)) && (e.push(a), b()) : a.duration > e[f].duration && (e[f] = a, b());
     }
   }
   function b() {
     e.sort(function (c, a) {
       return a.duration - c.duration;
     }), e.splice(MAX_INTERACTION_ENTRIES);
   }
   function c() {
     var a = getInteractionCount(),
       b = Math.min(e.length - 1, Math.floor(a / 50));
     return e[b];
   }
   function d(b) {
     try {
       for (var c, d, e = _createForOfIteratorHelperLoose(b); !(c = e()).done;) d = c.value, d.interactionId && a(d);
     } catch (a) {
       _rumCore.logger.error("WebVitals", "INP observer callback error", a);
     }
   }
   if (!(0, _helpers.isINPSupported)()) return {
     getINP: function getINP() {},
     stop: function stop() {}
   };
   initInteractionCountPolyfill();
   var e = [],
     f = (0, _performance.initPerfObserver)(["event"], d, {
       durationThreshold: 40
     }),
     g = (0, _performance.initPerfObserver)(["first-input"], d);
   return {
     getINP: function getINP() {
       try {
         var a = c();
         if (a) {
           var b,
             d = Math.min(a.duration, MAX_INP_VALUE),
             e = a.target instanceof Element ? (0, _helpers.getSelector)(a.target) : void 0,
             f = a.processingStart,
             g = a.processingEnd;
           if (f && g) {
             var h = a.startTime + a.duration;
             b = {
               inputDelay: f - a.startTime,
               processingDuration: g - f,
               presentationDelay: h - g
             };
           }
           return {
             value: d,
             targetSelector: e,
             subParts: b
           };
         }
         return 0 < getInteractionCount() ? {
           value: 0
         } : void 0;
       } catch (a) {
         return void _rumCore.logger.error("WebVitals", "INP metric computation error", a);
       }
     },
     stop: function stop() {
       null === f || void 0 === f ? void 0 : f.disconnect(), null === g || void 0 === g ? void 0 : g.disconnect(), resetInteractionCountPolyfill();
     }
   };
 }
 var polyfillObserver,
   interactionCountEstimate = 0,
   minKnownInteractionId = 1 / 0,
   maxKnownInteractionId = 0;
 function resetInteractionCountPolyfill() {
   polyfillObserver && (polyfillObserver.disconnect(), polyfillObserver = void 0, interactionCountEstimate = 0, minKnownInteractionId = 1 / 0, maxKnownInteractionId = 0);
 }
 function initInteractionCountPolyfill() {
   var a = _global.global.performance,
     b = _global.global.PerformanceObserver;
   if (a && b && !("interactionCount" in a) && !polyfillObserver) try {
     polyfillObserver = new b(function (a) {
       for (var b = 0, c = a.getEntries(); b < c.length; b++) {
         var d = c[b],
           e = d.interactionId;
         e && (minKnownInteractionId = Math.min(minKnownInteractionId, e), maxKnownInteractionId = Math.max(maxKnownInteractionId, e), interactionCountEstimate = (maxKnownInteractionId - minKnownInteractionId) / 7 + 1);
       }
     }), polyfillObserver.observe({
       type: "event",
       buffered: !0,
       durationThreshold: 0
     });
   } catch (a) {
     _rumCore.logger.error("WebVitals", "INP interactionCount polyfill observer creation error", a);
   }
 }
 function getInteractionCount() {
   var a = _global.global.performance;
   return a && "interactionCount" in a ? a.interactionCount || 0 : polyfillObserver ? interactionCountEstimate : 0;
 }

 /***/ }),
 /* 83 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 exports.__esModule = !0, exports.trackFID = trackFID;
 var _rumCore = __webpack_require__(0),
   _performance = __webpack_require__(10);
 function trackFID(a, b) {
   var c = !1,
     d = (0, _performance.initPerfObserver)(["first-input"], function (d) {
       try {
         if (c) return;
         var e = d[0];
         if (!e) return;
         if (e.startTime >= a.timeStamp) return;
         c = !0, b({
           value: e.processingStart - e.startTime,
           startTime: e.startTime
         });
       } catch (a) {
         _rumCore.logger.error("WebVitals", "FID observer callback error", a);
       }
     });
   return {
     stop: function stop() {
       null === d || void 0 === d ? void 0 : d.disconnect();
     }
   };
 }

 /***/ }),
 /* 84 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 var _interopRequireDefault = __webpack_require__(2);
 exports.__esModule = !0, exports["default"] = void 0;
 var _extends2 = _interopRequireDefault(__webpack_require__(3)),
   _base = __webpack_require__(5),
   _view = __webpack_require__(13),
   DefaultProcessor = exports["default"] = function () {
     function a() {
       this.name = "default-processor";
     }
     var b = a.prototype;
     return b.process = function (a) {
       var b = a.getRumEvent(),
         c = (0, _view.getCurView)(a),
         d = (0, _extends2["default"])({
           timestamp: (0, _base.getCurrentTime)(),
           session_id: a.session.getSessionId(),
           event_id: a.session.getEventId(),
           view: c
         }, b);
       return d;
     }, a;
   }();

 /***/ }),
 /* 85 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 exports.__esModule = !0, exports["default"] = void 0;
 var _rumCore = __webpack_require__(0),
   _types = __webpack_require__(37),
   _index = __webpack_require__(19),
   _global = __webpack_require__(1),
   SessionProcessor = exports["default"] = function () {
     function a() {
       var a = this;
       this.name = "session-processor", this.ctx = void 0, this.cache = {}, this.update = function (b) {
         b && !b.isTrusted || a.ctx.session.updateSession();
       };
     }
     var b = a.prototype;
     return b.setup = function (a) {
       this.ctx = a, _global.document.addEventListener("click", this.update, !0);
     }, b.getSampled = function (a) {
       var b = this.ctx.getConfig(),
         c = b.collectors,
         d = void 0 === c ? {} : c,
         e = a.event_type,
         f = a.type,
         g = a.source,
         h = a.event_type;
       if (e === _rumCore.RumEventType.RESOURCE ? h = Object.values(_index.ApiType).includes(f) ? "api" : "staticResource" : e === _rumCore.RumEventType.EXCEPTION && g && ("blank" === f ? h = "blank" : g === _types.ExceptionSource.console ? h = "consoleError" : (g === _types.ExceptionSource.onError || g === _types.ExceptionSource.unhandled) && (h = "jsError")), h in d) {
         var i = d[h];
         if ((0, _rumCore.isBoolean)(i)) return i;
         if ((0, _rumCore.isObject)(i)) {
           var j = i.sampling,
             k = void 0 === j ? 100 : j;
           return (0, _rumCore.performDraw)(k);
         }
       }
       return !0;
     }, b.process = function (a) {
       this.update();
       var b = a.getRumEvent();
       if (!b) return b;
       if (a.session.getSampled()) {
         var c = b.view;
         if (!c) return b;
         var d = b.event_type,
           e = b.type,
           f = c.id,
           g = this.cache[f];
         if ((0, _rumCore.isBoolean)(g) || (g = this.cache[f] = this.getSampled(b)), "replay" === e || "custom" === e || d === _rumCore.RumEventType.LONG_TASK && "profiling" === e || g && "view" === d) return b;
         if (g) {
           var h = this.getSampled(b);
           return h ? b : null;
         }
       }
     }, a;
   }();

 /***/ }),
 /* 86 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
 function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
 function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
 function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
 function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
 function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.RumSession = exports.SESSION_STORAGE = exports.SessionEventType = void 0;
 var rum_core_1 = __webpack_require__(0);
 var global_1 = __webpack_require__(21);
 function getCurrentTime(timeOffset) {
   var perf = global_1.global.performance;
   if (perf && perf.timeOrigin && perf.now) {
     return Math.round(perf.timeOrigin + (timeOffset ? timeOffset : perf.now()));
   } else {
     return Date.now();
   }
 }
 function getCurView(ctx) {
   var views = ctx.getViews();
   if (views && views.length) {
     return views[views.length - 1];
   }
 }
 function setCookie(name, value, overtime, domain) {
   var _a;
   var expires = '';
   if (overtime) {
     var date = new Date();
     date.setTime(date.getTime() + overtime);
     expires = '; expires=' + date.toUTCString();
   }
   if (!domain) {
     domain = ((_a = global_1.global.location) === null || _a === void 0 ? void 0 : _a.hostname) || '';
   }
   global_1.document.cookie = name + '=' + encodeURIComponent(value || '') + expires + "; path=/; domain=".concat(domain, "; SameSite=Lax");
 }
 function getCookie(name) {
   var value = "; ".concat(global_1.document.cookie);
   var parts = value.split("; ".concat(name, "="));
   if (parts.length === 2) {
     return decodeURIComponent(parts[1].split(';')[0]);
   }
   return null;
 }
 function fixReplayConfig(_cfg) {
   return {
     enable: false,
     sampling: 1,
     privacy: {
       level: 'mask'
     }
   };
 }
 var USER_ID = '_arms_uid';
 var RUM_SESSION = '_arms_session';
 var SessionEventType;
 (function (SessionEventType) {
   SessionEventType["INIT"] = "init";
   SessionEventType["UPDATE"] = "update";
   SessionEventType["EVENT"] = "event";
 })(SessionEventType = exports.SessionEventType || (exports.SessionEventType = {}));
 var testKey = '_test_';
 var isLocalStorageEnabled = function () {
   try {
     var ls = global_1.global.localStorage;
     ls.setItem(testKey, '1');
     ls.removeItem(testKey);
     return true;
   } catch (e) {
     return false;
   }
 }();
 var isCookieEnabled = function () {
   try {
     global_1.document.cookie = "".concat(testKey, "=1; path=/");
     var isEnabled = global_1.document.cookie.indexOf("".concat(testKey, "=")) !== -1;
     global_1.document.cookie = "".concat(testKey, "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT");
     return isEnabled;
   } catch (e) {
     return false;
   }
 }();
 var MemoryStorage = global_1.global.__RUM_MEMORY_STORAGE = {};
 var SESSION_STORAGE;
 (function (SESSION_STORAGE) {
   SESSION_STORAGE["AUTO"] = "auto";
   SESSION_STORAGE["LOCAL_STORAGE"] = "localStorage";
   SESSION_STORAGE["COOKIE"] = "cookie";
   SESSION_STORAGE["MEMORY"] = "memory";
 })(SESSION_STORAGE = exports.SESSION_STORAGE || (exports.SESSION_STORAGE = {}));
 function fixSessionConfig(cfg) {
   var sessionConfig = cfg.sessionConfig || {};
   var sampleRate = sessionConfig.sampleRate,
     sampling = sessionConfig.sampling,
     maxDuration = sessionConfig.maxDuration,
     overtime = sessionConfig.overtime,
     _sessionConfig$storag = sessionConfig.storage,
     storage = _sessionConfig$storag === void 0 ? SESSION_STORAGE.AUTO : _sessionConfig$storag,
     domain = sessionConfig.domain;
   if (!(0, rum_core_1.isNumber)(sampling) || sampling < 0 || sampling > 100) {
     if ((0, rum_core_1.isNumber)(sampleRate) && sampleRate >= 0 && sampleRate <= 1) {
       sampling = sampleRate * 100;
     } else {
       sampling = 100;
     }
   }
   if (!(0, rum_core_1.isNumber)(maxDuration) || maxDuration < 4 * rum_core_1.ONE_HOUR || maxDuration > rum_core_1.ONE_DAY) {
     maxDuration = rum_core_1.ONE_DAY;
   }
   if (!(0, rum_core_1.isNumber)(overtime) || overtime > rum_core_1.ONE_HOUR || overtime < 10 * rum_core_1.ONE_MINUTE) {
     overtime = 30 * rum_core_1.ONE_MINUTE;
   }
   if (storage !== SESSION_STORAGE.COOKIE && storage !== SESSION_STORAGE.LOCAL_STORAGE && storage !== SESSION_STORAGE.MEMORY) {
     storage = SESSION_STORAGE.AUTO;
   }
   if (storage === SESSION_STORAGE.AUTO) {
     storage = SESSION_STORAGE.LOCAL_STORAGE;
   }
   if (storage === SESSION_STORAGE.LOCAL_STORAGE && !isLocalStorageEnabled) {
     storage = SESSION_STORAGE.COOKIE;
   }
   if (storage === SESSION_STORAGE.COOKIE && !isCookieEnabled) {
     storage = SESSION_STORAGE.MEMORY;
   }
   return {
     sampling: sampling,
     maxDuration: maxDuration,
     overtime: overtime,
     storage: storage,
     domain: domain
   };
 }
 var RumSession = function () {
   function RumSession() {
     _classCallCheck(this, RumSession);
     this.appType = 'webview';
     this.sdkVersion = global_1.VERSION;
     this.rumUserKey = USER_ID;
     this.rumSessionKey = RUM_SESSION;
     this._timeouts = {};
     this._lastTime = 0;
   }
   return _createClass(RumSession, [{
     key: "init",
     value: function init(ctx) {
       this.ctx = ctx;
       var config = ctx.getConfig();
       this.sessionConfig = fixSessionConfig(config);
       this.replayConfig = fixReplayConfig(config);
       var domain = this.sessionConfig.domain;
       if (domain) {
         this.rumUserKey = "".concat(USER_ID, ":").concat(domain);
         this.rumSessionKey = "".concat(RUM_SESSION, ":").concat(domain);
       }
     }
   }, {
     key: "getSessionId",
     value: function getSessionId() {
       return this.getSessionInfo().sessionId;
     }
   }, {
     key: "getSampled",
     value: function getSampled() {
       return this.getSessionInfo().sampled;
     }
   }, {
     key: "checkSession",
     value: function checkSession() {
       var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSessionInfo();
       var _this$sessionConfig = this.sessionConfig,
         overtime = _this$sessionConfig.overtime,
         maxDuration = _this$sessionConfig.maxDuration;
       var now = getCurrentTime();
       return !(info.startTime + maxDuration < now || info.lastTime + overtime < now);
     }
   }, {
     key: "updateSession",
     value: function updateSession() {
       var info = this.getSessionInfo();
       if (info.isNew) {
         return;
       }
       var startTime = info.startTime;
       var lastTime = getCurrentTime();
       var sampled = info.sampled ? 1 : 0;
       var replaySampled = info.replaySampled ? 1 : 0;
       this.setItem(this.rumSessionKey, "".concat(info.sessionId, "-").concat(sampled, "-").concat(startTime, "-").concat(lastTime, "-").concat(replaySampled));
     }
   }, {
     key: "getSessionInfo",
     value: function getSessionInfo() {
       var emitter = this.ctx.emitter;
       var _split = (this.getItem(this.rumSessionKey) || '').split('-'),
         _split2 = _slicedToArray(_split, 5),
         sid = _split2[0],
         sampled = _split2[1],
         startTime = _split2[2],
         lastTime = _split2[3],
         replaySampled = _split2[4];
       var info = {
         sessionId: sid,
         sampled: sampled !== '0',
         startTime: parseInt(startTime || '') || 0,
         lastTime: parseInt(lastTime || '') || 0,
         replaySampled: replaySampled === '1'
       };
       if (!this.checkSession(info)) {
         info = this.resetSession();
         emitter.emit(SessionEventType.INIT, info);
       } else {
         emitter.emit(SessionEventType.UPDATE, info);
       }
       return info;
     }
   }, {
     key: "getEventId",
     value: function getEventId() {
       return (0, rum_core_1.generateEventId)(this.getSessionId());
     }
   }, {
     key: "getViewId",
     value: function getViewId() {
       return this.getUUID();
     }
   }, {
     key: "getUserId",
     value: function getUserId() {
       var userID = this.getItem(this.rumUserKey);
       if (userID && userID.indexOf('user_') === 0) {
         userID = '';
       }
       if (!userID) {
         userID = "uid_".concat((0, rum_core_1.generateSpanId)(16, 36));
         this.setItem(this.rumUserKey, userID);
       }
       return userID;
     }
   }, {
     key: "resetSession",
     value: function resetSession() {
       var sampling = this.sessionConfig.sampling;
       var _this$replayConfig = this.replayConfig,
         enable = _this$replayConfig.enable,
         replaySampling = _this$replayConfig.sampling;
       var sid = this.getUUID();
       var now = getCurrentTime();
       var sampled = (0, rum_core_1.performDraw)(sampling);
       var replaySampled = enable && sampled ? (0, rum_core_1.performDraw)(replaySampling) : false;
       this.setItem(this.rumSessionKey, "".concat(sid, "-").concat(sampled ? 1 : 0, "-").concat(now, "-").concat(now, "-").concat(replaySampled ? 1 : 0));
       return {
         sessionId: sid,
         sampled: sampled,
         startTime: now,
         lastTime: now,
         isNew: true,
         replaySampled: replaySampled
       };
     }
   }, {
     key: "getUUID",
     value: function getUUID() {
       return (0, rum_core_1.generateGUID)().replace(/-/g, '');
     }
   }, {
     key: "getBaseEvent",
     value: function getBaseEvent() {
       var info = this.getSessionInfo();
       var event = {
         timestamp: getCurrentTime(),
         session_id: info.sessionId,
         event_id: this.getEventId(),
         view: this.ctx ? getCurView(this.ctx) : undefined,
         times: 1
       };
       return event;
     }
   }, {
     key: "setItem",
     value: function setItem(key, value) {
       var _this = this;
       var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 365;
       var _this$sessionConfig2 = this.sessionConfig,
         storage = _this$sessionConfig2.storage,
         domain = _this$sessionConfig2.domain;
       var now = getCurrentTime();
       MemoryStorage[key] = value;
       this._lastTime = now;
       clearTimeout(this._timeouts[key]);
       this._timeouts[key] = setTimeout(function () {
         try {
           if (storage === SESSION_STORAGE.LOCAL_STORAGE) {
             global_1.global.localStorage.setItem(key, value);
           } else if (storage === SESSION_STORAGE.COOKIE) {
             setCookie(key, value, days * rum_core_1.ONE_DAY, domain);
           }
         } catch (e) {
           rum_core_1.logger.warn('session', 'Storage write failed, falling back to memory', {
             error: e
           });
           _this.sessionConfig.storage = SESSION_STORAGE.MEMORY;
         }
       }, rum_core_1.ONE_SECOND);
     }
   }, {
     key: "getItem",
     value: function getItem(key) {
       var storage = this.sessionConfig.storage;
       var now = getCurrentTime();
       var duration = now - this._lastTime;
       var value = MemoryStorage[key];
       if (value && duration < 2 * rum_core_1.ONE_SECOND) {
         return value;
       }
       this._lastTime = now;
       try {
         if (storage === SESSION_STORAGE.LOCAL_STORAGE) {
           value = global_1.global.localStorage.getItem(key);
         } else if (storage === SESSION_STORAGE.COOKIE) {
           value = getCookie(key);
         }
         MemoryStorage[key] = value;
       } catch (e) {
         rum_core_1.logger.warn('session', 'Storage read failed', {
           error: e
         });
       }
       return value;
     }
   }]);
 }();
 exports.RumSession = RumSession;

 /***/ }),
 /* 87 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


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
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 var rum_core_1 = __webpack_require__(0);
 var global_1 = __webpack_require__(21);
 var WebviewReporter = function (_rum_core_1$Reporter) {
   function WebviewReporter() {
     var _this;
     _classCallCheck(this, WebviewReporter);
     _this = _callSuper(this, WebviewReporter, arguments);
     _this.name = 'webview-reporter';
     _this._visibilityHandler = null;
     return _this;
   }
   _inherits(WebviewReporter, _rum_core_1$Reporter);
   return _createClass(WebviewReporter, [{
     key: "init",
     value: function init(ctx) {
       var _this2 = this;
       if (typeof global_1.document === 'undefined' || !global_1.document.addEventListener) {
         return;
       }
       this._visibilityHandler = function () {
         try {
           if (global_1.document.visibilityState === 'hidden') {
             _this2.flushEventQueue();
           }
         } catch (e) {}
       };
       try {
         global_1.document.addEventListener('visibilitychange', this._visibilityHandler);
       } catch (e) {}
     }
   }, {
     key: "destroy",
     value: function destroy() {
       if (this._visibilityHandler && typeof global_1.document !== 'undefined') {
         global_1.document.removeEventListener('visibilitychange', this._visibilityHandler);
         this._visibilityHandler = null;
       }
     }
   }, {
     key: "request",
     value: function request(ctx, bundle) {
       bundle.app.type = rum_core_1.AppType.browser;
       bundle._v = global_1.VERSION;
       (0, global_1.requestNative)({
         action: "event",
         data: bundle
       });
     }
   }]);
 }(rum_core_1.Reporter);
 exports["default"] = WebviewReporter;

 /***/ }),
 /* 88 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _regenerator() { var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
 function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
 function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
 function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
 function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
 function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
 function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
 function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
 function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
 function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
 function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
 var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
   function adopt(value) {
     return value instanceof P ? value : new P(function (resolve) {
       resolve(value);
     });
   }
   return new (P || (P = Promise))(function (resolve, reject) {
     function fulfilled(value) {
       try {
         step(generator.next(value));
       } catch (e) {
         reject(e);
       }
     }
     function rejected(value) {
       try {
         step(generator["throw"](value));
       } catch (e) {
         reject(e);
       }
     }
     function step(result) {
       result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
     }
     step((generator = generator.apply(thisArg, _arguments || [])).next());
   });
 };
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 var rum_core_1 = __webpack_require__(0);
 var WebviewConfigManager = function (_rum_core_1$ConfigMan) {
   function WebviewConfigManager() {
     _classCallCheck(this, WebviewConfigManager);
     return _callSuper(this, WebviewConfigManager, arguments);
   }
   _inherits(WebviewConfigManager, _rum_core_1$ConfigMan);
   return _createClass(WebviewConfigManager, [{
     key: "fetchRemoteCfg",
     value: function fetchRemoteCfg(_config) {
       return __awaiter(this, void 0, void 0, _regenerator().m(function _callee() {
         return _regenerator().w(function (_context) {
           while (1) switch (_context.n) {
             case 0:
               return _context.a(2, undefined);
           }
         }, _callee);
       }));
     }
   }, {
     key: "getCacheConfig",
     value: function getCacheConfig() {
       return undefined;
     }
   }, {
     key: "setCacheConfig",
     value: function setCacheConfig(_config) {}
   }, {
     key: "parseConfig",
     value: function parseConfig(json) {
       return json;
     }
   }, {
     key: "init",
     value: function init(config) {
       var _this = this;
       var _super = Object.create(null, {
         init: {
           get: function get() {
             return _superPropGet(WebviewConfigManager, "init", _this, 1);
           }
         }
       });
       return __awaiter(this, void 0, void 0, _regenerator().m(function _callee2() {
         var normalized;
         return _regenerator().w(function (_context2) {
           while (1) switch (_context2.n) {
             case 0:
               normalized = normalizeV2Config(config);
               _context2.n = 1;
               return _super.init.call(this, normalized);
             case 1:
               this.normalizeCollectors(this.currentConfig);
             case 2:
               return _context2.a(2);
           }
         }, _callee2, this);
       }));
     }
   }, {
     key: "setConfig",
     value: function setConfig(config) {
       return __awaiter(this, void 0, void 0, _regenerator().m(function _callee3() {
         var normalized;
         return _regenerator().w(function (_context3) {
           while (1) switch (_context3.n) {
             case 0:
               if (this.currentConfig) {
                 _context3.n = 1;
                 break;
               }
               return _context3.a(2);
             case 1:
               normalized = normalizeV2Config(config);
               this.currentConfig = Object.assign({}, this.currentConfig, normalized);
               this.normalizeCollectors(this.currentConfig);
             case 2:
               return _context3.a(2);
           }
         }, _callee3, this);
       }));
     }
   }, {
     key: "mergeRemoteCfg",
     value: function mergeRemoteCfg(remoteCfg) {
       var merged = _superPropGet(WebviewConfigManager, "mergeRemoteCfg", this, 3)([remoteCfg]);
       this.normalizeCollectors(merged);
       return merged;
     }
   }, {
     key: "normalizeCollectors",
     value: function normalizeCollectors(cfg) {
       if (!cfg || !cfg.collectors) return;
       var c = cfg.collectors;
       if ('click' in c && !('action' in c)) c.action = c.click;else if ('action' in c && !('click' in c)) c.click = c.action;
       if ('longtask' in c && !('longTask' in c)) c.longTask = c.longtask;else if ('longTask' in c && !('longtask' in c)) c.longtask = c.longTask;
     }
   }]);
 }(rum_core_1.ConfigManager);
 exports["default"] = WebviewConfigManager;
 function normalizeV2Config(config) {
   if (!(0, rum_core_1.isObject)(config)) return config;
   var result = Object.assign({}, config);
   var tracing = result.tracing;
   if ((0, rum_core_1.isObject)(tracing) && !(0, rum_core_1.isArray)(tracing) && (0, rum_core_1.isArray)(tracing.rules)) {
     var tracingConfig = {};
     tracingConfig.enable = tracing.enable !== undefined ? tracing.enable : true;
     var allowedUrls = [];
     tracing.rules.forEach(function (rule) {
       var traceOption = {
         enable: rule.enable,
         tracestate: rule.tracestate,
         baggage: rule.baggage,
         propagatorTypes: rule.protocols,
         sampling: rule.sampling
       };
       if (rule.match === '{location.origin}') {
         Object.assign(tracingConfig, traceOption);
         return;
       }
       traceOption.match = (0, rum_core_1.parseRule2Match)(rule);
       allowedUrls.push(traceOption);
     });
     tracingConfig.allowedUrls = allowedUrls;
     result.tracing = tracingConfig;
   }
   var collectors = result.collectors;
   if ((0, rum_core_1.isArray)(collectors) && collectors.length > 0) {
     var collectorsConfig = {};
     collectors.forEach(function (collector) {
       var name = collector.name;
       if (!name) return;
       var collectorConfig = Object.assign({}, collector);
       var filters = collector.filters;
       if ((0, rum_core_1.isArray)(filters) && filters.length > 0) {
         collectorConfig.filters = filters.map(function (rule) {
           return (0, rum_core_1.parseRule2Match)(rule);
         });
       }
       if (name === 'view' && 'spaMode' in collectorConfig) {
         result.spaMode = collectorConfig.spaMode;
       }
       collectorsConfig[name] = collectorConfig;
     });
     result.collectors = collectorsConfig;
   }
   return result;
 }

 /***/ }),
 /* 89 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.WebviewMonitorReporter = void 0;
 var WebviewMonitorReporter = function () {
   function WebviewMonitorReporter(endpoint) {
     _classCallCheck(this, WebviewMonitorReporter);
     this.endpoint = endpoint;
   }
   return _createClass(WebviewMonitorReporter, [{
     key: "send",
     value: function send(_data) {}
   }]);
 }();
 exports.WebviewMonitorReporter = WebviewMonitorReporter;

 /***/ })
 /******/ ]);
 });
