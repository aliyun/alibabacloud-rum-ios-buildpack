#import <AlibabaCloudRUM/AlibabaCloudRUM.h>

#if defined(SUBCLASS_EXCEPTION)
@interface RejectedExceptionSubclass : AlibabaCloudExceptionEvent
@end
#endif

@interface RejectedExceptionConsumer : NSObject
+ (void)useInvalidAPI:(AlibabaCloudExceptionEvent *)exception base:(AlibabaCloudRUMEvent *)base;
@end
@implementation RejectedExceptionConsumer
+ (void)useInvalidAPI:(AlibabaCloudExceptionEvent *)exception base:(AlibabaCloudRUMEvent *)base {
#if defined(CONSTRUCT_EXCEPTION)
    (void)[[AlibabaCloudExceptionEvent alloc] init];
#elif defined(NEW_EXCEPTION)
    (void)[AlibabaCloudExceptionEvent new];
#elif defined(CLONE_EXCEPTION)
    (void)[exception newEvent];
#elif defined(EXCEPTION_SET_TYPE)
    [exception setType:@"changed"];
#elif defined(EXCEPTION_SET_STACK)
    [exception setStacktrace:@"changed"];
#elif defined(EXCEPTION_SET_IMAGES)
    [exception setBinaryImages:@"changed"];
#elif defined(EXCEPTION_SET_THREAD)
    [exception setThreadId:@"changed"];
#elif defined(EXCEPTION_SET_VIEW)
    [exception setViewName:@"changed"];
#elif defined(EXCEPTION_SET_TRACE)
    [exception setTraceId:@"changed"];
#elif defined(EXCEPTION_SET_EVENT_TYPE)
    [exception setEventType:@"resource"];
#elif defined(EXCEPTION_SET_GROUP)
    [exception setGroup:@"changed"];
#elif defined(EXCEPTION_RESOURCE_RESULT)
    [exception setResourceResult:200 success:AlibabaCloudResourceSuccessSuccess];
#elif defined(EXCEPTION_WRITE_ATTRIBUTE)
    [exception setAttribute:@"exception.name" value:@"invalid"];
#elif defined(EXCEPTION_REMOVE_ATTRIBUTE)
    [exception removeAttribute:@"exception.snapshots"];
#elif defined(EXCEPTION_CLEAR_NAME)
    [exception clearName];
#elif defined(EXCEPTION_CLEAR_MESSAGE)
    [exception clearMessage];
#elif defined(EXCEPTION_CLEAR_CAUSED_BY)
    [exception clearCausedBy];
#elif defined(EXCEPTION_CLEAR_SNAPSHOTS)
    [exception clearSnapshots];
#elif defined(EXCEPTION_ASSIGN_ATTRIBUTES)
    exception.attributes = @{};
#elif defined(EXCEPTION_MUTATE_ATTRIBUTES)
    [exception.attributes setObject:@"changed" forKey:@"exception.name"];
#elif defined(BASE_EXCEPTION_NAME)
    [base setName:@"invalid"];
#elif defined(BASE_EXCEPTION_MESSAGE)
    [base setMessage:@"invalid"];
#elif defined(BASE_EXCEPTION_CAUSED_BY)
    [base setCausedBy:@"invalid"];
#elif defined(BASE_EXCEPTION_SNAPSHOTS)
    [base setSnapshots:@"invalid"];
#endif
}
@end
