#import <AlibabaCloudRUM/AlibabaCloudRUM.h>

@interface RejectedConsumer : NSObject
+ (void)useInvalidAPI:(AlibabaCloudCustomEvent *)event;
@end
@implementation RejectedConsumer
+ (void)useInvalidAPI:(AlibabaCloudCustomEvent *)event {
    AlibabaCloudEventContext *context = nil;
#if defined(CONSTRUCT)
    (void)[[AlibabaCloudRUMEvent alloc] init];
#elif defined(NEW)
    (void)[AlibabaCloudCustomEvent new];
#elif defined(WRITE_ATTRIBUTE)
    [event setAttribute:@"custom.name" value:@"invalid"];
#elif defined(REMOVE_ATTRIBUTE)
    [event removeAttribute:@"custom.name"];
#elif defined(RESOURCE_RESULT)
    [event setResourceResult:200 success:1];
#elif defined(ASSIGN_PROPERTY)
    event.attributes = @{};
#elif defined(CONSTRUCT_CONTEXT)
    (void)[AlibabaCloudEventContext new];
#elif defined(CONTEXT_ASSIGN_REQUEST)
    context.request = nil;
#elif defined(CONTEXT_ASSIGN_RESPONSE)
    context.response = nil;
#elif defined(CONTEXT_ASSIGN_ERROR)
    context.error = nil;
#elif defined(CONTEXT_ASSIGN_PARAMETERS)
    context.originalParameters = @{};
#elif defined(CONTEXT_ASSIGN_SOURCE)
    context.source = @"ios.urlconnection.delegate";
#elif defined(CONTEXT_ASSIGN_CONTROLLER)
    context.viewController = nil;
#elif defined(CONTEXT_ASSIGN_TARGET)
    context.targetView = nil;
#elif defined(CONTEXT_TASK)
    (void)[context task];
#elif defined(CONTEXT_SESSION)
    (void)[context session];
#elif defined(CONTEXT_BODY)
    (void)[context body];
#elif defined(CONTEXT_DATA)
    (void)[context data];
#elif defined(CONTEXT_CONNECTION)
    (void)[context connection];
#elif defined(CONTEXT_MUTATE_PARAMETERS)
    [context.originalParameters setObject:@"invalid" forKey:@"request"];
#endif
}
@end
