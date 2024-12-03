#import <Foundation/Foundation.h>
#import "ORUploadProtocol.h"

NS_ASSUME_NONNULL_BEGIN

@interface ORUploadModule : NSObject

/// 注册Upload消息接收者
/// @param receiver 消息接收者
/// @param data 控制数据
+ (void)registerReceiver:(id<ORUploadReceiverProtocol>)receiver data:(id<ORUploadControlDataProtocol>)data;

/// 开启Upload
/// @param data 控制Upload的数据
/// @param receiver 消息接收者
+ (void)startUploadWithData:(id<ORUploadControlDataProtocol>)data receiver:(id<ORUploadReceiverProtocol>)receiver;

/// 立即触发Upload
/// @param moduleName 模块名称
/// @param inUploadThread 是否切换到Upload线程
/// @param option 生成请求选项
+ (void)uploadImmediatelyModule:(NSString *)moduleName inUploadThread:(BOOL)inUploadThread option:(ORUploadOption)option;

/// 修改Upload间隔
/// @param moduleName 模块名称
/// @param interval 间隔
/// @param isRecover 恢复默认间隔
+ (void)modifyUploadModule:(NSString *)moduleName interval:(NSInteger)interval recover:(BOOL)isRecover;

/// 停止Upload
/// @param moduleName 模块名称
+ (void)stopUpload:(NSString *)moduleName;

/// 挂起Upload
/// @param moduleName 模块名称
+ (void)suspend:(NSString *)moduleName;

/// 恢复Upload
/// @param moduleName 模块名称
+ (void)resume:(NSString *)moduleName;

@end

NS_ASSUME_NONNULL_END
