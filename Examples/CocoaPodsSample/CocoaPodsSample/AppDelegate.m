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
	

#import "AppDelegate.h"

// 导入Alibaba Cloud RUM 模块
@import AlibabaCloudRUM;


@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    NSString *appID = @"";
    NSString *configAddress = @"";
    
    // （可选）设置用户名称，可在任何实际调用，重复调用时只生效最后一次调用时传入的数值。
    // 传入的用户名称需要满足以下正则表达式，否则设置失败：
    // ^[:0-9a-zA-Z /@._-]{1,}$
    [AlibabaCloudRUM setUserName:@"user-name"];
    
    // （可选）设置 App 版本号
    [AlibabaCloudRUM setAppVersion:@"0.2.0"];
    // （可选）设置 渠道ID
    [AlibabaCloudRUM setChannelID:@"official"];
    // （可选）设置日志等级，建议仅在debug模式下开启
    [AlibabaCloudRUM setLogFlag:@0xffffffff];

    // （必须）设置Config地址
    [AlibabaCloudRUM setConfigAddress:configAddress];
    // （必须）要在调用 startWithAppID 之前配置好其他参数
    [AlibabaCloudRUM startWithAppID:appID];
    
    // （可选）获取SDK提供的deviceID
    NSLog(@"RUM deviceID: %@", AlibabaCloudRUM.deviceID);
    return YES;
}


#pragma mark - UISceneSession lifecycle


- (UISceneConfiguration *)application:(UIApplication *)application configurationForConnectingSceneSession:(UISceneSession *)connectingSceneSession options:(UISceneConnectionOptions *)options {
    // Called when a new scene session is being created.
    // Use this method to select a configuration to create the new scene with.
    return [[UISceneConfiguration alloc] initWithName:@"Default Configuration" sessionRole:connectingSceneSession.role];
}


- (void)application:(UIApplication *)application didDiscardSceneSessions:(NSSet<UISceneSession *> *)sceneSessions {
    // Called when the user discards a scene session.
    // If any sessions were discarded while the application was not running, this will be called shortly after application:didFinishLaunchingWithOptions.
    // Use this method to release any resources that were specific to the discarded scenes, as they will not return.
}


@end
