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

#pragma mark - Trace Support -

typedef NS_ENUM(NSInteger, AlibabaCloudTraceProtocol) {
    AlibabaCloud_W3C,
    AlibabaCloud_SkywalkingV3
};

@interface AlibabaCloudTraceContext : NSObject
+ (instancetype)contextWithTraceId:(NSString *)traceId
                            spanId:(NSString *)spanId
                          protocol:(AlibabaCloudTraceProtocol)protocol;

+ (instancetype)contextWithTraceId:(NSString *)traceId
                            spanId:(NSString *)spanId
                      parentSpanId:(NSString *)parentSpanId
                           sampled:(BOOL)sampled
                          protocol:(AlibabaCloudTraceProtocol)protocol;
@end

@interface AlibabaCloudTraceHeaderWriter : NSObject
+ (NSDictionary<NSString *, NSString *> *)generateHeadersWithContext:(AlibabaCloudTraceContext *)context;
+ (nullable NSString *)generateSingleHeaderWithContext:(AlibabaCloudTraceContext *)context;
+ (void)setTraceHeaderForRequest:(NSMutableURLRequest *)request context:(AlibabaCloudTraceContext *)context;
+ (BOOL)isRequestContainsTraceHeader:(NSURLRequest *)request;
@end

@interface AlibabaCloudTraceGenerator : NSObject
+ (NSString *)generateTraceId:(AlibabaCloudTraceProtocol)traceProtocol;
+ (NSString *)generateSpanId:(AlibabaCloudTraceProtocol)traceProtocol;
@end

/// Protocol for providing filtered request/response snapshots for resource capture.
///
/// Implement this protocol to control which headers and body content are collected
/// for network resource monitoring. This is an opt-in feature - snapshots are only
/// captured when a provider is configured.
///
/// @note Return nil from any method to skip capturing that specific field.
/// @note The SDK applies size limits: headers are truncated at 64KB, body at 150KB.
/// @note You are responsible for filtering sensitive data (e.g., passwords, tokens)
///       before returning values from these methods.
@protocol AlibabaCloudResourceSnapshotProvider <NSObject>
@required

/// Returns filtered request headers to be captured.
/// Called at request start time when the request is being sent.
/// @param request The URL request being sent
/// @return Dictionary of header name-value pairs to capture, or nil to skip
- (NSDictionary<NSString *, NSString *> * _Nullable)requestHeadersForRequest:(NSURLRequest *)request;

/// Returns filtered request body to be captured.
/// Called at request start time when HTTPBody/HTTPBodyStream is still available.
/// @param request The URL request being sent
/// @return Request body string to capture, or nil to skip
- (NSString * _Nullable)requestBodyForRequest:(NSURLRequest *)request;

/// Returns filtered response headers to be captured.
/// Called at request completion time.
/// @param request The original URL request
/// @param response The URL response (may be nil on error)
/// @return Dictionary of header name-value pairs to capture, or nil to skip
- (NSDictionary<NSString *, NSString *> * _Nullable)responseHeadersForRequest:(NSURLRequest *)request
                                                                     response:(NSURLResponse * _Nullable)response;

/// Returns filtered response body to be captured.
/// Called at request completion time with accumulated response data.
/// @param request The original URL request
/// @param response The URL response (may be nil on error)
/// @param data The accumulated response body data (may be nil)
/// @param error The error if request failed (may be nil on success)
/// @return Response body string to capture, or nil to skip
- (NSString * _Nullable)responseBodyForRequest:(NSURLRequest *)request
                                      response:(NSURLResponse * _Nullable)response
                                          data:(NSData * _Nullable)data
                                         error:(NSError * _Nullable)error;
@end

@interface AlibabaCloudResourceMeasuring : NSObject
@property(atomic, assign) NSUInteger duration;
@property(atomic, assign) NSUInteger size;
@property(atomic, assign) NSUInteger connectDuration;
@property(atomic, assign) NSUInteger sslDuration;
@property(atomic, assign) NSUInteger dnsDuration;
@property(atomic, assign) NSUInteger redirectDuration;
@property(atomic, assign) NSUInteger firstByteDuration;
@property(atomic, assign) NSUInteger downloadDuration;

+ (instancetype)measuring;
@end

@interface AlibabaCloudRUMSDK : NSObject

+ (void)setDebuggable:(BOOL)debuggable;
+ (BOOL)start:(NSString *)configAddress workspace:(NSString *)workspace serviceId:(NSString *)serviceId;
+ (BOOL)stop;
+ (BOOL)isStarted;

/// Sets the resource snapshot provider. This method should be called before `start` is invoked.
/// - Parameter provider: The provider instance for request/response snapshots.
+ (void)setResourceSnapshotProvider:(id<AlibabaCloudResourceSnapshotProvider> _Nullable)provider;

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
+ (BOOL)reportCustomResource:(NSString *)type
                     success:(BOOL)success
                         url:(NSString *)url
                      method:(NSString *)method
                  statusCode:(NSInteger)code
                errorMessage:(NSString * _Nullable)errorMessage
                    provider:(NSString * _Nullable)provider
                     tracing:(AlibabaCloudTraceContext * _Nullable)tracing
                   measuring:(AlibabaCloudResourceMeasuring * _Nullable)measuring;

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

#pragma mark - Flutter -
+ (void)flutterReportException:(NSString *)exceptionType
                       causeBy:(NSString *)causeBy
                     errorDump:(NSString *)errorDump;
+ (void)flutterReportCustomException:(NSString *)exceptionType
                             causeBy:(NSString *)causeBy
                           errorDump:(NSString *)errorDump;
+ (void)flutterReportResource:(NSURL *)url
                       method:(NSString *)method
                  connectTime:(NSInteger)connectTime
                 responseTime:(NSInteger)responseTime
                         type:(NSString *)type
             responseDataSize:(NSInteger)responseDataSize
                    errorCode:(NSInteger)errorCode
                 errorMessage:(NSString *)errorMessage
               requestHeaders:(NSDictionary *)requestHeaders
              responseHeaders:(NSDictionary *)responseHeaders
                    snapshots:(NSString * _Nullable)snapshots;
+ (void)flutterReportView:(NSString *)viewId
                 loadTime:(NSInteger)loadTime
                    enter:(BOOL)enter
                     name:(NSString *)name
                   method:(NSString *)method;
+ (void)flutterReportAction:(NSString *)type
                       name:(NSString *)name
                       info:(NSString *)info;
+ (NSDictionary *)getNetworkTraceConfig;

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
