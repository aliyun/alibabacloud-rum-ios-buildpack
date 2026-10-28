#import <Foundation/Foundation.h>
@class UIViewController, UIView;
NS_ASSUME_NONNULL_BEGIN

/// An isolated business output candidate. Only returning this instance commits edits.
@interface ALRRUMEvent : NSObject
@property(nonatomic, copy, readonly) NSString *eventType;
@property(nonatomic, copy, readonly) NSDictionary<NSString *, id> *attributes;
- (nullable id)attributeForKey:(NSString *)key NS_SWIFT_NAME(attribute(forKey:));
- (instancetype)init NS_UNAVAILABLE;
+ (instancetype)new NS_UNAVAILABLE;
@end

@interface ALRViewEvent : ALRRUMEvent
@property(nonatomic, copy, readonly, nullable) NSString *name;
@property(nonatomic, copy, readonly, nullable) NSString *snapshots;
- (BOOL)setName:(nullable NSString *)name;
- (BOOL)setSnapshots:(nullable NSString *)snapshots;
@end

@interface ALRExceptionEvent : ALRRUMEvent
@property(nonatomic, copy, readonly, nullable) NSString *name;
@property(nonatomic, copy, readonly, nullable) NSString *message;
@property(nonatomic, copy, readonly, nullable) NSString *causedBy;
@property(nonatomic, copy, readonly, nullable) NSString *snapshots;
- (BOOL)setName:(nullable NSString *)name;
- (BOOL)setMessage:(nullable NSString *)message;
- (BOOL)setCausedBy:(nullable NSString *)causedBy;
- (BOOL)setSnapshots:(nullable NSString *)snapshots;
@end

@interface ALRLongTaskEvent : ALRRUMEvent
@property(nonatomic, copy, readonly, nullable) NSString *message;
@property(nonatomic, copy, readonly, nullable) NSString *snapshots;
- (BOOL)setMessage:(nullable NSString *)message;
- (BOOL)setSnapshots:(nullable NSString *)snapshots;
@end

@interface ALRActionEvent : ALRRUMEvent
@property(nonatomic, copy, readonly, nullable) NSString *name;
@property(nonatomic, copy, readonly, nullable) NSString *snapshots;
- (BOOL)setName:(nullable NSString *)name;
- (BOOL)setSnapshots:(nullable NSString *)snapshots;
@end

@interface ALRApplicationEvent : ALRRUMEvent
@property(nonatomic, copy, readonly, nullable) NSString *snapshots;
- (BOOL)setSnapshots:(nullable NSString *)snapshots;
@end

@interface ALRCustomEvent : ALRRUMEvent
@property(nonatomic, copy, readonly, nullable) NSString *name;
@property(nonatomic, copy, readonly, nullable) NSString *group;
@property(nonatomic, copy, readonly, nullable) NSString *snapshots;
- (BOOL)setName:(nullable NSString *)name;
- (BOOL)setGroup:(nullable NSString *)group;
- (BOOL)setSnapshots:(nullable NSString *)snapshots;
@end

typedef NS_ENUM(NSInteger, ALRResourceSuccess) {
    ALRResourceSuccessUnknown = -1,
    ALRResourceSuccessFailed = 0,
    ALRResourceSuccessSuccess = 1,
};

@interface ALRResourceEvent : ALRRUMEvent
@property(nonatomic, copy, readonly, nullable) NSString *name;
@property(nonatomic, copy, readonly, nullable) NSString *message;
@property(nonatomic, copy, readonly, nullable) NSString *snapshots;
@property(nonatomic, strong, readonly, nullable) NSNumber *statusCode;
@property(nonatomic, strong, readonly, nullable) NSNumber *success;
- (BOOL)setName:(nullable NSString *)name;
- (BOOL)setMessage:(nullable NSString *)message;
- (BOOL)setSnapshots:(nullable NSString *)snapshots;
- (BOOL)setResourceResult:(int64_t)statusCode success:(ALRResourceSuccess)success;
@end

/// Native references are borrowed only during interceptEvent:context:.
/// The callback runs synchronously on the capture thread. Access UIKit objects only on the main thread.
@interface ALRInterceptorContext : NSObject
@property(nonatomic, copy, readonly) NSString *source;
@property(nonatomic, strong, readonly, nullable) NSURLRequest *request;
@property(nonatomic, strong, readonly, nullable) NSURLResponse *response;
@property(nonatomic, strong, readonly, nullable) NSError *error;
@property(nonatomic, strong, readonly, nullable) NSException *exception;
@property(nonatomic, strong, readonly, nullable) UIViewController *viewController;
@property(nonatomic, strong, readonly, nullable) UIView *targetView;
@property(nonatomic, strong, readonly, nullable) NSDictionary *originalParameters;
@property(nonatomic, strong, readonly, nullable) NSDictionary *recoveredRecord;
- (instancetype)init NS_UNAVAILABLE;
+ (instancetype)new NS_UNAVAILABLE;
@end

@protocol ALREventInterceptor <NSObject>
/// Do not call APIs that create business events inside this callback.
- (nullable ALRRUMEvent *)interceptEvent:(ALRRUMEvent *)event
                                 context:(ALRInterceptorContext *)context NS_SWIFT_NAME(intercept(_:context:));
@end
NS_ASSUME_NONNULL_END
