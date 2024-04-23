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
	

import SwiftUI
import UIKit
import OpenRUM
import AlibabaCloudRUM


class AppDelegate: NSObject, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        OpenRUM.setConfigAddress("https://b590lhguqs-default-cn.rum.aliyuncs.com/RUM/config")
        OpenRUM.start(withAppID: "b590lhguqs@e8534034c48d3f7")

        OpenRUM.setUserID("tetsttt")
        
        AlibabaCloudRUM.start("")
        AlibabaCloudRUM.setConfigAddress("")
        AlibabaCloudRUM.setUserID("")
        
        
        return true
    }
}

@main
struct SwiftPMSampleApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
    
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
