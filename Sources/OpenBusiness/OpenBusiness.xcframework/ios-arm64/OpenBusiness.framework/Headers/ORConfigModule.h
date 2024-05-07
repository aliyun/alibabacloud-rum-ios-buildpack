#import <Foundation/Foundation.h>
#import <OpenBusiness/ORConfigProtocol.h>

NS_ASSUME_NONNULL_BEGIN

@interface ORConfigModule : NSObject

/// 注册Config消息接收者
/// @param receiver 消息接收者
/// @param data 控制数据
+ (void)registerReceiver:(id<ORConfigReceiverProtocol>)receiver data:(id<ORConfigControlDataProtocol>)data;

/// 开始Config远端请求
/// @param moduleName 自身模块名称
+ (void)startRequestRemoteDataModule:(NSString *)moduleName;

/// 开始Config本地请求
/// @param moduleName 自身模块名称
+ (void)startLoadLocalDataModule:(NSString *)moduleName;

/// 停止Config
/// @param moduleName 自身模块名称
+ (void)stopConfig:(NSString *)moduleName;

/// 挂起Config
/// @param moduleName 自身模块名称
+ (void)suspendConfig:(NSString *)moduleName;

/// 恢复Config
/// @param moduleName 自身模块名称
+ (void)resumeConfig:(NSString *)moduleName;

/// 发送共享数据
/// @param crossData 共享数据
+ (void)postCrossData:(id<ORConfigCrossData>)crossData;

/// 获取共享数据
/// @return 共享数据
+ (id<ORConfigCrossData>)getCrossData;

@end

NS_ASSUME_NONNULL_END
