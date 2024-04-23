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
    private static let shared: AlibabaCloudRUM = AlibabaCloudRUM()
    //    private let rum: OpenRUM?
    //
    //    public override init() {
    //        super.init()
    //    }
    
    
    @objc(startWithAppID:)
    public static func start(_ withAppID: String) {
        OpenRUM.start(withAppID: withAppID)
    }
    
    @objc
    public static func setConfigAddress(_ configAddress: String) {
        OpenRUM.setConfigAddress(configAddress)
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
    
    //    public static var deviceID : String -> {
    //        return OpenRUM.deviceID
    //    }
    
    @objc
    public static func setUserID(_ userID: String) {
        OpenRUM.setUserID(userID)
    }
    
    @objc
    public static func setLogFlag(_ flag: NSNumber) {
        OpenRUM.setLogFlag(flag)
    }
}
