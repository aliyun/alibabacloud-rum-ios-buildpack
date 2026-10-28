#import <AlibabaCloudRUM/AlibabaCloudRUM.h>

@interface RejectedResourceConsumer : NSObject
+ (void)useInvalidAPI:(AlibabaCloudResourceEvent *)resource base:(AlibabaCloudRUMEvent *)base;
@end
@implementation RejectedResourceConsumer
+ (void)useInvalidAPI:(AlibabaCloudResourceEvent *)resource base:(AlibabaCloudRUMEvent *)base {
#if defined(CONSTRUCT_RESOURCE)
    (void)[[AlibabaCloudResourceEvent alloc] init];
#elif defined(NEW_RESOURCE)
    (void)[AlibabaCloudResourceEvent new];
#elif defined(CLONE_RESOURCE)
    (void)[resource newEvent];
#elif defined(RESOURCE_SET_STATUS)
    [resource setStatusCode:@200];
#elif defined(RESOURCE_SET_SUCCESS)
    [resource setSuccess:@1];
#elif defined(RESOURCE_SET_URL)
    [resource setURL:@"https://example.invalid/changed"];
#elif defined(RESOURCE_SET_TRACE)
    [resource setTraceId:@"changed"];
#elif defined(RESOURCE_SET_VIEW)
    [resource setViewName:@"changed"];
#elif defined(RESOURCE_WRITE_ATTRIBUTE)
    [resource setAttribute:@"resource.name" value:@"invalid"];
#elif defined(RESOURCE_REMOVE_ATTRIBUTE)
    [resource removeAttribute:@"resource.snapshots"];
#elif defined(RESOURCE_CLEAR_SNAPSHOTS)
    [resource clearSnapshots];
#elif defined(RESOURCE_ASSIGN_ATTRIBUTES)
    resource.attributes = @{};
#elif defined(RESOURCE_MUTATE_ATTRIBUTES)
    [resource.attributes setObject:@"changed" forKey:@"view.name"];
#elif defined(BASE_RESOURCE_RESULT)
    [base setResourceResult:200 success:AlibabaCloudResourceSuccessSuccess];
#endif
}
@end
