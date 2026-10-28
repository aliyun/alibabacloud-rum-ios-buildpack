#import <AlibabaCloudRUM/AlibabaCloudRUM.h>

#if defined(SUBCLASS_ACTION)
@interface RejectedActionSubclass : AlibabaCloudActionEvent
@end
#endif

@interface RejectedActionConsumer : NSObject
+ (void)useInvalidAPI:(AlibabaCloudActionEvent *)action base:(AlibabaCloudRUMEvent *)base;
@end
@implementation RejectedActionConsumer
+ (void)useInvalidAPI:(AlibabaCloudActionEvent *)action base:(AlibabaCloudRUMEvent *)base {
#if defined(CONSTRUCT_ACTION)
    (void)[[AlibabaCloudActionEvent alloc] init];
#elif defined(NEW_ACTION)
    (void)[AlibabaCloudActionEvent new];
#elif defined(CLONE_ACTION)
    (void)[action newEvent];
#elif defined(ACTION_SET_ID)
    [action setActionId:@"changed"];
#elif defined(ACTION_SET_TYPE)
    [action setType:@"changed"];
#elif defined(ACTION_SET_DURATION)
    [action setDuration:1];
#elif defined(ACTION_SET_VIEW_ID)
    [action setViewId:@"changed"];
#elif defined(ACTION_SET_VIEW_NAME)
    [action setViewName:@"changed"];
#elif defined(ACTION_SET_TRACE)
    [action setTraceId:@"changed"];
#elif defined(ACTION_SET_EVENT_TYPE)
    [action setEventType:@"resource"];
#elif defined(ACTION_SET_MESSAGE)
    [action setMessage:@"changed"];
#elif defined(ACTION_SET_GROUP)
    [action setGroup:@"changed"];
#elif defined(ACTION_RESOURCE_RESULT)
    [action setResourceResult:200 success:AlibabaCloudResourceSuccessSuccess];
#elif defined(ACTION_WRITE_ATTRIBUTE)
    [action setAttribute:@"action.name" value:@"invalid"];
#elif defined(ACTION_REMOVE_ATTRIBUTE)
    [action removeAttribute:@"action.snapshots"];
#elif defined(ACTION_CLEAR_NAME)
    [action clearName];
#elif defined(ACTION_CLEAR_SNAPSHOTS)
    [action clearSnapshots];
#elif defined(ACTION_ASSIGN_ATTRIBUTES)
    action.attributes = @{};
#elif defined(ACTION_MUTATE_ATTRIBUTES)
    [action.attributes setObject:@"changed" forKey:@"action.name"];
#elif defined(BASE_ACTION_NAME)
    [base setName:@"invalid"];
#elif defined(BASE_ACTION_SNAPSHOTS)
    [base setSnapshots:@"invalid"];
#endif
}
@end
