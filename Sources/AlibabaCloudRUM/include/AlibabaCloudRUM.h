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
#import <UIKit/UIKit.h>
#include <stdint.h>

NS_ASSUME_NONNULL_BEGIN

#pragma mark - Event Interception

/// A callback-scoped candidate. Return this exact instance to commit edits.
/// Attribute containers and nested values are isolated from SDK storage.
@interface AlibabaCloudRUMEvent : NSObject
@property(nonatomic, copy, readonly) NSString *eventType;
@property(nonatomic, copy, readonly) NSDictionary<NSString *, id> *attributes;
- (nullable id)attributeForKey:(NSString *)key NS_SWIFT_NAME(attribute(forKey:));
- (instancetype)init NS_UNAVAILABLE;
+ (instancetype)new NS_UNAVAILABLE;
@end

/// A native Custom event, metric, or business log. Other fields remain read-only.
__attribute__((objc_subclassing_restricted))
@interface AlibabaCloudCustomEvent : AlibabaCloudRUMEvent
@property(nonatomic, copy, readonly, nullable) NSString *name;
@property(nonatomic, copy, readonly, nullable) NSString *group;
@property(nonatomic, copy, readonly, nullable) NSString *snapshots;
/// Returns NO for nil or an expired candidate, preserving earlier valid edits.
- (BOOL)setName:(NSString *)name NS_SWIFT_NAME(setName(_:));
- (BOOL)setGroup:(NSString *)group NS_SWIFT_NAME(setGroup(_:));
/// Replaces the whole string; empty, whitespace and non-JSON text are accepted.
/// Does not rerun snapshot providers. Passing nil fails without deleting data.
- (BOOL)setSnapshots:(NSString *)snapshots NS_SWIFT_NAME(setSnapshots(_:));
@end

/// A native custom, fatal or OOM Exception formed at its safe report recovery point.
/// Identity, type, stack, binary images and associations remain read-only.
/// Returning nil finishes and drops only this output; report cleanup still runs.
__attribute__((objc_subclassing_restricted))
@interface AlibabaCloudExceptionEvent : AlibabaCloudRUMEvent
@property(nonatomic, copy, readonly, nullable) NSString *name;
@property(nonatomic, copy, readonly, nullable) NSString *message;
@property(nonatomic, copy, readonly, nullable) NSString *causedBy;
@property(nonatomic, copy, readonly, nullable) NSString *snapshots;
/// Each setter changes only its named field. Empty/whitespace strings are accepted.
/// Nil or an expired candidate returns NO, preserving earlier successful edits.
- (BOOL)setName:(NSString *)name NS_SWIFT_NAME(setName(_:));
- (BOOL)setMessage:(NSString *)message NS_SWIFT_NAME(setMessage(_:));
- (BOOL)setCausedBy:(NSString *)causedBy NS_SWIFT_NAME(setCausedBy(_:));
/// Replaces the whole string without JSON validation or rerunning providers.
- (BOOL)setSnapshots:(NSString *)snapshots NS_SWIFT_NAME(setSnapshots(_:));
@end

/// A native LongTask parsed from a stored diagnostic report at the safe point.
/// The wire type stays longTask; only longtask.message and longtask.snapshots
/// are writable. Duration, identity, associations, stack and images stay read-only.
/// Returning nil drops only this output; report cleanup and later capture continue.
__attribute__((objc_subclassing_restricted))
@interface AlibabaCloudLongTaskEvent : AlibabaCloudRUMEvent
@property(nonatomic, copy, readonly, nullable) NSString *message;
@property(nonatomic, copy, readonly, nullable) NSString *snapshots;
/// Empty/whitespace strings are accepted. Nil or an expired candidate returns NO,
/// preserving earlier successful edits and without changing the observed duration.
- (BOOL)setMessage:(NSString *)message NS_SWIFT_NAME(setMessage(_:));
/// Replaces the whole string without JSON validation or rerunning providers.
/// Empty/whitespace strings are accepted; nil fails without deleting data.
- (BOOL)setSnapshots:(NSString *)snapshots NS_SWIFT_NAME(setSnapshots(_:));
@end

/// A supported native View snapshot. Identity, association and timing stay read-only.
/// Returning nil falls back to the original View rather than dropping it.
/// Includes view.type=replay metadata after records upload; binary uploads are unchanged.
__attribute__((objc_subclassing_restricted))
@interface AlibabaCloudViewEvent : AlibabaCloudRUMEvent
@property(nonatomic, copy, readonly, nullable) NSString *name;
@property(nonatomic, copy, readonly, nullable) NSString *snapshots;
/// Returns NO for nil or an expired candidate, preserving earlier valid edits.
/// A committed name updates the active view only while its identity still matches.
- (BOOL)setName:(NSString *)name NS_SWIFT_NAME(setName(_:));
/// Replaces the whole string; empty, whitespace and non-JSON text are accepted.
/// Does not rerun snapshot providers. Passing nil fails without deleting data.
- (BOOL)setSnapshots:(NSString *)snapshots NS_SWIFT_NAME(setSnapshots(_:));
@end

/// A supported native Action snapshot. Identity, association, type and timing
/// remain read-only. Returning nil drops only this output, preserving action cleanup.
__attribute__((objc_subclassing_restricted))
@interface AlibabaCloudActionEvent : AlibabaCloudRUMEvent
@property(nonatomic, copy, readonly, nullable) NSString *name;
@property(nonatomic, copy, readonly, nullable) NSString *snapshots;
/// Returns NO for nil or an expired candidate, preserving earlier valid edits.
- (BOOL)setName:(NSString *)name NS_SWIFT_NAME(setName(_:));
/// Replaces the whole string; empty, whitespace and non-JSON text are accepted.
/// Does not rerun snapshot providers. Passing nil fails without deleting data.
- (BOOL)setSnapshots:(NSString *)snapshots NS_SWIFT_NAME(setSnapshots(_:));
@end

/// A native cold-start or foreground/background Application snapshot.
/// Only application.snapshots is writable. State, duration, start.*, thread.*,
/// other application.* and app.* remain available through the base read-only API.
/// Returning nil drops this output without changing lifecycle/session cleanup.
__attribute__((objc_subclassing_restricted))
@interface AlibabaCloudApplicationEvent : AlibabaCloudRUMEvent
@property(nonatomic, copy, readonly, nullable) NSString *snapshots;
/// Replaces the whole string; empty, whitespace and non-JSON text are accepted.
/// Does not rerun snapshot providers. Passing nil fails without deleting data
/// or reverting earlier edits. An expired candidate also returns NO.
- (BOOL)setSnapshots:(NSString *)snapshots NS_SWIFT_NAME(setSnapshots(_:));
@end

typedef NS_ENUM(NSInteger, AlibabaCloudResourceSuccess) {
    AlibabaCloudResourceSuccessUnknown NS_SWIFT_NAME(unknown) = -1,
    AlibabaCloudResourceSuccessFailed NS_SWIFT_NAME(failed) = 0,
    AlibabaCloudResourceSuccessSuccess NS_SWIFT_NAME(success) = 1,
};

/// A supported native Resource (manual, URLSession data completion/delegate/download, or
/// NSURLConnection synchronous/completion/delegate).
/// Identity, URL, tracing and view fields
/// remain read-only. Numeric getters preserve exact integers; missing or
/// unrepresentable values return nil, and unknown success values are not remapped.
__attribute__((objc_subclassing_restricted))
@interface AlibabaCloudResourceEvent : AlibabaCloudRUMEvent
@property(nonatomic, copy, readonly, nullable) NSString *name;
@property(nonatomic, copy, readonly, nullable) NSString *message;
@property(nonatomic, copy, readonly, nullable) NSString *snapshots;
@property(nonatomic, strong, readonly, nullable) NSNumber *statusCode;
@property(nonatomic, strong, readonly, nullable) NSNumber *success;
/// Returns NO for nil or an expired candidate, preserving earlier valid edits.
- (BOOL)setName:(NSString *)name NS_SWIFT_NAME(setName(_:));
- (BOOL)setMessage:(NSString *)message NS_SWIFT_NAME(setMessage(_:));
/// Replaces the whole string; empty, whitespace and non-JSON text are accepted.
/// Does not rerun snapshot providers. Passing nil fails without deleting data.
- (BOOL)setSnapshots:(NSString *)snapshots NS_SWIFT_NAME(setSnapshots(_:));
/// Atomically sets both fields. Accepts the full signed 64-bit status code range,
/// including negative values and business codes. Invalid success returns NO
/// without changing either field; no HTTP validation or success inference occurs.
- (BOOL)setResourceResult:(int64_t)statusCode
                  success:(AlibabaCloudResourceSuccess)success
    NS_SWIFT_NAME(setResourceResult(_:success:));
@end

/// Native references are borrowed only during the synchronous callback.
/// Do not retain native objects or send them to another thread. Object slots
/// become nil after the callback. Read source to identify the capture path.
/// ios.urlsession.data.completion borrows session/task/request/response/error/data
/// when present. Request is the task's currentRequest; response/error/NSData are
/// the original completion arguments. The host completion runs before interception
/// on the same callback thread. This source covers data tasks, not upload tasks.
/// URLSession delegate/download parameters borrow session/task/request/response/error
/// when present; download completion additionally borrows location. Delegate
/// completion does not retain an earlier download location or assemble body data.
/// NSURLConnection synchronous/completion parameters borrow request/response/error
/// and the original NSData under the data key, when present; neither source
/// invents a connection. Delegate parameters borrow connection/request/response/error
/// only; they do not assemble data from chunks or expose a provider as input.
/// Nil values are omitted. References are independent of SnapshotProvider;
/// headers/body are not read, copied, parsed, cached or reported for this context.
/// ios.view.controller borrows the real viewController in both its typed slot
/// and originalParameters; it does not inspect or copy the view hierarchy.
/// ios.replay.metadata borrows the existing metadata in originalParameters["metadata"]
/// after records upload, without recreating UI or networking objects.
/// Supported native Actions borrow targetView/viewController only when available.
/// UI references may be nil. Access them only on the callback's current thread;
/// the SDK does not switch to the main thread or prepare missing UI objects.
/// ios.application.launch and ios.application.state also run without UI objects;
/// source identifies the producer and all available references remain borrowed.
/// ios.exception.custom borrows the already parsed original report in recoveredRecord.
/// originalParameters and live object slots are nil; processing can occur at a later
/// launch and is not promised before setCustomException returns.
/// ios.exception.nsexception/cpp/signal/mach/deadlock/watchdog borrow the original
/// fatal recovery report at the same safe parser. No callback runs in a signal or
/// fatal handler, and no live object from the terminated process is reconstructed.
/// ios.exception.oom borrows the already parsed OOM diagnostic record at normal
/// issue recovery. Live object slots and originalParameters are nil. A nil return
/// ends this output and still completes the issue, deduplication and record cleanup.
/// ios.longtask borrows its parsed diagnostic report in recoveredRecord at the safe
/// report parser. originalParameters and live object slots are nil; this is not the
/// blocked main thread or the stack-sampling site. Borrowed objects expire on return.
__attribute__((objc_subclassing_restricted))
@interface AlibabaCloudEventContext : NSObject
@property(nonatomic, copy, readonly) NSString *source;
@property(nonatomic, strong, readonly, nullable) NSURLRequest *request;
@property(nonatomic, strong, readonly, nullable) NSURLResponse *response;
@property(nonatomic, strong, readonly, nullable) NSError *error;
@property(nonatomic, strong, readonly, nullable) NSException *exception;
@property(nonatomic, strong, readonly, nullable) UIViewController *viewController;
@property(nonatomic, strong, readonly, nullable) UIView *targetView;
/// For ios.urlsession.data.completion: session is NSURLSession, task is the actual
/// NSURLSessionDataTask, and request/response/error/data use their Foundation types.
/// The original NSData may be empty, partial or absent on failure; no body is read
/// or assembled to fill missing input, and SnapshotProvider is not required.
/// For ios.urlconnection.*: request is NSURLRequest, response is NSURLResponse,
/// error is NSError, data is NSData (synchronous/completion only), and connection
/// is NSURLConnection (delegate only). Each key is absent when its value is nil.
/// Read without modifying inputs; availability ends when the callback returns.
@property(nonatomic, strong, readonly, nullable) NSDictionary<NSString *, id> *originalParameters;
@property(nonatomic, strong, readonly, nullable) NSDictionary<NSString *, id> *recoveredRecord;
- (instancetype)init NS_UNAVAILABLE;
+ (instancetype)new NS_UNAVAILABLE;
@end

@protocol AlibabaCloudEventInterceptor <NSObject>
/// Runs synchronously on the capture path's current thread for sampled Custom,
/// supported native Resource/Action/Application, native View (including Replay metadata), custom or
/// fatal/OOM recovery Exception and LongTask snapshots. Report callbacks run synchronously
/// at the safe recovery point's current thread, outside internal locks, after storage.
/// Replay metadata uses its safe post-upload thread; submission retries reuse the fixed result.
/// Register before start to process cold-start output. Rules may be replaced or
/// cleared at any lifecycle stage; each callback uses the current registration.
/// Return the supplied candidate to commit. Nil drops supported non-View output;
/// View output is retained using the original snapshot.
/// A different instance or a catchable exception falls back to the original.
/// Do not call event-generating SDK APIs here (Custom event/log/metric,
/// exception or Resource reporting). Registering/replacing/clearing is allowed.
- (nullable AlibabaCloudRUMEvent *)interceptEvent:(AlibabaCloudRUMEvent *)event
                                         context:(AlibabaCloudEventContext *)context
    NS_SWIFT_NAME(intercept(_:context:));
@end

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
    AlibabaCloudModuleOOM           = 12,
    AlibabaCloudModuleSessionReplay = 13,
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

#pragma mark - Session Replay

typedef NS_ENUM(NSUInteger, AlibabaCloudTextAndInputPrivacy) {
    AlibabaCloudTextAndInputPrivacyMaskAll = 0,
    AlibabaCloudTextAndInputPrivacyMaskAllInputs = 1,
    AlibabaCloudTextAndInputPrivacyMaskSensitiveInputs = 2,
};

typedef NS_ENUM(NSUInteger, AlibabaCloudImagePrivacy) {
    AlibabaCloudImagePrivacyMaskAll = 0,
    AlibabaCloudImagePrivacyMaskNonBundledOnly = 1,
    AlibabaCloudImagePrivacyMaskNone = 2,
};

typedef NS_ENUM(NSUInteger, AlibabaCloudTouchPrivacy) {
    AlibabaCloudTouchPrivacyHide = 0,
    AlibabaCloudTouchPrivacyShow = 1,
};

@interface AlibabaCloudSessionReplayConfiguration : NSObject<NSCopying>

@property(nonatomic, assign, readonly) NSUInteger sampleRate;
@property(nonatomic, assign, readonly) AlibabaCloudTextAndInputPrivacy textAndInputPrivacy;
@property(nonatomic, assign, readonly) AlibabaCloudImagePrivacy imagePrivacy;
@property(nonatomic, assign, readonly) AlibabaCloudTouchPrivacy touchPrivacy;

+ (instancetype)configurationWithSampleRate:(NSUInteger)sampleRate
                        textAndInputPrivacy:(AlibabaCloudTextAndInputPrivacy)textAndInputPrivacy
                               imagePrivacy:(AlibabaCloudImagePrivacy)imagePrivacy
                               touchPrivacy:(AlibabaCloudTouchPrivacy)touchPrivacy;
- (instancetype)initWithSampleRate:(NSUInteger)sampleRate
               textAndInputPrivacy:(AlibabaCloudTextAndInputPrivacy)textAndInputPrivacy
                      imagePrivacy:(AlibabaCloudImagePrivacy)imagePrivacy
                      touchPrivacy:(AlibabaCloudTouchPrivacy)touchPrivacy NS_DESIGNATED_INITIALIZER;
- (instancetype)init NS_UNAVAILABLE;
+ (instancetype)new NS_UNAVAILABLE;

@end

@interface AlibabaCloudSessionReplay : NSObject

/// Starts Session Replay with the latest remote sampling and privacy settings.
/// The Session Replay module must have been enabled before RUM initialization.
/// Calling this method again with the same configuration mode is idempotent.
/// Call this method on the main thread; otherwise it returns NO.
+ (BOOL)start;

/// Starts Session Replay with local sampling and privacy settings. Remote
/// storage settings remain effective. A different configuration is rejected
/// while recording; call `stop` before starting with new settings. Call this
/// method on the main thread; otherwise it returns NO.
+ (BOOL)startWithConfiguration:(AlibabaCloudSessionReplayConfiguration *)configuration NS_SWIFT_NAME(start(_:));

/// Stops accepting new replay input and returns without waiting for background
/// sealing, durable handoff, or upload. Already accepted data remains eligible
/// for normal asynchronous upload. Call this method on the main thread;
/// otherwise it returns NO.
+ (BOOL)stop;

/// Returns the latest explicit user intent, including a start pending an older
/// generation's durable handoff. It does not indicate sampling or upload state.
+ (BOOL)isStarted;

@end

#pragma mark - Forward Declarations

@class AlibabaCloudTracingContext;
@class AlibabaCloudResourceMeasure;

#pragma mark - AlibabaCloudResourceProvider Protocol

@protocol AlibabaCloudResourceSnapshotProvider;

@protocol AlibabaCloudResourceProvider <AlibabaCloudResourceSnapshotProvider>
@end

#pragma mark - AlibabaCloudRUM

@interface AlibabaCloudRUM : NSObject

/// Registers, replaces, or clears (nil) at any lifecycle stage. The latest
/// registration is read at each actual callback entry. NO preserves the old
/// registration. Registration does not restart the SDK or replay old events.
+ (BOOL)setEventInterceptor:(nullable id<AlibabaCloudEventInterceptor>)interceptor
    NS_SWIFT_NAME(setEventInterceptor(_:));

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

/// Saves a real custom exception report along the existing reporting flow.
/// Interception occurs later at its safe report-processing point, possibly on
/// a subsequent launch; no callback-before-return guarantee is provided.
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
