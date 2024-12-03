#import <Foundation/Foundation.h>

@interface ORTcping : NSObject  //通过ping网络来测试网速
//最近6次的平均值
@property (nonatomic, assign, readonly) uint64_t avgLagTime;
/// 最后一次的tcping连接耗时
@property (nonatomic, assign, readonly) uint64_t lastTcpingTime;

@property (atomic, copy) NSString *socketConnectAdress;


+ (ORTcping *)sharedObj;

+ (BOOL)startTcpingWithPingAddress:(NSString *)address delegateQueue:(dispatch_queue_t)queue;

+ (BOOL)stopTcping;

@end
