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

@objc
public class AlibabaCloudRUM : NSObject {
    
    @objc(AlibabaCloudEnv)
    public enum Env: Int {
        case NONE
        case PROD
        case GRAY
        case PRE
        case DAILY
        case LOCAL
    }
    
    private static let shared: AlibabaCloudRUM = AlibabaCloudRUM()
    
    
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
    
    /// 启动SDK
    /// - Parameters:
    ///     - appID: 应用ID, 必填
    @objc(startWithAppID:)
    public static func start(_ appID: String) {
        OpenRUM.start(withAppID: appID)
    }
    
    /// 配置config地址
    /// - Parameters:
    ///     - configAddress: config 地址
    @objc
    public static func setConfigAddress(_ configAddress: String) {
        OpenRUM.setConfigAddress(configAddress)
        OpenRUM.setAppEnvironment(ORAppEnvironment.prod)
    }
    
    @objc
    public static func setEnvironment(_ env: Env) {
        switch env {
        case .NONE:
            OpenRUM.setAppEnvironment(ORAppEnvironment.none)
            break
        case .PROD:
            OpenRUM.setAppEnvironment(ORAppEnvironment.prod)
            break
        case .GRAY:
            OpenRUM.setAppEnvironment(ORAppEnvironment.gray)
            break
        case .PRE:
            OpenRUM.setAppEnvironment(ORAppEnvironment.pre)
            break
        case .DAILY:
            OpenRUM.setAppEnvironment(ORAppEnvironment.daily)
            break
        case .LOCAL:
            OpenRUM.setAppEnvironment(ORAppEnvironment.local)
            break
        default:
            OpenRUM.setAppEnvironment(ORAppEnvironment.prod)
        }
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
    
    @objc(setUserExtraInfo:)
    public static func setUserExtraInfo(_ extraInfo: [String: AnyObject]) {
        OpenRUM.setExtraInfo(extraInfo)
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
        
        if let _ = level {
            extra["_lc"] = logInfo
        }
        
        do {
            let info = try JSONSerialization.data(withJSONObject: extra, options: .sortedKeys)
            OpenRUM.setCustomLog(String(data: info, encoding: .utf8)!, param: snapshots)
        } catch {
            return
        }
    }
}
