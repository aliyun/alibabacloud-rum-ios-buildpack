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

+ (void)disableInspectClass:(NSString *)className
    __attribute__((deprecated("This method has been renamed. Please use excludeClassFromTracking(_:) instead.")));

+ (void)excludeClassFromTracking:(NSString *)className;

+ (void)enableBattery:(BOOL)enable
    __attribute__((deprecated));

+ (void)disableModule:(AlibabaCloudModule)module;
+ (void)enableModule:(AlibabaCloudModule)module;

+ (void)enableTrackingWebView:(BOOL)enable
    __attribute__((deprecated("Use disableModule(.webView) / enableModule(.webView) instead.")));

+ (void)start:(NSString *)serviceId;

+ (void)startWithAppID:(NSString *)appID
    __attribute__((deprecated("Use start: instead.")));

+ (void)setEndpoint:(NSString *)endpoint;

+ (void)setConfigAddress:(NSString *)configAddress
    __attribute__((deprecated("This method has been renamed. Please use setEndpoint(_:) instead.")));

+ (void)setWorkspace:(NSString *)workspace;
+ (void)setEnvironment:(AlibabaCloudEnv)env;
+ (void)setCustomEnvironment:(NSString * _Nullable)env;
+ (void)setAppVersion:(NSString *)appVersion;
+ (void)setChannelID:(NSString *)channelID;
+ (void)setDeviceID:(NSString *)deviceID;

@property (nonatomic, class, readonly, copy) NSString *deviceID;

+ (void)setUserName:(NSString *)userID;
+ (void)setExtraInfo:(NSDictionary<NSString *, id> *)extraInfo;
+ (void)addExtraInfo:(NSDictionary<NSString *, id> *)extraInfo;
+ (void)setUserExtraInfo:(NSDictionary<NSString *, id> *)extraInfo;
+ (void)addUserExtraInfo:(NSDictionary<NSString *, id> *)extraInfo;
+ (void)setAppFramework:(AlibabaCloudFramework)framework;

+ (void)setLogFlag:(NSNumber *)flag
    __attribute__((deprecated("This method has been renamed. Please use setDebuggable(_:) instead.")));

+ (void)setDebuggable:(BOOL)debuggable;
+ (void)stopSDK;

+ (void)setCustomException:(NSString *)exceptionType
                   causeBy:(NSString *)causeBy
                 errorDump:(NSString *)errorDump;

+ (void)setCustomMetric:(NSString *)metricName
                  value:(NSInteger)value
                  param:(NSString * _Nullable)snapshots
    NS_SWIFT_NAME(setCustomMetric(_:value:snapshots:));

+ (void)setCustomEvent:(NSString *)name;
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group;
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group
             snapshots:(NSString * _Nullable)snapshots;
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group
                 value:(double)value;
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group
                  info:(NSDictionary<NSString *, NSString *> * _Nullable)info;
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group
             snapshots:(NSString * _Nullable)snapshots
                 value:(double)value;
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group
             snapshots:(NSString * _Nullable)snapshots
                  info:(NSDictionary<NSString *, NSString *> * _Nullable)info;
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group
                 value:(double)value
                  info:(NSDictionary<NSString *, NSString *> * _Nullable)info;
+ (void)setCustomEvent:(NSString *)name
                 group:(NSString * _Nullable)group
             snapshots:(NSString * _Nullable)snapshots
                 value:(double)value
                  info:(NSDictionary<NSString *, NSString *> * _Nullable)info;

+ (void)setCustomLog:(NSString *)logInfo;
+ (void)setCustomLog:(NSString *)logInfo
                name:(NSString * _Nullable)name;
+ (void)setCustomLog:(NSString *)logInfo
                name:(NSString * _Nullable)name
           snapshots:(NSString * _Nullable)snapshots;
+ (void)setCustomLog:(NSString *)logInfo
                name:(NSString * _Nullable)name
           snapshots:(NSString * _Nullable)snapshots
               level:(NSString * _Nullable)level
                info:(NSDictionary<NSString *, NSString *> * _Nullable)info;

+ (BOOL)setCustomResource:(NSString *)type
                  success:(BOOL)success
                      url:(NSString *)url
                   method:(NSString *)method
               statusCode:(NSInteger)statusCode
             errorMessage:(NSString * _Nullable)errorMessage
    __attribute__((warn_unused_result));

+ (BOOL)setCustomResource:(NSString *)type
                  success:(BOOL)success
                      url:(NSString *)url
                   method:(NSString *)method
               statusCode:(NSInteger)statusCode
             errorMessage:(NSString * _Nullable)errorMessage
                 provider:(NSString * _Nullable)provider
                  tracing:(AlibabaCloudTracingContext * _Nullable)tracing
                  measure:(AlibabaCloudResourceMeasure * _Nullable)measure
    __attribute__((warn_unused_result));

+ (void)setResourceProvider:(id<AlibabaCloudResourceProvider> _Nullable)provider;

+ (NSString *)getDeviceId __attribute__((warn_unused_result));

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
+ (AlibabaCloudResourceMeasure *)measure __attribute__((warn_unused_result));

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
