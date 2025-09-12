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

@objc
public class AlibabaCloudRUM : NSObject {
    private static let RUM_SDK_VERSION = "1.0.6-beta.1"

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
    @objc(startWithAppID:)
    public static func start(_ appID: String) {
        AlibabaCloudRUMSDK.start(endpoint ?? "", workspace: workspace ?? "", appId: appID)
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
    /// - Note: 可选配置，不设置时默认传`""`。对应CMS 2.0 中的工作空间，需要在`start(_:)`方法之前调用。
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
