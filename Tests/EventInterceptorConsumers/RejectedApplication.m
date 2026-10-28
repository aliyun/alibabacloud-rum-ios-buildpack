#import <AlibabaCloudRUM/AlibabaCloudRUM.h>

#if defined(SUBCLASS_APPLICATION)
@interface RejectedApplicationSubclass : AlibabaCloudApplicationEvent
@end
#endif

@interface RejectedApplicationConsumer : NSObject
+ (void)useInvalidAPI:(AlibabaCloudApplicationEvent *)application base:(AlibabaCloudRUMEvent *)base;
@end
@implementation RejectedApplicationConsumer
+ (void)useInvalidAPI:(AlibabaCloudApplicationEvent *)application base:(AlibabaCloudRUMEvent *)base {
#if defined(CONSTRUCT_APPLICATION)
    (void)[[AlibabaCloudApplicationEvent alloc] init];
#elif defined(NEW_APPLICATION)
    (void)[AlibabaCloudApplicationEvent new];
#elif defined(CLONE_APPLICATION)
    (void)[application newEvent];
#elif defined(APPLICATION_SET_NAME)
    [application setName:@"changed"];
#elif defined(APPLICATION_SET_STATE)
    [application setState:@"foreground"];
#elif defined(APPLICATION_SET_DURATION)
    [application setDuration:1];
#elif defined(APPLICATION_SET_START_TYPE)
    [application setStartType:@"changed"];
#elif defined(APPLICATION_SET_START_DURATION)
    [application setStartDuration:1];
#elif defined(APPLICATION_SET_THREAD_NAME)
    [application setThreadName:@"changed"];
#elif defined(APPLICATION_SET_APP_ID)
    [application setAppId:@"changed"];
#elif defined(APPLICATION_SET_APP_NAME)
    [application setAppName:@"changed"];
#elif defined(APPLICATION_SET_EVENT_TYPE)
    [application setEventType:@"resource"];
#elif defined(APPLICATION_SET_SESSION_ID)
    [application setSessionId:@"changed"];
#elif defined(APPLICATION_SET_TYPE)
    [application setType:@"changed"];
#elif defined(APPLICATION_SET_MESSAGE)
    [application setMessage:@"changed"];
#elif defined(APPLICATION_SET_GROUP)
    [application setGroup:@"changed"];
#elif defined(APPLICATION_RESOURCE_RESULT)
    [application setResourceResult:200 success:AlibabaCloudResourceSuccessSuccess];
#elif defined(APPLICATION_WRITE_ATTRIBUTE)
    [application setAttribute:@"application.state" value:@"changed"];
#elif defined(APPLICATION_REMOVE_ATTRIBUTE)
    [application removeAttribute:@"application.snapshots"];
#elif defined(APPLICATION_CLEAR_SNAPSHOTS)
    [application clearSnapshots];
#elif defined(APPLICATION_ASSIGN_ATTRIBUTES)
    application.attributes = @{};
#elif defined(APPLICATION_MUTATE_ATTRIBUTES)
    [application.attributes setObject:@"changed" forKey:@"application.state"];
#elif defined(APPLICATION_ASSIGN_EVENT_TYPE)
    application.eventType = @"resource";
#elif defined(APPLICATION_ASSIGN_STATE)
    application.state = @"foreground";
#elif defined(APPLICATION_ASSIGN_DURATION)
    application.duration = @1;
#elif defined(BASE_APPLICATION_SNAPSHOTS)
    [base setSnapshots:@"invalid"];
#endif
}
@end
