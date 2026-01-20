//
// Copyright 2023 aliyun-sls Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import AlibabaCloudRUMSDK

@objc
public class AlibabaCloudRUM : NSObject {
    private static let RUM_SDK_VERSION = "2.1.0"
    
    private static var env: String?
    private static var endpoint: String?
    private static var workspace: String?
    
    private static let shared: AlibabaCloudRUM = AlibabaCloudRUM()
    
    private static func envToString(_ env: Env) -> String {
        switch env {
        case .NONE: return "none"
        case .PROD: return "prod"
        case .GRAY: return "gray"
        case .PRE: return "pre"
        case .DAILY: return "daily"
        case .LOCAL: return "local"
        default: return "prod"
        }
    }
    
    /// 禁止swizzle类中的某个方法
    ///
    /// 可以传递普通类和元类。禁止传入动态注册的类
    ///
    /// @note 需在探针启动前调用。**请谨慎使用**
    @objc
    public static func disableSwizzleMethod(_ selector: Selector, clazz: AnyClass) {
        // not support now
    }
    
    /// 禁止检查某个类
    /// @note 需在探针启动前调用。**请谨慎使用**
    @objc(disableInspectClass:)
    public static func disableInspectClass(_ className: String) {
        // not support now
    }
    
    /// 开启/关闭电量模块。
    /// 默认为关闭，需要在start方法调用之前设置
    /// - Parameters:
    ///   - enable:  是否开启
    @objc(enableBattery:)
    public static func enableBattery(_ enable: Bool) {
        
    }
    
    /// 开启/关闭 webview 模块。
    /// 默认为开启，在需要时调用即可
    /// - Parameters:
    ///   - enable: 是否开启
    @objc(enableTrackingWebView:)
    public static func enableTrackingWebView(_ enable: Bool) {
        // not support now
    }
    
    /// 启动SDK
    /// - Parameters:
    ///     - appID: 应用ID, 必填
    @objc(start:)
    public static func start(_ serviceId: String) {
        AlibabaCloudRUMSDK.start(endpoint ?? "", workspace: workspace ?? "", serviceId: serviceId)
    }
    
    /// 配置 endpoint 地址
    /// - Parameters:
    ///  - endpoint: endpoint 地址
    @objc
    public static func setEndpoint(_ endpoint: String) {
        self.endpoint = endpoint
    }
    
    /// 配置config地址
    /// - Parameters:
    ///  - configAddress: config 地址
    @available(*, deprecated, renamed: "setEndpoint(_:)", message: "This method has been renamed. Please use setEndpoint(_:) instead.")
    @objc
    public static func setConfigAddress(_ configAddress: String) {
        self.setEndpoint(configAddress)
    }
    
    /// 配置 workspace
    /// - Note: 必填，需要在`start(_:)`方法之前调用。
    /// - Parameters:
    ///  - workspace: workspace 工作空间
    @objc
    public static func setWorkspace(_ workspace: String) {
        self.workspace = workspace
    }
    
    @objc
    public static func setEnvironment(_ env: Env) {
        self.env = envToString(env)
        AlibabaCloudRUMSDK.setEnvironment(self.env!)
    }
    
    @objc
    public static func setCustomEnvironment(_ env: String?) {
        guard let env = env else {
            return
        }
        self.env = env
        
        AlibabaCloudRUMSDK.setEnvironment(env)
    }
    
    @objc
    public static func setAppVersion(_ appVersion: String) {
        AlibabaCloudRUMSDK.setAppVersion(appVersion)
    }
    
    @objc
    public static func setChannelID(_ channelID: String) {
        AlibabaCloudRUMSDK.setChannel(channelID)
    }
    
    @objc
    public static func setDeviceID(_ deviceID: String) {
        AlibabaCloudRUMSDK.setDeviceId(deviceID)
    }
    
    @objc
    public static var deviceID : String {
        get {
            return AlibabaCloudRUMSDK.deviceId()
        }
    }
    
    @objc
    public static func setUserName(_ userID: String) {
        AlibabaCloudRUMSDK.setUserName(userID)
    }
    
    @objc(setExtraInfo:)
    public static func setExtraInfo(_ extraInfo: [String: AnyObject]) {
        AlibabaCloudRUMSDK.setExtraInfo(extraInfo)
    }
    
    @objc(addExtraInfo:)
    public static func addExtraInfo(_ extraInfo: [String: AnyObject]) {
        AlibabaCloudRUMSDK.addExtraInfo(extraInfo)
    }
    
    @objc(setUserExtraInfo:)
    public static func setUserExtraInfo(_ extraInfo: [String: AnyObject]) {
        AlibabaCloudRUMSDK.setUserExtraInfo(extraInfo)
    }
    
    @objc(addUserExtraInfo:)
    public static func addUserExtraInfo(_ extraInfo: [String: AnyObject]) {
        AlibabaCloudRUMSDK.addUserExtraInfo(extraInfo)
    }
    
    @objc(setAppFramework:)
    public static func setAppFramework(_ framework: Framework) {
        // not support now
    }
    
    @available(*, deprecated, renamed: "setDebuggable(_:)", message: "This method has been renamed. Please use setDebuggable(_:) instead.")
    @objc
    public static func setLogFlag(_ flag: NSNumber) {
        AlibabaCloudRUMSDK.setDebuggable(0xffff == flag)
    }
    
    /// 开启/关闭SDK调试模式
    /// - Parameters:
    ///  - debuggable: 开启或关闭debug模式。
    @objc
    public static func setDebuggable(_ debuggable: Bool) {
        AlibabaCloudRUMSDK.setDebuggable(debuggable)
    }
    
    @objc
    public static func stopSDK() {
        AlibabaCloudRUMSDK.stop()
    }
    
    // MARK: ===== exception =====
    @objc(setCustomException:causeBy:errorDump:)
    public static func setCustomException(_ exceptionType: String, causeBy: String, errorDump: String) {
        AlibabaCloudRUMSDK.reportCustomException(exceptionType, causeBy: causeBy, errorDump: errorDump)
    }
    
    // MARK: ===== metric =====
    @objc(setCustomMetric:value:param:)
    public static func setCustomMetric(_ metricName: String, value: Int, snapshots: String?) {
        AlibabaCloudRUMSDK.setCustomMetric(metricName, value: Int32(value), snapshots: snapshots)
    }
    
    // MARK: ===== event =====
    @objc(setCustomEvent:)
    public static func setCustomEvent(_ name: String) {
        self.setCustomEvent(name, group: nil)
    }
    
    @objc(setCustomEvent:group:)
    public static func setCustomEvent(_ name: String, group: String? = nil) {
        self.setCustomEvent(name, group: group, snapshots: nil)
    }
    
    @objc(setCustomEvent:group:snapshots:)
    public static func setCustomEvent(_ name: String, group: String? = nil, snapshots: String? = nil) {
        self.setCustomEvent(name, group: group, snapshots: snapshots, value: 0)
    }
    
    @objc(setCustomEvent:group:value:)
    public static func setCustomEvent(_ name: String, group: String? = nil, value: Double = 0) {
        self.setCustomEvent(name, group: group, snapshots: nil, value: value)
    }
    
    @objc(setCustomEvent:group:info:)
    public static func setCustomEvent(_ name: String, group: String? = nil, info: [String: String]? = nil) {
        self.setCustomEvent(name, group: group, snapshots: nil, info: info)
    }
    
    @objc(setCustomEvent:group:snapshots:value:)
    public static func setCustomEvent(_ name: String, group: String? = nil, snapshots: String? = nil, value: Double = 0) {
        self.setCustomEvent(name, group: group, snapshots: snapshots, value: value, info: nil)
    }
    
    @objc(setCustomEvent:group:snapshots:info:)
    public static func setCustomEvent(_ name: String, group: String? = nil, snapshots: String? = nil, info: [String: String]? = nil) {
        self.setCustomEvent(name, group: group, snapshots: snapshots, value: 0, info: info)
    }
    
    @objc(setCustomEvent:group:value:info:)
    public static func setCustomEvent(_ name: String, group: String? = nil, value: Double = 0, info: [String: String]? = nil) {
        self.setCustomEvent(name, group: group, snapshots: nil, value: value, info: info)
    }
    
    @objc(setCustomEvent:group:snapshots:value:info:)
    public static func setCustomEvent(_ name: String, group: String? = nil, snapshots: String? = nil, value: Double = 0, info: [String: String]? = nil) {
        AlibabaCloudRUMSDK.setCustomEvent(name, type: group ?? "", group: group ?? "", snapshots: snapshots, value: value, info: info)
    }
    
    // MARK: ===== log =====
    @objc(setCustomLog:)
    public static func setCustomLog(_ logInfo: String) {
        setCustomLog(logInfo, name: nil)
    }
    
    @objc(setCustomLog:name:)
    public static func setCustomLog(_ logInfo: String, name: String? = nil) {
        setCustomLog(logInfo, name: name, snapshots: "")
    }
    
    @objc(setCustomLog:name:snapshots:)
    public static func setCustomLog(_ logInfo: String, name: String? = nil, snapshots: String? = "") {
        setCustomLog(logInfo, name: name, snapshots: snapshots, info: nil)
    }
    
    @objc(setCustomLog:name:snapshots:level:info:)
    public static func setCustomLog(_ logInfo: String, name: String? = nil, snapshots: String? = "", level: String? = "INFO", info: [String: String]? = nil) {
        AlibabaCloudRUMSDK.setCustomLog(logInfo, name: name, type: name, snapshots: snapshots, level: level, info: info)
    }
    
    @objc(setCustomResource:success:url:method:statusCode:errorMessage:)
    public static func setCustomResource(_ type: String, success: Bool, url: String, method: String, statusCode: Int, errorMessage: String?) -> Bool {
        return self.setCustomResource(type,
                                      success: success,
                                      url: url,
                                      method: method,
                                      statusCode: statusCode,
                                      errorMessage: errorMessage,
                                      provider: nil,
                                      tracing: nil,
                                      measure: nil
        )
    }
    
    @objc(setCustomResource:success:url:method:statusCode:errorMessage:provider:tracing:measure:)
    public static func setCustomResource(_ type: String, success: Bool, url: String, method: String, statusCode: Int, errorMessage: String?, provider: String?, tracing: AlibabaCloudTracingContext?, measure: AlibabaCloudResourceMeasure?) -> Bool {
        return AlibabaCloudRUMSDK.reportCustomResource(type,
                                                       success: success,
                                                       url: url,
                                                       method: method,
                                                       statusCode: statusCode,
                                                       errorMessage: errorMessage,
                                                       provider: provider,
                                                       tracing: tracing?.context,
                                                       measuring: measure?.measuring
        )
    }
    
    @objc(getDeviceId)
    public static func getDeviceId() -> String {
        return AlibabaCloudRUMSDK.deviceId()
    }
    
    private static func frameworkDescription(_ framework: Framework) -> String {
        switch framework {
        case .FLUTTER:
            return "Flutter"
        case .REACT_NATIVE:
            return "ReactNative"
        case .UNITY:
            return "Unity"
        default:
            return ""
        }
    }
}

@objc(AlibabaCloudEnv)
public enum Env: Int {
    case NONE
    case PROD
    case GRAY
    case PRE
    case DAILY
    case LOCAL
}

@objc(AlibabaCloudFramework)
public enum Framework: Int {
    case FLUTTER
    case REACT_NATIVE
    case UNITY
}

@objc(AlibabaCloudTracingProtocol)
public enum AlibabaCloudTracingProtocol: Int {
    case W3C
    case SkywalkingV3
}

@objc
public class AlibabaCloudTracingContext : NSObject {
    fileprivate let context: AlibabaCloudTraceContext
    
    @objc
    public init(traceId: String, spanId: String, tracingProtocol: AlibabaCloudTracingProtocol) {
        let newTracingProtocol = tracingProtocol == AlibabaCloudTracingProtocol.W3C ? AlibabaCloudTraceProtocol.W3C : AlibabaCloudTraceProtocol.skywalkingV3
        self.context = AlibabaCloudTraceContext(traceId: traceId,
                                                spanId: spanId,
                                                protocol: newTracingProtocol)
    }
    
    @objc
    public init(traceId: String, spanId: String, parentSpanId: String, sampled: Bool, tracingProtocol: AlibabaCloudTracingProtocol) {
        let newTracingProtocol = tracingProtocol == AlibabaCloudTracingProtocol.W3C ? AlibabaCloudTraceProtocol.W3C : AlibabaCloudTraceProtocol.skywalkingV3
        self.context = AlibabaCloudTraceContext(traceId: traceId,
                                                spanId: spanId,
                                                parentSpanId: parentSpanId,
                                                sampled: sampled,
                                                protocol: newTracingProtocol)
    }
    
    @objc
    public static func context(traceId: String, spanId: String, tracingProtocol: AlibabaCloudTracingProtocol) -> AlibabaCloudTracingContext {
        return AlibabaCloudTracingContext(traceId: traceId, spanId: spanId, tracingProtocol: tracingProtocol);
    }
    
    @objc
    public static func context(traceId: String, spanId: String, parentSpanId: String, sampled: Bool, tracingProtocol: AlibabaCloudTracingProtocol) -> AlibabaCloudTracingContext {
        return AlibabaCloudTracingContext(traceId: traceId, spanId: spanId, parentSpanId: parentSpanId, sampled: sampled, tracingProtocol: tracingProtocol)
    }
}

@objc
public class AlibabaCloudTracingGenerator : NSObject {
    @objc
    public static func generateTraceId(_ tracingProtocol: AlibabaCloudTracingProtocol) -> String {
        let newTracingProtocol = tracingProtocol == AlibabaCloudTracingProtocol.W3C ? AlibabaCloudTraceProtocol.W3C : AlibabaCloudTraceProtocol.skywalkingV3
        return AlibabaCloudTraceGenerator.generateTraceId(newTracingProtocol)
    }
    
    @objc
    public static func generateSpanId(_ tracingProtocol: AlibabaCloudTracingProtocol) -> String {
        let newTracingProtocol = tracingProtocol == AlibabaCloudTracingProtocol.W3C ? AlibabaCloudTraceProtocol.W3C : AlibabaCloudTraceProtocol.skywalkingV3
        return AlibabaCloudTraceGenerator.generateSpanId(newTracingProtocol)
    }
}

@objc
public class AlibabaCloudTracingHeaderWriter : NSObject {
    public static func generateHeaders(_ tracingContext: AlibabaCloudTracingContext) -> [String : String] {
        return AlibabaCloudTraceHeaderWriter.generateHeaders(with: tracingContext.context)
    }
    
    public static func generateSingleHeader(_ tracingContext: AlibabaCloudTracingContext) -> String? {
        return AlibabaCloudTraceHeaderWriter.generateSingleHeader(with: tracingContext.context)
    }
    
    @objc
    public static func setTraceHeader(_ request: NSMutableURLRequest, context: AlibabaCloudTracingContext) {
        AlibabaCloudTraceHeaderWriter.setTraceHeaderFor(request, context: context.context)
    }
    
    @objc
    public static func isRequestContainsTraceHeader(_ request: URLRequest) -> Bool {
        return AlibabaCloudTraceHeaderWriter.isRequestContainsTraceHeader(request)
    }
}

@objc
public class AlibabaCloudResourceMeasure: NSObject {
    fileprivate let measuring: AlibabaCloudResourceMeasuring
    
    @objc public var duration: UInt {
        get { measuring.duration }
        set { measuring.duration = newValue }
    }
    
    @objc public var size: UInt {
        get { measuring.size }
        set { measuring.size = newValue }
    }
    
    @objc public var connectDuration: UInt {
        get { measuring.connectDuration }
        set { measuring.connectDuration = newValue }
    }
    
    @objc public var sslDuration: UInt {
        get { measuring.sslDuration }
        set { measuring.sslDuration = newValue }
    }
    
    @objc public var dnsDuration: UInt {
        get { measuring.dnsDuration }
        set { measuring.dnsDuration = newValue }
    }
    
    @objc public var redirectDuration: UInt {
        get { measuring.redirectDuration }
        set { measuring.redirectDuration = newValue }
    }
    
    @objc public var firstByteDuration: UInt {
        get { measuring.firstByteDuration }
        set { measuring.firstByteDuration = newValue }
    }
    
    @objc public var downloadDuration: UInt {
        get { measuring.downloadDuration }
        set { measuring.downloadDuration = newValue }
    }
    
    public override init() {
        self.measuring = AlibabaCloudResourceMeasuring()
        super.init()
    }
    
    @objc
    public class func measure() -> AlibabaCloudResourceMeasure {
        return AlibabaCloudResourceMeasure()
    }
}

