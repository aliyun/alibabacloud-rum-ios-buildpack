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
    
    @objc
    public enum Env: Int {
        case NONE
        case PROD
        case GRAY
        case PRE
        case DAILY
        case LOCAL
    }
    
    private static let shared: AlibabaCloudRUM = AlibabaCloudRUM()
    
    
    @objc(startWithAppID:)
    public static func start(_ withAppID: String) {
        OpenRUM.start(withAppID: withAppID)
    }
    
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
    
    @objc
    public static func setCustomException(_ exceptionType: String, _ causeBy: String?, _ errorDump: String?) {
        OpenRUM.setCustomExceptionWithType(exceptionType, causeBy: causeBy, errorDump: errorDump)
    }
    
    @objc
    public static func setCustomMetric(_ metricName: String, _ value: Int, _ param: String?) {
        OpenRUM.setCustomMetricWithName(metricName, value: value, param: param)
    }
    
    @objc
    public static func setCustomEvent(_ eventID: String, _ name: String?, _ label: String?, _ param: String?, _ info: [String: String]?) {
        OpenRUM.setCustomEventWithID(eventID, name: name, label: label, param: param, info: info)
    }
    
    @objc
    public static func setCustomLog(_ logInfo: String, _ param: String?) {
        OpenRUM.setCustomLog(logInfo, param: param)
    }
}
