// Copyright 2026 Alibaba Cloud Authors. Licensed under the Apache License, Version 2.0.
#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

typedef NS_ENUM(NSInteger, ALRSelfMonitorContextBinding) {
    ALRSelfMonitorContextBindingEventTime = 0
};

typedef NS_ENUM(NSInteger, ALRSelfMonitorSubmitStatus) {
    ALRSelfMonitorSubmitStatusAccepted = 0,
    ALRSelfMonitorSubmitStatusIgnored,
    ALRSelfMonitorSubmitStatusRejected
};

/// Versioned integration ABI for controlled SDK adapters; not a business log API.
@interface ALRSelfMonitorLogEvent : NSObject
@property(nonatomic, copy, readonly) NSString *appType;
@property(nonatomic, assign, readonly) uint64_t timestampMs;
@property(nonatomic, assign, readonly) ALRSelfMonitorContextBinding contextBinding;
@property(nonatomic, copy, readonly) NSString *level;
@property(nonatomic, copy, readonly) NSString *type;
@property(nonatomic, copy, readonly) NSString *content;
@property(nonatomic, copy, readonly, nullable) NSString *stack;
- (instancetype)initWithAppType:(NSString *)appType
                    timestampMs:(uint64_t)timestampMs
                 contextBinding:(ALRSelfMonitorContextBinding)contextBinding
                          level:(NSString *)level
                           type:(NSString *)type
                        content:(NSString *)content
                          stack:(nullable NSString *)stack NS_DESIGNATED_INITIALIZER;
- (instancetype)init NS_UNAVAILABLE;
+ (instancetype)new NS_UNAVAILABLE;
@end

@interface ALRSelfMonitorSubmitResult : NSObject
@property(nonatomic, assign, readonly) ALRSelfMonitorSubmitStatus status;
/// Accepted has no reason; all other reasons are stable contract tokens.
@property(nonatomic, copy, readonly, nullable) NSString *reason;
- (instancetype)init NS_UNAVAILABLE;
+ (instancetype)new NS_UNAVAILABLE;
@end

@interface ALRSelfMonitorIntegration : NSObject
/// Synchronous producer admission, without waiting for flush or network delivery.
+ (ALRSelfMonitorSubmitResult *)submitLogEvent:(ALRSelfMonitorLogEvent *)event;
@end

NS_ASSUME_NONNULL_END
