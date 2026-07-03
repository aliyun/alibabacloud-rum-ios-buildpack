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

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

#pragma mark - Enums

typedef NS_ENUM(NSInteger, AlibabaCloudModule) {
    AlibabaCloudModuleCrash        = 0,
    AlibabaCloudModuleNetwork      = 1,
    AlibabaCloudModuleView         = 2,
    AlibabaCloudModuleAction       = 3,
    AlibabaCloudModuleWebView      = 4,
    AlibabaCloudModuleLongTask     = 5,
    AlibabaCloudModuleAppLaunch    = 6,
    AlibabaCloudModuleAppState     = 7,
    AlibabaCloudModuleNetState     = 8,
    AlibabaCloudModuleCustomEvent  = 9,
    AlibabaCloudModuleCustomLog    = 10,
    AlibabaCloudModuleCustomMetric = 11,
    AlibabaCloudModuleOOM = 12,
};

typedef NS_ENUM(NSInteger, AlibabaCloudEnv) {
    AlibabaCloudEnvNONE  NS_SWIFT_NAME(NONE)  = 0,
    AlibabaCloudEnvPROD  NS_SWIFT_NAME(PROD)  = 1,
    AlibabaCloudEnvGRAY  NS_SWIFT_NAME(GRAY)  = 2,
    AlibabaCloudEnvPRE   NS_SWIFT_NAME(PRE)   = 3,
    AlibabaCloudEnvDAILY NS_SWIFT_NAME(DAILY) = 4,
    AlibabaCloudEnvLOCAL NS_SWIFT_NAME(LOCAL) = 5,
} NS_SWIFT_NAME(Env);

typedef NS_ENUM(NSInteger, AlibabaCloudFramework) {
    AlibabaCloudFrameworkFLUTTER      NS_SWIFT_NAME(FLUTTER)      = 0,
    AlibabaCloudFrameworkREACT_NATIVE NS_SWIFT_NAME(REACT_NATIVE) = 1,
    AlibabaCloudFrameworkUNITY        NS_SWIFT_NAME(UNITY)        = 2,
} NS_SWIFT_NAME(Framework);

typedef NS_ENUM(NSInteger, AlibabaCloudTracingProtocol) {
    AlibabaCloudTracingProtocolW3C          NS_SWIFT_NAME(W3C)          = 0,
    AlibabaCloudTracingProtocolSkywalkingV3 NS_SWIFT_NAME(SkywalkingV3) = 1,
};

#pragma mark - Forward Declarations

@class AlibabaCloudTracingContext;
@class AlibabaCloudResourceMeasure;

#pragma mark - AlibabaCloudResourceProvider Protocol

@protocol AlibabaCloudResourceSnapshotProvider;

@protocol AlibabaCloudResourceProvider <AlibabaCloudResourceSnapshotProvider>
@end

#pragma mark - AlibabaCloudRUM

@interface AlibabaCloudRUM : NSObject

+ (void)disableSwizzleMethod:(SEL)selector clazz:(Class)clazz;

+ (void)disableInspectClass:(NSString *)className NS_SWIFT_NAME(disableInspectClass(_:))
    __attribute__((deprecated("This method has been renamed. Please use excludeClassFromTracking(_:) instead.")));

+ (void)excludeClassFromTracking:(NSString *)className NS_SWIFT_NAME(excludeClassFromTracking(_:));

+ (void)enableBattery:(BOOL)enable NS_SWIFT_NAME(enableBattery(_:)) __attribute__((deprecated));

+ (void)disableModule:(AlibabaCloudModule)modul NS_SWIFT_NAME(disableModule(_:));
+ (void)enableModule:(AlibabaCloudModule)modul NS_SWIFT_NAME(enableModule(_:));

+ (void)enableTrackingWebView:(BOOL)enable NS_SWIFT_NAME(enableTrackingWebView(_:))
    __attribute__((deprecated("Use disableModule(.webView) / enableModule(.webView) instead.")));

+ (void)start:(NSString *)serviceId NS_SWIFT_NAME(start(_:));

+ (void)startWithAppID:(NSString *)appID
    __attribute__((deprecated("Use start: instead.")));

+ (void)setEndpoint:(NSString *)endpoint NS_SWIFT_NAME(setEndpoint(_:));

+ (void)setConfigAddress:(NSString *)configAddress NS_SWIFT_NAME(setConfigAddress(_:))
    __attribute__((deprecated("This method has been renamed. Please use setEndpoint(_:) instead.")));

+ (void)setWorkspace:(NSString *)workspace NS_SWIFT_NAME(setWorkspace(_:));
+ (void)setEnvironment:(AlibabaCloudEnv)env NS_SWIFT_NAME(setEnvironment(_:));
+ (void)setCustomEnvironment:(NSString * _Nullable)env NS_SWIFT_NAME(setCustomEnvironment(_:));
+ (void)setAppVersion:(NSString *)appVersion NS_SWIFT_NAME(setAppVersion(_:));
+ (void)setChannelID:(NSString *)channelID NS_SWIFT_NAME(setChannelID(_:));
+ (void)setDeviceID:(NSString *)deviceID NS_SWIFT_NAME(setDeviceID(_:));

@property (nonatomic, class, readonly, copy) NSString *deviceID;

+ (void)setUserName:(NSString *)userID NS_SWIFT_NAME(setUserName(_:));
+ (void)setExtraInfo:(NSDictionary<NSString *, id> *)extraInfo NS_SWIFT_NAME(setExtraInfo(_:));
+ (void)addExtraInfo:(NSDictionary<NSString *, id> *)extraInfo NS_SWIFT_NAME(addExtraInfo(_:));
+ (void)setUserExtraInfo:(NSDictionary<NSString *, id> *)extraInfo NS_SWIFT_NAME(setUserExtraInfo(_:));
+ (void)addUserExtraInfo:(NSDictionary<NSString *, id> *)extraInfo NS_SWIFT_NAME(addUserExtraInfo(_:));
+ (void)setAppFramework:(AlibabaCloudFramework)framework NS_SWIFT_NAME(setAppFramework(_:));

+ (void)setLogFlag:(NSNumber *)flag NS_SWIFT_NAME(setLogFlag(_:))
    __attribute__((deprecated("This method has been renamed. Please use setDebuggable(_:) instead.")));

+ (void)setDebuggable:(BOOL)debuggable NS_SWIFT_NAME(setDebuggable(_:));
+ (void)setSelfMonitorEnabled:(BOOL)enabeld NS_SWIFT_NAME(setSelfMonitorEnabled(_:));
+ (void)stopSDK NS_SWIFT_NAME(stopSDK());

+ (void)setCustomException:(NSString *)exceptionType
                   causeBy:(NSString *)causeBy
                 errorDump:(NSString *)errorDump NS_SWIFT_NAME(setCustomException(_:causeBy:errorDump:));

+ (void)setCustomMetric:(NSString *)metricName
                  value:(NSInteger)value
                  param:(NSString * _Nullable)snapshots NS_SWIFT_NAME(setCustomMetric(_:value:snapshots:));

+ (void)setCustomEvent:(NSString *)name NS_SWIFT_NAME(setCustomEvent(_:));
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group NS_SWIFT_NAME(setCustomEvent(_:group:));
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group
             snapshots:(NSString * _Nullable)snapshots NS_SWIFT_NAME(setCustomEvent(_:group:snapshots:));
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group
                 value:(double)value NS_SWIFT_NAME(setCustomEvent(_:group:value:));
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group
                  info:(NSDictionary<NSString *, NSString *> * _Nullable)info NS_SWIFT_NAME(setCustomEvent(_:group:info:));
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group
             snapshots:(NSString * _Nullable)snapshots
                 value:(double)value NS_SWIFT_NAME(setCustomEvent(_:group:snapshots:value:));
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group
             snapshots:(NSString * _Nullable)snapshots
                  info:(NSDictionary<NSString *, NSString *> * _Nullable)info NS_SWIFT_NAME(setCustomEvent(_:group:snapshots:info:));
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group
                 value:(double)value
                  info:(NSDictionary<NSString *, NSString *> * _Nullable)info NS_SWIFT_NAME(setCustomEvent(_:group:value:info:));
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group
             snapshots:(NSString * _Nullable)snapshots
                 value:(double)value
                  info:(NSDictionary<NSString *, NSString *> * _Nullable)info NS_SWIFT_NAME(setCustomEvent(_:group:snapshots:value:info:));

+ (void)setCustomLog:(NSString *)logInfo  NS_SWIFT_NAME(setCustomLog(_:));
+ (void)setCustomLog:(NSString *)logInfo
                name:(NSString * _Nullable)name NS_SWIFT_NAME(setCustomLog(_:name:));
+ (void)setCustomLog:(NSString *)logInfo
                name:(NSString * _Nullable)name
           snapshots:(NSString * _Nullable)snapshots NS_SWIFT_NAME(setCustomLog(_:name:snapshots:));
+ (void)setCustomLog:(NSString *)logInfo
                name:(NSString * _Nullable)name
           snapshots:(NSString * _Nullable)snapshots
               level:(NSString * _Nullable)level
                info:(NSDictionary<NSString *, NSString *> * _Nullable)info NS_SWIFT_NAME(setCustomLog(_:name:snapshots:level:info:));

+ (BOOL)setCustomResource:(NSString *)type
                  success:(BOOL)success
                      url:(NSString *)url
                   method:(NSString *)method
               statusCode:(NSInteger)statusCode
             errorMessage:(NSString * _Nullable)errorMessage NS_SWIFT_NAME(setCustomResource(_:success:url:method:statusCode:errorMessage:))
    __attribute__((warn_unused_result));

+ (BOOL)setCustomResource:(NSString *)type
                  success:(BOOL)success
                      url:(NSString *)url
                   method:(NSString *)method
               statusCode:(NSInteger)statusCode
             errorMessage:(NSString * _Nullable)errorMessage
                 provider:(NSString * _Nullable)provider
                  tracing:(AlibabaCloudTracingContext * _Nullable)tracing
                  measure:(AlibabaCloudResourceMeasure * _Nullable)measure NS_SWIFT_NAME(setCustomResource(_:success:url:method:statusCode:errorMessage:provider:tracing:measure:))
    __attribute__((warn_unused_result));

+ (void)setResourceProvider:(id<AlibabaCloudResourceProvider> _Nullable)provider NS_SWIFT_NAME(setResourceProvider(_:));

+ (NSString *)getDeviceId __attribute__((warn_unused_result));

/// Get the active session id.
/// - Returns: The active session id, nullable.
+ (NSString * _Nullable)getActiveSessionId;
/// Get the last active trace id.
/// - Returns: The active trace id, nullable.
+ (NSString * _Nullable)getLastActiveTraceId;
/// Get the last active span id.
/// - Returns: The active span id, nullable.
+ (NSString * _Nullable)getLastActiveSpanId;

- (instancetype)init NS_DESIGNATED_INITIALIZER;

@end

#pragma mark - AlibabaCloudResourceMeasure

@interface AlibabaCloudResourceMeasure : NSObject

@property (nonatomic) NSUInteger duration;
@property (nonatomic) NSUInteger size;
@property (nonatomic) NSUInteger connectDuration;
@property (nonatomic) NSUInteger sslDuration;
@property (nonatomic) NSUInteger dnsDuration;
@property (nonatomic) NSUInteger redirectDuration;
@property (nonatomic) NSUInteger firstByteDuration;
@property (nonatomic) NSUInteger downloadDuration;

- (instancetype)init NS_DESIGNATED_INITIALIZER;
+ (AlibabaCloudResourceMeasure *)measure NS_SWIFT_NAME(measure()) __attribute__((warn_unused_result));

@end

#pragma mark - AlibabaCloudTracingContext

@interface AlibabaCloudTracingContext : NSObject

- (instancetype)initWithTraceId:(NSString *)traceId
                         spanId:(NSString *)spanId
                tracingProtocol:(AlibabaCloudTracingProtocol)tracingProtocol NS_DESIGNATED_INITIALIZER;

- (instancetype)initWithTraceId:(NSString *)traceId
                         spanId:(NSString *)spanId
                   parentSpanId:(NSString *)parentSpanId
                        sampled:(BOOL)sampled
                tracingProtocol:(AlibabaCloudTracingProtocol)tracingProtocol NS_DESIGNATED_INITIALIZER;

+ (AlibabaCloudTracingContext *)contextWithTraceId:(NSString *)traceId
                                            spanId:(NSString *)spanId
                                   tracingProtocol:(AlibabaCloudTracingProtocol)tracingProtocol
    __attribute__((warn_unused_result));

+ (AlibabaCloudTracingContext *)contextWithTraceId:(NSString *)traceId
                                            spanId:(NSString *)spanId
                                      parentSpanId:(NSString *)parentSpanId
                                           sampled:(BOOL)sampled
                                   tracingProtocol:(AlibabaCloudTracingProtocol)tracingProtocol
    __attribute__((warn_unused_result));

- (instancetype)init NS_UNAVAILABLE;
+ (instancetype)new __attribute__((unavailable("-init is unavailable")));

@end

#pragma mark - AlibabaCloudTracingGenerator

@interface AlibabaCloudTracingGenerator : NSObject

+ (NSString *)generateTraceId:(AlibabaCloudTracingProtocol)tracingProtocol
    __attribute__((warn_unused_result));

+ (NSString *)generateSpanId:(AlibabaCloudTracingProtocol)tracingProtocol
    __attribute__((warn_unused_result));

- (instancetype)init NS_DESIGNATED_INITIALIZER;

@end

#pragma mark - AlibabaCloudTracingHeaderWriter

@interface AlibabaCloudTracingHeaderWriter : NSObject

+ (NSDictionary<NSString *, NSString *> *)generateHeaders:(AlibabaCloudTracingContext *)tracingContext
    __attribute__((warn_unused_result));

+ (NSString * _Nullable)generateSingleHeader:(AlibabaCloudTracingContext *)tracingContext
    __attribute__((warn_unused_result));

+ (void)setTraceHeader:(NSMutableURLRequest *)request
               context:(AlibabaCloudTracingContext *)context;

+ (BOOL)isRequestContainsTraceHeader:(NSURLRequest *)request
    __attribute__((warn_unused_result));

- (instancetype)init NS_DESIGNATED_INITIALIZER;

@end

NS_ASSUME_NONNULL_END
