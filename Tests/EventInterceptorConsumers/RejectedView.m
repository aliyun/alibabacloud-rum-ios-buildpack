#import <AlibabaCloudRUM/AlibabaCloudRUM.h>

#if defined(SUBCLASS_VIEW)
@interface RejectedViewSubclass : AlibabaCloudViewEvent
@end
#endif

@interface RejectedViewConsumer : NSObject
+ (void)useInvalidAPI:(AlibabaCloudViewEvent *)view base:(AlibabaCloudRUMEvent *)base;
@end
@implementation RejectedViewConsumer
+ (void)useInvalidAPI:(AlibabaCloudViewEvent *)view base:(AlibabaCloudRUMEvent *)base {
#if defined(CONSTRUCT_VIEW)
    (void)[[AlibabaCloudViewEvent alloc] init];
#elif defined(NEW_VIEW)
    (void)[AlibabaCloudViewEvent new];
#elif defined(CLONE_VIEW)
    (void)[view newEvent];
#elif defined(VIEW_SET_ID)
    [view setViewId:@"changed"];
#elif defined(VIEW_SET_TYPE)
    [view setType:@"changed"];
#elif defined(VIEW_SET_DURATION)
    [view setDuration:1];
#elif defined(VIEW_SET_LOAD_DURATION)
    [view setLoadDuration:1];
#elif defined(VIEW_SET_PARENT)
    [view setParentId:@"changed"];
#elif defined(VIEW_SET_TRACE)
    [view setTraceId:@"changed"];
#elif defined(VIEW_SET_EVENT_TYPE)
    [view setEventType:@"resource"];
#elif defined(VIEW_SET_MESSAGE)
    [view setMessage:@"changed"];
#elif defined(VIEW_SET_GROUP)
    [view setGroup:@"changed"];
#elif defined(VIEW_RESOURCE_RESULT)
    [view setResourceResult:200 success:AlibabaCloudResourceSuccessSuccess];
#elif defined(VIEW_WRITE_ATTRIBUTE)
    [view setAttribute:@"view.name" value:@"invalid"];
#elif defined(VIEW_REMOVE_ATTRIBUTE)
    [view removeAttribute:@"view.snapshots"];
#elif defined(VIEW_CLEAR_SNAPSHOTS)
    [view clearSnapshots];
#elif defined(VIEW_ASSIGN_ATTRIBUTES)
    view.attributes = @{};
#elif defined(VIEW_MUTATE_ATTRIBUTES)
    [view.attributes setObject:@"changed" forKey:@"view.name"];
#elif defined(BASE_VIEW_NAME)
    [base setName:@"invalid"];
#elif defined(BASE_VIEW_SNAPSHOTS)
    [base setSnapshots:@"invalid"];
#elif defined(VIEW_MANUAL_START)
    [AlibabaCloudRUM startView:@"checkout"];
#elif defined(VIEW_MANUAL_STOP)
    [AlibabaCloudRUM stopView:@"checkout"];
#endif
}
@end
