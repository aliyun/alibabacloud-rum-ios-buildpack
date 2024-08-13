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
    
    @objc
    public static func setLogFlag(_ flag: NSNumber) {
        OpenRUM.setLogFlag(flag)
    }
    
    @objc(setCustomException:causeBy:errorDump:)
    public static func setCustomException(_ exceptionType: String, _ causeBy: String, _ errorDump: String) {
        OpenRUM.setCustomExceptionWithType(exceptionType, causeBy: causeBy, errorDump: errorDump)
    }
    
    @objc(setCustomMetric:value:param:)
    public static func setCustomMetric(_ metricName: String, _ value: Int, _ param: String?) {
        OpenRUM.setCustomMetricWithName(metricName, value: value, param: param)
    }
    
    @objc(setCustomEvent:name:)
    public static func setCustomEvent(_ eventID: String, _ name: String) {
        self.setCustomEvent(eventID, name, nil, nil, nil)
    }
    
    @objc(setCustomEvent:name:label:)
    public static func setCustomEvent(_ eventID: String, _ name: String, _ label: String? = nil) {
        self.setCustomEvent(eventID, name, label, nil, nil)
    }
    
    @objc(setCustomEvent:name:label:param:)
    public static func setCustomEvent(_ eventID: String, _ name: String, _ label: String? = nil, _ param: String? = nil) {
        self.setCustomEvent(eventID, name, label, param, nil)
    }
    
    @objc(setCustomEvent:name:label:param:info:)
    public static func setCustomEvent(_ eventID: String, _ name: String, _ label: String? = nil, _ param: String? = nil, _ info: [String: String]? = nil) {
        OpenRUM.setCustomEventWithID(eventID, name: name, label: label, param: param, info: info)
    }
    
    @objc(setCustomLog:)
    public static func setCustomLog(_ logInfo: String) {
        OpenRUM.setCustomLog(logInfo, param: "")
    }
    
    @objc(setCustomLog:param:)
    public static func setCustomLog(_ logInfo: String, _ param: String? = "") {
        OpenRUM.setCustomLog(logInfo, param: param)
    }
    
    @objc
    public static func stopSDK() {
        OpenRUM.stopSDK()
    }
}
