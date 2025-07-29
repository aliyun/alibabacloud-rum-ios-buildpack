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
 /******/     return __webpack_require__(__webpack_require__.s = 30);
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
 var client_1 = __webpack_require__(8);
 exports.Client = client_1["default"];
 var context_1 = __webpack_require__(10);
 exports.Context = context_1["default"];
 var reporter_1 = __webpack_require__(34);
 exports.Reporter = reporter_1["default"];
 var shell_1 = __webpack_require__(36);
 exports.Shell = shell_1["default"];
 __exportStar(__webpack_require__(9), exports);
 __exportStar(__webpack_require__(38), exports);
 __exportStar(__webpack_require__(39), exports);
 __exportStar(__webpack_require__(40), exports);
 __exportStar(__webpack_require__(6), exports);
 __exportStar(__webpack_require__(41), exports);
 __exportStar(__webpack_require__(12), exports);
 __exportStar(__webpack_require__(13), exports);
 __exportStar(__webpack_require__(2), exports);
 __exportStar(__webpack_require__(42), exports);
 __exportStar(__webpack_require__(14), exports);
 __exportStar(__webpack_require__(43), exports);
 __exportStar(__webpack_require__(11), exports);

 /***/ }),
 /* 1 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.VERSION = exports.history = exports.location = exports.document = exports.global = void 0;
 exports.global = window;
 exports.document = window.document;
 exports.location = window.location;
 exports.history = window.history;
 exports.VERSION = 'cdn-0.0.2';

 /***/ }),
 /* 2 */
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
 /* 3 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.getResourceName = exports.fixRelativeUrl = exports.getPathByURL = exports.getCurrentURL = void 0;
 var rum_core_1 = __webpack_require__(0);
 var global_1 = __webpack_require__(1);
 function getCurrentURL() {
   if (global_1.location) {
     return global_1.location.href;
   } else {
     return '';
   }
 }
 exports.getCurrentURL = getCurrentURL;
 function getHashPath(hash) {
   if (!(0, rum_core_1.isString)(hash) || !hash) {
     return '';
   }
   var prefixIndex = hash.indexOf('#');
   if (prefixIndex === 0) {
     hash = hash.substring(1);
   }
   var hashSearchIndex = hash.indexOf('?');
   if (hashSearchIndex >= 0) {
     hash = hash.substring(0, hashSearchIndex);
   }
   return hash;
 }
 function getPathByURL(url) {
   var spaMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
   try {
     var urlObj = new URL(fixRelativeUrl(url));
     if (spaMode === 'auto' || spaMode === true) {
       var hash = getHashPath(urlObj.hash || '');
       return urlObj.pathname + (hash ? '#' : '') + hash;
     } else if (spaMode === 'hash') {
       return getHashPath(urlObj.hash || '');
     } else {
       return urlObj.pathname || '/';
     }
   } catch (error) {
     return url;
   }
 }
 exports.getPathByURL = getPathByURL;
 function fixRelativeUrl(url) {
   var protocol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : global_1.location.protocol;
   var host = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : global_1.location.host;
   if (!(0, rum_core_1.isString)(url)) {
     throw new Error('Invalid URL provided');
   }
   if (url === '') {
     url = global_1.location.href;
   }
   var hasProtocol = /^https?:\/\//i.test(url);
   if (hasProtocol) {
     return url;
   }
   var hasHost = /^\/\//i.test(url);
   if (hasHost) {
     return "".concat(protocol).concat(url);
   }
   var hasInitialSlash = /^\//.test(url);
   return "".concat(protocol, "//").concat(host).concat(hasInitialSlash ? '' : '/').concat(url);
 }
 exports.fixRelativeUrl = fixRelativeUrl;
 function getResourceName(url, parseFunction) {
   var name;
   if ((0, rum_core_1.isFunction)(parseFunction)) {
     name = parseFunction(url);
   } else {
     name = getPathByURL(url);
   }
   return name;
 }
 exports.getResourceName = getResourceName;

 /***/ }),
 /* 4 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.initPerfObserver = exports.getCurrentTime = exports.restoreHackFunction = exports.hackFunction = void 0;
 var rum_core_1 = __webpack_require__(0);
 var global_1 = __webpack_require__(1);
 var PRE_SUF_FIX = '__';
 function hackFunction(source, key, hack) {
   if (_typeof(source) !== 'object' || typeof source[key] !== 'function') return;
   var oldFunc = source[key];
   source["".concat(PRE_SUF_FIX).concat(key).concat(PRE_SUF_FIX)] = oldFunc;
   var newFunc = hack(oldFunc);
   source[key] = newFunc;
 }
 exports.hackFunction = hackFunction;
 function restoreHackFunction(source, name) {
   var key = "".concat(PRE_SUF_FIX).concat(name).concat(PRE_SUF_FIX);
   if (typeof source[key] == 'function') {
     source[name] = source[key];
     delete source[key];
   }
 }
 exports.restoreHackFunction = restoreHackFunction;
 function getCurrentTime(timeOffset) {
   if ((performance === null || performance === void 0 ? void 0 : performance.timeOrigin) && (performance === null || performance === void 0 ? void 0 : performance.now)) {
     return Math.round(performance.timeOrigin + (timeOffset ? timeOffset : performance.now()));
   } else {
     return Date.now();
   }
 }
 exports.getCurrentTime = getCurrentTime;
 function initPerfObserver(type, entriesHandler, opt) {
   var _a;
   var PerfObserver = global_1.global.PerformanceObserver;
   if (!(0, rum_core_1.isFunction)(PerfObserver)) return;
   if (!((_a = PerfObserver.supportedEntryTypes) === null || _a === void 0 ? void 0 : _a.includes(type))) return;
   var perfObserver = new PerfObserver(function (list) {
     entriesHandler(list.getEntries());
   });
   try {
     perfObserver.observe(Object.assign({
       type: type,
       buffered: true
     }, opt));
   } catch (e) {
     perfObserver.observe(Object.assign({
       entryTypes: [type]
     }, opt));
   }
   return perfObserver;
 }
 exports.initPerfObserver = initPerfObserver;

 /***/ }),
 /* 5 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.getCurView = void 0;
 function getCurView(ctx) {
   var views = ctx.getViews();
   if (views && views.length) {
     return views[views.length - 1];
   }
 }
 exports.getCurView = getCurView;

 /***/ }),
 /* 6 */
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
 })(AppType = exports.AppType || (exports.AppType = {}));

 /***/ }),
 /* 7 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
 function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
 function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
 function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
 function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
 function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
 function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.delBadMea = exports.getResourceType = exports.RESOURCE_TYPES = exports.FAKE_INITIAL_DOCUMENT = exports.ResourceType = exports.calcResourceTimingData = exports.getResourceStatus = exports.getResourceSuccessByCode = void 0;
 var rum_core_1 = __webpack_require__(0);
 function getResourceSuccessByCode(status_code) {
   var status;
   var THRESHOLD = [200, 300];
   if (status_code) {
     status = status_code >= THRESHOLD[0] && status_code < THRESHOLD[1] ? rum_core_1.ResourceStatus.Success : rum_core_1.ResourceStatus.Failed;
   } else {
     status = rum_core_1.ResourceStatus.Unknown;
   }
   return status;
 }
 exports.getResourceSuccessByCode = getResourceSuccessByCode;
 function getResourceStatus(entry) {
   var status;
   var responseStatus = entry.responseStatus,
     transferSize = entry.transferSize,
     encodedBodySize = entry.encodedBodySize,
     decodedBodySize = entry.decodedBodySize,
     responseEnd = entry.responseEnd,
     startTime = entry.startTime;
   if (responseStatus) {
     status = getResourceSuccessByCode(responseStatus);
   } else if ((0, rum_core_1.isZero)(transferSize, encodedBodySize, decodedBodySize)) {
     status = rum_core_1.ResourceStatus.Failed;
   } else if (responseEnd > startTime && (transferSize > 0 || encodedBodySize > 0 || decodedBodySize > 0)) {
     status = rum_core_1.ResourceStatus.Success;
   } else {
     status = rum_core_1.ResourceStatus.Unknown;
   }
   return status;
 }
 exports.getResourceStatus = getResourceStatus;
 function areInOrder() {
   for (var i = 1; i < arguments.length; i += 1) {
     if ((i - 1 < 0 || arguments.length <= i - 1 ? undefined : arguments[i - 1]) > (i < 0 || arguments.length <= i ? undefined : arguments[i])) {
       return false;
     }
   }
   return true;
 }
 function calcResourceTimingData(entry) {
   var isError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
   var startTime = entry.startTime,
     fetchStart = entry.fetchStart,
     transferSize = entry.transferSize,
     encodedBodySize = entry.encodedBodySize,
     decodedBodySize = entry.decodedBodySize,
     redirectStart = entry.redirectStart,
     redirectEnd = entry.redirectEnd,
     domainLookupStart = entry.domainLookupStart,
     domainLookupEnd = entry.domainLookupEnd,
     connectStart = entry.connectStart,
     secureConnectionStart = entry.secureConnectionStart,
     connectEnd = entry.connectEnd,
     requestStart = entry.requestStart,
     responseStart = entry.responseStart,
     responseEnd = entry.responseEnd,
     duration = entry.duration;
   if (!isError) {
     if (!areInOrder(startTime, fetchStart, domainLookupStart, domainLookupEnd, connectStart, connectEnd, requestStart, responseStart, responseEnd)) {
       return;
     }
     if ((0, rum_core_1.isZero)(duration) || (0, rum_core_1.isZero)(responseStart) || startTime > responseStart || (0, rum_core_1.isZero)(transferSize) && encodedBodySize > 0 && decodedBodySize > 0 || entry['deliveryType'] === 'cache' || !('responseStatus' in entry) && (0, rum_core_1.isZero)(transferSize, encodedBodySize, decodedBodySize)) {
       return;
     }
   }
   if (redirectStart < startTime) {
     redirectStart = startTime;
   }
   if (redirectEnd < startTime) {
     redirectEnd = fetchStart;
   }
   var resourceTimeMeasure = {
     duration: duration
   };
   if (connectEnd) {
     resourceTimeMeasure.connect_duration = (0, rum_core_1.formatNumber)(connectEnd - connectStart);
   }
   if (domainLookupEnd) {
     resourceTimeMeasure.dns_duration = (0, rum_core_1.formatNumber)(domainLookupEnd - domainLookupStart);
   }
   if (redirectEnd) {
     resourceTimeMeasure.redirect_duration = (0, rum_core_1.formatNumber)(redirectEnd - redirectStart);
   }
   if (responseStart) {
     resourceTimeMeasure.download_duration = (0, rum_core_1.formatNumber)(responseEnd - responseStart);
     resourceTimeMeasure.first_byte_duration = (0, rum_core_1.formatNumber)(responseStart - requestStart);
   }
   if (decodedBodySize) {
     resourceTimeMeasure.size = (0, rum_core_1.formatNumber)(decodedBodySize);
   }
   if (transferSize) {
     resourceTimeMeasure.transfer_size = (0, rum_core_1.formatNumber)(transferSize);
   }
   if (secureConnectionStart) {
     resourceTimeMeasure.ssl_duration = (0, rum_core_1.formatNumber)(connectEnd - secureConnectionStart);
   }
   return delBadMea(resourceTimeMeasure);
 }
 exports.calcResourceTimingData = calcResourceTimingData;
 var ResourceType;
 (function (ResourceType) {
   ResourceType["DOCUMENT"] = "document";
   ResourceType["XHR"] = "xmlhttprequest";
   ResourceType["BEACON"] = "beacon";
   ResourceType["FETCH"] = "fetch";
   ResourceType["CSS"] = "css";
   ResourceType["JS"] = "js";
   ResourceType["IMAGE"] = "image";
   ResourceType["FONT"] = "font";
   ResourceType["MEDIA"] = "media";
   ResourceType["OTHER"] = "other";
 })(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
 exports.FAKE_INITIAL_DOCUMENT = 'initial_document';
 exports.RESOURCE_TYPES = [[ResourceType.DOCUMENT, function (initiatorType) {
   return exports.FAKE_INITIAL_DOCUMENT === initiatorType;
 }], [ResourceType.XHR, function (initiatorType) {
   return 'xmlhttprequest' === initiatorType;
 }], [ResourceType.FETCH, function (initiatorType) {
   return 'fetch' === initiatorType;
 }], [ResourceType.BEACON, function (initiatorType) {
   return 'beacon' === initiatorType;
 }], [ResourceType.CSS, function (_, path) {
   return /\.css$/i.test(path);
 }], [ResourceType.JS, function (_, path) {
   return /\.js$/i.test(path);
 }], [ResourceType.IMAGE, function (initiatorType, path) {
   return ['image', 'img', 'icon'].includes(initiatorType) || /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(path) !== null;
 }], [ResourceType.FONT, function (_, path) {
   return /\.(woff|eot|woff2|ttf)$/i.exec(path) !== null;
 }], [ResourceType.MEDIA, function (initiatorType, path) {
   return ['audio', 'video'].includes(initiatorType) || /\.(mp3|mp4)$/i.exec(path) !== null;
 }]];
 function getResourceType(url, initiatorType) {
   var u;
   try {
     u = new URL(url);
   } catch (e) {
     return ResourceType.OTHER;
   }
   var path = u.pathname;
   var _iterator = _createForOfIteratorHelper(exports.RESOURCE_TYPES),
     _step;
   try {
     for (_iterator.s(); !(_step = _iterator.n()).done;) {
       var _step$value = _slicedToArray(_step.value, 2),
         type = _step$value[0],
         isType = _step$value[1];
       if (isType(initiatorType, path)) {
         return type;
       }
     }
   } catch (err) {
     _iterator.e(err);
   } finally {
     _iterator.f();
   }
   return ResourceType.OTHER;
 }
 exports.getResourceType = getResourceType;
 var resCheckKeys = ['duration', 'connect_duration', 'ssl_duration', 'dns_duration', 'redirect_duration', 'first_byte_duration', 'download_duration'];
 function delBadMea(data) {
   var checkKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : resCheckKeys;
   var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, rum_core_1.ONE_HOUR];
   if (!(0, rum_core_1.isObject)(data)) return;
   checkKeys.forEach(function (key) {
     if (!(key in data)) return;
     if (data[key] <= scope[0] || data[key] >= scope[1]) {
       delete data[key];
     }
   });
   return data;
 }
 exports.delBadMea = delBadMea;

 /***/ }),
 /* 8 */
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
 var client_1 = __webpack_require__(9);
 var events_1 = __webpack_require__(33);
 var context_1 = __webpack_require__(10);
 var is_1 = __webpack_require__(2);
 var Client = /*#__PURE__*/function () {
   function Client() {
     var _this = this;
     _classCallCheck(this, Client);
     this.emitter = new events_1.EventEmitter();
     this.sendEvent = function (payload) {
       _this.emitter.emit(client_1.EventType.collect, payload);
     };
   }
   return _createClass(Client, [{
     key: "init",
     value: function init(config, rumSession) {
       var _this2 = this;
       this.ctx = new context_1["default"](config, rumSession);
       var ctx = this.ctx,
         collectors = this.collectors,
         processors = this.processors,
         reporter = this.reporter;
       processors.forEach(function (processor) {
         (0, is_1.isFunction)(processor.setup) && processor.setup(ctx);
       });
       this.emitter.on(client_1.EventType.collect, function (payload) {
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
               if (res) {
                 ctx.setRumEvent(res);
               }
             }
           }
         } catch (err) {
           _iterator.e(err);
         } finally {
           _iterator.f();
         }
         reporter.report(ctx);
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
 /* 9 */
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
 /* 10 */
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
 var Context = /*#__PURE__*/function () {
   function Context(config, rumSession) {
     _classCallCheck(this, Context);
     this.config = config;
     this.views = [];
     if (rumSession) {
       this.session = rumSession;
       this.session.init(this);
     }
   }
   return _createClass(Context, [{
     key: "getConfig",
     value: function getConfig() {
       return this.config;
     }
   }, {
     key: "setConfig",
     value: function setConfig(config) {
       this.config = config;
     }
   }, {
     key: "getViews",
     value: function getViews() {
       return this.views;
     }
   }, {
     key: "addView",
     value: function addView(view) {
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
 /* 11 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.verifyProperties = void 0;
 var is_1 = __webpack_require__(2);
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
 /* 12 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.toRegFormat = exports.transStrToReg = exports.getType = exports.delay = exports.debounce = exports.generateEventId = exports.generateSpanId = exports.generateTraceId = exports.generateGUID = exports.restoreFunction = exports.interceptFunction = void 0;
 var is_1 = __webpack_require__(2);
 var PRE_SUF_FIX = '__';
 var TYPE_REG = /^\[object ([a-z]*)\]$/;
 function interceptFunction(target, name, callback) {
   var isPrototype = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
   var registeredMethod = target[name];
   target["".concat(PRE_SUF_FIX).concat(name).concat(PRE_SUF_FIX)] = registeredMethod;
   target[name] = function () {
     var ctx = isPrototype ? this : target;
     for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
       args[_key] = arguments[_key];
     }
     callback.apply(ctx, args);
     if ((0, is_1.isFunction)(registeredMethod)) {
       return registeredMethod.apply(ctx, args);
     }
   };
 }
 exports.interceptFunction = interceptFunction;
 function restoreFunction(target, name) {
   var key = "".concat(PRE_SUF_FIX).concat(name).concat(PRE_SUF_FIX);
   if (typeof target[key] == 'function') {
     target[name] = target[key];
     delete target[key];
   }
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
   } catch (e) {}
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
 function getType(obj) {
   var type = Object.prototype.toString.call(obj);
   type = type.toLowerCase() || '';
   var arr = type.match(TYPE_REG);
   return arr === null || arr === void 0 ? void 0 : arr[1];
 }
 exports.getType = getType;
 function transStrToReg(str) {
   if (getType(str) !== 'string') return str;
   if (str.length > 2 && str[0] === '/' && str[str.length - 1] === '/') {
     return new RegExp(str.substr(1, str.length - 2));
   }
   return str;
 }
 exports.transStrToReg = transStrToReg;
 function toRegFormat(config, keys) {
   if (getType(keys) === 'string') {
     keys = [keys];
   }
   for (var i = 0, len = keys.length; i < len; i++) {
     var paths = keys[i].split('.');
     var lastIndex = paths.length - 1;
     if (!config) break;
     var tmp = config;
     for (var j = 0, jlen = paths.length; j < jlen; j++) {
       if (paths[j] === '[]') {
         if (getType(tmp) === 'array') {
           var lastPath = paths.splice(j + 1);
           lastPath = lastPath.join('.');
           for (var x = 0, xlen = tmp.length; x < xlen; x++) {
             toRegFormat(tmp[x], lastPath);
           }
         }
         break;
       }
       if (lastIndex === j && getType(tmp[paths[j]]) === 'string') {
         tmp[paths[j]] = transStrToReg(tmp[paths[j]]);
         break;
       }
       tmp = tmp[paths[j]];
       if (!tmp) break;
     }
     if (!tmp || getType(tmp) !== 'array') continue;
     for (var _j = 0, _jlen = tmp.length; _j < _jlen; _j++) {
       tmp[_j] = transStrToReg(tmp[_j]);
     }
   }
 }
 exports.toRegFormat = toRegFormat;

 /***/ }),
 /* 13 */
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
 /* 14 */
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
 exports.urlMatch = exports.matchList = exports.isMatchOption = void 0;
 var is_1 = __webpack_require__(2);
 var polyfills_1 = __webpack_require__(13);
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
 var rum_core_1 = __webpack_require__(0);
 var url_1 = __webpack_require__(3);
 var global_1 = __webpack_require__(1);
 var supportsHistory = global_1.history && !!global_1.history.pushState && !!global_1.history.replaceState;
 var PvCollector = /*#__PURE__*/function () {
   function PvCollector() {
     var _this = this;
     _classCallCheck(this, PvCollector);
     this.name = 'pv-collector';
     this.sendPv = function (url, referrer) {
       var loadingType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'route_change';
       var name = _this.getViewName(url);
       var prevUrl = _this.prevUrl;
       _this.prevUrl = url;
       if (prevUrl && name === _this.getViewName(prevUrl)) {
         return;
       }
       _this.ctx.addView({
         id: _this.ctx.session.getViewId(),
         name: name
       });
       var baseRumEvent = _this.ctx.session.getBaseEvent();
       _this.sendEvent(Object.assign(Object.assign({}, baseRumEvent), {
         event_type: rum_core_1.RumEventType.VIEW,
         type: 'pv',
         name: name,
         url: url,
         referrer: referrer,
         loading_type: loadingType
       }));
     };
     this.historyFn = function () {
       var referrer = _this.prevUrl;
       (0, rum_core_1.delay)(function () {
         _this.sendPv(global_1.location.href, referrer);
       }, 1);
     };
     this.popstateFn = function (e) {
       var url = (0, url_1.getCurrentURL)();
       var referrer = _this.prevUrl;
       _this.sendPv(url, referrer);
     };
   }
   return _createClass(PvCollector, [{
     key: "setup",
     value: function setup(ctx, sendEvent) {
       this.ctx = ctx;
       this.sendEvent = sendEvent;
       this.sendPv((0, url_1.getCurrentURL)(), global_1.document.referrer || '', 'initial_load');
       var spaMode = this.getSpaMode();
       if (supportsHistory && spaMode) {
         (0, rum_core_1.interceptFunction)(global_1.global.history, 'pushState', this.historyFn);
         (0, rum_core_1.interceptFunction)(global_1.global.history, 'replaceState', this.historyFn);
         global_1.global.addEventListener('popstate', this.popstateFn);
       }
     }
   }, {
     key: "getSpaMode",
     value: function getSpaMode() {
       var spaMode = this.ctx.getConfig()['spaMode'];
       if (!spaMode) {
         return false;
       }
       if (spaMode !== 'history' && spaMode !== 'hash') {
         return 'auto';
       }
       return spaMode;
     }
   }, {
     key: "getViewName",
     value: function getViewName(url) {
       var config = this.ctx.getConfig();
       var name = (0, url_1.getPathByURL)(url, this.getSpaMode());
       if ((0, rum_core_1.isFunction)(config.parseViewName)) {
         name = config.parseViewName(url);
       }
       return name;
     }
   }, {
     key: "destroy",
     value: function destroy() {
       if (supportsHistory) {
         (0, rum_core_1.restoreFunction)(global_1.global.history, 'pushState');
         (0, rum_core_1.restoreFunction)(global_1.global.history, 'replaceState');
         global_1.global.removeEventListener('popstate', this.popstateFn);
       }
     }
   }]);
 }();
 exports["default"] = PvCollector;

 /***/ }),
 /* 16 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
 function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
 function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
 function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
 function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
 function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 var rum_core_1 = __webpack_require__(0);
 var global_1 = __webpack_require__(1);
 var stack_parser_1 = __webpack_require__(46);
 var ExceptionCollector = /*#__PURE__*/function () {
   function ExceptionCollector() {
     _classCallCheck(this, ExceptionCollector);
     this.name = 'exception-collector';
   }
   return _createClass(ExceptionCollector, [{
     key: "setup",
     value: function setup(ctx, sendEvent) {
       var collectors = ctx.getConfig().collectors || {};
       this.ctx = ctx;
       this.sendEvent = sendEvent;
       var self = this;
       if (collectors.consoleError !== false) {
         (0, rum_core_1.interceptFunction)(global_1.global.console, 'error', function () {
           for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
             args[_key] = arguments[_key];
           }
           (args || []).forEach(function (e) {
             return self.onError('console.error', e);
           });
         });
       }
       if (collectors.jsError !== false) {
         if (!this.errorHandle) {
           this.errorHandle = this.onError.bind(this, 'onError');
         }
         if (!this.unhandledRejectionHandle) {
           this.unhandledRejectionHandle = this.onError.bind(this, 'onUnhandledRejection');
         }
         global_1.global.addEventListener('error', this.errorHandle, true);
         global_1.global.addEventListener('unhandledrejection', this.unhandledRejectionHandle, true);
       }
     }
   }, {
     key: "destroy",
     value: function destroy() {
       (0, rum_core_1.restoreFunction)(global_1.global.console, 'error');
       global_1.global.removeEventListener('error', this.errorHandle, true);
       global_1.global.removeEventListener('unhandledrejection', this.unhandledRejectionHandle, true);
     }
   }, {
     key: "onError",
     value: function onError(source, e) {
       if (!(0, rum_core_1.isObject)(e)) return;
       var target = e.target || e.srcElement;
       if (target && target.nodeName && target.nodeType === 1) {
         return;
       }
       var err, column, line, file;
       if (e instanceof PromiseRejectionEvent) {
         err = e.reason;
       } else if (e instanceof ErrorEvent) {
         err = e.error;
         column = e.colno;
         line = e.lineno;
         file = e.filename;
       } else {
         err = e;
       }
       if (!(0, rum_core_1.isObject)(err)) return;
       var _err = err,
         name = _err.name,
         message = _err.message,
         stack = _err.stack;
       if (!name || !message || this.errorFilter(err)) return;
       var baseRumEvent = this.ctx.session.getBaseEvent();
       var event = Object.assign(Object.assign({}, baseRumEvent), {
         event_type: rum_core_1.RumEventType.EXCEPTION,
         type: 'error',
         source: source,
         name: name,
         message: message,
         stack: stack,
         file: file,
         line: line,
         column: column
       });
       var debugIdsMap = (0, stack_parser_1.getDebugIdsMap)(stack);
       if (debugIdsMap) {
         event.binary_images = debugIdsMap;
       }
       this.sendEvent(event);
     }
   }, {
     key: "errorFilter",
     value: function errorFilter(err) {
       var filters = this.ctx.getConfig().filters || {};
       var exceptionFilters;
       var filter = filters.exception;
       if (!filter) {
         exceptionFilters = [];
       } else if ((0, rum_core_1.isMatchOption)(filter)) {
         exceptionFilters = [filter];
       } else if ((0, rum_core_1.isArray)(filter)) {
         exceptionFilters = filter;
       } else {
         return false;
       }
       if (exceptionFilters && !(0, rum_core_1.isArray)(exceptionFilters)) {
         exceptionFilters = [exceptionFilters];
       }
       var list = [].concat(_toConsumableArray(exceptionFilters), [/^Script error\.?$/, /failed[\w\s]+fetch/i]);
       return (0, rum_core_1.matchList)(list, err.name, true, err) || (0, rum_core_1.matchList)(list, err.message, true, err) || (0, rum_core_1.matchList)(list, err.stack, true, err);
     }
   }]);
 }();
 exports["default"] = ExceptionCollector;

 /***/ }),
 /* 17 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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
 var rum_core_1 = __webpack_require__(0);
 var blank_1 = __webpack_require__(47);
 var global_1 = __webpack_require__(1);
 var url_1 = __webpack_require__(3);
 var timer = null;
 var eventRegistrationMap = {
   LEAVE: function LEAVE(handler) {
     global_1.document.addEventListener('beforeunload', handler);
     return function () {
       return global_1.document.removeEventListener('beforeunload', handler);
     };
   },
   ROUTE_CHANGE: function ROUTE_CHANGE(handler, spaMode) {
     if (spaMode === 'hash') {
       global_1.global.addEventListener('hashchange', handler);
       return function () {
         return global_1.global.removeEventListener('hashchange', handler);
       };
     } else {
       (0, rum_core_1.interceptFunction)(global_1.global.history, 'pushState', handler);
       (0, rum_core_1.interceptFunction)(global_1.global.history, 'replaceState', handler);
       global_1.global.addEventListener('popstate', handler);
       return function () {
         global_1.global.removeEventListener('popstate', handler);
       };
     }
   },
   ERROR: function ERROR(handler) {
     global_1.global.addEventListener('error', handler);
     return function () {
       return global_1.global.removeEventListener('error', handler);
     };
   },
   LOAD: function LOAD(handler) {
     if (global_1.document.readyState === 'complete') {
       setTimeout(handler, 0);
       return function () {};
     } else {
       global_1.global.addEventListener('load', handler);
       return function () {
         return global_1.global.removeEventListener('load', handler);
       };
     }
   }
 };
 var WhiteScreenCollector = /*#__PURE__*/function () {
   function WhiteScreenCollector() {
     var _this = this;
     _classCallCheck(this, WhiteScreenCollector);
     this.name = 'white-screen-collector';
     this.observers = [];
     this.abort = function () {
       _this.observers.forEach(function (observer) {
         return observer();
       });
       _this.observers = [];
     };
     this.blankHandler = function (_ref, when) {
       var target = _ref.target,
         tester = _ref.tester,
         _ref$delay = _ref.delay,
         delay = _ref$delay === void 0 ? 0 : _ref$delay,
         _ref$configOptions = _ref.configOptions,
         configOptions = _ref$configOptions === void 0 ? {} : _ref$configOptions,
         _ref$ignoreUrlList = _ref.ignoreUrlList,
         ignoreUrlList = _ref$ignoreUrlList === void 0 ? [] : _ref$ignoreUrlList;
       return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
         var _this2 = this;
         var targetNode, url;
         return _regeneratorRuntime().wrap(function _callee$(_context) {
           while (1) switch (_context.prev = _context.next) {
             case 0:
               if (!(ignoreUrlList.includes(global_1.location.pathname) || ignoreUrlList.includes(global_1.location.hash))) {
                 _context.next = 2;
                 break;
               }
               return _context.abrupt("return");
             case 2:
               targetNode = global_1.document.querySelector(target);
               if (!(!targetNode || !tester)) {
                 _context.next = 5;
                 break;
               }
               return _context.abrupt("return");
             case 5:
               if ((0, blank_1.testerValidator)(tester)) {
                 _context.next = 8;
                 break;
               }
               console.warn('[RUM] Invalid tester type. Expected either a function or a string.');
               return _context.abrupt("return");
             case 8:
               if (timer) {
                 clearTimeout(timer);
                 timer = null;
               }
               url = (0, url_1.getCurrentURL)();
               if (when !== 'LEAVE' && when !== 'ERROR') {
                 timer = setTimeout(function () {
                   _this2.blankChecker(tester, targetNode, configOptions, when, url);
                 }, delay);
               } else {
                 timer = setTimeout(function () {
                   _this2.blankChecker(tester, targetNode, configOptions, when, url);
                 }, 0);
               }
             case 11:
             case "end":
               return _context.stop();
           }
         }, _callee);
       }));
     };
     this.blankChecker = function (tester, targetNode, configOptions, when, url) {
       return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
         var _yield, hasContent, _yield$message, message, snapshot, baseRumEvent, rumEvent;
         return _regeneratorRuntime().wrap(function _callee2$(_context2) {
           while (1) switch (_context2.prev = _context2.next) {
             case 0:
               _context2.next = 2;
               return (0, blank_1.blankCheck)(tester, targetNode, configOptions);
             case 2:
               _yield = _context2.sent;
               hasContent = _yield.hasContent;
               _yield$message = _yield.message;
               message = _yield$message === void 0 ? '' : _yield$message;
               snapshot = _yield.snapshot;
               if (!hasContent) {
                 _context2.next = 9;
                 break;
               }
               return _context2.abrupt("return");
             case 9:
               baseRumEvent = this.ctx.session.getBaseEvent();
               rumEvent = Object.assign(Object.assign({}, baseRumEvent), {
                 event_type: rum_core_1.RumEventType.EXCEPTION,
                 name: "A white screen occurs at ".concat(when),
                 type: 'blank',
                 message: message,
                 snapshots: JSON.stringify(Object.assign(Object.assign({}, snapshot), {
                   when: when,
                   url: url
                 }))
               });
               this.sendEvent(rumEvent);
               this.abort();
             case 13:
             case "end":
               return _context2.stop();
           }
         }, _callee2, this);
       }));
     };
   }
   return _createClass(WhiteScreenCollector, [{
     key: "setup",
     value: function setup(ctx, sendEvent) {
       var _this3 = this;
       this.ctx = ctx;
       this.sendEvent = sendEvent;
       var _ctx$getConfig = ctx.getConfig(),
         whiteScreen = _ctx$getConfig.whiteScreen,
         spaMode = _ctx$getConfig.spaMode;
       if (whiteScreen) {
         var detectionRules = whiteScreen.detectionRules;
         if (Array.isArray(detectionRules) && detectionRules.length) {
           detectionRules.forEach(function (rule) {
             rule.test_when && rule.test_when.forEach(function (when) {
               var handler = function handler() {
                 try {
                   _this3.blankHandler(rule, when);
                 } catch (e) {
                   console.warn('[RUM] Failed to inject blank handler: ', e);
                 }
               };
               var registerHandler = eventRegistrationMap[when];
               if (registerHandler) {
                 var unregisterHandler = registerHandler(handler, spaMode);
                 _this3.observers.push(unregisterHandler);
               }
             });
           });
         }
       }
     }
   }, {
     key: "destroy",
     value: function destroy() {
       this.abort();
     }
   }]);
 }();
 exports["default"] = WhiteScreenCollector;

 /***/ }),
 /* 18 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.getTrueArea = exports.getElementsBySelectors = void 0;
 var getElementsBySelectors = function getElementsBySelectors(selectors) {
   var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
   var elements = [];
   selectors.forEach(function (selector) {
     var element = Array.from(rootElement.querySelectorAll(selector));
     if (element) {
       elements.push.apply(elements, element);
     }
   });
   return elements;
 };
 exports.getElementsBySelectors = getElementsBySelectors;
 var getTrueArea = function getTrueArea(element) {
   var _element$getBoundingC = element.getBoundingClientRect(),
     left = _element$getBoundingC.left,
     top = _element$getBoundingC.top,
     right = _element$getBoundingC.right,
     bottom = _element$getBoundingC.bottom;
   var windowHeight = window.innerHeight || document.documentElement.clientHeight;
   var windowWidth = window.innerWidth || document.documentElement.clientWidth;
   var trueLeft = Math.max(0, left);
   var trueTop = Math.max(0, top);
   var trueRight = Math.min(windowWidth, right);
   var trueBottom = Math.min(windowHeight, bottom);
   return {
     left: trueLeft,
     top: trueTop,
     right: trueRight,
     bottom: trueBottom,
     width: trueRight - trueLeft,
     height: trueBottom - trueTop
   };
 };
 exports.getTrueArea = getTrueArea;

 /***/ }),
 /* 19 */
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
 var rum_core_1 = __webpack_require__(0);
 var url_1 = __webpack_require__(3);
 var global_1 = __webpack_require__(1);
 var performance_1 = __webpack_require__(7);
 var PerfObserver = global_1.global.PerformanceObserver;
 var MAX_DELAY = 10 * rum_core_1.ONE_MINUTE;
 var checkKeys = ['dom_interactive', 'dom_content_loaded', 'dom_complete', 'load_event', 'first_paint', 'first_contentful_paint'];
 var PerfCollector = /*#__PURE__*/function () {
   function PerfCollector() {
     var _this = this;
     _classCallCheck(this, PerfCollector);
     this.name = 'perf-collector';
     this.perfHandler = function (entryList) {
       var entries = entryList.getEntries();
       var event = _this.eventCache;
       for (var i = 0; i < entries.length; i++) {
         try {
           var entry = entries[i];
           switch (entry.entryType) {
             case 'navigation':
               var fetchStart = entry.fetchStart,
                 responseEnd = entry.responseEnd,
                 domInteractive = entry.domInteractive,
                 domContentLoadedEventEnd = entry.domContentLoadedEventEnd,
                 domComplete = entry.domComplete,
                 loadEventEnd = entry.loadEventEnd;
               event.dom_interactive = (0, rum_core_1.formatNumber)(domInteractive - fetchStart);
               event.dom_content_loaded = (0, rum_core_1.formatNumber)(domContentLoadedEventEnd - fetchStart);
               event.dom_complete = (0, rum_core_1.formatNumber)(domComplete - fetchStart);
               event.load_event = (0, rum_core_1.formatNumber)(loadEventEnd - fetchStart);
               event.first_paint = (0, rum_core_1.formatNumber)(responseEnd - fetchStart);
               event.snapshots = JSON.stringify(entry);
               _this.sendPerf();
               break;
             case 'paint':
               if (entry.name === 'first-paint' && entry.startTime < MAX_DELAY) {
                 event.first_paint = (0, rum_core_1.formatNumber)(entry.startTime);
               } else if (entry.name === 'first-contentful-paint' && entry.startTime < MAX_DELAY) {
                 event.first_contentful_paint = (0, rum_core_1.formatNumber)(entry.startTime);
               }
               break;
             default:
               return;
           }
         } catch (e) {}
       }
     };
     this.sendPerf = function () {
       if (!_this.eventCache || !_this.perfObserver) return;
       _this.sendEvent((0, performance_1.delBadMea)(_this.eventCache, checkKeys));
       _this.eventCache = null;
       _this.perfObserver.disconnect();
       _this.perfObserver = null;
     };
   }
   return _createClass(PerfCollector, [{
     key: "setup",
     value: function setup(ctx, sendEvent) {
       var _this2 = this;
       var collectors = ctx.getConfig().collectors || {};
       if (collectors.perf === false) {
         return;
       }
       this.ctx = ctx;
       this.sendEvent = sendEvent;
       this.sendPerf = (0, rum_core_1.debounce)(this.sendPerf, 200);
       if (!(0, rum_core_1.isFunction)(PerfObserver)) return;
       this.perfObserver = new PerfObserver(function (e) {
         (0, rum_core_1.delay)(_this2.perfHandler, 200, e);
       });
       this.perfObserver.observe({
         entryTypes: ['navigation', 'paint']
       });
       var baseRumEvent = this.ctx.session.getBaseEvent();
       this.eventCache = Object.assign(Object.assign({}, baseRumEvent), {
         event_type: rum_core_1.RumEventType.VIEW,
         type: 'perf',
         url: (0, url_1.getCurrentURL)(),
         referrer: global_1.document.referrer || ''
       });
     }
   }, {
     key: "destroy",
     value: function destroy() {
       if (!this.perfObserver) return;
       this.eventCache = null;
       this.perfObserver.disconnect();
       this.perfObserver = null;
     }
   }]);
 }();
 exports["default"] = PerfCollector;

 /***/ }),
 /* 20 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 var rum_core_1 = __webpack_require__(0);
 var url_1 = __webpack_require__(3);
 var view_1 = __webpack_require__(5);
 var web_vitals_1 = __webpack_require__(51);
 var global_1 = __webpack_require__(1);
 var WebVitalsCollector = /*#__PURE__*/function () {
   function WebVitalsCollector() {
     _classCallCheck(this, WebVitalsCollector);
     this.name = 'web-vitals-collector';
     this.measures = {};
   }
   return _createClass(WebVitalsCollector, [{
     key: "setup",
     value: function setup(ctx, sendEvent) {
       var collectors = ctx.getConfig().collectors || {};
       if (collectors.webVitals === false) {
         return;
       }
       this.ctx = ctx;
       this.sendEvent = sendEvent;
       this.baseEvent = {
         event_type: rum_core_1.RumEventType.VIEW,
         type: 'webvitals',
         referrer: global_1.document.referrer || '',
         view: (0, view_1.getCurView)(this.ctx)
       };
       this.onWebVitals();
     }
   }, {
     key: "sendWebVitals",
     value: function sendWebVitals(key, value) {
       var _this = this;
       clearTimeout(this.timer);
       var collectors = this.ctx.getConfig().collectors || {};
       if (collectors.webVitals === false) {
         return;
       }
       this.measures = Object.assign(Object.assign({}, this.measures), _defineProperty({}, key, value));
       this.timer = setTimeout(function () {
         var baseRumEvent = _this.ctx.session.getBaseEvent();
         _this.sendEvent(Object.assign(Object.assign(Object.assign(Object.assign({}, baseRumEvent), _this.baseEvent), _this.measures), {
           url: (0, url_1.getCurrentURL)()
         }));
         _this.measures = {};
       }, 200);
     }
   }, {
     key: "onWebVitals",
     value: function onWebVitals() {
       var _this2 = this;
       (0, web_vitals_1.onLCP)(function (val) {
         return _this2.sendWebVitals('largest_contentful_paint', (0, rum_core_1.formatNumber)(val.value));
       });
       (0, web_vitals_1.onFID)(function (val) {
         _this2.sendWebVitals('first_input_delay', (0, rum_core_1.formatNumber)(val.value));
         if ((0, rum_core_1.isArray)(val.entries)) {
           val.entries.forEach(function (entry) {
             if (entry && entry.entryType === 'first-input') {
               _this2.sendWebVitals('first_input_time', (0, rum_core_1.formatNumber)(entry.startTime));
             }
           });
         }
       });
       (0, web_vitals_1.onCLS)(function (val) {
         return _this2.sendWebVitals('cumulative_layout_shift', (0, rum_core_1.formatNumber)(val.value));
       });
       (0, web_vitals_1.onINP)(function (val) {
         return _this2.sendWebVitals('interaction_to_next_paint', (0, rum_core_1.formatNumber)(val.value));
       });
     }
   }]);
 }();
 exports["default"] = WebVitalsCollector;

 /***/ }),
 /* 21 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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
 var rum_core_1 = __webpack_require__(0);
 var performance_1 = __webpack_require__(7);
 var url_1 = __webpack_require__(3);
 var base_1 = __webpack_require__(4);
 var global_1 = __webpack_require__(1);
 var api_1 = __webpack_require__(52);
 var PerfObserver = global_1.global.PerformanceObserver;
 var ApiCollector = /*#__PURE__*/function () {
   function ApiCollector() {
     _classCallCheck(this, ApiCollector);
     this.name = 'api-collector';
     this.entryTypes = Object.values(api_1.ApiType);
     this.entryCacheMap = {};
   }
   return _createClass(ApiCollector, [{
     key: "setup",
     value: function setup(ctx, sendEvent) {
       var collectors = ctx.getConfig().collectors || {};
       if (collectors.api === false) {
         if (this.pfObserver) {
           this.pfObserver.disconnect();
           this.pfObserver = null;
         }
         return;
       }
       this.sendEvent = sendEvent;
       this.ctx = ctx;
       this.perfObserver();
       this.hackXhr();
       this.hackFetch();
     }
   }, {
     key: "destroy",
     value: function destroy() {
       this.sendEvent = function () {};
       var oldXHRProto = XMLHttpRequest.prototype;
       (0, rum_core_1.restoreFunction)(oldXHRProto, 'open');
       (0, rum_core_1.restoreFunction)(oldXHRProto, 'setRequestHeader');
       (0, rum_core_1.restoreFunction)(oldXHRProto, 'send');
       (0, base_1.restoreHackFunction)(global_1.global, 'fetch');
     }
   }, {
     key: "perfObserver",
     value: function perfObserver() {
       var _this = this;
       if (!(0, rum_core_1.isFunction)(PerfObserver)) return;
       if (this.pfObserver) return;
       this.pfObserver = new PerformanceObserver(function (entryList) {
         var entries = entryList.getEntries().filter(function (entry) {
           return _this.entryTypes.includes(entry.initiatorType);
         });
         if (entries && entries.length) {
           entries.forEach(function (entry) {
             var name = entry.name;
             if (_this.entryCacheMap[name]) {
               _this.entryCacheMap[name].push(entry);
             } else {
               _this.entryCacheMap[name] = [entry];
             }
           });
         }
       });
       this.pfObserver.observe({
         entryTypes: ['resource']
       });
     }
   }, {
     key: "injectTracing",
     value: function injectTracing(apiAttr, inject) {
       var _a;
       var _this$ctx$getConfig = this.ctx.getConfig(),
         tracing = _this$ctx$getConfig.tracing,
         pid = _this$ctx$getConfig.pid,
         _this$ctx$getConfig$v = _this$ctx$getConfig.version,
         version = _this$ctx$getConfig$v === void 0 ? '1.0.0' : _this$ctx$getConfig$v;
       var _ref = (0, rum_core_1.parseTracingOptions)(tracing),
         enable = _ref.enable,
         sample = _ref.sample,
         propagatorTypes = _ref.propagatorTypes,
         allowedUrls = _ref.allowedUrls,
         _ref$tracestate = _ref.tracestate,
         tracestate = _ref$tracestate === void 0 ? true : _ref$tracestate,
         _ref$baggage = _ref.baggage,
         baggage = _ref$baggage === void 0 ? false : _ref$baggage;
       if (!enable) return;
       allowedUrls.push({
         match: function match(url) {
           return /^https?:\/\/*/.test(url) && (0, rum_core_1.startsWith)(url, global_1.location.origin);
         },
         propagatorTypes: propagatorTypes
       });
       var traceOption = (0, rum_core_1.find)(allowedUrls, function (traceOption) {
         return (0, rum_core_1.matchList)([traceOption.match], apiAttr.url);
       });
       if (!traceOption) return;
       var pTypes = traceOption.propagatorTypes;
       if (pTypes.length === 0) {
         pTypes = propagatorTypes;
       }
       var isSw8 = false;
       if (pTypes.indexOf('sw8') > -1) {
         pTypes = ['sw8'];
         isSw8 = true;
       }
       var session = this.ctx.session;
       var traceId = isSw8 ? (0, rum_core_1.generateGUID)() : (0, rum_core_1.generateTraceId)();
       var spanId = isSw8 ? (0, rum_core_1.generateGUID)() : (0, rum_core_1.generateSpanId)();
       var sampled = (0, rum_core_1.performDraw)(sample);
       var uid = session.getUserId();
       var sid = session.getSessionId();
       var traceContext = tracestate ? "rum=v2&browser&".concat(pid, "&").concat(sid, "&").concat(uid) : undefined;
       var baggageContext = baggage ? "rum=v2,appType=browser,pid=".concat(pid, ",sid=").concat(sid, ",uid=").concat(uid) : undefined;
       var tracingHeaders = (0, rum_core_1.makeTracingHeaders)(traceId, spanId, sampled, pTypes, {
         tracestate: traceContext,
         baggage: baggageContext,
         appId: pid,
         appVersion: version,
         viewName: (_a = apiAttr.view) === null || _a === void 0 ? void 0 : _a.name,
         host: global_1.location.host
       });
       if (sampled) {
         apiAttr.trace_id = traceId;
         apiAttr.trace_data = JSON.stringify({
           spanId: spanId,
           sample: sample,
           sampled: sampled,
           headers: tracingHeaders
         });
       }
       inject(tracingHeaders);
     }
   }, {
     key: "hackXhr",
     value: function hackXhr() {
       var oldXHRProto = XMLHttpRequest.prototype;
       var filters = this.ctx.getConfig().filters || {};
       var self = this;
       (0, rum_core_1.interceptFunction)(oldXHRProto, 'open', function (method, url, async, user, password) {
         var urlStr = String(url);
         var methodStr = method.toUpperCase();
         if ((0, rum_core_1.urlMatch)(urlStr, filters.resource) || methodStr === 'HEAD' || urlStr.length > 8182) return;
         this.apiCache = {
           type: api_1.ApiType.XHR,
           method: method,
           url: url,
           async: async,
           user: user,
           password: password,
           headers: {}
         };
         var baseRumEvent = self.ctx.session.getBaseEvent();
         this.apiAttr = Object.assign(Object.assign({}, baseRumEvent), {
           url: (0, url_1.fixRelativeUrl)(urlStr),
           method: methodStr
         });
       }, true);
       (0, rum_core_1.interceptFunction)(oldXHRProto, 'setRequestHeader', function (header, value) {
         if (!this.apiCache) return;
         this.apiCache.headers[header] = value;
       }, true);
       (0, rum_core_1.interceptFunction)(oldXHRProto, 'send', function (body) {
         var _this2 = this;
         if (!this.apiAttr) return;
         var apiAttr = this.apiAttr;
         this.apiCache.data = body;
         self.injectTracing(this.apiAttr, function (tracingHeaders) {
           Object.keys(tracingHeaders).forEach(function (key) {
             _this2.setRequestHeader(key, tracingHeaders[key]);
           });
         });
         this.addEventListener('loadend', function () {
           return __awaiter(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
             var status, statusText, response, _self$ctx$getConfig, evaluateApi, entry, error, attrs;
             return _regeneratorRuntime().wrap(function _callee$(_context) {
               while (1) switch (_context.prev = _context.next) {
                 case 0:
                   status = this.status, statusText = this.statusText, response = this.response;
                   _self$ctx$getConfig = self.ctx.getConfig(), evaluateApi = _self$ctx$getConfig.evaluateApi;
                   apiAttr.status_code = status;
                   apiAttr.message = statusText;
                   entry = {
                     name: this.apiAttr.url,
                     entryType: api_1.ApiType.XHR,
                     duration: (0, base_1.getCurrentTime)() - apiAttr.timestamp
                   };
                   if (!(0, rum_core_1.isFunction)(evaluateApi)) {
                     _context.next = 16;
                     break;
                   }
                   _context.prev = 6;
                   if (apiAttr.success === rum_core_1.ResourceStatus.Failed) {
                     error = new Error(api_1.ApiType.XHR + ' error');
                   }
                   _context.next = 10;
                   return evaluateApi(this.apiCache, response, error, this);
                 case 10:
                   attrs = _context.sent;
                   this.apiAttr = apiAttr = Object.assign(Object.assign({}, apiAttr), (0, api_1.reviseApiAttr)(attrs));
                   _context.next = 16;
                   break;
                 case 14:
                   _context.prev = 14;
                   _context.t0 = _context["catch"](6);
                 case 16:
                   self.delayHandle({
                     attr: apiAttr,
                     entry: entry
                   });
                 case 17:
                 case "end":
                   return _context.stop();
               }
             }, _callee, this, [[6, 14]]);
           }));
         });
         this.addEventListener('error', function () {
           _this2.apiAttr.success = rum_core_1.ResourceStatus.Failed;
         });
       }, true);
     }
   }, {
     key: "hackFetch",
     value: function hackFetch() {
       var self = this;
       var filters = this.ctx.getConfig().filters || {};
       (0, base_1.hackFunction)(global_1.global, 'fetch', function (oldFetch) {
         return function (input) {
           var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
           var isReq = input instanceof Request;
           var urlStr = isReq ? input.url : (0, rum_core_1.isString)(input) ? input : input.toString();
           var method = init.method;
           var headers = init.headers;
           if (isReq) {
             !method && (method = input.method);
             !headers && (headers = input.headers);
           }
           method = method ? method.toUpperCase() : 'GET';
           if (!headers) {
             init.headers = headers = new Headers();
           }
           if ((0, rum_core_1.urlMatch)(urlStr, filters.resource) || method === 'HEAD' || (init === null || init === void 0 ? void 0 : init.mode) === 'no-cors' || urlStr.length > 8182) {
             return oldFetch.call(global_1.global, input, init);
           }
           var baseRumEvent = self.ctx.session.getBaseEvent();
           var apiAttr = Object.assign(Object.assign({}, baseRumEvent), {
             url: (0, url_1.fixRelativeUrl)(urlStr),
             type: api_1.ApiType.FETCH,
             method: method
           });
           var apiResp;
           var apiError;
           self.injectTracing(apiAttr, function (tracingHeaders) {
             Object.keys(tracingHeaders).forEach(function (key) {
               if (headers instanceof Headers) {
                 headers.set(key, tracingHeaders[key]);
               } else {
                 headers[key] = tracingHeaders[key];
               }
             });
           });
           function fetchFinally() {
             return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
               var _self$ctx$getConfig2, evaluateApi, entry, attrs;
               return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                 while (1) switch (_context2.prev = _context2.next) {
                   case 0:
                     _self$ctx$getConfig2 = self.ctx.getConfig(), evaluateApi = _self$ctx$getConfig2.evaluateApi;
                     entry = {
                       name: apiAttr.url,
                       entryType: api_1.ApiType.FETCH,
                       duration: (0, base_1.getCurrentTime)() - apiAttr.timestamp
                     };
                     if (!(0, rum_core_1.isFunction)(evaluateApi)) {
                       _context2.next = 12;
                       break;
                     }
                     _context2.prev = 3;
                     _context2.next = 6;
                     return evaluateApi(Object.assign({
                       url: input
                     }, init), apiResp, apiError);
                   case 6:
                     attrs = _context2.sent;
                     apiAttr = Object.assign(Object.assign({}, apiAttr), (0, api_1.reviseApiAttr)(attrs));
                     _context2.next = 12;
                     break;
                   case 10:
                     _context2.prev = 10;
                     _context2.t0 = _context2["catch"](3);
                   case 12:
                     self.delayHandle({
                       attr: apiAttr,
                       entry: entry
                     });
                   case 13:
                   case "end":
                     return _context2.stop();
                 }
               }, _callee2, null, [[3, 10]]);
             }));
           }
           return oldFetch.call(global_1.global, input, init).then(function (response) {
             if (response || (0, rum_core_1.isFunction)(response.clone)) {
               apiResp = response.clone();
               var _apiResp = apiResp,
                 status = _apiResp.status,
                 statusText = _apiResp.statusText;
               apiAttr.status_code = status;
               apiAttr.message = statusText;
               fetchFinally().then();
             }
             return response;
           })["catch"](function (error) {
             apiError = error;
             apiAttr.message = String(error);
             apiAttr.success = rum_core_1.ResourceStatus.Failed;
             fetchFinally().then();
             throw error;
           });
         };
       });
     }
   }, {
     key: "delayHandle",
     value: function delayHandle(payload) {
       var _this3 = this;
       (0, rum_core_1.delay)(function () {
         _this3.mergeEntry(payload);
       }, 200);
     }
   }, {
     key: "mergeEntry",
     value: function mergeEntry(_ref2) {
       var attr = _ref2.attr,
         entry = _ref2.entry;
       entry = this.findRealEntry(entry);
       var _this$ctx$getConfig2 = this.ctx.getConfig(),
         parseResourceName = _this$ctx$getConfig2.parseResourceName;
       var url = attr.url,
         status_code = attr.status_code,
         view = attr.view;
       var success = (0, performance_1.getResourceSuccessByCode)(status_code);
       var measures = (0, performance_1.calcResourceTimingData)(entry) || {
         duration: entry.duration
       };
       var event = Object.assign(Object.assign(Object.assign(Object.assign({
         event_type: rum_core_1.RumEventType.RESOURCE,
         url: url,
         name: (0, url_1.getResourceName)(url, parseResourceName),
         type: entry.initiatorType || entry.entryType,
         success: success
       }, attr), {
         timing_data: JSON.stringify(entry)
       }), measures), {
         view: view
       });
       this.sendEvent(event);
     }
   }, {
     key: "findRealEntry",
     value: function findRealEntry(fakeEntry) {
       var name = fakeEntry.name;
       var entryList = this.entryCacheMap[name] || [];
       var realEntry = entryList.shift();
       if (!entryList.length) {
         delete this.entryCacheMap[name];
       }
       return realEntry || fakeEntry;
     }
   }]);
 }();
 exports["default"] = ApiCollector;

 /***/ }),
 /* 22 */
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
 var rum_core_1 = __webpack_require__(0);
 var performance_1 = __webpack_require__(7);
 var url_1 = __webpack_require__(3);
 var view_1 = __webpack_require__(5);
 var global_1 = __webpack_require__(1);
 var base_1 = __webpack_require__(4);
 var PerfObserver = global_1.global.PerformanceObserver;
 var StaticResourceCollector = /*#__PURE__*/function () {
   function StaticResourceCollector() {
     var _this = this;
     _classCallCheck(this, StaticResourceCollector);
     this.name = 'static-resource-collector';
     this.entryTypes = ["audio", "video", "track", "script", "css", "img", "image", "link", "other"];
     this.errorsCache = [];
     this.WAIT_FOR_ERROR_TIME = 1000;
     this.sendResource = function (entry, view) {
       var _this$ctx$getConfig = _this.ctx.getConfig(),
         parseResourceName = _this$ctx$getConfig.parseResourceName,
         _this$ctx$getConfig$f = _this$ctx$getConfig.filters,
         filters = _this$ctx$getConfig$f === void 0 ? {} : _this$ctx$getConfig$f;
       var status_code = entry.responseStatus;
       var url = entry.name;
       var type = (0, performance_1.getResourceType)(url, entry.initiatorType);
       var isError = _this.checkError(url);
       var success = isError ? rum_core_1.ResourceStatus.Failed : (0, performance_1.getResourceStatus)(entry);
       var measures = (0, performance_1.calcResourceTimingData)(entry, isError);
       if (!measures) return;
       var baseRumEvent = _this.ctx.session.getBaseEvent();
       var eventData = Object.assign(Object.assign(Object.assign(Object.assign({}, baseRumEvent), {
         event_type: rum_core_1.RumEventType.RESOURCE,
         url: url,
         name: (0, url_1.getResourceName)(url, parseResourceName),
         type: type,
         method: 'GET',
         status_code: status_code,
         success: success
       }), measures), {
         timing_data: JSON.stringify(entry)
       });
       if ((0, rum_core_1.urlMatch)(eventData.url, filters.resource)) return;
       _this.sendEvent(eventData);
     };
     this.errorHandler = function (e) {
       var target = e.target || e.srcElement;
       var isDom = target && target.nodeName && target.nodeType === 1;
       var src = target.src || target.href;
       if (isDom && src && src.indexOf('http') === 0) {
         _this.errorsCache.push({
           src: src,
           timeStamp: (0, base_1.getCurrentTime)()
         });
       }
     };
     this.perfHandler = function (entryList) {
       var entries = entryList.getEntries().filter(function (entry) {
         return _this.entryTypes.indexOf(entry.initiatorType) > -1;
       });
       if (entries && entries.length) {
         var curView = (0, view_1.getCurView)(_this.ctx);
         setTimeout(function () {
           entries.forEach(function (entry) {
             _this.sendResource(entry, curView);
           });
         }, _this.WAIT_FOR_ERROR_TIME);
       }
     };
   }
   return _createClass(StaticResourceCollector, [{
     key: "setup",
     value: function setup(ctx, sendEvent) {
       var collectors = ctx.getConfig().collectors || {};
       this.ctx = ctx;
       this.sendEvent = sendEvent;
       if (collectors.staticResource === false) {
         if (this.perfObserver) {
           this.perfObserver.disconnect();
           this.perfObserver = null;
         }
         return;
       }
       if (!(0, rum_core_1.isFunction)(PerfObserver)) return;
       global_1.global.addEventListener("error", this.errorHandler, true);
       if (this.perfObserver) return;
       var perfObserver;
       try {
         perfObserver = new PerfObserver(this.perfHandler);
         perfObserver.observe({
           type: 'resource',
           buffered: true
         });
       } catch (e) {
         perfObserver = new PerfObserver(this.perfHandler);
         perfObserver.observe({
           entryTypes: ['resource']
         });
       }
       this.perfObserver = perfObserver;
     }
   }, {
     key: "checkError",
     value: function checkError(url) {
       var isError = false;
       var now = (0, base_1.getCurrentTime)();
       this.errorsCache = this.errorsCache.filter(function (res) {
         if (url === res.src) {
           isError = true;
           return true;
         } else if (now - res.timeStamp > 10000) {
           return true;
         }
         return false;
       });
       return isError;
     }
   }, {
     key: "destroy",
     value: function destroy() {
       global_1.global.removeEventListener('error', this.errorHandler, true);
     }
   }]);
 }();
 exports["default"] = StaticResourceCollector;

 /***/ }),
 /* 23 */
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
 var rum_core_1 = __webpack_require__(0);
 var base_1 = __webpack_require__(4);
 var dom_1 = __webpack_require__(53);
 var global_1 = __webpack_require__(1);
 var ClickCollector = /*#__PURE__*/function () {
   function ClickCollector() {
     var _this = this;
     _classCallCheck(this, ClickCollector);
     this.name = 'click-collector';
     this.DELAY_TIME = 300;
     this.actionHandler = function (event) {
       var timestamp = (0, base_1.getCurrentTime)(event.timeStamp);
       var duration = (0, rum_core_1.formatNumber)(performance.now() - event.timeStamp);
       var clickedElement = event.target;
       if (!(clickedElement instanceof HTMLElement)) return;
       var targetElementsList = ['button', 'a', 'input', 'select', 'option', 'textarea'];
       var targetElement = (0, dom_1.getClosestTargetAncestorElement)(clickedElement, targetElementsList);
       if (!targetElement) return;
       var MAX_TEXT_LENGTH = 20;
       var localName = targetElement.localName,
         nodeName = targetElement.nodeName,
         innerText = targetElement.innerText;
       var elementName = (localName || nodeName).toLowerCase();
       var elementTypeAttr = targetElement.getAttribute('type');
       var text = innerText && ': ' + (innerText.length > MAX_TEXT_LENGTH ? innerText.slice(0, MAX_TEXT_LENGTH) + '...' : innerText);
       var name = "click on ".concat((elementTypeAttr ? elementTypeAttr + '-' : '') + elementName).concat(text);
       var attrs = {};
       ['id', 'name', 'className', 'href', 'src'].forEach(function (key) {
         var val = targetElement[key];
         if (val) {
           attrs[key] = val;
         }
       });
       var snapshots = Object.keys(attrs).length ? JSON.stringify(attrs).substring(0, 1e3) : undefined;
       var baseRumEvent = _this.ctx.session.getBaseEvent();
       var rumEventData = Object.assign(Object.assign({}, baseRumEvent), {
         timestamp: timestamp,
         event_type: rum_core_1.RumEventType.ACTION,
         type: 'click',
         name: name,
         target_name: (0, dom_1.getElementXpath)(clickedElement),
         duration: duration,
         snapshots: snapshots
       });
       _this.sendEvent(rumEventData);
     };
   }
   return _createClass(ClickCollector, [{
     key: "setup",
     value: function setup(ctx, sendEvent) {
       var collectors = ctx.getConfig().collectors || {};
       if (collectors.action === false) {
         return;
       }
       this.ctx = ctx;
       this.sendEvent = sendEvent;
       global_1.document.addEventListener('click', this.actionHandler, true);
     }
   }, {
     key: "destroy",
     value: function destroy() {
       global_1.document.removeEventListener('click', this.actionHandler, true);
     }
   }]);
 }();
 exports["default"] = ClickCollector;

 /***/ }),
 /* 24 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
 function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
 function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
 function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
 function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
 function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
 function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
 function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
 function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
 function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
 function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 var rum_core_1 = __webpack_require__(0);
 var base_1 = __webpack_require__(4);
 var view_1 = __webpack_require__(5);
 var global_1 = __webpack_require__(1);
 var raf = global_1.global.requestAnimationFrame;
 var cancelRaf = global_1.global.cancelAnimationFrame;
 var LongTaskCollector = /*#__PURE__*/function () {
   function LongTaskCollector() {
     _classCallCheck(this, LongTaskCollector);
     this.name = 'longtask-collector';
     this.CONTINUOUS_FRAME_GAP = 17;
     this.REPORT_CONTINUOUS_FRAME_TIMESHOLD = 150;
     this.LONG_FRAME_THRESHOLD = 50;
     this.ltPerfCache = [];
     this.rafTimerMap = new Map();
   }
   return _createClass(LongTaskCollector, [{
     key: "setup",
     value: function setup(ctx, sendEvent) {
       var _ctx$getConfig = ctx.getConfig(),
         _ctx$getConfig$useRaf = _ctx$getConfig.useRaf,
         useRaf = _ctx$getConfig$useRaf === void 0 ? false : _ctx$getConfig$useRaf,
         _ctx$getConfig$collec = _ctx$getConfig.collectors,
         collectors = _ctx$getConfig$collec === void 0 ? {} : _ctx$getConfig$collec;
       if (collectors.longtask !== true) return;
       this.ctx = ctx;
       this.sendEvent = sendEvent;
       this.loafPerfObserver = (0, base_1.initPerfObserver)('long-animation-frame', this.loafHandler.bind(this));
       if (!this.loafPerfObserver && useRaf) {
         if (!(0, rum_core_1.isFunction)(raf) || !(0, rum_core_1.isFunction)(cancelRaf)) return;
         this.ltPerfObserver = (0, base_1.initPerfObserver)('longtask', this.ltHandler.bind(this));
         raf(this.initRafObserver.bind(this));
       }
     }
   }, {
     key: "loafHandler",
     value: function loafHandler(entries) {
       var _this = this;
       entries.forEach(function (entry) {
         var startTime = entry.startTime,
           duration = entry.duration,
           _entry$scripts = entry.scripts,
           scripts = _entry$scripts === void 0 ? [] : _entry$scripts;
         var endTime = startTime + duration;
         _this.clearLoafTimer();
         if (_this.loafSeqCache && startTime - _this.loafSeqCache.endTime < _this.CONTINUOUS_FRAME_GAP) {
           _this.loafSeqCache.frameCount++;
           _this.loafSeqCache.endTime = endTime;
           _this.loafSeqCache.attribution = [].concat(_toConsumableArray(_this.loafSeqCache.attribution), _toConsumableArray(scripts));
         } else {
           _this.loafSeqCache = {
             view: (0, view_1.getCurView)(_this.ctx),
             source: 'LoAF',
             startTime: startTime,
             endTime: endTime,
             frameCount: 1,
             attribution: scripts
           };
         }
         if (_this.loafSeqCache.endTime - _this.loafSeqCache.startTime >= _this.REPORT_CONTINUOUS_FRAME_TIMESHOLD) {
           var sendData = Object.assign({}, _this.loafSeqCache);
           _this.loafTimer = setTimeout(function () {
             try {
               _this.sendLongTask(sendData);
               _this.loafTimer = null;
             } catch (_a) {}
           }, 200);
         }
       });
     }
   }, {
     key: "clearLoafTimer",
     value: function clearLoafTimer() {
       if (this.loafTimer) {
         clearTimeout(this.loafTimer);
         this.loafTimer = null;
       }
     }
   }, {
     key: "ltHandler",
     value: function ltHandler(entries) {
       var _this2 = this;
       entries.forEach(function (entry) {
         return _this2.ltPerfCache.push(entry);
       });
     }
   }, {
     key: "initRafObserver",
     value: function initRafObserver() {
       var _this3 = this;
       var loafSeq;
       var startTime = (0, base_1.getCurrentTime)();
       var _checkFPS = function checkFPS() {
         var endTime = (0, base_1.getCurrentTime)();
         if (endTime - startTime >= _this3.LONG_FRAME_THRESHOLD) {
           if (loafSeq) {
             loafSeq.frameCount++;
             loafSeq.endTime = endTime;
           } else {
             loafSeq = {
               view: (0, view_1.getCurView)(_this3.ctx),
               source: 'rAF',
               startTime: startTime,
               endTime: endTime,
               frameCount: 1,
               attribution: []
             };
           }
         } else {
           if (loafSeq && loafSeq.endTime - loafSeq.startTime >= _this3.LONG_FRAME_THRESHOLD) {
             var sendData = Object.assign({}, loafSeq);
             var timer = setTimeout(function () {
               try {
                 _this3.mergeLtPerf(sendData);
                 _this3.rafTimerMap["delete"](startTime);
               } catch (_a) {}
             }, 200);
             _this3.rafTimerMap.set(startTime, timer);
             loafSeq = null;
           }
         }
         startTime = endTime;
         _this3.rafRequestId = raf(_checkFPS);
       };
       raf(_checkFPS);
     }
   }, {
     key: "mergeLtPerf",
     value: function mergeLtPerf(loafSequence) {
       var matchIndex = -1;
       var _iterator = _createForOfIteratorHelper(this.ltPerfCache.entries()),
         _step;
       try {
         for (_iterator.s(); !(_step = _iterator.n()).done;) {
           var _step$value = _slicedToArray(_step.value, 2),
             index = _step$value[0],
             entry = _step$value[1];
           var startTime = entry.startTime,
             _entry$attribution = entry.attribution,
             attribution = _entry$attribution === void 0 ? [] : _entry$attribution;
           var alterStartTime = (0, base_1.getCurrentTime)(startTime);
           if (loafSequence.endTime < alterStartTime) break;
           if (loafSequence.startTime < alterStartTime) {
             loafSequence.attribution = [].concat(_toConsumableArray(loafSequence.attribution), _toConsumableArray(attribution));
             matchIndex = index;
           }
         }
       } catch (err) {
         _iterator.e(err);
       } finally {
         _iterator.f();
       }
       this.ltPerfCache.splice(0, matchIndex + 1);
       this.sendLongTask(loafSequence);
     }
   }, {
     key: "sendLongTask",
     value: function sendLongTask(loafSequence) {
       loafSequence = this.loafSequenceFilter(loafSequence);
       var _loafSequence = loafSequence,
         view = _loafSequence.view,
         source = _loafSequence.source,
         startTime = _loafSequence.startTime,
         endTime = _loafSequence.endTime,
         frameCount = _loafSequence.frameCount,
         attribution = _loafSequence.attribution;
       var duration = endTime - startTime;
       var fps = Math.round(1000 / (duration / frameCount));
       var baseRumEvent = this.ctx.session.getBaseEvent();
       var now = (0, base_1.getCurrentTime)();
       var timestamp = (0, base_1.getCurrentTime)(startTime);
       if (timestamp > now) {
         timestamp = startTime;
       }
       var eventData = Object.assign(Object.assign(Object.assign({}, baseRumEvent), view), {
         event_type: rum_core_1.RumEventType.LONG_TASK,
         type: 'fps',
         source: source,
         timestamp: timestamp,
         duration: duration,
         fps: fps,
         snapshots: JSON.stringify(attribution)
       });
       this.sendEvent(eventData);
     }
   }, {
     key: "loafSequenceFilter",
     value: function loafSequenceFilter(loafSequence) {
       var source = loafSequence.source;
       var attribution = loafSequence.attribution;
       if (source === 'rAF') {
         attribution = attribution.filter(function (entry) {
           return entry.name !== 'unknown';
         });
       }
       if (attribution.length >= 5) {
         attribution = attribution.sort(function (a, b) {
           return b.duration - a.duration;
         }).slice(0, 5);
       }
       loafSequence.attribution = attribution;
       return loafSequence;
     }
   }, {
     key: "clearLoafObserver",
     value: function clearLoafObserver() {
       if (this.loafPerfObserver) {
         this.loafPerfObserver.disconnect();
         this.loafPerfObserver = null;
       }
       this.clearLoafTimer();
       this.loafSeqCache = null;
     }
   }, {
     key: "clearLtObserver",
     value: function clearLtObserver() {
       if (this.ltPerfObserver) {
         this.ltPerfObserver.disconnect();
         this.ltPerfObserver = null;
       }
       this.ltPerfCache = null;
     }
   }, {
     key: "clearRafObserver",
     value: function clearRafObserver() {
       if (this.rafRequestId) {
         cancelRaf(this.rafRequestId);
         this.rafRequestId = null;
       }
       this.rafTimerMap.forEach(function (timer) {
         return clearTimeout(timer);
       });
       this.rafTimerMap = null;
     }
   }, {
     key: "destroy",
     value: function destroy() {
       this.clearLoafObserver();
       this.clearLtObserver();
       this.clearRafObserver();
     }
   }]);
 }();
 exports["default"] = LongTaskCollector;

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
 var base_1 = __webpack_require__(4);
 var view_1 = __webpack_require__(5);
 var DefaultProcessor = /*#__PURE__*/function () {
   function DefaultProcessor() {
     _classCallCheck(this, DefaultProcessor);
     this.name = 'default-processor';
   }
   return _createClass(DefaultProcessor, [{
     key: "process",
     value: function process(ctx) {
       var event = ctx.getRumEvent();
       var view = (0, view_1.getCurView)(ctx);
       var rumEvent = Object.assign({
         timestamp: (0, base_1.getCurrentTime)(),
         session_id: ctx.session.getSessionId(),
         event_id: ctx.session.getEventId(),
         view: view
       }, event);
       return rumEvent;
     }
   }]);
 }();
 exports["default"] = DefaultProcessor;

 /***/ }),
 /* 26 */
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
 var rum_core_1 = __webpack_require__(0);
 var SessionProcessor = /*#__PURE__*/function () {
   function SessionProcessor() {
     var _this = this;
     _classCallCheck(this, SessionProcessor);
     this.name = 'session-processor';
     this.update = function (e) {
       if (e && !e.isTrusted) return;
       _this.ctx.session.updateSession();
     };
   }
   return _createClass(SessionProcessor, [{
     key: "setup",
     value: function setup(ctx) {
       this.ctx = ctx;
       this.update = (0, rum_core_1.debounce)(this.update, rum_core_1.ONE_SECOND);
       document.addEventListener('click', this.update, true);
     }
   }, {
     key: "process",
     value: function process(ctx) {
       this.update();
       return ctx.getRumEvent();
     }
   }]);
 }();
 exports["default"] = SessionProcessor;

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
 var global_1 = __webpack_require__(1);
 var BrowserReporter = /*#__PURE__*/function (_rum_core_1$Reporter) {
   function BrowserReporter() {
     var _this;
     _classCallCheck(this, BrowserReporter);
     _this = _callSuper(this, BrowserReporter, arguments);
     _this.name = 'browser-reporter';
     return _this;
   }
   _inherits(BrowserReporter, _rum_core_1$Reporter);
   return _createClass(BrowserReporter, [{
     key: "init",
     value: function init(ctx) {
       var _this2 = this;
       global_1.document.addEventListener('visibilitychange', function () {
         if (global_1.document.visibilityState === 'hidden') {
           _this2.flushEventQueue();
         }
       });
     }
   }, {
     key: "request",
     value: function request(ctx, bundle) {
       var _a;
       var config = ctx.getConfig();
       var nav = navigator || {};
       bundle.app.type = rum_core_1.AppType.browser;
       bundle.net.model = ((_a = nav.connection) === null || _a === void 0 ? void 0 : _a.effectiveType) || '';
       bundle._v = global_1.VERSION;
       var reqBody = JSON.stringify(bundle);
       var mark = false;
       if ((0, rum_core_1.isFunction)(nav.sendBeacon)) {
         var size = new Blob([reqBody]).size;
         if (size < 6e4) {
           mark = true;
           try {
             nav.sendBeacon(config.endpoint, reqBody);
           } catch (error) {
             mark = false;
           }
         }
       }
       if (!mark) {
         var xhr = new XMLHttpRequest();
         xhr.open('POST', config.endpoint, true);
         xhr.setRequestHeader('Content-Type', 'text/plain');
         xhr.send(reqBody);
       }
     }
   }]);
 }(rum_core_1.Reporter);
 exports["default"] = BrowserReporter;

 /***/ }),
 /* 28 */
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
 exports.RumSession = void 0;
 var rum_core_1 = __webpack_require__(0);
 var base_1 = __webpack_require__(4);
 var view_1 = __webpack_require__(5);
 var cookie_1 = __webpack_require__(54);
 var global_1 = __webpack_require__(1);
 var USER_ID = '_arms_uid';
 var RUM_SESSION = '_arms_session';
 var testKey = '_test_';
 var isLocalStorageEnabled = function () {
   try {
     localStorage.setItem(testKey, "1");
     localStorage.removeItem(testKey);
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
 var AUTO = 'auto';
 var LOCAL_STORAGE = 'localStorage';
 var COOKIE = 'cookie';
 var MEMORY = 'memory';
 var MemoryStorage = global_1.global.__RUM_MEMORY_STORAGE = {};
 var RumSession = /*#__PURE__*/function () {
   function RumSession() {
     _classCallCheck(this, RumSession);
     this.rumUserKey = USER_ID;
     this.rumSessionKey = RUM_SESSION;
   }
   return _createClass(RumSession, [{
     key: "init",
     value: function init(ctx) {
       var _a;
       this.ctx = ctx;
       this.sessionConfig = this.fixSessionConfig((_a = ctx.config) === null || _a === void 0 ? void 0 : _a.sessionConfig);
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
     value: function checkSession(info) {
       var _this$sessionConfig = this.sessionConfig,
         overtime = _this$sessionConfig.overtime,
         maxDuration = _this$sessionConfig.maxDuration;
       var now = (0, base_1.getCurrentTime)();
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
       var lastTime = (0, base_1.getCurrentTime)();
       var sampled = info.sampled ? 1 : 0;
       this.setItem(this.rumSessionKey, "".concat(info.sessionId, "-").concat(sampled, "-").concat(startTime, "-").concat(lastTime));
     }
   }, {
     key: "getSessionInfo",
     value: function getSessionInfo() {
       var _split = (this.getItem(this.rumSessionKey) || '').split('-'),
         _split2 = _slicedToArray(_split, 4),
         sid = _split2[0],
         sampled = _split2[1],
         startTime = _split2[2],
         lastTime = _split2[3];
       var info = {
         sessionId: sid,
         sampled: sampled !== '0',
         startTime: parseInt(startTime || '') || 0,
         lastTime: parseInt(lastTime || '') || 0
       };
       if (!this.checkSession(info)) {
         info = this.resetSession();
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
       var sampleRate = this.sessionConfig.sampleRate;
       var sid = this.getUUID();
       var now = (0, base_1.getCurrentTime)();
       var sampled = (0, rum_core_1.performDraw)(sampleRate * 100);
       var str = "".concat(sid, "-").concat(sampled ? 1 : 0, "-").concat(now, "-").concat(now);
       this.setItem(this.rumSessionKey, str);
       return {
         sessionId: sid,
         sampled: sampled,
         startTime: now,
         lastTime: now,
         isNew: true
       };
     }
   }, {
     key: "getUUID",
     value: function getUUID() {
       return (0, rum_core_1.generateGUID)().replace(/-/g, '');
     }
   }, {
     key: "fixSessionConfig",
     value: function fixSessionConfig() {
       var sessionConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
       var sampleRate = sessionConfig.sampleRate,
         maxDuration = sessionConfig.maxDuration,
         overtime = sessionConfig.overtime,
         _sessionConfig$storag = sessionConfig.storage,
         storage = _sessionConfig$storag === void 0 ? AUTO : _sessionConfig$storag,
         domain = sessionConfig.domain;
       if (!(0, rum_core_1.isNumber)(sampleRate) || sampleRate < 0 || sampleRate > 1) {
         sampleRate = 1;
       }
       if (!(0, rum_core_1.isNumber)(maxDuration) || maxDuration < 4 * rum_core_1.ONE_HOUR || maxDuration > rum_core_1.ONE_DAY) {
         maxDuration = rum_core_1.ONE_DAY;
       }
       if (!(0, rum_core_1.isNumber)(overtime) || overtime > rum_core_1.ONE_HOUR || overtime < 10 * rum_core_1.ONE_MINUTE) {
         overtime = 30 * rum_core_1.ONE_MINUTE;
       }
       if (storage !== COOKIE && storage !== LOCAL_STORAGE && storage !== MEMORY) {
         storage = AUTO;
       }
       if (storage === AUTO) {
         storage = LOCAL_STORAGE;
       }
       if (storage === LOCAL_STORAGE && !isLocalStorageEnabled) {
         storage = COOKIE;
       }
       if (storage === COOKIE && !isCookieEnabled) {
         storage = MEMORY;
       }
       return {
         sampleRate: sampleRate,
         maxDuration: maxDuration,
         overtime: overtime,
         storage: storage,
         domain: domain
       };
     }
   }, {
     key: "getBaseEvent",
     value: function getBaseEvent() {
       return {
         timestamp: (0, base_1.getCurrentTime)(),
         session_id: this.getSessionId(),
         event_id: this.getEventId(),
         view: this.ctx ? (0, view_1.getCurView)(this.ctx) : undefined,
         times: 1
       };
     }
   }, {
     key: "setItem",
     value: function setItem(key, value) {
       var days = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 365;
       var _this$sessionConfig2 = this.sessionConfig,
         storage = _this$sessionConfig2.storage,
         domain = _this$sessionConfig2.domain;
       if (storage === LOCAL_STORAGE) {
         localStorage.setItem(key, value);
       } else if (storage === COOKIE) {
         (0, cookie_1.setCookie)(key, value, days * rum_core_1.ONE_DAY, domain);
       } else {
         MemoryStorage[key] = value;
       }
     }
   }, {
     key: "getItem",
     value: function getItem(key) {
       var storage = this.sessionConfig.storage;
       if (storage === LOCAL_STORAGE) {
         return localStorage.getItem(key);
       } else if (storage === COOKIE) {
         return (0, cookie_1.getCookie)(key);
       } else {
         return MemoryStorage[key];
       }
     }
   }]);
 }();
 exports.RumSession = RumSession;

 /***/ }),
 /* 29 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.onNativeReady = exports.onNativeMessage = exports.requestNative = exports.osType = exports.navigator = exports.document = exports.global = exports.VERSION = void 0;
 var rum_core_1 = __webpack_require__(0);
 exports.VERSION = 'npm-0.0.2';
 exports.global = window;
 exports.document = exports.global.document;
 exports.navigator = exports.global.navigator;
 function detectOS() {
   var ua = exports.navigator.userAgent || exports.navigator.vendor || exports.global.opera;
   if (/harmonyos|OpenHarmony/i.test(ua)) {
     return 'HarmonyOS';
   }
   if (/ipad|iphone|ipod/i.test(ua) && !exports.global.MSStream) {
     return 'iOS';
   }
   if (/android/i.test(ua)) {
     return 'Android';
   }
 }
 exports.osType = detectOS();
 var callbackCache = {};
 var messageEvents = {};
 exports.global.__ALRBridge = {
   handleMessageFromNative: handleMessageFromNative
 };
 var webviewPort = null;
 var readyCallback = null;
 if (exports.osType === 'Android' || exports.osType === 'HarmonyOS') {
   window.addEventListener('message', function (event) {
     if (event.data !== '__init_alr_port__') return;
     var port = event.ports[0];
     if (!port) return;
     port.onmessage = function (msg) {
       handleMessageFromNative(msg.data);
     };
     webviewPort = exports.global.__ALRBridge.webviewPort = port;
     if (readyCallback) readyCallback();
   });
 }
 function callNative(data) {
   try {
     if (webviewPort) {
       webviewPort.postMessage(data);
       return;
     }
     if (exports.osType === 'iOS') {
       exports.global.webkit.messageHandlers.ALRBridge.postMessage(data);
     } else if (exports.osType === 'Android') {
       exports.global.ALRBridge.postMessage(data);
     }
   } catch (e) {
     console.error('RUM_SDK callNative Error', e);
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
   var params = {
     callback_id: (0, rum_core_1.generateGUID)(),
     type: option.action,
     data: option.data
   };
   if (option.success) {
     callbackCache[params.callback_id] = option;
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
   if (webviewPort || exports.osType === 'iOS' || exports.osType === 'Android') {
     callback();
     return;
   }
   readyCallback = callback;
 };
 exports.onNativeReady = onNativeReady;

 /***/ }),
 /* 30 */
 /***/ (function(module, exports, __webpack_require__) {

 module.exports = __webpack_require__(31);


 /***/ }),
 /* 31 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.WebviewRum = void 0;
 var shell_1 = __webpack_require__(32);
 Object.defineProperty(exports, "WebviewRum", {
   enumerable: true,
   get: function get() {
     return shell_1.WebviewRum;
   }
 });

 /***/ }),
 /* 32 */
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
 exports.WebviewRum = void 0;
 var rum_core_1 = __webpack_require__(0);
 var rum_browser_1 = __webpack_require__(44);
 var global_1 = __webpack_require__(29);
 var reporter_1 = __webpack_require__(58);
 var WebviewRum = /*#__PURE__*/function (_rum_browser_1$ArmsRu) {
   function WebviewRum() {
     var _this;
     _classCallCheck(this, WebviewRum);
     _this = _callSuper(this, WebviewRum, arguments);
     _this.version = global_1.VERSION;
     _this.updateConfig = function (config) {
       console.warn('RumConfigUpdate', config);
       var context = _this.client.getContext();
       context.setConfig(config);
       var collectors = _this.client.getCollectors();
       collectors.forEach(function (collector) {
         if ((0, rum_core_1.isFunction)(collector.destroy)) {
           collector.destroy();
           collector.setup(context, _this.client.sendEvent);
         }
       });
     };
     return _this;
   }
   _inherits(WebviewRum, _rum_browser_1$ArmsRu);
   return _createClass(WebviewRum, [{
     key: "init",
     value: function init(configuration) {
       var _this2 = this;
       this.client.useCollectors([new rum_browser_1.PvCollector(), new rum_browser_1.PerfCollector(), new rum_browser_1.WebVitalsCollector(), new rum_browser_1.ExceptionCollector(), new rum_browser_1.WhiteScreenCollector(), new rum_browser_1.ApiCollector(), new rum_browser_1.StaticResourceCollector(), new rum_browser_1.ClickCollector(), new rum_browser_1.LongTaskCollector()]);
       this.client.useProcessors([new rum_browser_1.DefaultProcessor(), new rum_browser_1.SessionProcessor()]);
       this.client.useReporter(new reporter_1["default"]());
       this.client.init(configuration, new rum_browser_1.RumSession());
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
       return this;
     }
   }]);
 }(rum_browser_1.ArmsRum);
 exports.WebviewRum = WebviewRum;
 (0, global_1.onNativeReady)(function () {
   (0, global_1.requestNative)({
     action: "getConfig",
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
       global_1.global.__webviewRum = new WebviewRum(config);
     }
   });
 });

 /***/ }),
 /* 33 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";
 // Copyright Joyent, Inc. and other Node contributors.
 //
 // Permission is hereby granted, free of charge, to any person obtaining a
 // copy of this software and associated documentation files (the
 // "Software"), to deal in the Software without restriction, including
 // without limitation the rights to use, copy, modify, merge, publish,
 // distribute, sublicense, and/or sell copies of the Software, and to permit
 // persons to whom the Software is furnished to do so, subject to the
 // following conditions:
 //
 // The above copyright notice and this permission notice shall be included
 // in all copies or substantial portions of the Software.
 //
 // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
 // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 // USE OR OTHER DEALINGS IN THE SOFTWARE.



 var R = typeof Reflect === 'object' ? Reflect : null
 var ReflectApply = R && typeof R.apply === 'function'
   ? R.apply
   : function ReflectApply(target, receiver, args) {
     return Function.prototype.apply.call(target, receiver, args);
   }

 var ReflectOwnKeys
 if (R && typeof R.ownKeys === 'function') {
   ReflectOwnKeys = R.ownKeys
 } else if (Object.getOwnPropertySymbols) {
   ReflectOwnKeys = function ReflectOwnKeys(target) {
     return Object.getOwnPropertyNames(target)
       .concat(Object.getOwnPropertySymbols(target));
   };
 } else {
   ReflectOwnKeys = function ReflectOwnKeys(target) {
     return Object.getOwnPropertyNames(target);
   };
 }

 function ProcessEmitWarning(warning) {
   if (console && console.warn) console.warn(warning);
 }

 var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
   return value !== value;
 }

 function EventEmitter() {
   EventEmitter.init.call(this);
 }
 module.exports = EventEmitter;
 module.exports.once = once;

 // Backwards-compat with node 0.10.x
 EventEmitter.EventEmitter = EventEmitter;

 EventEmitter.prototype._events = undefined;
 EventEmitter.prototype._eventsCount = 0;
 EventEmitter.prototype._maxListeners = undefined;

 // By default EventEmitters will print a warning if more than 10 listeners are
 // added to it. This is a useful default which helps finding memory leaks.
 var defaultMaxListeners = 10;

 function checkListener(listener) {
   if (typeof listener !== 'function') {
     throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
   }
 }

 Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
   enumerable: true,
   get: function() {
     return defaultMaxListeners;
   },
   set: function(arg) {
     if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
       throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
     }
     defaultMaxListeners = arg;
   }
 });

 EventEmitter.init = function() {

   if (this._events === undefined ||
       this._events === Object.getPrototypeOf(this)._events) {
     this._events = Object.create(null);
     this._eventsCount = 0;
   }

   this._maxListeners = this._maxListeners || undefined;
 };

 // Obviously not all Emitters should be limited to 10. This function allows
 // that to be increased. Set to zero for unlimited.
 EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
   if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
     throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
   }
   this._maxListeners = n;
   return this;
 };

 function _getMaxListeners(that) {
   if (that._maxListeners === undefined)
     return EventEmitter.defaultMaxListeners;
   return that._maxListeners;
 }

 EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
   return _getMaxListeners(this);
 };

 EventEmitter.prototype.emit = function emit(type) {
   var args = [];
   for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
   var doError = (type === 'error');

   var events = this._events;
   if (events !== undefined)
     doError = (doError && events.error === undefined);
   else if (!doError)
     return false;

   // If there is no 'error' event listener then throw.
   if (doError) {
     var er;
     if (args.length > 0)
       er = args[0];
     if (er instanceof Error) {
       // Note: The comments on the `throw` lines are intentional, they show
       // up in Node's output if this results in an unhandled exception.
       throw er; // Unhandled 'error' event
     }
     // At least give some kind of context to the user
     var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
     err.context = er;
     throw err; // Unhandled 'error' event
   }

   var handler = events[type];

   if (handler === undefined)
     return false;

   if (typeof handler === 'function') {
     ReflectApply(handler, this, args);
   } else {
     var len = handler.length;
     var listeners = arrayClone(handler, len);
     for (var i = 0; i < len; ++i)
       ReflectApply(listeners[i], this, args);
   }

   return true;
 };

 function _addListener(target, type, listener, prepend) {
   var m;
   var events;
   var existing;

   checkListener(listener);

   events = target._events;
   if (events === undefined) {
     events = target._events = Object.create(null);
     target._eventsCount = 0;
   } else {
     // To avoid recursion in the case that type === "newListener"! Before
     // adding it to the listeners, first emit "newListener".
     if (events.newListener !== undefined) {
       target.emit('newListener', type,
                   listener.listener ? listener.listener : listener);

       // Re-assign `events` because a newListener handler could have caused the
       // this._events to be assigned to a new object
       events = target._events;
     }
     existing = events[type];
   }

   if (existing === undefined) {
     // Optimize the case of one listener. Don't need the extra array object.
     existing = events[type] = listener;
     ++target._eventsCount;
   } else {
     if (typeof existing === 'function') {
       // Adding the second element, need to change to array.
       existing = events[type] =
         prepend ? [listener, existing] : [existing, listener];
       // If we've already got an array, just append.
     } else if (prepend) {
       existing.unshift(listener);
     } else {
       existing.push(listener);
     }

     // Check for listener leak
     m = _getMaxListeners(target);
     if (m > 0 && existing.length > m && !existing.warned) {
       existing.warned = true;
       // No error code for this since it is a Warning
       // eslint-disable-next-line no-restricted-syntax
       var w = new Error('Possible EventEmitter memory leak detected. ' +
                           existing.length + ' ' + String(type) + ' listeners ' +
                           'added. Use emitter.setMaxListeners() to ' +
                           'increase limit');
       w.name = 'MaxListenersExceededWarning';
       w.emitter = target;
       w.type = type;
       w.count = existing.length;
       ProcessEmitWarning(w);
     }
   }

   return target;
 }

 EventEmitter.prototype.addListener = function addListener(type, listener) {
   return _addListener(this, type, listener, false);
 };

 EventEmitter.prototype.on = EventEmitter.prototype.addListener;

 EventEmitter.prototype.prependListener =
     function prependListener(type, listener) {
       return _addListener(this, type, listener, true);
     };

 function onceWrapper() {
   if (!this.fired) {
     this.target.removeListener(this.type, this.wrapFn);
     this.fired = true;
     if (arguments.length === 0)
       return this.listener.call(this.target);
     return this.listener.apply(this.target, arguments);
   }
 }

 function _onceWrap(target, type, listener) {
   var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
   var wrapped = onceWrapper.bind(state);
   wrapped.listener = listener;
   state.wrapFn = wrapped;
   return wrapped;
 }

 EventEmitter.prototype.once = function once(type, listener) {
   checkListener(listener);
   this.on(type, _onceWrap(this, type, listener));
   return this;
 };

 EventEmitter.prototype.prependOnceListener =
     function prependOnceListener(type, listener) {
       checkListener(listener);
       this.prependListener(type, _onceWrap(this, type, listener));
       return this;
     };

 // Emits a 'removeListener' event if and only if the listener was removed.
 EventEmitter.prototype.removeListener =
     function removeListener(type, listener) {
       var list, events, position, i, originalListener;

       checkListener(listener);

       events = this._events;
       if (events === undefined)
         return this;

       list = events[type];
       if (list === undefined)
         return this;

       if (list === listener || list.listener === listener) {
         if (--this._eventsCount === 0)
           this._events = Object.create(null);
         else {
           delete events[type];
           if (events.removeListener)
             this.emit('removeListener', type, list.listener || listener);
         }
       } else if (typeof list !== 'function') {
         position = -1;

         for (i = list.length - 1; i >= 0; i--) {
           if (list[i] === listener || list[i].listener === listener) {
             originalListener = list[i].listener;
             position = i;
             break;
           }
         }

         if (position < 0)
           return this;

         if (position === 0)
           list.shift();
         else {
           spliceOne(list, position);
         }

         if (list.length === 1)
           events[type] = list[0];

         if (events.removeListener !== undefined)
           this.emit('removeListener', type, originalListener || listener);
       }

       return this;
     };

 EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

 EventEmitter.prototype.removeAllListeners =
     function removeAllListeners(type) {
       var listeners, events, i;

       events = this._events;
       if (events === undefined)
         return this;

       // not listening for removeListener, no need to emit
       if (events.removeListener === undefined) {
         if (arguments.length === 0) {
           this._events = Object.create(null);
           this._eventsCount = 0;
         } else if (events[type] !== undefined) {
           if (--this._eventsCount === 0)
             this._events = Object.create(null);
           else
             delete events[type];
         }
         return this;
       }

       // emit removeListener for all listeners on all events
       if (arguments.length === 0) {
         var keys = Object.keys(events);
         var key;
         for (i = 0; i < keys.length; ++i) {
           key = keys[i];
           if (key === 'removeListener') continue;
           this.removeAllListeners(key);
         }
         this.removeAllListeners('removeListener');
         this._events = Object.create(null);
         this._eventsCount = 0;
         return this;
       }

       listeners = events[type];

       if (typeof listeners === 'function') {
         this.removeListener(type, listeners);
       } else if (listeners !== undefined) {
         // LIFO order
         for (i = listeners.length - 1; i >= 0; i--) {
           this.removeListener(type, listeners[i]);
         }
       }

       return this;
     };

 function _listeners(target, type, unwrap) {
   var events = target._events;

   if (events === undefined)
     return [];

   var evlistener = events[type];
   if (evlistener === undefined)
     return [];

   if (typeof evlistener === 'function')
     return unwrap ? [evlistener.listener || evlistener] : [evlistener];

   return unwrap ?
     unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
 }

 EventEmitter.prototype.listeners = function listeners(type) {
   return _listeners(this, type, true);
 };

 EventEmitter.prototype.rawListeners = function rawListeners(type) {
   return _listeners(this, type, false);
 };

 EventEmitter.listenerCount = function(emitter, type) {
   if (typeof emitter.listenerCount === 'function') {
     return emitter.listenerCount(type);
   } else {
     return listenerCount.call(emitter, type);
   }
 };

 EventEmitter.prototype.listenerCount = listenerCount;
 function listenerCount(type) {
   var events = this._events;

   if (events !== undefined) {
     var evlistener = events[type];

     if (typeof evlistener === 'function') {
       return 1;
     } else if (evlistener !== undefined) {
       return evlistener.length;
     }
   }

   return 0;
 }

 EventEmitter.prototype.eventNames = function eventNames() {
   return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
 };

 function arrayClone(arr, n) {
   var copy = new Array(n);
   for (var i = 0; i < n; ++i)
     copy[i] = arr[i];
   return copy;
 }

 function spliceOne(list, index) {
   for (; index + 1 < list.length; index++)
     list[index] = list[index + 1];
   list.pop();
 }

 function unwrapListeners(arr) {
   var ret = new Array(arr.length);
   for (var i = 0; i < ret.length; ++i) {
     ret[i] = arr[i].listener || arr[i];
   }
   return ret;
 }

 function once(emitter, name) {
   return new Promise(function (resolve, reject) {
     function errorListener(err) {
       emitter.removeListener(name, resolver);
       reject(err);
     }

     function resolver() {
       if (typeof emitter.removeListener === 'function') {
         emitter.removeListener('error', errorListener);
       }
       resolve([].slice.call(arguments));
     };

     eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
     if (name !== 'error') {
       addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
     }
   });
 }

 function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
   if (typeof emitter.on === 'function') {
     eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
   }
 }

 function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
   if (typeof emitter.on === 'function') {
     if (flags.once) {
       emitter.once(name, listener);
     } else {
       emitter.on(name, listener);
     }
   } else if (typeof emitter.addEventListener === 'function') {
     // EventTarget does not have `error` event semantics like Node
     // EventEmitters, we do not listen for `error` events here.
     emitter.addEventListener(name, function wrapListener(arg) {
       // IE does not have builtin `{ once: true }` support so we
       // have to do it manually.
       if (flags.once) {
         emitter.removeEventListener(name, wrapListener);
       }
       listener(arg);
     });
   } else {
     throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
   }
 }


 /***/ }),
 /* 34 */
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
 var rum_event_1 = __webpack_require__(6);
 var exception_1 = __webpack_require__(35);
 var is_1 = __webpack_require__(2);
 var verify_1 = __webpack_require__(11);
 var FLUSH_TIME = 3000;
 var MAX_EVENT_COUNT = 20;
 var attrs = ['app', 'user', 'device', 'os', 'geo', 'isp', 'net', 'properties'];
 var Reporter = /*#__PURE__*/function () {
   function Reporter() {
     _classCallCheck(this, Reporter);
     this.name = 'reporter';
     this.eventQueue = [];
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
     value: function report(ctx) {
       var _this = this;
       this.ctx = ctx;
       this.init(ctx);
       clearTimeout(this.timer);
       this.pushToQueue();
       var reportConfig = this.getReportCfg();
       if (this.eventQueue.length >= reportConfig.maxEventCount) {
         this.flushEventQueue();
       } else {
         this.timer = setTimeout(function () {
           _this.flushEventQueue();
         }, reportConfig.flushTime);
       }
     }
   }, {
     key: "pushToQueue",
     value: function pushToQueue() {
       var ctx = this.ctx,
         eventQueue = this.eventQueue;
       var event = ctx.getRumEvent();
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
       sampled && this.mergeEvent(ctx, eventQueue, curView);
       this.eventQueue = [];
     }
   }, {
     key: "mergeEvent",
     value: function mergeEvent(ctx, events, view) {
       var config = ctx.getConfig();
       var session = ctx.session;
       var sessionId = session.getSessionId();
       for (var i = 0; i < events.length; i++) {
         var e = events[i];
         if (e.session_id === sessionId) {
           delete e.session_id;
         } else {
           events.splice(i, 1);
           i--;
         }
       }
       if (events.length === 0) return;
       var bundle = {
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
       };
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
       this.request(ctx, bundle);
     }
   }, {
     key: "init",
     value: function init(ctx) {}
   }]);
 }();
 exports["default"] = Reporter;

 /***/ }),
 /* 35 */
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
 /* 36 */
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
 var rum_event_1 = __webpack_require__(6);
 var client_1 = __webpack_require__(8);
 var is_1 = __webpack_require__(2);
 var combineConfig_1 = __webpack_require__(37);
 var Shell = /*#__PURE__*/function () {
   function Shell(config) {
     _classCallCheck(this, Shell);
     this.client = new client_1["default"]();
     if (config && this.init) {
       this.init(config);
     }
   }
   return _createClass(Shell, [{
     key: "getCombinedConfig",
     value: function getCombinedConfig(config) {
       var combinedConf;
       if ((0, combineConfig_1.isRemoteConfigEnable)(config) && (0, is_1.isFunction)(this.getLocalConfig)) {
         var localConfig = this.getLocalConfig(0, config.pid);
         combinedConf = (0, combineConfig_1["default"])(config, localConfig);
       }
       return combinedConf || config;
     }
   }, {
     key: "updateFromRemoteConfig",
     value: function updateFromRemoteConfig(config) {
       var reSetup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
       if (config.pid && (0, combineConfig_1.isRemoteConfigEnable)(config) && (0, is_1.isFunction)(this.getRemoteConfig)) {
         var that = this;
         var proms = this.getRemoteConfig((0, combineConfig_1.getRemoteConfigUrl)(config), config);
         proms === null || proms === void 0 ? void 0 : proms.then(function (remoteConfig) {
           if (!remoteConfig || remoteConfig.errorStatus !== undefined) return;
           var combinedConf = (0, combineConfig_1["default"])(config, remoteConfig);
           if (!combinedConf) return;
           if ((0, is_1.isFunction)(that.storeRemoteConfig)) {
             that.storeRemoteConfig(remoteConfig, config.pid);
           }
           if (reSetup === false || config.remoteConfig.reSetup === false) return;
           var context = that.client.getContext();
           context.setConfig(combinedConf);
           var collectors = that.client.getCollectors();
           collectors.forEach(function (collector) {
             if ((0, is_1.isFunction)(collector.destroy)) {
               collector.destroy();
               collector.setup(context, that.client.sendEvent);
             }
           });
         });
       }
     }
   }, {
     key: "sendEvent",
     value: function sendEvent(payload) {
       if (this.client) {
         this.client.sendEvent(payload);
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
 /* 37 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.getRemoteConfigUrl = exports.isRemoteConfigEnable = void 0;
 var base_1 = __webpack_require__(12);
 var REG_FORMAT_PATHS = ['filters.exception', 'filters.resource', 'tracing.allowedUrls.[].match'];
 function isRemoteConfigEnable(config) {
   return config.remoteConfig === true || config.remoteConfig && config.remoteConfig.enable !== false;
 }
 exports.isRemoteConfigEnable = isRemoteConfigEnable;
 function getRemoteConfigUrl(config) {
   if (config.remoteConfig && config.remoteConfig.url) {
     return config.remoteConfig.url;
   }
   var sereis = config.pid.split('@');
   if (!sereis || sereis.length < 2) return;
   var timestamp = Date.now();
   return "//".concat(sereis[0], "-sdk.rum.aliyuncs.com/config/").concat(config.remoteConfig.region || 'cn-hangzhou', "/").concat(sereis[1], "?t=").concat(timestamp);
 }
 exports.getRemoteConfigUrl = getRemoteConfigUrl;
 function doCover() {
   var oldConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
   var remoteConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
   for (var key in oldConfig) {
     if (key === 'pid' || key === 'endpoint') continue;
     if ((remoteConfig === null || remoteConfig === void 0 ? void 0 : remoteConfig[key]) === undefined) continue;
     var oldV = oldConfig[key];
     var newV = remoteConfig === null || remoteConfig === void 0 ? void 0 : remoteConfig[key];
     if ((0, base_1.getType)(oldV) === 'object' && (0, base_1.getType)(newV) === 'object') {
       doCover(oldV, newV);
     } else {
       oldConfig[key] = newV;
     }
   }
 }
 function doSupplement() {
   var oldConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
   var remoteConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
   for (var key in remoteConfig) {
     if ((oldConfig === null || oldConfig === void 0 ? void 0 : oldConfig[key]) === undefined) {
       oldConfig[key] = remoteConfig[key];
     } else {
       var oldV = oldConfig[key];
       var newV = remoteConfig[key];
       if ((0, base_1.getType)(oldV) === 'object' && (0, base_1.getType)(newV) === 'object') {
         doSupplement(oldV, newV);
       }
     }
   }
 }
 function combineConfig() {
   var oldConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
   var remoteConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
   if (!remoteConfig) return null;
   if ((0, base_1.getType)(oldConfig) !== 'object' || (0, base_1.getType)(remoteConfig) !== 'object') return null;
   var config = Object.assign({}, oldConfig);
   (0, base_1.toRegFormat)(remoteConfig, REG_FORMAT_PATHS);
   doCover(config, remoteConfig);
   doSupplement(config, remoteConfig);
   return config;
 }
 exports["default"] = combineConfig;

 /***/ }),
 /* 38 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });

 /***/ }),
 /* 39 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });

 /***/ }),
 /* 40 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });

 /***/ }),
 /* 41 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });

 /***/ }),
 /* 42 */
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
 /* 43 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.parseTracingOptions = exports.makeTracingHeaders = exports.isTraceOption = void 0;
 var match_1 = __webpack_require__(14);
 var is_1 = __webpack_require__(2);
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
 /* 44 */
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
 exports.BrowserReporter = exports.SessionProcessor = exports.DefaultProcessor = exports.WebVitalsCollector = exports.PerfCollector = exports.PvCollector = exports.StaticResourceCollector = exports.ApiCollector = exports.LongTaskCollector = exports.WhiteScreenCollector = exports.ExceptionCollector = exports.ClickCollector = exports.ArmsRum = void 0;
 var shell_1 = __webpack_require__(45);
 Object.defineProperty(exports, "ArmsRum", {
   enumerable: true,
   get: function get() {
     return shell_1.ArmsRum;
   }
 });
 exports["default"] = shell_1["default"];
 var click_1 = __webpack_require__(23);
 Object.defineProperty(exports, "ClickCollector", {
   enumerable: true,
   get: function get() {
     return click_1["default"];
   }
 });
 var index_1 = __webpack_require__(16);
 Object.defineProperty(exports, "ExceptionCollector", {
   enumerable: true,
   get: function get() {
     return index_1["default"];
   }
 });
 var blank_1 = __webpack_require__(17);
 Object.defineProperty(exports, "WhiteScreenCollector", {
   enumerable: true,
   get: function get() {
     return blank_1["default"];
   }
 });
 var longtask_1 = __webpack_require__(24);
 Object.defineProperty(exports, "LongTaskCollector", {
   enumerable: true,
   get: function get() {
     return longtask_1["default"];
   }
 });
 var api_1 = __webpack_require__(21);
 Object.defineProperty(exports, "ApiCollector", {
   enumerable: true,
   get: function get() {
     return api_1["default"];
   }
 });
 var static_resource_1 = __webpack_require__(22);
 Object.defineProperty(exports, "StaticResourceCollector", {
   enumerable: true,
   get: function get() {
     return static_resource_1["default"];
   }
 });
 var pv_1 = __webpack_require__(15);
 Object.defineProperty(exports, "PvCollector", {
   enumerable: true,
   get: function get() {
     return pv_1["default"];
   }
 });
 var perf_1 = __webpack_require__(19);
 Object.defineProperty(exports, "PerfCollector", {
   enumerable: true,
   get: function get() {
     return perf_1["default"];
   }
 });
 var webvitals_1 = __webpack_require__(20);
 Object.defineProperty(exports, "WebVitalsCollector", {
   enumerable: true,
   get: function get() {
     return webvitals_1["default"];
   }
 });
 var default_processor_1 = __webpack_require__(25);
 Object.defineProperty(exports, "DefaultProcessor", {
   enumerable: true,
   get: function get() {
     return default_processor_1["default"];
   }
 });
 var session_processor_1 = __webpack_require__(26);
 Object.defineProperty(exports, "SessionProcessor", {
   enumerable: true,
   get: function get() {
     return session_processor_1["default"];
   }
 });
 var reporter_1 = __webpack_require__(27);
 Object.defineProperty(exports, "BrowserReporter", {
   enumerable: true,
   get: function get() {
     return reporter_1["default"];
   }
 });
 __exportStar(__webpack_require__(57), exports);
 __exportStar(__webpack_require__(28), exports);

 /***/ }),
 /* 45 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
 exports.ArmsRum = void 0;
 var rum_core_1 = __webpack_require__(0);
 var pv_1 = __webpack_require__(15);
 var exception_1 = __webpack_require__(16);
 var blank_1 = __webpack_require__(17);
 var perf_1 = __webpack_require__(19);
 var webvitals_1 = __webpack_require__(20);
 var api_1 = __webpack_require__(21);
 var static_resource_1 = __webpack_require__(22);
 var click_1 = __webpack_require__(23);
 var longtask_1 = __webpack_require__(24);
 var default_processor_1 = __webpack_require__(25);
 var session_processor_1 = __webpack_require__(26);
 var reporter_1 = __webpack_require__(27);
 var global_1 = __webpack_require__(1);
 var session_1 = __webpack_require__(28);
 var localStore_1 = __webpack_require__(55);
 var request_1 = __webpack_require__(56);
 var ArmsRum = /*#__PURE__*/function (_rum_core_1$Shell) {
   function ArmsRum() {
     var _this;
     _classCallCheck(this, ArmsRum);
     _this = _callSuper(this, ArmsRum, arguments);
     _this.version = global_1.VERSION;
     return _this;
   }
   _inherits(ArmsRum, _rum_core_1$Shell);
   return _createClass(ArmsRum, [{
     key: "init",
     value: function init(configuration) {
       this.client.useCollectors([new pv_1["default"](), new perf_1["default"](), new webvitals_1["default"](), new exception_1["default"](), new blank_1["default"](), new api_1["default"](), new static_resource_1["default"](), new click_1["default"](), new longtask_1["default"]()]);
       this.client.useProcessors([new default_processor_1["default"](), new session_processor_1["default"]()]);
       this.client.useReporter(new reporter_1["default"]());
       var config = configuration;
       if ((0, rum_core_1.isFunction)(this.getCombinedConfig)) {
         config = this.getCombinedConfig(config);
       }
       this.client.init(config, new session_1.RumSession());
       this.updateFromRemoteConfig(configuration);
       return this;
     }
   }, {
     key: "getRemoteConfig",
     value: function getRemoteConfig(url) {
       var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
       return (0, request_1["default"])(url);
     }
   }, {
     key: "storeRemoteConfig",
     value: function storeRemoteConfig(config, pid) {
       return (0, localStore_1.storeConfigToLocal)(config, pid);
     }
   }, {
     key: "getLocalConfig",
     value: function getLocalConfig(duration, pid) {
       return (0, localStore_1.getConfigFromLocal)(duration, pid);
     }
   }, {
     key: "getConfig",
     value: function getConfig() {
       return this.client.getContext().getConfig();
     }
   }, {
     key: "setConfig",
     value: function setConfig() {
       var ctx = this.client.getContext();
       if (arguments.length === 2) {
         var _ctx = this.client.getContext();
         var oldConfig = _ctx.getConfig();
         _ctx.setConfig(Object.assign(Object.assign({}, oldConfig), _defineProperty({}, arguments.length <= 0 ? undefined : arguments[0], arguments.length <= 1 ? undefined : arguments[1])));
       } else {
         ctx.setConfig(arguments.length <= 0 ? undefined : arguments[0]);
       }
     }
   }]);
 }(rum_core_1.Shell);
 exports.ArmsRum = ArmsRum;
 exports["default"] = new ArmsRum(global_1.global['__rum']);

 /***/ }),
 /* 46 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
 function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
 function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
 function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
 function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
 function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.getDebugIdsMap = void 0;
 var global_1 = __webpack_require__(1);
 var recordDebugIdsMap = new Map();
 var getDebugIdsMap = function getDebugIdsMap(stack) {
   var frames = parseStack(stack);
   var debugIdsMap = frames.reduce(function (res, frame) {
     var filename = frame.filename;
     if (!filename) return res;
     if (!recordDebugIdsMap.has(filename)) {
       updateRecordDebugIdsMap();
     }
     if (recordDebugIdsMap.has(filename)) {
       res[filename] = recordDebugIdsMap.get(filename);
     }
     return res;
   }, {});
   return debugIdsMap;
 };
 exports.getDebugIdsMap = getDebugIdsMap;
 var updateRecordDebugIdsMap = function updateRecordDebugIdsMap() {
   [global_1.global._armsRumDebugIds, global_1.global._sentryDebugIds].forEach(function (originDebugIdsMap) {
     if (originDebugIdsMap) {
       Object.keys(originDebugIdsMap).forEach(function (stackKey) {
         var frames = parseStack(stackKey, {
           onlyTop: true
         });
         var filename = frames.length && frames[0].filename;
         if (filename && !recordDebugIdsMap.has(filename)) {
           recordDebugIdsMap.set(filename, originDebugIdsMap[stackKey]);
         }
       });
     }
   });
 };
 var parseStack = function parseStack(stack, opt) {
   var _ref = opt || {},
     _ref$initLine = _ref.initLine,
     initLine = _ref$initLine === void 0 ? 0 : _ref$initLine,
     _ref$onlyTop = _ref.onlyTop,
     onlyTop = _ref$onlyTop === void 0 ? false : _ref$onlyTop;
   var frames = [];
   if (typeof stack !== 'string') return frames;
   var lines = stack.split('\n');
   if (lines.length) {
     for (var i = initLine; i < lines.length; i++) {
       var line = lines[i];
       if (!isParseableLine(line)) continue;
       try {
         line = preprocessLine(line);
         var frame = parseLine(line);
         if (frame) {
           frames.push(frame);
           if (onlyTop) {
             break;
           }
         }
       } catch (error) {}
     }
   }
   return frames;
 };
 var isParseableLine = function isParseableLine(line) {
   if (line.length > 1024) return false;
   return true;
 };
 var WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
 var preprocessLine = function preprocessLine(line) {
   return WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, '$1') : line;
 };
 var parseLine = function parseLine(line) {
   var frame;
   frame = parseChromeLine(line);
   if (!frame) frame = parseGeckoLine(line);
   return frame;
 };
 var chromeRegexNoFnName = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i;
 var chromeRegex = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
 var chromeEvalRegex = /\((\S*)(?::(\d+))(?::(\d+))\)/;
 var parseChromeLine = function parseChromeLine(line) {
   var noFnParts = chromeRegexNoFnName.exec(line);
   if (noFnParts) {
     var _noFnParts = _slicedToArray(noFnParts, 4),
       filename = _noFnParts[1],
       _line = _noFnParts[2],
       col = _noFnParts[3];
     return createFrame(filename, UNKNOWN_FUNCTION, +_line, +col);
   }
   var parts = chromeRegex.exec(line);
   if (parts) {
     var isEval = parts[2] && parts[2].indexOf('eval') === 0;
     if (isEval) {
       var subMatch = chromeEvalRegex.exec(parts[2]);
       if (subMatch) {
         parts[2] = subMatch[1];
         parts[3] = subMatch[2];
         parts[4] = subMatch[3];
       }
     }
     var _extractSafariExtensi = extractSafariExtensionDetails(parts[1] || UNKNOWN_FUNCTION, parts[2]),
       _extractSafariExtensi2 = _slicedToArray(_extractSafariExtensi, 2),
       func = _extractSafariExtensi2[0],
       _filename = _extractSafariExtensi2[1];
     return createFrame(_filename, func, parts[3] ? +parts[3] : undefined, parts[4] ? +parts[4] : undefined);
   }
   return null;
 };
 var geckoREgex = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i;
 var geckoEvalRegex = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
 var parseGeckoLine = function parseGeckoLine(line) {
   var parts = geckoREgex.exec(line);
   if (parts) {
     var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
     if (isEval) {
       var subMatch = geckoEvalRegex.exec(parts[3]);
       if (subMatch) {
         parts[1] = parts[1] || 'eval';
         parts[3] = subMatch[1];
         parts[4] = subMatch[2];
         parts[5] = '';
       }
     }
     var filename = parts[3];
     var func = parts[1] || UNKNOWN_FUNCTION;
     var _extractSafariExtensi3 = extractSafariExtensionDetails(func, filename);
     var _extractSafariExtensi4 = _slicedToArray(_extractSafariExtensi3, 2);
     func = _extractSafariExtensi4[0];
     filename = _extractSafariExtensi4[1];
     return createFrame(filename, func, parts[4] ? +parts[4] : undefined, parts[5] ? +parts[5] : undefined);
   }
   return null;
 };
 var extractSafariExtensionDetails = function extractSafariExtensionDetails(func, filename) {
   var isSafariExtension = func.indexOf('safari-extension') !== -1;
   var isSafariWebExtension = func.indexOf('safari-web-extension') !== -1;
   return isSafariExtension || isSafariWebExtension ? [func.indexOf('@') !== -1 ? func.split('@')[0] : UNKNOWN_FUNCTION, isSafariExtension ? "safari-extension:".concat(filename) : "safari-web-extension:".concat(filename)] : [func, filename];
 };
 var UNKNOWN_FUNCTION = 'UNKNOWN_FUNCTION';
 var createFrame = function createFrame(filename, func, lineno, colno) {
   var frame = {
     filename: filename,
     "function": func === '<anonymous>' ? UNKNOWN_FUNCTION : func
   };
   if (lineno !== undefined) {
     frame.lineno = lineno;
   }
   if (colno !== undefined) {
     frame.colno = colno;
   }
   return frame;
 };

 /***/ }),
 /* 47 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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
 var __rest = this && this.__rest || function (s, e) {
   var t = {};
   for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
   if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
     if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
   }
   return t;
 };
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.blankCheckWithSingleMethod = exports.blankCheck = exports.testerValidator = void 0;
 var screenshotCheck_1 = __webpack_require__(48);
 var sampleCheck_1 = __webpack_require__(50);
 var testerValidator = function testerValidator(tester) {
   if (typeof tester === 'function') {
     return true;
   } else if (typeof tester === 'string') {
     return ['HAS_CONTENT', 'SCREENSHOT', 'SAMPLE'].includes(tester);
   }
   return false;
 };
 exports.testerValidator = testerValidator;
 var blankCheck = function blankCheck(tester, targetElement, options) {
   return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
     var _yield$tester, hasContent, _yield$tester$message, message, _yield$tester$snapsho, snapshot;
     return _regeneratorRuntime().wrap(function _callee$(_context) {
       while (1) switch (_context.prev = _context.next) {
         case 0:
           if (!(typeof tester === 'function')) {
             _context.next = 12;
             break;
           }
           _context.next = 3;
           return tester(targetElement);
         case 3:
           _yield$tester = _context.sent;
           hasContent = _yield$tester.hasContent;
           _yield$tester$message = _yield$tester.message;
           message = _yield$tester$message === void 0 ? '' : _yield$tester$message;
           _yield$tester$snapsho = _yield$tester.snapshot;
           snapshot = _yield$tester$snapsho === void 0 ? {} : _yield$tester$snapsho;
           return _context.abrupt("return", {
             hasContent: hasContent,
             message: message,
             snapshot: Object.assign(Object.assign({}, snapshot), {
               method: 'CUSTOM'
             })
           });
         case 12:
           if (!(typeof tester === 'string')) {
             _context.next = 16;
             break;
           }
           _context.next = 15;
           return (0, exports.blankCheckWithSingleMethod)(tester, targetElement, options);
         case 15:
           return _context.abrupt("return", _context.sent);
         case 16:
         case "end":
           return _context.stop();
       }
     }, _callee);
   }));
 };
 exports.blankCheck = blankCheck;
 var blankCheckWithSingleMethod = function blankCheckWithSingleMethod(tester, targetElement, options) {
   return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
     var _a, result, snapshot, _b, _result, _snapshot;
     return _regeneratorRuntime().wrap(function _callee2$(_context2) {
       while (1) switch (_context2.prev = _context2.next) {
         case 0:
           if (!(tester === 'HAS_CONTENT')) {
             _context2.next = 4;
             break;
           }
           return _context2.abrupt("return", {
             hasContent: Boolean(targetElement === null || targetElement === void 0 ? void 0 : targetElement.textContent),
             snapshot: {
               method: tester
             }
           });
         case 4:
           if (!(tester === 'SCREENSHOT')) {
             _context2.next = 13;
             break;
           }
           _context2.next = 7;
           return (0, screenshotCheck_1.performScreenshotCheck)(targetElement, options);
         case 7:
           _a = _context2.sent;
           result = _a.result;
           snapshot = __rest(_a, ["result"]);
           return _context2.abrupt("return", {
             hasContent: result,
             message: result ? '' : generateMessage(snapshot),
             snapshot: Object.assign({
               method: tester
             }, snapshot)
           });
         case 13:
           if (!(tester === 'SAMPLE')) {
             _context2.next = 16;
             break;
           }
           _b = (0, sampleCheck_1.performSampleCheck)(targetElement, options), _result = _b.result, _snapshot = __rest(_b, ["result"]);
           return _context2.abrupt("return", {
             hasContent: _result,
             message: _result ? '' : generateMessage(_snapshot),
             snapshot: Object.assign({
               method: tester
             }, _snapshot)
           });
         case 16:
         case "end":
           return _context2.stop();
       }
     }, _callee2);
   }));
 };
 exports.blankCheckWithSingleMethod = blankCheckWithSingleMethod;
 var generateMessage = function generateMessage(snapshot) {
   return "The white screen occurrence rate is ".concat(snapshot.rate, ", exceeding the threshold of ").concat(snapshot.threshold, ". A total of ").concat(snapshot.checkPoints, " detection points were set, and ").concat(snapshot.whitePixels, " of them were hit.");
 };

 /***/ }),
 /* 48 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
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
 exports.performScreenshotCheck = void 0;
 var html2canvas_1 = __webpack_require__(49);
 var global_1 = __webpack_require__(1);
 var performScreenshotCheck = function performScreenshotCheck(element) {
   var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
   return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
     var screenWidth, screenHeight, defaultOptions, mergedOptions, debug, colorRange, horizontalOffset, verticalOffset, pixels, threshold, dpr, ImageWidth, ImageHeight, canvas, ctx, screenshot, image, whitePixels, totalCellWidth, totalCellHeight, numCols, numRows, checkPoints, col, row, x, y, pixel, data, result;
     return _regeneratorRuntime().wrap(function _callee$(_context) {
       while (1) switch (_context.prev = _context.next) {
         case 0:
           _context.prev = 0;
           screenWidth = window.innerWidth;
           screenHeight = window.innerHeight;
           defaultOptions = {
             colorRange: ['rgb(255, 255, 255)'],
             horizontalOffset: 0,
             verticalOffset: 0,
             pixels: 10,
             threshold: 0.8,
             dpr: 0.3,
             debug: false,
             ignoreElements: [],
             fillColor: 'rgba(0, 100, 200, 255)'
           };
           mergedOptions = Object.assign(Object.assign({}, defaultOptions), options);
           debug = mergedOptions.debug, colorRange = mergedOptions.colorRange, horizontalOffset = mergedOptions.horizontalOffset, verticalOffset = mergedOptions.verticalOffset, pixels = mergedOptions.pixels, threshold = mergedOptions.threshold, dpr = mergedOptions.dpr;
           ImageWidth = screenWidth * dpr;
           ImageHeight = screenHeight * dpr;
           canvas = global_1.document.createElement('canvas');
           canvas.height = ImageHeight;
           canvas.width = ImageWidth;
           canvas.style.width = "".concat(ImageWidth, "px");
           canvas.style.height = "".concat(ImageHeight, "px");
           ctx = canvas.getContext('2d', {
             willReadFrequently: true
           });
           screenshot = (0, html2canvas_1.html2canvas)(element, {
             ignoreElements: mergedOptions.ignoreElements,
             fillColor: mergedOptions.fillColor
           });
           if (!(typeof screenshot === 'string')) {
             _context.next = 17;
             break;
           }
           return _context.abrupt("return", {
             result: true,
             image: null,
             error: null
           });
         case 17:
           image = new Image();
           image.src = screenshot.toDataURL('image/png');
           image.crossOrigin = 'Anonymous';
           _context.next = 22;
           return new Promise(function (resolve) {
             image.addEventListener('load', function () {
               return resolve();
             });
           });
         case 22:
           ctx.drawImage(image, 0, 0, ImageWidth, ImageHeight);
           whitePixels = 0;
           totalCellWidth = 2 * pixels;
           totalCellHeight = 2 * pixels;
           numCols = Math.floor((ImageWidth - horizontalOffset * dpr) / totalCellWidth);
           numRows = Math.floor((ImageHeight - verticalOffset * dpr) / totalCellHeight);
           checkPoints = numCols * numRows;
           for (col = 0; col < numCols; col++) {
             for (row = 0; row < numRows; row++) {
               x = col * totalCellWidth;
               y = row * totalCellWidth;
               pixel = ctx.getImageData(x + horizontalOffset * dpr, y + verticalOffset * dpr, pixels, pixels);
               data = pixel.data;
               if (isPureColor(data, colorRange)) {
                 whitePixels++;
               }
             }
           }
           result = {
             result: whitePixels < checkPoints * threshold,
             rate: whitePixels / checkPoints,
             image: image.src,
             whitePixels: whitePixels,
             checkPoints: checkPoints,
             threshold: threshold
           };
           debug && console.log(result);
           return _context.abrupt("return", result);
         case 35:
           _context.prev = 35;
           _context.t0 = _context["catch"](0);
           (options === null || options === void 0 ? void 0 : options.debug) && console.log('[RUM] Failed to inject blank handler: ', _context.t0);
           return _context.abrupt("return", {
             result: true,
             image: null,
             error: _context.t0.toString()
           });
         case 39:
         case "end":
           return _context.stop();
       }
     }, _callee, null, [[0, 35]]);
   }));
 };
 exports.performScreenshotCheck = performScreenshotCheck;
 var isPureColor = function isPureColor(data, colorSet) {
   var pureColor = true;
   for (var i = 0; i < data.length; i = i + 4) {
     var color = "rgb(".concat(data[i], ", ").concat(data[i + 1], ", ").concat(data[i + 2], ")");
     if (!colorSet.includes(color)) {
       pureColor = false;
       break;
     }
   }
   return pureColor;
 };

 /***/ }),
 /* 49 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
 function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
 function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
 function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
 function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
 function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
 function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
 function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
 function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
 function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
 function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
 function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
 function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
 function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
 function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
 function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
 function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.html2canvas = void 0;
 var utils_1 = __webpack_require__(18);
 var Bounds = /*#__PURE__*/function () {
   function Bounds(element) {
     _classCallCheck(this, Bounds);
     var _element$getBoundingC = element.getBoundingClientRect(),
       top = _element$getBoundingC.top,
       left = _element$getBoundingC.left,
       width = _element$getBoundingC.width,
       height = _element$getBoundingC.height;
     this.top = top;
     this.left = left;
     this.width = width;
     this.height = height;
   }
   return _createClass(Bounds, null, [{
     key: "getPoints",
     value: function getPoints(bounds) {
       var top = bounds.top,
         left = bounds.left,
         width = bounds.width,
         height = bounds.height;
       return [[left, top], [left + width, top], [left + width, top + height], [left, top + height]];
     }
   }]);
 }();
 var StackingContext = /*#__PURE__*/function () {
   function StackingContext(container) {
     _classCallCheck(this, StackingContext);
     this.container = container;
     this.negativeZIndex = [];
     this.nonInlineLevel = [];
     this.inlineLevel = [];
     this.positiveZIndex = [];
     this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
   }
   return _createClass(StackingContext, null, [{
     key: "stackingSortCompare",
     value: function stackingSortCompare(a, b) {
       return Number(a.container.styles.zIndex) - Number(b.container.styles.zIndex);
     }
   }]);
 }();
 var TextContainer = /*#__PURE__*/function () {
   function TextContainer(text, parent) {
     _classCallCheck(this, TextContainer);
     this.bounds = this.getTrueBounds(parent);
     this.text = text;
     this.parent = parent;
   }
   return _createClass(TextContainer, [{
     key: "getTrueBounds",
     value: function getTrueBounds(parent) {
       var _parent$bounds = parent.bounds,
         top = _parent$bounds.top,
         left = _parent$bounds.left,
         width = _parent$bounds.width,
         height = _parent$bounds.height;
       var _parent$styles = parent.styles,
         paddingLeft = _parent$styles.paddingLeft,
         paddingTop = _parent$styles.paddingTop,
         borderWidth = _parent$styles.borderWidth,
         fontSize = _parent$styles.fontSize;
       top += parseInt(paddingTop) + parseInt(borderWidth) + parseInt(fontSize);
       left += parseInt(paddingLeft) + parseInt(borderWidth);
       return {
         top: top,
         left: left,
         width: width,
         height: height
       };
     }
   }]);
 }();
 var ElementContainer = /*#__PURE__*/_createClass(function ElementContainer(element) {
   _classCallCheck(this, ElementContainer);
   this.styles = window.getComputedStyle(element);
   this.bounds = new Bounds(element);
   this.elements = [];
   this.textNodes = [];
   this.stackingFlag = false;
   this.element = element;
 });
 var ImageElementContainer = /*#__PURE__*/function (_ElementContainer) {
   function ImageElementContainer(element) {
     var _this;
     _classCallCheck(this, ImageElementContainer);
     _this = _callSuper(this, ImageElementContainer, [element]);
     _this.intrinsicWidth = element.width;
     _this.intrinsicHeight = element.height;
     return _this;
   }
   _inherits(ImageElementContainer, _ElementContainer);
   return _createClass(ImageElementContainer);
 }(ElementContainer);
 var InputElementContainer = /*#__PURE__*/function (_ElementContainer2) {
   function InputElementContainer(element) {
     var _this2;
     _classCallCheck(this, InputElementContainer);
     _this2 = _callSuper(this, InputElementContainer, [element]);
     _this2.type = element.type.toLowerCase();
     _this2.value = element.type === 'password' ? new Array(element.value.length + 1).join("\u2022") : element.value || element.placeholder;
     return _this2;
   }
   _inherits(InputElementContainer, _ElementContainer2);
   return _createClass(InputElementContainer);
 }(ElementContainer);
 var SelectElementContainer = /*#__PURE__*/function (_ElementContainer3) {
   function SelectElementContainer(element) {
     var _this3;
     _classCallCheck(this, SelectElementContainer);
     _this3 = _callSuper(this, SelectElementContainer, [element]);
     var option = element.options[element.selectedIndex || 0];
     _this3.value = option ? option.text || '' : '';
     return _this3;
   }
   _inherits(SelectElementContainer, _ElementContainer3);
   return _createClass(SelectElementContainer);
 }(ElementContainer);
 var CanvasElementContainer = /*#__PURE__*/function (_ElementContainer4) {
   function CanvasElementContainer(element) {
     var _this4;
     _classCallCheck(this, CanvasElementContainer);
     _this4 = _callSuper(this, CanvasElementContainer, [element]);
     _this4.intrinsicWidth = element.width;
     _this4.intrinsicHeight = element.height;
     return _this4;
   }
   _inherits(CanvasElementContainer, _ElementContainer4);
   return _createClass(CanvasElementContainer);
 }(ElementContainer);
 var VideoElementContainer = /*#__PURE__*/function (_ElementContainer5) {
   function VideoElementContainer(element) {
     var _this5;
     _classCallCheck(this, VideoElementContainer);
     _this5 = _callSuper(this, VideoElementContainer, [element]);
     _this5.intrinsicWidth = element.offsetWidth;
     _this5.intrinsicHeight = element.offsetHeight;
     return _this5;
   }
   _inherits(VideoElementContainer, _ElementContainer5);
   return _createClass(VideoElementContainer);
 }(ElementContainer);
 var SVGElementContainer = /*#__PURE__*/function (_ElementContainer6) {
   function SVGElementContainer(img) {
     var _this6;
     _classCallCheck(this, SVGElementContainer);
     _this6 = _callSuper(this, SVGElementContainer, [img]);
     _this6.intrinsicWidth = img.width.baseVal.value;
     _this6.intrinsicHeight = img.height.baseVal.value;
     return _this6;
   }
   _inherits(SVGElementContainer, _ElementContainer6);
   return _createClass(SVGElementContainer);
 }(ElementContainer);
 var IFrameElementContainer = /*#__PURE__*/function (_ElementContainer7) {
   function IFrameElementContainer(iframe) {
     var _this7;
     _classCallCheck(this, IFrameElementContainer);
     _this7 = _callSuper(this, IFrameElementContainer, [iframe]);
     var _Bounds = new Bounds(iframe),
       width = _Bounds.width,
       height = _Bounds.height;
     _this7.intrinsicWidth = width;
     _this7.intrinsicHeight = height;
     return _this7;
   }
   _inherits(IFrameElementContainer, _ElementContainer7);
   return _createClass(IFrameElementContainer);
 }(ElementContainer);
 var CanvasRenderer = /*#__PURE__*/function () {
   function CanvasRenderer(options) {
     _classCallCheck(this, CanvasRenderer);
     this.canvas = document.createElement('canvas');
     this.ctx2d = this.canvas.getContext('2d');
     this.options = options;
   }
   return _createClass(CanvasRenderer, [{
     key: "renderStack",
     value: function renderStack(stack) {
       var _this8 = this;
       var _stack$negativeZIndex = stack.negativeZIndex,
         negativeZIndex = _stack$negativeZIndex === void 0 ? [] : _stack$negativeZIndex,
         _stack$nonInlineLevel = stack.nonInlineLevel,
         nonInlineLevel = _stack$nonInlineLevel === void 0 ? [] : _stack$nonInlineLevel,
         _stack$inlineLevel = stack.inlineLevel,
         inlineLevel = _stack$inlineLevel === void 0 ? [] : _stack$inlineLevel,
         _stack$positiveZIndex = stack.positiveZIndex,
         positiveZIndex = _stack$positiveZIndex === void 0 ? [] : _stack$positiveZIndex,
         _stack$zeroOrAutoZInd = stack.zeroOrAutoZIndexOrTransformedOrOpacity,
         zeroOrAutoZIndexOrTransformedOrOpacity = _stack$zeroOrAutoZInd === void 0 ? [] : _stack$zeroOrAutoZInd;
       negativeZIndex.sort(StackingContext.stackingSortCompare);
       positiveZIndex.sort(StackingContext.stackingSortCompare);
       this.ctx2d.save();
       this.setOpacity(stack.container);
       this.renderNodeBackgroundAndBorders(stack.container);
       negativeZIndex.map(function (element) {
         return _this8.renderStack(element);
       });
       this.renderNodeContent(stack.container);
       nonInlineLevel.map(function (element) {
         return _this8.renderNode(element);
       });
       inlineLevel.map(function (element) {
         return _this8.renderNode(element);
       });
       zeroOrAutoZIndexOrTransformedOrOpacity.map(function (element) {
         return _this8.renderStack(element);
       });
       positiveZIndex.map(function (element) {
         return _this8.renderStack(element);
       });
       this.ctx2d.restore();
     }
   }, {
     key: "renderNode",
     value: function renderNode(container) {
       this.renderNodeBackgroundAndBorders(container);
       this.renderNodeContent(container);
     }
   }, {
     key: "setOpacity",
     value: function setOpacity(container) {
       var styles = container.styles;
       var ctx2d = this.ctx2d;
       var opacity = Number(styles.opacity);
       if (opacity < 1.0) {
         ctx2d.globalAlpha = opacity;
       }
     }
   }, {
     key: "renderNodeBackgroundAndBorders",
     value: function renderNodeBackgroundAndBorders(container) {
       var bounds = container.bounds,
         styles = container.styles;
       var backgroundColor = styles.backgroundColor,
         backgroundImage = styles.backgroundImage;
       var borderWidth = parseInt(styles.borderWidth);
       var points = Bounds.getPoints(bounds);
       if (backgroundImage !== 'none') {
         var fillColor = this.options.fillColor;
         this.drawFillRect(points, fillColor);
       } else if (backgroundColor.slice(5, -1).split(', ')[3] !== '0') {
         this.drawFillRect(points, backgroundColor);
       }
       if (borderWidth) {
         var borderColor = styles.borderColor;
         this.drawBorderRect(points, borderWidth, borderColor);
       }
     }
   }, {
     key: "renderNodeContent",
     value: function renderNodeContent(container) {
       var _this9 = this;
       if (container.element.tagName === 'I' || container instanceof ImageElementContainer || container instanceof IFrameElementContainer || container instanceof CanvasElementContainer || container instanceof VideoElementContainer || container instanceof SVGElementContainer) {
         this.renderReplacedElement(container);
       }
       if (container instanceof SelectElementContainer) {
         this.renderText(new TextContainer(container.value, container), container.styles);
       }
       if (container instanceof InputElementContainer) {
         this.renderInput(container);
       }
       if (container.textNodes.length) {
         container.textNodes.map(function (text) {
           return _this9.renderText(text, container.styles);
         });
       }
     }
   }, {
     key: "renderText",
     value: function renderText(text, styles) {
       var ctx2d = this.ctx2d;
       ctx2d.save();
       ctx2d.font = "".concat(styles.fontWeight, " ").concat(styles.fontSize, " ").concat(styles.fontFamily);
       ctx2d.fillStyle = styles.color;
       ctx2d.fillText(text.text, text.bounds.left, text.bounds.top);
       ctx2d.restore();
     }
   }, {
     key: "renderInput",
     value: function renderInput(container) {
       var value = container.value,
         styles = container.styles;
       var text = new TextContainer(value, container);
       this.renderText(text, styles);
     }
   }, {
     key: "renderReplacedElement",
     value: function renderReplacedElement(container) {
       if (container.intrinsicWidth > 0 && container.intrinsicHeight > 0 || container.element.tagName === 'I') {
         var bounds = container.bounds,
           styles = container.styles;
         var fillColor = this.options.fillColor;
         var borderWidth = parseInt(styles.borderWidth);
         var points = Bounds.getPoints(bounds);
         this.drawFillRect(points, fillColor);
         if (borderWidth) {
           this.drawBorderRect(points, borderWidth, fillColor);
         }
       }
     }
   }, {
     key: "render",
     value: function render(element) {
       var canvas = this.canvas,
         ctx2d = this.ctx2d;
       var _ref = (0, utils_1.getTrueArea)(element),
         width = _ref.width,
         height = _ref.height,
         left = _ref.left,
         top = _ref.top;
       canvas.width = width;
       canvas.height = height;
       canvas.style.width = width + 'px';
       canvas.style.height = height + 'px';
       ctx2d.scale(1, 1);
       ctx2d.fillStyle = '#fff';
       ctx2d.translate(-left, -top);
       ctx2d.fillRect(left, top, width, height);
       var root = parseTree(element, this.options);
       var stack = parseStackingContext(root);
       this.renderStack(stack);
       return this.canvas;
     }
   }, {
     key: "drawPathByPoints",
     value: function drawPathByPoints(points) {
       var _this10 = this;
       points.map(function (point, i) {
         if (i === 0) {
           _this10.ctx2d.moveTo(point[0], point[1]);
         } else {
           _this10.ctx2d.lineTo(point[0], point[1]);
         }
       });
     }
   }, {
     key: "drawFillRect",
     value: function drawFillRect(points, fillColor) {
       var ctx2d = this.ctx2d;
       ctx2d.save();
       ctx2d.beginPath();
       this.drawPathByPoints(points);
       ctx2d.closePath();
       ctx2d.fillStyle = fillColor;
       ctx2d.fill();
       ctx2d.restore();
     }
   }, {
     key: "drawBorderRect",
     value: function drawBorderRect(points, borderWidth, borderColor) {
       var ctx2d = this.ctx2d;
       var borderPoints = this.getBorderPoints(points, borderWidth);
       ctx2d.save();
       ctx2d.beginPath();
       this.drawPathByPoints(borderPoints);
       ctx2d.closePath();
       ctx2d.lineWidth = borderWidth;
       ctx2d.strokeStyle = borderColor;
       ctx2d.stroke();
       ctx2d.restore();
     }
   }, {
     key: "getBorderPoints",
     value: function getBorderPoints(points, borderWidth) {
       var _points = _slicedToArray(points, 4),
         topLeft = _points[0],
         topRight = _points[1],
         bottomRight = _points[2],
         bottomLeft = _points[3];
       return [[topLeft[0] + borderWidth / 2, topLeft[1] + borderWidth / 2], [topRight[0] - borderWidth / 2, topRight[1] + borderWidth / 2], [bottomRight[0] - borderWidth / 2, bottomRight[1] - borderWidth / 2], [bottomLeft[0] + borderWidth / 2, bottomLeft[1] - borderWidth / 2]];
     }
   }]);
 }();
 var isElementOutOfViewport = function isElementOutOfViewport(element) {
   try {
     var rect = element.getBoundingClientRect();
     var windowHeight = window.innerHeight || document.documentElement.clientHeight;
     var windowWidth = window.innerWidth || document.documentElement.clientWidth;
     var outOfViewport = rect.bottom < 0 || rect.right < 0 || rect.left >= windowWidth || rect.top >= windowHeight;
     return outOfViewport;
   } catch (e) {}
 };
 var html2canvas = function html2canvas(element) {
   var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
   return renderElement(element, options);
 };
 exports.html2canvas = html2canvas;
 var renderElement = function renderElement(element, opts) {
   if (!element || _typeof(element) !== 'object') {
     return 'Invalid element provided as first argument';
   }
   var renderOptions = {
     fillColor: opts.fillColor,
     ignoreElements: opts.ignoreElements
   };
   var renderer = new CanvasRenderer(renderOptions);
   var canvas = renderer.render(element);
   return canvas;
 };
 var parseTree = function parseTree(element, options) {
   var container = createContainer(element);
   var ignoreElements = (0, utils_1.getElementsBySelectors)(options.ignoreElements);
   _parseNodeTree(element, container, ignoreElements);
   return container;
 };
 var _parseNodeTree = function parseNodeTree(element, parent, ignoreElements) {
   Array.from(element.childNodes).map(function (child) {
     if (ignoreElements.includes(child)) {
       return;
     }
     if (isTextNode(child)) {
       if (child.textContent.trim().length > 0) {
         var textElContainer = new TextContainer(child.textContent, parent);
         parent.textNodes.push(textElContainer);
       }
     } else if (isCommentNode(child) || isElementOutOfViewport(child)) {
       return;
     } else {
       var container = createContainer(child);
       var styles = container.styles;
       var position = styles.position,
         transform = styles.transform;
       var zIndex = Number(styles.zIndex);
       var opacity = Number(styles.opacity);
       if (position !== 'static' && !isNaN(zIndex) || opacity < 1 || transform !== 'none') {
         container.stackingFlag = true;
       }
       parent.elements.push(container);
       if (child.shadowRoot) {
         _parseNodeTree(child.shadowRoot, container, ignoreElements);
       } else if (child.tagName !== 'TEXTAREA' && child.tagName !== 'svg' && child.tagName !== 'SELECT') {
         _parseNodeTree(child, container, ignoreElements);
       }
     }
   });
 };
 var createContainer = function createContainer(element) {
   if (isImageElement(element)) {
     return new ImageElementContainer(element);
   } else if (isCanvasElement(element)) {
     return new CanvasElementContainer(element);
   } else if (isVideoElement(element)) {
     return new VideoElementContainer(element);
   } else if (isSVGElement(element)) {
     return new SVGElementContainer(element);
   } else if (isSelectElement(element)) {
     return new SelectElementContainer(element);
   } else if (isInputElement(element)) {
     return new InputElementContainer(element);
   } else if (isIframeElement(element)) {
     return new IFrameElementContainer(element);
   } else {
     return new ElementContainer(element);
   }
 };
 var parseStackingContext = function parseStackingContext(container) {
   var root = new StackingContext(container);
   _parseStackTree(container, root);
   return root;
 };
 var _parseStackTree = function parseStackTree(parent, stackingContext) {
   parent.elements.map(function (child) {
     if (child.stackingFlag) {
       var stack = new StackingContext(child);
       var position = child.styles.position;
       var zIndex = Number(child.styles.zIndex);
       if (position !== 'static' && zIndex > 0) {
         stackingContext.positiveZIndex.push(stack);
       } else if (position !== 'static' && zIndex < 0) {
         stackingContext.negativeZIndex.push(stack);
       } else {
         stackingContext.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
       }
       _parseStackTree(child, stack);
     } else {
       if (child.styles.display.indexOf('inline') >= 0) {
         stackingContext.inlineLevel.push(child);
       } else {
         stackingContext.nonInlineLevel.push(child);
       }
       _parseStackTree(child, stackingContext);
     }
   });
 };
 var isTextNode = function isTextNode(node) {
   return node.nodeType === 3;
 };
 var isCommentNode = function isCommentNode(node) {
   return node.nodeType === 8;
 };
 var isImageElement = function isImageElement(node) {
   return node.tagName === 'IMG';
 };
 var isVideoElement = function isVideoElement(node) {
   return node.tagName === 'VIDEO';
 };
 var isCanvasElement = function isCanvasElement(node) {
   return node.tagName === 'CANVAS';
 };
 var isSVGElement = function isSVGElement(node) {
   return node.tagName === 'svg';
 };
 var isSelectElement = function isSelectElement(node) {
   return node.tagName === 'SELECT';
 };
 var isInputElement = function isInputElement(node) {
   return node.tagName === 'INPUT';
 };
 var isIframeElement = function isIframeElement(node) {
   return node.tagName === 'IFRAME';
 };

 /***/ }),
 /* 50 */
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
 exports.performSampleCheck = void 0;
 var utils_1 = __webpack_require__(18);
 var performSampleCheck = function performSampleCheck(element) {
   var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
   var _options$checkPoints = options.checkPoints,
     checkPoints = _options$checkPoints === void 0 ? 10 : _options$checkPoints,
     _options$sampleMethod = options.sampleMethod,
     sampleMethod = _options$sampleMethod === void 0 ? 2 : _options$sampleMethod,
     _options$threshold = options.threshold,
     threshold = _options$threshold === void 0 ? 0.8 : _options$threshold,
     _options$whiteBoxElem = options.whiteBoxElements,
     whiteBoxElements = _options$whiteBoxElem === void 0 ? [] : _options$whiteBoxElem,
     _options$debug = options.debug,
     debug = _options$debug === void 0 ? false : _options$debug;
   var whiteElements = [].concat(_toConsumableArray((0, utils_1.getElementsBySelectors)(whiteBoxElements, element)), [element]);
   var sampleCheckPoints = getSampleCheckPoints(element, checkPoints, sampleMethod);
   var totalCheckPoints = sampleCheckPoints.length;
   var whitePixels = 0;
   sampleCheckPoints.forEach(function (point) {
     var _document;
     whiteElements.includes((_document = document).elementFromPoint.apply(_document, _toConsumableArray(point))) && whitePixels++;
   });
   var rate = whitePixels / totalCheckPoints;
   var detectionResult = {
     result: rate < threshold,
     rate: rate,
     whitePixels: whitePixels,
     checkPoints: totalCheckPoints,
     threshold: threshold
   };
   debug && console.log(detectionResult, whiteElements, sampleCheckPoints);
   return detectionResult;
 };
 exports.performSampleCheck = performSampleCheck;
 var getSampleCheckPoints = function getSampleCheckPoints(element, checkPoints, sampleMethod) {
   var _ref = (0, utils_1.getTrueArea)(element),
     top = _ref.top,
     left = _ref.left,
     width = _ref.width,
     height = _ref.height;
   var centerX = left + width / 2;
   var centerY = top + height / 2;
   var dx = width / 2 / (checkPoints + 1);
   var dy = height / 2 / (checkPoints + 1);
   var sampleCheckPoints = [[centerX, centerY]];
   if ([1, 3].includes(sampleMethod)) {
     for (var i = 1; i <= checkPoints; i++) {
       sampleCheckPoints.push([centerX + i * dx, centerY]);
       sampleCheckPoints.push([centerX, centerY + i * dy]);
       sampleCheckPoints.push([centerX - i * dx, centerY]);
       sampleCheckPoints.push([centerX, centerY - i * dy]);
     }
   }
   if ([2, 3].includes(sampleMethod)) {
     for (var _i = 1; _i <= checkPoints; _i++) {
       sampleCheckPoints.push([centerX + _i * dx, centerY + _i * dy]);
       sampleCheckPoints.push([centerX + _i * dx, centerY - _i * dy]);
       sampleCheckPoints.push([centerX - _i * dx, centerY - _i * dy]);
       sampleCheckPoints.push([centerX - _i * dx, centerY + _i * dy]);
     }
   }
   return sampleCheckPoints;
 };

 /***/ }),
 /* 51 */
 /***/ (function(module, __webpack_exports__, __webpack_require__) {

 "use strict";
 __webpack_require__.r(__webpack_exports__);
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLSThresholds", function() { return b; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FCPThresholds", function() { return L; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIDThresholds", function() { return D; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPThresholds", function() { return j; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LCPThresholds", function() { return U; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TTFBThresholds", function() { return X; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCLS", function() { return S; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFCP", function() { return w; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFID", function() { return x; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getINP", function() { return Q; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLCP", function() { return W; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTTFB", function() { return Z; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onCLS", function() { return S; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFCP", function() { return w; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onFID", function() { return x; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onINP", function() { return Q; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLCP", function() { return W; });
 /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onTTFB", function() { return Z; });
 var e,n,t,i,r,a=-1,o=function(e){addEventListener("pageshow",(function(n){n.persisted&&(a=n.timeStamp,e(n))}),!0)},c=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},u=function(){var e=c();return e&&e.activationStart||0},f=function(e,n){var t=c(),i="navigate";a>=0?i="back-forward-cache":t&&(document.prerendering||u()>0?i="prerender":document.wasDiscarded?i="restore":t.type&&(i=t.type.replace(/_/g,"-")));return{name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},s=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var i=new PerformanceObserver((function(e){Promise.resolve().then((function(){n(e.getEntries())}))}));return i.observe(Object.assign({type:e,buffered:!0},t||{})),i}}catch(e){}},d=function(e,n,t,i){var r,a;return function(o){n.value>=0&&(o||i)&&((a=n.value-(r||0))||void 0===r)&&(r=n.value,n.delta=a,n.rating=function(e,n){return e>n[1]?"poor":e>n[0]?"needs-improvement":"good"}(n.value,t),e(n))}},l=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},p=function(e){var n=function(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||e(n)};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},v=function(e){var n=!1;return function(t){n||(e(t),n=!0)}},m=-1,h=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},g=function(e){"hidden"===document.visibilityState&&m>-1&&(m="visibilitychange"===e.type?e.timeStamp:0,T())},y=function(){addEventListener("visibilitychange",g,!0),addEventListener("prerenderingchange",g,!0)},T=function(){removeEventListener("visibilitychange",g,!0),removeEventListener("prerenderingchange",g,!0)},E=function(){return m<0&&(m=h(),y(),o((function(){setTimeout((function(){m=h(),y()}),0)}))),{get firstHiddenTime(){return m}}},C=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},L=[1800,3e3],w=function(e,n){n=n||{},C((function(){var t,i=E(),r=f("FCP"),a=s("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(a.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=Math.max(e.startTime-u(),0),r.entries.push(e),t(!0)))}))}));a&&(t=d(e,r,L,n.reportAllChanges),o((function(i){r=f("FCP"),t=d(e,r,L,n.reportAllChanges),l((function(){r.value=performance.now()-i.timeStamp,t(!0)}))})))}))},b=[.1,.25],S=function(e,n){n=n||{},w(v((function(){var t,i=f("CLS",0),r=0,a=[],c=function(e){e.forEach((function(e){if(!e.hadRecentInput){var n=a[0],t=a[a.length-1];r&&e.startTime-t.startTime<1e3&&e.startTime-n.startTime<5e3?(r+=e.value,a.push(e)):(r=e.value,a=[e])}})),r>i.value&&(i.value=r,i.entries=a,t())},u=s("layout-shift",c);u&&(t=d(e,i,b,n.reportAllChanges),p((function(){c(u.takeRecords()),t(!0)})),o((function(){r=0,i=f("CLS",0),t=d(e,i,b,n.reportAllChanges),l((function(){return t()}))})),setTimeout(t,0))})))},A={passive:!0,capture:!0},I=new Date,P=function(i,r){e||(e=r,n=i,t=new Date,k(removeEventListener),F())},F=function(){if(n>=0&&n<t-I){var r={entryType:"first-input",name:e.type,target:e.target,cancelable:e.cancelable,startTime:e.timeStamp,processingStart:e.timeStamp+n};i.forEach((function(e){e(r)})),i=[]}},M=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){P(e,n),r()},i=function(){r()},r=function(){removeEventListener("pointerup",t,A),removeEventListener("pointercancel",i,A)};addEventListener("pointerup",t,A),addEventListener("pointercancel",i,A)}(n,e):P(n,e)}},k=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,M,A)}))},D=[100,300],x=function(t,r){r=r||{},C((function(){var a,c=E(),u=f("FID"),l=function(e){e.startTime<c.firstHiddenTime&&(u.value=e.processingStart-e.startTime,u.entries.push(e),a(!0))},m=function(e){e.forEach(l)},h=s("first-input",m);a=d(t,u,D,r.reportAllChanges),h&&p(v((function(){m(h.takeRecords()),h.disconnect()}))),h&&o((function(){var o;u=f("FID"),a=d(t,u,D,r.reportAllChanges),i=[],n=-1,e=null,k(addEventListener),o=l,i.push(o),F()}))}))},B=0,R=1/0,H=0,N=function(e){e.forEach((function(e){e.interactionId&&(R=Math.min(R,e.interactionId),H=Math.max(H,e.interactionId),B=H?(H-R)/7+1:0)}))},O=function(){return r?B:performance.interactionCount||0},q=function(){"interactionCount"in performance||r||(r=s("event",N,{type:"event",buffered:!0,durationThreshold:0}))},j=[200,500],_=0,z=function(){return O()-_},G=[],J={},K=function(e){var n=G[G.length-1],t=J[e.interactionId];if(t||G.length<10||e.duration>n.latency){if(t)t.entries.push(e),t.latency=Math.max(t.latency,e.duration);else{var i={id:e.interactionId,latency:e.duration,entries:[e]};J[i.id]=i,G.push(i)}G.sort((function(e,n){return n.latency-e.latency})),G.splice(10).forEach((function(e){delete J[e.id]}))}},Q=function(e,n){n=n||{},C((function(){var t;q();var i,r=f("INP"),a=function(e){e.forEach((function(e){(e.interactionId&&K(e),"first-input"===e.entryType)&&(!G.some((function(n){return n.entries.some((function(n){return e.duration===n.duration&&e.startTime===n.startTime}))}))&&K(e))}));var n,t=(n=Math.min(G.length-1,Math.floor(z()/50)),G[n]);t&&t.latency!==r.value&&(r.value=t.latency,r.entries=t.entries,i())},c=s("event",a,{durationThreshold:null!==(t=n.durationThreshold)&&void 0!==t?t:40});i=d(e,r,j,n.reportAllChanges),c&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&c.observe({type:"first-input",buffered:!0}),p((function(){a(c.takeRecords()),r.value<0&&z()>0&&(r.value=0,r.entries=[]),i(!0)})),o((function(){G=[],_=O(),r=f("INP"),i=d(e,r,j,n.reportAllChanges)})))}))},U=[2500,4e3],V={},W=function(e,n){n=n||{},C((function(){var t,i=E(),r=f("LCP"),a=function(e){var n=e[e.length-1];n&&n.startTime<i.firstHiddenTime&&(r.value=Math.max(n.startTime-u(),0),r.entries=[n],t())},c=s("largest-contentful-paint",a);if(c){t=d(e,r,U,n.reportAllChanges);var m=v((function(){V[r.id]||(a(c.takeRecords()),c.disconnect(),V[r.id]=!0,t(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,(function(){return setTimeout(m,0)}),!0)})),p(m),o((function(i){r=f("LCP"),t=d(e,r,U,n.reportAllChanges),l((function(){r.value=performance.now()-i.timeStamp,V[r.id]=!0,t(!0)}))}))}}))},X=[800,1800],Y=function e(n){document.prerendering?C((function(){return e(n)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(n)}),!0):setTimeout(n,0)},Z=function(e,n){n=n||{};var t=f("TTFB"),i=d(e,t,X,n.reportAllChanges);Y((function(){var r=c();if(r){var a=r.responseStart;if(a<=0||a>performance.now())return;t.value=Math.max(a-u(),0),t.entries=[r],i(!0),o((function(){t=f("TTFB",0),(i=d(e,t,X,n.reportAllChanges))(!0)}))}}))};


 /***/ }),
 /* 52 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.reviseApiAttr = exports.ApiType = void 0;
 var rum_core_1 = __webpack_require__(0);
 exports.ApiType = {
   XHR: 'xmlhttprequest',
   FETCH: 'fetch'
 };
 function reviseApiAttr(attrs) {
   if (!(0, rum_core_1.isObject)(attrs)) return;
   var obj = {};
   if ((0, rum_core_1.isString)(attrs.name)) {
     obj['name'] = attrs.name.substring(0, 1e3);
   }
   if ((0, rum_core_1.isString)(attrs.message)) {
     obj['message'] = attrs.message.substring(0, 1e3);
   }
   if ((0, rum_core_1.isNumber)(attrs.success) && attrs.success >= -1 && attrs.success <= 1) {
     obj['success'] = attrs.success;
   }
   if ((0, rum_core_1.isNumber)(attrs.duration) && attrs.duration >= 0) {
     obj['duration'] = attrs.duration;
   }
   if ((0, rum_core_1.isString)(attrs.status_code)) {
     obj['status_code'] = attrs.status_code.substring(0, 100);
   }
   if ((0, rum_core_1.isNumber)(attrs.status_code)) {
     obj['status_code'] = attrs.status_code;
   }
   if ((0, rum_core_1.isString)(attrs.snapshots)) {
     obj['snapshots'] = attrs.snapshots.substring(0, 5e3);
   }
   if ((0, rum_core_1.isString)(attrs.trace_id)) {
     obj['trace_id'] = attrs.trace_id.substring(0, 100);
   }
   var properties = (0, rum_core_1.verifyProperties)(attrs.properties);
   if (properties) {
     obj['properties'] = properties;
   }
   return obj;
 }
 exports.reviseApiAttr = reviseApiAttr;

 /***/ }),
 /* 53 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.getElementXpath = exports.getClosestTargetAncestorElement = void 0;
 var global_1 = __webpack_require__(1);
 function getClosestTargetAncestorElement(element, tagNames) {
   var ancestor = element;
   while (ancestor !== global_1.document.documentElement) {
     var _ancestor = ancestor,
       localName = _ancestor.localName,
       nodeName = _ancestor.nodeName,
       parentElement = _ancestor.parentElement;
     if (tagNames.includes((localName || nodeName).toLocaleLowerCase())) {
       return ancestor;
     }
     if (!parentElement) break;
     ancestor = parentElement;
   }
   return null;
 }
 exports.getClosestTargetAncestorElement = getClosestTargetAncestorElement;
 function getElementXpath(element) {
   var ignoreId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
   var nodeElem = element;
   if (nodeElem && nodeElem.id && !ignoreId) {
     return '//*[@id="' + nodeElem.id + '"]';
   }
   var parts = [];
   while (nodeElem && Node.ELEMENT_NODE === nodeElem.nodeType) {
     var nbOfPreviousSiblings = 0;
     var hasNextSiblings = false;
     var sibling = nodeElem.previousSibling;
     while (sibling) {
       if (sibling.nodeType !== Node.DOCUMENT_TYPE_NODE && sibling.nodeName === nodeElem.nodeName) {
         nbOfPreviousSiblings++;
       }
       sibling = sibling.previousSibling;
     }
     sibling = nodeElem.nextSibling;
     while (sibling) {
       if (sibling.nodeName === nodeElem.nodeName) {
         hasNextSiblings = true;
         break;
       }
       sibling = sibling.nextSibling;
     }
     var prefix = nodeElem.prefix ? nodeElem.prefix + ":" : "";
     var nth = nbOfPreviousSiblings || hasNextSiblings ? "[" + (nbOfPreviousSiblings + 1) + "]" : "";
     parts.push(prefix + nodeElem.localName + nth);
     nodeElem = nodeElem.parentNode;
   }
   return parts.length ? "/" + parts.reverse().join("/") : "";
 }
 exports.getElementXpath = getElementXpath;

 /***/ }),
 /* 54 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.getCookie = exports.setCookie = void 0;
 var global_1 = __webpack_require__(1);
 function setCookie(name, value, overtime, domain) {
   var expires = "";
   if (overtime) {
     var date = new Date();
     date.setTime(date.getTime() + overtime);
     expires = "; expires=" + date.toUTCString();
   }
   if (!domain) {
     domain = global_1.document.domain;
   }
   global_1.document.cookie = name + "=" + (value || "") + expires + "; path=/; domain=".concat(domain);
 }
 exports.setCookie = setCookie;
 function getCookie(name) {
   var value = "; ".concat(global_1.document.cookie);
   var parts = value.split("; ".concat(name, "="));
   if (parts.length === 2) {
     return decodeURIComponent(parts.pop().split(';').shift());
   }
   return null;
 }
 exports.getCookie = getCookie;

 /***/ }),
 /* 55 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 exports.getConfigFromLocal = exports.storeConfigToLocal = void 0;
 var rum_core_1 = __webpack_require__(0);
 var global_1 = __webpack_require__(1);
 var LOCAL_STORE_CONFIG_KEY = 'arms_rum2_local_config';
 function storeConfigToLocal(config, pid) {
   if (!global_1.global.localStorage || !config || !(0, rum_core_1.isObject)(config)) return false;
   var storeObj = {
     timestamp: new Date().getTime(),
     pid: pid,
     content: config
   };
   try {
     var storeContent = JSON.stringify(storeObj);
     global_1.global.localStorage.setItem(LOCAL_STORE_CONFIG_KEY, storeContent);
     return true;
   } catch (e) {
     return false;
   }
 }
 exports.storeConfigToLocal = storeConfigToLocal;
 function getConfigFromLocal() {
   var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
   var pid = arguments.length > 1 ? arguments[1] : undefined;
   if (!global_1.global.localStorage) return false;
   var storeContent = global_1.global.localStorage.getItem(LOCAL_STORE_CONFIG_KEY);
   if (!storeContent) return null;
   try {
     var storeObj = JSON.parse(storeContent);
     if (pid && storeObj.pid && storeObj.pid !== pid) {
       return null;
     }
     return storeObj.content;
   } catch (e) {
     return null;
   }
 }
 exports.getConfigFromLocal = getConfigFromLocal;

 /***/ }),
 /* 56 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
 Object.defineProperty(exports, "__esModule", {
   value: true
 });
 function formatParams() {
   var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
   var arr = [];
   for (var name in data) {
     arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
   }
   return arr.join('&');
 }
 function ajax(options) {
   options = options || {};
   options.type = (options.type || 'GET').toUpperCase();
   options.dataType = options.dataType || 'json';
   var params = formatParams(options.data);
   var xhr;
   if (window.XMLHttpRequest) {
     xhr = new XMLHttpRequest();
   } else {
     xhr = ActiveXObject('Microsoft.XMLHTTP');
   }
   if (!options.headers) {
     options.headers = {};
   }
   if (!options.headers['Content-Type']) {
     options.headers['Content-Type'] = "application/x-www-form-urlencoded";
   }
   xhr.onreadystatechange = function () {
     if (xhr.readyState == 4) {
       var status = xhr.status;
       if (status >= 200 && status < 300) {
         options.success && options.success(xhr.responseText, xhr.responseXML);
       } else {
         options.error && options.error(status);
       }
     }
   };
   if (options.type == 'GET') {
     var url = options.url;
     var joinChar = '?';
     if (url.indexOf('?') != -1) {
       joinChar = '&';
     }
     if (params) {
       url = options.url + joinChar + params;
     }
     xhr.open('GET', url, true);
     for (var hkey in options.headers) {
       xhr.setRequestHeader(hkey, options.headers[hkey]);
     }
     xhr.send(null);
   } else if (options.type == 'POST') {
     xhr.open('POST', options.url, true);
     for (var hkey in options.headers) {
       xhr.setRequestHeader(hkey, options.headers[hkey]);
     }
     if (options.headers && options.headers['Content-Type'] == 'application/json') {
       xhr.send(JSON.stringify(options.data));
     } else {
       xhr.send(params);
     }
   }
 }
 function request(url) {
   var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
   if (_typeof(url) === 'object') {
     params = url;
     url = params.url;
   }
   var promise = new Promise(function (resolve, reject) {
     ajax({
       url: url,
       type: params.method || 'GET',
       dataType: params.dataType || 'json',
       data: params.data,
       headers: params.headers,
       success: function success(response, xml) {
         if (response) {
           try {
             response = JSON.parse(response);
           } catch (e) {
             console.log(e);
           }
         }
         resolve(response);
       },
       error: function error(status) {
         resolve({
           "errorStatus": status || '400'
         });
       }
     });
   });
   return promise;
 }
 exports["default"] = request;

 /***/ }),
 /* 57 */
 /***/ (function(module, exports, __webpack_require__) {

 "use strict";


 Object.defineProperty(exports, "__esModule", {
   value: true
 });

 /***/ }),
 /* 58 */
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
 var global_1 = __webpack_require__(29);
 var WebviewReporter = /*#__PURE__*/function (_rum_core_1$Reporter) {
   function WebviewReporter() {
     var _this;
     _classCallCheck(this, WebviewReporter);
     _this = _callSuper(this, WebviewReporter, arguments);
     _this.name = 'webview-reporter';
     return _this;
   }
   _inherits(WebviewReporter, _rum_core_1$Reporter);
   return _createClass(WebviewReporter, [{
     key: "init",
     value: function init(ctx) {
       var _this2 = this;
       global_1.document.addEventListener('visibilitychange', function () {
         if (global_1.document.visibilityState === 'hidden') {
           _this2.flushEventQueue();
         }
       });
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

 /***/ })
 /******/ ]);
 });
