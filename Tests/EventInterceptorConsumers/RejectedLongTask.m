#import <AlibabaCloudRUM/AlibabaCloudRUM.h>

#if defined(SUBCLASS_LONGTASK)
@interface RejectedLongTaskSubclass : AlibabaCloudLongTaskEvent
@end
#endif

@interface RejectedLongTaskConsumer : NSObject
+ (void)useInvalidAPI:(AlibabaCloudLongTaskEvent *)longTask base:(AlibabaCloudRUMEvent *)base;
@end
@implementation RejectedLongTaskConsumer
+ (void)useInvalidAPI:(AlibabaCloudLongTaskEvent *)longTask base:(AlibabaCloudRUMEvent *)base {
#if defined(CONSTRUCT_LONGTASK)
    (void)[[AlibabaCloudLongTaskEvent alloc] init];
#elif defined(NEW_LONGTASK)
    (void)[AlibabaCloudLongTaskEvent new];
#elif defined(CLONE_LONGTASK)
    (void)[longTask newEvent];
#elif defined(LONGTASK_SET_NAME)
    [longTask setName:@"changed"];
#elif defined(LONGTASK_SET_DURATION)
    [longTask setDuration:1];
#elif defined(LONGTASK_SET_STACK)
    [longTask setStacktrace:@"changed"];
#elif defined(LONGTASK_SET_IMAGES)
    [longTask setBinaryImages:@"changed"];
#elif defined(LONGTASK_SET_THREAD)
    [longTask setThreadId:@"changed"];
#elif defined(LONGTASK_SET_VIEW)
    [longTask setViewName:@"changed"];
#elif defined(LONGTASK_SET_TRACE)
    [longTask setTraceId:@"changed"];
#elif defined(LONGTASK_SET_EVENT_TYPE)
    [longTask setEventType:@"resource"];
#elif defined(LONGTASK_SET_GROUP)
    [longTask setGroup:@"changed"];
#elif defined(LONGTASK_SET_CAUSED_BY)
    [longTask setCausedBy:@"changed"];
#elif defined(LONGTASK_RESOURCE_RESULT)
    [longTask setResourceResult:200 success:AlibabaCloudResourceSuccessSuccess];
#elif defined(LONGTASK_WRITE_ATTRIBUTE)
    [longTask setAttribute:@"longtask.message" value:@"invalid"];
#elif defined(LONGTASK_REMOVE_ATTRIBUTE)
    [longTask removeAttribute:@"longtask.snapshots"];
#elif defined(LONGTASK_CLEAR_MESSAGE)
    [longTask clearMessage];
#elif defined(LONGTASK_CLEAR_SNAPSHOTS)
    [longTask clearSnapshots];
#elif defined(LONGTASK_ASSIGN_ATTRIBUTES)
    longTask.attributes = @{};
#elif defined(LONGTASK_MUTATE_ATTRIBUTES)
    [longTask.attributes setObject:@"changed" forKey:@"longtask.message"];
#elif defined(BASE_LONGTASK_MESSAGE)
    [base setMessage:@"invalid"];
#elif defined(BASE_LONGTASK_SNAPSHOTS)
    [base setSnapshots:@"invalid"];
#endif
}
@end
