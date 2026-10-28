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

#import "AlibabaCloudRUM.h"
#import "AlibabaCloudRUMSDK/AlibabaCloudRUMSDK.h"

_Static_assert((NSInteger)AlibabaCloudResourceSuccessUnknown == (NSInteger)ALRResourceSuccessUnknown,
               "Resource unknown result must match the internal SDK");
_Static_assert((NSInteger)AlibabaCloudResourceSuccessFailed == (NSInteger)ALRResourceSuccessFailed,
               "Resource failed result must match the internal SDK");
_Static_assert((NSInteger)AlibabaCloudResourceSuccessSuccess == (NSInteger)ALRResourceSuccessSuccess,
               "Resource success result must match the internal SDK");

#pragma mark - Static State

static NSString * _Nullable _endpoint  = nil;
static NSString * _Nullable _workspace = nil;
static NSString * _Nullable _env       = nil;
static NSString *const RUM_SDK_VERSION = @"2.4.3";

#pragma mark - Internal Class Extensions

@interface AlibabaCloudRUMEvent () {
@protected
    ALRRUMEvent *_candidate;
}
- (instancetype)initWithCandidate:(ALRRUMEvent *)candidate;
@end

@interface AlibabaCloudEventContext () {
    ALRInterceptorContext *_context;
}
- (instancetype)initWithContext:(ALRInterceptorContext *)context;
@end

@interface ALRPublicEventInterceptorAdapter : NSObject <ALREventInterceptor>
@property(nonatomic, strong) id<AlibabaCloudEventInterceptor> interceptor;
@end

@interface AlibabaCloudTracingContext ()
@property (nonatomic, strong, readonly) AlibabaCloudTraceContext *context;
@end

@interface AlibabaCloudResourceMeasure ()
@property (nonatomic, strong, readonly) AlibabaCloudResourceMeasuring *measuring;
@end

#pragma mark - Type Conversion Helpers

static AlibabaCloudRUMModule ACRUMModuleFromModule(AlibabaCloudModule module) {
    return (AlibabaCloudRUMModule)(1UL << (NSUInteger)module);
}

static AlibabaCloudTraceProtocol ACTraceProtocolFromTracingProtocol(AlibabaCloudTracingProtocol tp) {
    return (tp == AlibabaCloudTracingProtocolW3C)
        ? AlibabaCloud_W3C
        : AlibabaCloud_SkywalkingV3;
}

static NSString *ACEnvironmentStringFromEnv(AlibabaCloudEnv env) {
    switch (env) {
        case AlibabaCloudEnvNONE:  return @"none";
        case AlibabaCloudEnvPROD:  return @"prod";
        case AlibabaCloudEnvGRAY:  return @"gray";
        case AlibabaCloudEnvPRE:   return @"pre";
        case AlibabaCloudEnvDAILY: return @"daily";
        case AlibabaCloudEnvLOCAL: return @"local";
        default:                   return @"prod";
    }
}

#pragma mark - AlibabaCloudRUM

@implementation AlibabaCloudRUM

+ (BOOL)setEventInterceptor:(id<AlibabaCloudEventInterceptor>)interceptor {
    @try {
        if (!interceptor) {
            return [AlibabaCloudRUMSDK setEventInterceptor:nil];
        }
        if (![interceptor respondsToSelector:@selector(interceptEvent:context:)]) {
            return NO;
        }
        ALRPublicEventInterceptorAdapter *adapter = [ALRPublicEventInterceptorAdapter new];
        if (!adapter) return NO;
        adapter.interceptor = interceptor;
        return [AlibabaCloudRUMSDK setEventInterceptor:adapter];
    } @catch (NSException *exception) {
        return NO;
    }
}

+ (void)disableSwizzleMethod:(SEL)selector clazz:(Class)clazz {
    // Not supported yet.
    (void)selector;
    (void)clazz;
}

+ (void)disableInspectClass:(NSString *)className {
    [self excludeClassFromTracking:className];
}

+ (void)excludeClassFromTracking:(NSString *)className {
    [AlibabaCloudRUMSDK addSwizzleClassNameExclude:className];
}

+ (void)enableBattery:(BOOL)enable {
    (void)enable;
}

+ (void)disableModule:(AlibabaCloudModule)module {
    [AlibabaCloudRUMSDK disableModules:ACRUMModuleFromModule(module)];
}

+ (void)enableModule:(AlibabaCloudModule)module {
    [AlibabaCloudRUMSDK enableModules:ACRUMModuleFromModule(module)];
}

+ (void)enableTrackingWebView:(BOOL)enable {
    if (enable) {
        [self enableModule:AlibabaCloudModuleWebView];
    } else {
        [self disableModule:AlibabaCloudModuleWebView];
    }
}

+ (void)start:(NSString *)serviceId {
    (void)RUM_SDK_VERSION;
    [AlibabaCloudRUMSDK start:_endpoint ?: @""
                    workspace:_workspace ?: @""
                    serviceId:serviceId];
}

+ (void)startWithAppID:(NSString *)appID {
    [self start:appID];
}

+ (void)setEndpoint:(NSString *)endpoint {
    _endpoint = [endpoint copy];
}

+ (void)setConfigAddress:(NSString *)configAddress {
    [self setEndpoint:configAddress];
}

+ (void)setWorkspace:(NSString *)workspace {
    _workspace = [workspace copy];
}

+ (void)setEnvironment:(AlibabaCloudEnv)env {
    _env = ACEnvironmentStringFromEnv(env);
    [AlibabaCloudRUMSDK setEnvironment:_env];
}

+ (void)setCustomEnvironment:(NSString *)env {
    if (!env) return;
    _env = [env copy];
    [AlibabaCloudRUMSDK setEnvironment:env];
}

+ (void)setAppVersion:(NSString *)appVersion {
    [AlibabaCloudRUMSDK setAppVersion:appVersion];
}

+ (void)setChannelID:(NSString *)channelID {
    [AlibabaCloudRUMSDK setChannel:channelID];
}

+ (void)setDeviceID:(NSString *)deviceID {
    [AlibabaCloudRUMSDK setDeviceId:deviceID];
}

+ (NSString *)deviceID {
    return [AlibabaCloudRUMSDK deviceId];
}

+ (void)setUserName:(NSString *)userID {
    [AlibabaCloudRUMSDK setUserName:userID];
}

+ (void)setExtraInfo:(NSDictionary<NSString *, id> *)extraInfo {
    [AlibabaCloudRUMSDK setExtraInfo:extraInfo];
}

+ (void)addExtraInfo:(NSDictionary<NSString *, id> *)extraInfo {
    [AlibabaCloudRUMSDK addExtraInfo:extraInfo];
}

+ (void)setUserExtraInfo:(NSDictionary<NSString *, id> *)extraInfo {
    [AlibabaCloudRUMSDK setUserExtraInfo:extraInfo];
}

+ (void)addUserExtraInfo:(NSDictionary<NSString *, id> *)extraInfo {
    [AlibabaCloudRUMSDK addUserExtraInfo:extraInfo];
}

+ (void)setAppFramework:(AlibabaCloudFramework)framework {
    (void)framework;
}

+ (void)setLogFlag:(NSNumber *)flag {
    [AlibabaCloudRUMSDK setDebuggable:(0xFFFF == [flag integerValue])];
}

+ (void)setDebuggable:(BOOL)debuggable {
    [AlibabaCloudRUMSDK setDebuggable:debuggable];
}

+ (void)setSelfMonitorEnabled:(BOOL)enabeld {
    [AlibabaCloudRUMSDK setSelfMonitorEnabled:enabeld];
}

+ (void)stopSDK {
    [AlibabaCloudRUMSDK stop];
}

#pragma mark - Custom Exception / Metric / Event

+ (void)setCustomException:(NSString *)exceptionType
                   causeBy:(NSString *)causeBy
                 errorDump:(NSString *)errorDump {
    [AlibabaCloudRUMSDK reportCustomException:exceptionType
                                      causeBy:causeBy
                                    errorDump:errorDump];
}

+ (void)setCustomMetric:(NSString *)metricName
                  value:(NSInteger)value
                  param:(NSString *)snapshots {
    [AlibabaCloudRUMSDK setCustomMetric:metricName
                                  value:(int)value
                              snapshots:snapshots];
}

+ (void)setCustomEvent:(NSString *)name {
    [self setCustomEvent:name group:nil];
}

+ (void)setCustomEvent:(NSString *)name
                 group:(NSString *)group {
    [self setCustomEvent:name group:group snapshots:nil];
}

+ (void)setCustomEvent:(NSString *)name
                 group:(NSString *)group
             snapshots:(NSString *)snapshots {
    [self setCustomEvent:name group:group snapshots:snapshots value:0];
}

+ (void)setCustomEvent:(NSString *)name
                 group:(NSString *)group
                 value:(double)value {
    [self setCustomEvent:name group:group snapshots:nil value:value];
}

+ (void)setCustomEvent:(NSString *)name
                 group:(NSString *)group
                  info:(NSDictionary<NSString *, NSString *> *)info {
    [self setCustomEvent:name group:group snapshots:nil info:info];
}

+ (void)setCustomEvent:(NSString *)name
                 group:(NSString *)group
             snapshots:(NSString *)snapshots
                 value:(double)value {
    [self setCustomEvent:name group:group snapshots:snapshots value:value info:nil];
}

+ (void)setCustomEvent:(NSString *)name
                 group:(NSString *)group
             snapshots:(NSString *)snapshots
                  info:(NSDictionary<NSString *, NSString *> *)info {
    [self setCustomEvent:name group:group snapshots:snapshots value:0 info:info];
}

+ (void)setCustomEvent:(NSString *)name
                 group:(NSString *)group
                 value:(double)value
                  info:(NSDictionary<NSString *, NSString *> *)info {
    [self setCustomEvent:name group:group snapshots:nil value:value info:info];
}

+ (void)setCustomEvent:(NSString *)name
                 group:(NSString *)group
             snapshots:(NSString *)snapshots
                 value:(double)value
                  info:(NSDictionary<NSString *, NSString *> *)info {
    [AlibabaCloudRUMSDK setCustomEvent:name
                                  type:group ?: @""
                                 group:group ?: @""
                             snapshots:snapshots
                                 value:value
                                  info:info];
}

#pragma mark - Custom Log

+ (void)setCustomLog:(NSString *)logInfo {
    [self setCustomLog:logInfo name:nil];
}

+ (void)setCustomLog:(NSString *)logInfo
                name:(NSString *)name {
    [self setCustomLog:logInfo name:name snapshots:@""];
}

+ (void)setCustomLog:(NSString *)logInfo
                name:(NSString *)name
           snapshots:(NSString *)snapshots {
    [self setCustomLog:logInfo name:name snapshots:snapshots level:@"INFO" info:nil];
}

+ (void)setCustomLog:(NSString *)logInfo
                name:(NSString *)name
           snapshots:(NSString *)snapshots
               level:(NSString *)level
                info:(NSDictionary<NSString *, NSString *> *)info {
    [AlibabaCloudRUMSDK setCustomLog:logInfo
                                name:name
                                type:name
                           snapshots:snapshots
                               level:level
                                info:info];
}

#pragma mark - Custom Resource

+ (BOOL)setCustomResource:(NSString *)type
                  success:(BOOL)success
                      url:(NSString *)url
                   method:(NSString *)method
               statusCode:(NSInteger)statusCode
             errorMessage:(NSString *)errorMessage {
    return [self setCustomResource:type
                           success:success
                               url:url
                            method:method
                        statusCode:statusCode
                      errorMessage:errorMessage
                          provider:nil
                           tracing:nil
                           measure:nil];
}

+ (BOOL)setCustomResource:(NSString *)type
                  success:(BOOL)success
                      url:(NSString *)url
                   method:(NSString *)method
               statusCode:(NSInteger)statusCode
             errorMessage:(NSString *)errorMessage
                 provider:(NSString *)provider
                  tracing:(AlibabaCloudTracingContext *)tracing
                  measure:(AlibabaCloudResourceMeasure *)measure {
    return [AlibabaCloudRUMSDK reportCustomResource:type
                                            success:success
                                                url:url
                                             method:method
                                         statusCode:statusCode
                                       errorMessage:errorMessage
                                           provider:provider
                                            tracing:tracing.context
                                          measuring:measure.measuring];
}

+ (void)setResourceProvider:(id<AlibabaCloudResourceProvider>)provider {
    [AlibabaCloudRUMSDK setResourceSnapshotProvider:provider];
}

+ (NSString *)getDeviceId {
    return [AlibabaCloudRUMSDK deviceId];
}

+ (NSString * _Nullable)getActiveSessionId {
    return [AlibabaCloudRUMSDK getActiveSessionId];
}

+ (NSString * _Nullable)getLastActiveTraceId {
    return [AlibabaCloudRUMSDK getLastActiveTraceId];
}

+ (NSString * _Nullable)getLastActiveSpanId {
    return [AlibabaCloudRUMSDK getLastActiveSpanId];
}

@end

#pragma mark - Event Interception

@implementation AlibabaCloudRUMEvent
+ (BOOL)accessInstanceVariablesDirectly { return NO; }
- (instancetype)initWithCandidate:(ALRRUMEvent *)candidate {
    self = [super init];
    if (self) _candidate = candidate;
    return self;
}
- (NSString *)eventType { return _candidate.eventType; }
- (NSDictionary<NSString *, id> *)attributes { return _candidate.attributes; }
- (id)attributeForKey:(NSString *)key { return [_candidate attributeForKey:key]; }
@end

@implementation AlibabaCloudCustomEvent
- (NSString *)name { return [(ALRCustomEvent *)_candidate name]; }
- (NSString *)group { return [(ALRCustomEvent *)_candidate group]; }
- (NSString *)snapshots { return [(ALRCustomEvent *)_candidate snapshots]; }
- (BOOL)setName:(NSString *)name { return [(ALRCustomEvent *)_candidate setName:name]; }
- (BOOL)setGroup:(NSString *)group { return [(ALRCustomEvent *)_candidate setGroup:group]; }
- (BOOL)setSnapshots:(NSString *)snapshots { return [(ALRCustomEvent *)_candidate setSnapshots:snapshots]; }
@end

@implementation AlibabaCloudViewEvent
- (NSString *)name { return [(ALRViewEvent *)_candidate name]; }
- (NSString *)snapshots { return [(ALRViewEvent *)_candidate snapshots]; }
- (BOOL)setName:(NSString *)name { return [(ALRViewEvent *)_candidate setName:name]; }
- (BOOL)setSnapshots:(NSString *)snapshots { return [(ALRViewEvent *)_candidate setSnapshots:snapshots]; }
@end

@implementation AlibabaCloudExceptionEvent
- (NSString *)name { return [(ALRExceptionEvent *)_candidate name]; }
- (NSString *)message { return [(ALRExceptionEvent *)_candidate message]; }
- (NSString *)causedBy { return [(ALRExceptionEvent *)_candidate causedBy]; }
- (NSString *)snapshots { return [(ALRExceptionEvent *)_candidate snapshots]; }
- (BOOL)setName:(NSString *)name { return [(ALRExceptionEvent *)_candidate setName:name]; }
- (BOOL)setMessage:(NSString *)message { return [(ALRExceptionEvent *)_candidate setMessage:message]; }
- (BOOL)setCausedBy:(NSString *)causedBy { return [(ALRExceptionEvent *)_candidate setCausedBy:causedBy]; }
- (BOOL)setSnapshots:(NSString *)snapshots { return [(ALRExceptionEvent *)_candidate setSnapshots:snapshots]; }
@end

@implementation AlibabaCloudLongTaskEvent
- (NSString *)message { return [(ALRLongTaskEvent *)_candidate message]; }
- (NSString *)snapshots { return [(ALRLongTaskEvent *)_candidate snapshots]; }
- (BOOL)setMessage:(NSString *)message { return [(ALRLongTaskEvent *)_candidate setMessage:message]; }
- (BOOL)setSnapshots:(NSString *)snapshots { return [(ALRLongTaskEvent *)_candidate setSnapshots:snapshots]; }
@end

@implementation AlibabaCloudActionEvent
- (NSString *)name { return [(ALRActionEvent *)_candidate name]; }
- (NSString *)snapshots { return [(ALRActionEvent *)_candidate snapshots]; }
- (BOOL)setName:(NSString *)name { return [(ALRActionEvent *)_candidate setName:name]; }
- (BOOL)setSnapshots:(NSString *)snapshots { return [(ALRActionEvent *)_candidate setSnapshots:snapshots]; }
@end

@implementation AlibabaCloudApplicationEvent
- (NSString *)snapshots { return [(ALRApplicationEvent *)_candidate snapshots]; }
- (BOOL)setSnapshots:(NSString *)snapshots { return [(ALRApplicationEvent *)_candidate setSnapshots:snapshots]; }
@end

@implementation AlibabaCloudResourceEvent
- (NSString *)name { return [(ALRResourceEvent *)_candidate name]; }
- (NSString *)message { return [(ALRResourceEvent *)_candidate message]; }
- (NSString *)snapshots { return [(ALRResourceEvent *)_candidate snapshots]; }
- (NSNumber *)statusCode { return [(ALRResourceEvent *)_candidate statusCode]; }
- (NSNumber *)success { return [(ALRResourceEvent *)_candidate success]; }
- (BOOL)setName:(NSString *)name { return [(ALRResourceEvent *)_candidate setName:name]; }
- (BOOL)setMessage:(NSString *)message { return [(ALRResourceEvent *)_candidate setMessage:message]; }
- (BOOL)setSnapshots:(NSString *)snapshots { return [(ALRResourceEvent *)_candidate setSnapshots:snapshots]; }
- (BOOL)setResourceResult:(int64_t)statusCode success:(AlibabaCloudResourceSuccess)success {
    return [(ALRResourceEvent *)_candidate setResourceResult:statusCode success:(ALRResourceSuccess)success];
}
@end

@implementation AlibabaCloudEventContext
+ (BOOL)accessInstanceVariablesDirectly { return NO; }
- (instancetype)initWithContext:(ALRInterceptorContext *)context {
    self = [super init];
    if (self) _context = context;
    return self;
}
- (NSString *)source { return _context.source; }
- (NSURLRequest *)request { return _context.request; }
- (NSURLResponse *)response { return _context.response; }
- (NSError *)error { return _context.error; }
- (NSException *)exception { return _context.exception; }
- (UIViewController *)viewController { return _context.viewController; }
- (UIView *)targetView { return _context.targetView; }
- (NSDictionary<NSString *, id> *)originalParameters { return _context.originalParameters; }
- (NSDictionary<NSString *, id> *)recoveredRecord { return _context.recoveredRecord; }
@end

@implementation ALRPublicEventInterceptorAdapter
- (ALRRUMEvent *)interceptEvent:(ALRRUMEvent *)event context:(ALRInterceptorContext *)context {
    // Only sources implemented by this buildpack may enter a public callback.
    AlibabaCloudRUMEvent *candidate = nil;
    if ([event isKindOfClass:[ALRCustomEvent class]]) {
        candidate = [[AlibabaCloudCustomEvent alloc] initWithCandidate:event];
    } else if ([event isKindOfClass:[ALRExceptionEvent class]]) {
        candidate = [[AlibabaCloudExceptionEvent alloc] initWithCandidate:event];
    } else if ([event isKindOfClass:[ALRLongTaskEvent class]]) {
        candidate = [[AlibabaCloudLongTaskEvent alloc] initWithCandidate:event];
    } else if ([event isKindOfClass:[ALRViewEvent class]]) {
        candidate = [[AlibabaCloudViewEvent alloc] initWithCandidate:event];
    } else if ([event isKindOfClass:[ALRActionEvent class]]) {
        candidate = [[AlibabaCloudActionEvent alloc] initWithCandidate:event];
    } else if ([event isKindOfClass:[ALRApplicationEvent class]]) {
        candidate = [[AlibabaCloudApplicationEvent alloc] initWithCandidate:event];
    } else if ([event isKindOfClass:[ALRResourceEvent class]]) {
        candidate = [[AlibabaCloudResourceEvent alloc] initWithCandidate:event];
    } else {
        return event;
    }
    AlibabaCloudEventContext *publicContext = [[AlibabaCloudEventContext alloc] initWithContext:context];
    if (!candidate || !publicContext) return event;
    AlibabaCloudRUMEvent *result = [self.interceptor interceptEvent:candidate context:publicContext];
    if (!result) return nil;
    if (result == candidate) return event;
    // Never convert an invalid nonnil result into a drop or the current event.
    // The core validates pointer identity before inspecting a returned object.
    return (ALRRUMEvent *)(id)result;
}
@end

#pragma mark - AlibabaCloudTracingContext

@implementation AlibabaCloudTracingContext {
    AlibabaCloudTraceContext *_context;
}

- (AlibabaCloudTraceContext *)context {
    return _context;
}

- (instancetype)initWithTraceId:(NSString *)traceId
                         spanId:(NSString *)spanId
                tracingProtocol:(AlibabaCloudTracingProtocol)tracingProtocol {
    self = [super init];
    if (self) {
        _context = [AlibabaCloudTraceContext contextWithTraceId:traceId
                                                        spanId:spanId
                                                      protocol:ACTraceProtocolFromTracingProtocol(tracingProtocol)];
    }
    return self;
}

- (instancetype)initWithTraceId:(NSString *)traceId
                         spanId:(NSString *)spanId
                   parentSpanId:(NSString *)parentSpanId
                        sampled:(BOOL)sampled
                tracingProtocol:(AlibabaCloudTracingProtocol)tracingProtocol {
    self = [super init];
    if (self) {
        _context = [AlibabaCloudTraceContext contextWithTraceId:traceId
                                                        spanId:spanId
                                                  parentSpanId:parentSpanId
                                                       sampled:sampled
                                                      protocol:ACTraceProtocolFromTracingProtocol(tracingProtocol)];
    }
    return self;
}

+ (AlibabaCloudTracingContext *)contextWithTraceId:(NSString *)traceId
                                            spanId:(NSString *)spanId
                                   tracingProtocol:(AlibabaCloudTracingProtocol)tracingProtocol {
    return [[self alloc] initWithTraceId:traceId spanId:spanId tracingProtocol:tracingProtocol];
}

+ (AlibabaCloudTracingContext *)contextWithTraceId:(NSString *)traceId
                                            spanId:(NSString *)spanId
                                      parentSpanId:(NSString *)parentSpanId
                                           sampled:(BOOL)sampled
                                   tracingProtocol:(AlibabaCloudTracingProtocol)tracingProtocol {
    return [[self alloc] initWithTraceId:traceId
                                  spanId:spanId
                            parentSpanId:parentSpanId
                                 sampled:sampled
                         tracingProtocol:tracingProtocol];
}

@end

#pragma mark - AlibabaCloudTracingGenerator

@implementation AlibabaCloudTracingGenerator

+ (NSString *)generateTraceId:(AlibabaCloudTracingProtocol)tracingProtocol {
    return [AlibabaCloudTraceGenerator generateTraceId:ACTraceProtocolFromTracingProtocol(tracingProtocol)];
}

+ (NSString *)generateSpanId:(AlibabaCloudTracingProtocol)tracingProtocol {
    return [AlibabaCloudTraceGenerator generateSpanId:ACTraceProtocolFromTracingProtocol(tracingProtocol)];
}

@end

#pragma mark - AlibabaCloudTracingHeaderWriter

@implementation AlibabaCloudTracingHeaderWriter

+ (NSDictionary<NSString *, NSString *> *)generateHeaders:(AlibabaCloudTracingContext *)tracingContext {
    return [AlibabaCloudTraceHeaderWriter generateHeadersWithContext:tracingContext.context];
}

+ (NSString *)generateSingleHeader:(AlibabaCloudTracingContext *)tracingContext {
    return [AlibabaCloudTraceHeaderWriter generateSingleHeaderWithContext:tracingContext.context];
}

+ (void)setTraceHeader:(NSMutableURLRequest *)request context:(AlibabaCloudTracingContext *)context {
    [AlibabaCloudTraceHeaderWriter setTraceHeaderForRequest:request context:context.context];
}

+ (BOOL)isRequestContainsTraceHeader:(NSURLRequest *)request {
    return [AlibabaCloudTraceHeaderWriter isRequestContainsTraceHeader:request];
}

@end

#pragma mark - AlibabaCloudResourceMeasure

@implementation AlibabaCloudResourceMeasure {
    AlibabaCloudResourceMeasuring *_measuring;
}

- (AlibabaCloudResourceMeasuring *)measuring {
    return _measuring;
}

- (instancetype)init {
    self = [super init];
    if (self) {
        _measuring = [AlibabaCloudResourceMeasuring measuring];
    }
    return self;
}

- (NSUInteger)duration            { return _measuring.duration; }
- (void)setDuration:(NSUInteger)v { _measuring.duration = v; }

- (NSUInteger)size            { return _measuring.size; }
- (void)setSize:(NSUInteger)v { _measuring.size = v; }

- (NSUInteger)connectDuration            { return _measuring.connectDuration; }
- (void)setConnectDuration:(NSUInteger)v { _measuring.connectDuration = v; }

- (NSUInteger)sslDuration            { return _measuring.sslDuration; }
- (void)setSslDuration:(NSUInteger)v { _measuring.sslDuration = v; }

- (NSUInteger)dnsDuration            { return _measuring.dnsDuration; }
- (void)setDnsDuration:(NSUInteger)v { _measuring.dnsDuration = v; }

- (NSUInteger)redirectDuration            { return _measuring.redirectDuration; }
- (void)setRedirectDuration:(NSUInteger)v { _measuring.redirectDuration = v; }

- (NSUInteger)firstByteDuration            { return _measuring.firstByteDuration; }
- (void)setFirstByteDuration:(NSUInteger)v { _measuring.firstByteDuration = v; }

- (NSUInteger)downloadDuration            { return _measuring.downloadDuration; }
- (void)setDownloadDuration:(NSUInteger)v { _measuring.downloadDuration = v; }

+ (AlibabaCloudResourceMeasure *)measure {
    return [[self alloc] init];
}

@end

#pragma mark - Session Replay
@interface AlibabaCloudSessionReplayConfiguration()
@property(nonatomic, strong) ALRSessionReplayConfiguration *configuration;
@end

@implementation AlibabaCloudSessionReplayConfiguration

+ (instancetype)configurationWithSampleRate:(NSUInteger)sampleRate
                        textAndInputPrivacy:(AlibabaCloudTextAndInputPrivacy)textAndInputPrivacy
                               imagePrivacy:(AlibabaCloudImagePrivacy)imagePrivacy
                               touchPrivacy:(AlibabaCloudTouchPrivacy)touchPrivacy {
    return [[AlibabaCloudSessionReplayConfiguration alloc] initWithSampleRate:sampleRate
                                                          textAndInputPrivacy:textAndInputPrivacy
                                                                 imagePrivacy:imagePrivacy
                                                                 touchPrivacy:touchPrivacy];
}

- (instancetype)initWithSampleRate:(NSUInteger)sampleRate
               textAndInputPrivacy:(AlibabaCloudTextAndInputPrivacy)textAndInputPrivacy
                      imagePrivacy:(AlibabaCloudImagePrivacy)imagePrivacy
                      touchPrivacy:(AlibabaCloudTouchPrivacy)touchPrivacy {
    self = [super init];
    if (self) {
        _sampleRate = sampleRate;
        _textAndInputPrivacy = textAndInputPrivacy;
        _imagePrivacy = imagePrivacy;
        _touchPrivacy = touchPrivacy;
        _configuration = [[ALRSessionReplayConfiguration alloc] initWithSampleRate:sampleRate
                                                               textAndInputPrivacy:(ALRSessionReplayTextAndInputPrivacy)textAndInputPrivacy
                                                                      imagePrivacy:(ALRSessionReplayImagePrivacy)imagePrivacy
                                                                      touchPrivacy:(ALRSessionReplayTouchPrivacy)touchPrivacy];
    }

    return self;
}

- (nonnull id)copyWithZone:(nullable NSZone *)zone {
    return [[[self class] allocWithZone:zone]
            initWithSampleRate:self.sampleRate
            textAndInputPrivacy:self.textAndInputPrivacy
            imagePrivacy:self.imagePrivacy
            touchPrivacy:self.touchPrivacy];
}

@end

@implementation AlibabaCloudSessionReplay

+ (BOOL)start {
    return [ALRSessionReplay start];
}

+ (BOOL)startWithConfiguration:(AlibabaCloudSessionReplayConfiguration *)configuration NS_SWIFT_NAME(start(_:)) {
    return [ALRSessionReplay startWithConfiguration:configuration.configuration];
}

+ (BOOL)stop {
    return [ALRSessionReplay stop];
}

+ (BOOL)isStarted {
    return [ALRSessionReplay isStarted];
}

@end
