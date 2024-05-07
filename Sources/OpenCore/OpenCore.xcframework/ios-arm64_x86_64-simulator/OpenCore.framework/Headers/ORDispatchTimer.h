#import <Foundation/Foundation.h>

@interface ORDispatchTimer : NSObject

- (void)startWithStart:(dispatch_time_t)start
          timeInterval:(uint64_t)interval
                 queue:(dispatch_queue_t)queue
          eventHandler:(void (^)(void))eventHandler;

- (void)resume;

- (void)suspend;

- (void)stop;

- (BOOL)isRunning;

@end

