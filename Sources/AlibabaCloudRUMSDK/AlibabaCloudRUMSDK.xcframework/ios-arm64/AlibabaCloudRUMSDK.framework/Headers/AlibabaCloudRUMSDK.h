//
// Copyright 2024 Alibaba Cloud Authors
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
	

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface AlibabaCloudRUMSDK : NSObject

+ (void)setDebuggable:(BOOL)debuggable;
+ (BOOL)start:(NSString *)configAddress appId:(NSString *)appId;
+ (BOOL)stop;
+ (BOOL)isStarted;

#pragma mark - Custom -
+ (void)setCustomEvent:(NSString *)name
                  type:(NSString * _Nullable)type
                 group:(NSString *)group
             snapshots:(NSString * _Nullable)snapshots
                 value:(double)value
                  info:(NSDictionary<NSString *, NSString *> * _Nullable)info;
+ (void)setCustomLog:(NSString *)logInfo
                name:(NSString * _Nullable)name
                type:(NSString * _Nullable)type
           snapshots:(NSString * _Nullable)snapshots
               level:(NSString * _Nullable)level
                info:(NSDictionary<NSString *, NSString *> * _Nullable)info;
+ (void)setCustomMetric:(NSString *)name value:(int)value snapshots:(NSString * _Nullable)snapshots;
+ (void)reportCustomException:(NSString *)exceptionType causeBy:(NSString *)causeBy errorDump:(NSString *)errorDump;

#pragma mark - Extra Info -
+ (void)addExtraInfo:(NSDictionary<NSString *, id> *)extraInfo;
+ (void)setExtraInfo:(NSDictionary<NSString *, id> *)extraInfo;
+ (void)addUserExtraInfo:(NSDictionary<NSString *, id> *)extraInfo;
+ (void)setUserExtraInfo:(NSDictionary<NSString *, id> *)extraInfo;

#pragma mark - User -
/// Sets the app custom user name.
/// - Parameter userName: The user name string to set for the app.
+ (void)setUserName:(NSString *)userName;
/// Sets the app custom user id.
/// - Parameter userId: The user id string to set for the app.
+ (void)setUserId:(NSString *)userId;

#pragma mark - Others -
/// Sets the app custom device id. This method should be called before `start` is invoked.
/// - Parameter env: The device id string to set for the app.
+ (void)setDeviceId:(NSString *)deviceId;
/// Returns the unique identifier for the device.
/// - Returns: The device identifier as a string.
+ (NSString *)deviceId;
/// Sets the app custom environment. This method should be called before `start` is invoked.
/// - Parameter env: The env string to set for the app.
+ (void)setEnvironment:(NSString *)env;
/// Sets the app name. This method should be called before `start` is invoked.
/// - Parameter name: The name string to set for the app.
+ (void)setAppName:(NSString *)name;
/// Sets the app version. This method should be called before `start` is invoked.
/// - Parameter version: The version string to set for the app.
+ (void)setAppVersion:(NSString *)version;
/// Sets the app version. This method should be called before `start` is invoked.
/// - Parameter channel: The channel string to set for the app.
+ (void)setChannel:(NSString *)channel;

#ifdef ALR_TEST
#pragma mark - For Test -
+ (void)saveCacheForTest:(BOOL)main
                  action:(BOOL)action
                 network:(BOOL)network
                   crash:(BOOL)crash
                longtask:(BOOL)longtask
              nativeView:(BOOL)nativeView
                      h5:(BOOL)h5
                 spaView:(BOOL)spaView
               customLog:(BOOL)customLog
             customEvent:(BOOL)customEvent
            customMetric:(BOOL)customMetric
                 battery:(BOOL)battery
              skywalking:(BOOL)skywalking
                     w3c:(BOOL)w3c
         tracingSampling:(BOOL)tracingSampling;
+ (void)setTesting:(BOOL)testing;
#endif
@end

NS_ASSUME_NONNULL_END
