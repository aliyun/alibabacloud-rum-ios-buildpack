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

import OpenRUM

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
    private static let CUSTOM_ATTRIBUTES_PREFIX = "_attr_"
    private static let SDK_VERSION_PREFIX = "_sv_"
    private static let SDK_FRAMEWORK = "_frmk_"
//    private static let S_RUM_SDK_VERSION = Bundle(for: AlibabaCloudRUM.self).infoDictionary?["CFBundleShortVersionString"] as? String
    private static let RUM_SDK_VERSION = "0.3.7"
    private static var env: String?
    
    private static let shared: AlibabaCloudRUM = AlibabaCloudRUM()
    
    private override init() {
        // default disable battery monitor
        OpenRUM.updateLocalConfigWithBattery(on: false)
    }

    private static var cachedExtraInfo: [String: AnyObject] = {
        var info = [String: AnyObject]()
        info[SDK_VERSION_PREFIX] = RUM_SDK_VERSION as AnyObject
        return info
    }()
    
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
        OpenRUM.disableSwizzleMethod(selector, in: clazz)
    }

    /// 禁止检查某个类
    /// @note 需在探针启动前调用。**请谨慎使用**
    @objc(disableInspectClass:)
    public static func disableInspectClass(_ className: String) {
        OpenRUM.disableInspectClass(className)
    }
    
    /// 开启/关闭电量模块。
    /// 默认为关闭，需要在start方法调用之前设置
    /// - Parameters:
    ///   - enable:  是否开启
    @objc(enableBattery:)
    public static func enableBattery(_ enable: Bool) {
        OpenRUM.updateLocalConfigWithBattery(on: enable)
    }
    
    /// 开启/关闭 webview 模块。
    /// 默认为开启，在需要时调用即可
    /// - Parameters:
    ///   - enable: 是否开启
    @objc(enableTrackingWebView:)
    public static func enableTrackingWebView(_ enable: Bool) {
        if enable {
            OpenRUM.enableWebAgentInjection()
        } else {
            OpenRUM.disableWebAgentInjection()
        }
    }
    
    /// 启动SDK
    /// - Parameters:
    ///     - appID: 应用ID, 必填
    @objc(startWithAppID:)
    public static func start(_ appID: String) {
        if nil == self.env {
            self.setEnvironment(.PROD)
        }
        
        OpenRUM.start(withAppID: appID)
        OpenRUM.setExtraInfo(cachedExtraInfo)
    }
    
    /// 配置config地址
    /// - Parameters:
    ///     - configAddress: config 地址
    @objc
    public static func setConfigAddress(_ configAddress: String) {
        OpenRUM.setConfigAddress(configAddress)
    }
    
    @objc
    public static func setEnvironment(_ env: Env) {
        self.env = envToString(env)
        OpenRUM.setAppEnvironment(self.env!)
    }
    
    @objc
    public static func setCustomEnvironment(_ env: String?) {
        guard let env = env else {
            return
        }
        self.env = env
        
        OpenRUM.setAppEnvironment(env)
    }
    
    @objc
    public static func setAppVersion(_ appVersion: String) {
        OpenRUM.setAppVersion(appVersion)
    }
    
    @objc
    public static func setChannelID(_ channelID: String) {
        OpenRUM.setChannelID(channelID)
    }
    
    @objc
    public static func setDeviceID(_ deviceID: String) {
        OpenRUM.setDeviceID(deviceID)
    }
    
    @objc
    public static var deviceID : String {
        get {
            return OpenRUM.deviceID()
        }
    }
    
    @objc
    public static func setUserName(_ userID: String) {
        OpenRUM.setUserID(userID)
    }
    
    @objc(setExtraInfo:)
    public static func setExtraInfo(_ extraInfo: [String: AnyObject]) {
        internalSetExtraInfo(extraInfo, false, false)
    }

    @objc(addExtraInfo:)
    public static func addExtraInfo(_ extraInfo: [String: AnyObject]) {
        internalSetExtraInfo(extraInfo, false, true)
    }
    
    @objc(setUserExtraInfo:)
    public static func setUserExtraInfo(_ extraInfo: [String: AnyObject]) {
        internalSetExtraInfo(extraInfo, true, false)
    }
    
    @objc(addUserExtraInfo:)
    public static func addUserExtraInfo(_ extraInfo: [String: AnyObject]) {
        internalSetExtraInfo(extraInfo, true, true)
    }
    
    @objc(setAppFramework:)
    public static func setAppFramework(_ framework: Framework) {
        let frmkName = frameworkDescription(framework)
        cachedExtraInfo[SDK_FRAMEWORK] = frmkName as AnyObject
    }

    private static func internalSetExtraInfo(_ extraInfo: [String: AnyObject]?, _ user: Bool, _ append: Bool) {
        guard let info = extraInfo else {
            return
        }

        var global: [String: AnyObject] = cachedExtraInfo[CUSTOM_ATTRIBUTES_PREFIX] as? [String : AnyObject] ?? [String: AnyObject]()
        
        if !append {
            var removedKeys = [String]()
            for (key, _) in cachedExtraInfo {
                // keep SDK_VERSION_PREFIX
                if SDK_VERSION_PREFIX == key {
                    continue
                }
                
                // keep SDK_FRAMEWORK
                if SDK_FRAMEWORK == key {
                    continue
                }

                if user {
                    // in user attributes mode
                    // remove kv if is not global attributes
                    if CUSTOM_ATTRIBUTES_PREFIX != key {
                        removedKeys.append(key)
                    }
                } else {
                    // not in user attributes mode
                    // remove kv if is global attributes
                    if CUSTOM_ATTRIBUTES_PREFIX == key {
                        global.removeAll()
                        removedKeys.append(key)
                    }
                }
            }
            
            for key in removedKeys {
                cachedExtraInfo.removeValue(forKey: key)
            }
        }
        
        if user {
            // put user extra info to root node
            cachedExtraInfo.merge(info, uniquingKeysWith: { current, _ in current })
        } else {
            // put global attributes to CUSTOM_ATTRIBUTES_PREFIX node
            global.merge(info, uniquingKeysWith: { current, _ in current })
        }
        
        if !global.isEmpty {
            cachedExtraInfo[CUSTOM_ATTRIBUTES_PREFIX] = global as AnyObject
        }
        
        OpenRUM.setExtraInfo(cachedExtraInfo)
    }
    
    @objc
    public static func setLogFlag(_ flag: NSNumber) {
        OpenRUM.setLogFlag(flag)
    }
    
    @objc
    public static func stopSDK() {
        OpenRUM.stopSDK()
    }
    
    // MARK: ===== exception =====
    @objc(setCustomException:causeBy:errorDump:)
    public static func setCustomException(_ exceptionType: String, causeBy: String, errorDump: String) {
        OpenRUM.setCustomExceptionWithType(exceptionType, causeBy: causeBy, errorDump: errorDump)
    }
    
    // MARK: ===== metric =====
    @objc(setCustomMetric:value:param:)
    public static func setCustomMetric(_ metricName: String, value: Int, snapshots: String?) {
        OpenRUM.setCustomMetricWithName(metricName, value: value, param: snapshots)
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
        var extra: [String: String]
        if let _ = info {
            extra = info!
        } else {
            extra = [String: String]()
        }
        
        extra["_orcv"] = String(value)
        
        OpenRUM.setCustomEventWithID(UUID().uuidString, name: name, label: group, param: snapshots, info: extra)
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
        var extra : [String: String]
        if let _ = info {
            extra = info!
        } else {
            extra = [String: String]()
        }
        
        if let _ = level {
            extra["_ll"] = level
        } else {
            extra["_ll"] = "INFO"
        }
        
        if let _ = name {
            extra["_ln"] = name
        }
        
        extra["_lc"] = logInfo
        
        do {
            let info = try JSONSerialization.data(withJSONObject: extra, options: [])
            OpenRUM.setCustomLog(String(data: info, encoding: .utf8)!, param: snapshots)
        } catch {
            return
        }
    }
    
    @objc(getDeviceId)
    public static func getDeviceId() -> String {
        return OpenRUM.deviceID()
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
