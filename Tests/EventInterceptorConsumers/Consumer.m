#import <AlibabaCloudRUM/AlibabaCloudRUM.h>
#include <stdint.h>

_Static_assert(AlibabaCloudResourceSuccessUnknown == -1, "Unknown must remain -1");
_Static_assert(AlibabaCloudResourceSuccessFailed == 0, "Failed must remain 0");
_Static_assert(AlibabaCloudResourceSuccessSuccess == 1, "Success must remain 1");

@interface ConsumerInterceptor : NSObject <AlibabaCloudEventInterceptor>
+ (void)registerRule;
@end
@implementation ConsumerInterceptor
- (AlibabaCloudRUMEvent *)interceptEvent:(AlibabaCloudRUMEvent *)event
                               context:(AlibabaCloudEventContext *)context {
    NSString *source = context.source;
    NSDictionary *arguments = context.originalParameters;
    NSURLRequest *request = context.request;
    NSURLResponse *response = context.response;
    NSError *error = context.error;
    NSURLSession *session = arguments[@"session"];
    NSURLSessionTask *task = arguments[@"task"];
    NSURL *location = arguments[@"location"];
    id identity = [event attributeForKey:@"event_id"];
    NSDictionary<NSString *, id> *attributes = event.attributes;
    if ([event isKindOfClass:[AlibabaCloudCustomEvent class]]) {
        AlibabaCloudCustomEvent *custom = (AlibabaCloudCustomEvent *)event;
        NSString *name = custom.name;
        NSString *group = custom.group;
        NSString *snapshots = custom.snapshots;
        BOOL changed = [custom setName:@"sanitized"] &&
            [custom setGroup:@"checkout"] && [custom setSnapshots:@"plain text"];
        (void)name; (void)group; (void)snapshots; (void)changed;
    } else if ([event isKindOfClass:[AlibabaCloudExceptionEvent class]]) {
        AlibabaCloudExceptionEvent *exception = (AlibabaCloudExceptionEvent *)event;
        NSString *name = exception.name;
        NSString *message = exception.message;
        NSString *causedBy = exception.causedBy;
        NSString *snapshots = exception.snapshots;
        NSDictionary *report = context.recoveredRecord;
        BOOL changed = [exception setName:@"checkout.exception"] &&
            [exception setMessage:@"business failure"] &&
            [exception setCausedBy:@"business cause"] && [exception setSnapshots:@"plain text"];
        if ([source isEqualToString:@"ios.exception.oom"]) {
            // These are the original diagnostic JSON values, borrowed only here.
            NSDictionary *head = report[@"head"];
            NSArray *items = report[@"items"];
            (void)head; (void)items;
        }
        // Exceptions run at the safe recovery point after storage.
        // The original process has no live NSError/NSException or UI objects here.
        (void)name; (void)message; (void)causedBy; (void)snapshots; (void)report; (void)changed;
    } else if ([event isKindOfClass:[AlibabaCloudLongTaskEvent class]]) {
        AlibabaCloudLongTaskEvent *longTask = (AlibabaCloudLongTaskEvent *)event;
        NSString *message = longTask.message;
        NSString *snapshots = longTask.snapshots;
        id type = [longTask attributeForKey:@"longtask.type"];
        NSDictionary *report = context.recoveredRecord;
        BOOL changed = [longTask setMessage:@"checkout delayed"] &&
            [longTask setSnapshots:@"plain text"];
        // LongTask callbacks run at the safe report parser, after the observed stall.
        // Borrow the parsed diagnostic record only during this synchronous callback.
        (void)message; (void)snapshots; (void)type; (void)report; (void)changed;
    } else if ([event isKindOfClass:[AlibabaCloudViewEvent class]]) {
        AlibabaCloudViewEvent *view = (AlibabaCloudViewEvent *)event;
        NSString *name = view.name;
        NSString *snapshots = view.snapshots;
        UIViewController *controller = context.viewController;
        UIViewController *originalController = arguments[@"viewController"];
        BOOL changed = [view setName:@"checkout"] && [view setSnapshots:@"plain text"];
        if ([source isEqualToString:@"ios.replay.metadata"]) {
            id metadata = arguments[@"metadata"];
            NSString *viewType = [view attributeForKey:@"view.type"];
            // Replay uses the same View API after records upload. Metadata is borrowed here only.
            BOOL replaced = [view setSnapshots:@""];
            (void)metadata; (void)viewType; (void)replaced;
        }
        (void)name; (void)snapshots; (void)controller; (void)originalController; (void)changed;
    } else if ([event isKindOfClass:[AlibabaCloudActionEvent class]]) {
        AlibabaCloudActionEvent *action = (AlibabaCloudActionEvent *)event;
        NSString *name = action.name;
        NSString *snapshots = action.snapshots;
        UIViewController *controller = context.viewController;
        UIView *target = context.targetView;
        UIView *originalTarget = arguments[@"targetView"];
        BOOL changed = [action setName:@"checkout"] && [action setSnapshots:@"plain text"];
        // UI references may be nil and are borrowed only on this callback's thread.
        // Do not retain or dispatch them, or generate business events in this callback.
        (void)name; (void)snapshots; (void)controller; (void)target; (void)originalTarget; (void)changed;
    } else if ([event isKindOfClass:[AlibabaCloudApplicationEvent class]]) {
        AlibabaCloudApplicationEvent *application = (AlibabaCloudApplicationEvent *)event;
        NSString *snapshots = application.snapshots;
        id state = [application attributeForKey:@"application.state"];
        id duration = application.attributes[@"application.duration"];
        id startType = [application attributeForKey:@"start.type"];
        id threadName = [application attributeForKey:@"thread.name"];
        id appName = [application attributeForKey:@"app.name"];
        BOOL changed = [application setSnapshots:@"plain text"];
        // Missing UI objects do not prevent Application callbacks or snapshot edits.
        // State, timing and app/thread attributes retain their original representations.
        (void)snapshots; (void)state; (void)duration; (void)startType;
        (void)threadName; (void)appName; (void)changed;
    } else if ([event isKindOfClass:[AlibabaCloudResourceEvent class]]) {
        AlibabaCloudResourceEvent *resource = (AlibabaCloudResourceEvent *)event;
        if ([source isEqualToString:@"ios.urlsession.data.completion"]) {
            // The host completion has returned; these are its original arguments.
            NSURLSession *originalSession = arguments[@"session"];
            NSURLSessionDataTask *originalTask = arguments[@"task"];
            NSURLRequest *originalRequest = arguments[@"request"];
            NSURLResponse *originalResponse = arguments[@"response"];
            NSError *originalError = arguments[@"error"];
            NSData *data = arguments[@"data"];
            NSUInteger availableBytes = data.length;
            if ([originalResponse isKindOfClass:[NSHTTPURLResponse class]]) {
                NSHTTPURLResponse *http = (NSHTTPURLResponse *)originalResponse;
                NSString *businessCode = nil;
                for (id key in http.allHeaderFields) {
                    if ([key isKindOfClass:[NSString class]] &&
                        [key caseInsensitiveCompare:@"X-Test-Business-Code"] == NSOrderedSame) {
                        id value = http.allHeaderFields[key];
                        businessCode = [value isKindOfClass:[NSString class]] ? value : nil;
                        break;
                    }
                }
                if ([businessCode isEqualToString:@"1001"]) {
                    (void)[resource setResourceResult:1001 success:AlibabaCloudResourceSuccessFailed];
                }
            }
            // Do not retain these objects, consume body streams, or emit business events.
            (void)originalSession; (void)originalTask; (void)originalRequest;
            (void)originalError; (void)data; (void)availableBytes;
        } else if ([source isEqualToString:@"ios.urlconnection.synchronous"] ||
            [source isEqualToString:@"ios.urlconnection.completion"]) {
            // Both API forms provide the original NSData without a connection.
            NSURLRequest *originalRequest = arguments[@"request"];
            NSURLResponse *originalResponse = arguments[@"response"];
            NSError *originalError = arguments[@"error"];
            NSData *data = arguments[@"data"];
            NSUInteger availableBytes = data.length;
            (void)originalRequest; (void)originalResponse; (void)originalError;
            (void)data; (void)availableBytes;
        } else if ([source isEqualToString:@"ios.urlconnection.delegate"]) {
            // Delegate completion borrows the connection, without a data buffer.
            NSURLConnection *connection = arguments[@"connection"];
            NSURLRequest *originalRequest = arguments[@"request"];
            NSURLResponse *originalResponse = arguments[@"response"];
            NSError *originalError = arguments[@"error"];
            (void)connection; (void)originalRequest; (void)originalResponse; (void)originalError;
        }
        NSString *name = resource.name;
        NSString *message = resource.message;
        NSString *snapshots = resource.snapshots;
        NSNumber *statusCode = resource.statusCode;
        NSNumber *success = resource.success;
        BOOL changed = [resource setName:@"checkout"] &&
            [resource setMessage:@"business failure"] &&
            [resource setSnapshots:@"plain text"] &&
            [resource setResourceResult:INT64_MIN success:AlibabaCloudResourceSuccessUnknown] &&
            [resource setResourceResult:INT64_MAX success:AlibabaCloudResourceSuccessSuccess] &&
            [resource setResourceResult:1001 success:AlibabaCloudResourceSuccessFailed];
        int64_t exactStatusCode = resource.statusCode.longLongValue;
        (void)name; (void)message; (void)snapshots; (void)statusCode;
        (void)success; (void)changed; (void)exactStatusCode;
    }
    (void)source; (void)arguments; (void)identity; (void)attributes;
    (void)request; (void)response; (void)error; (void)session; (void)task; (void)location;
    return event;
}

+ (void)registerRule {
    BOOL registered = [AlibabaCloudRUM setEventInterceptor:[ConsumerInterceptor new]];
    BOOL cleared = [AlibabaCloudRUM setEventInterceptor:nil];
    // Reporting is deliberately outside the interceptor callback.
    [AlibabaCloudRUM setCustomException:@"checkout.exception" causeBy:@"business cause" errorDump:@"original stack"];
    BOOL accepted = [AlibabaCloudRUM setCustomResource:@"manual" success:YES
        url:@"https://example.invalid/checkout" method:@"GET" statusCode:200 errorMessage:nil];
    AlibabaCloudResourceMeasure *measure = [AlibabaCloudResourceMeasure measure];
    AlibabaCloudTracingContext *trace = [AlibabaCloudTracingContext contextWithTraceId:@"trace"
        spanId:@"span" tracingProtocol:AlibabaCloudTracingProtocolW3C];
    BOOL acceptedWithContext = [AlibabaCloudRUM setCustomResource:@"manual" success:YES
        url:@"https://example.invalid/checkout" method:@"GET" statusCode:200 errorMessage:nil
        provider:@"consumer" tracing:trace measure:measure];
    (void)registered; (void)cleared; (void)accepted; (void)acceptedWithContext;
}
@end
