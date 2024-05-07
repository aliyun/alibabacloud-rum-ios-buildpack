#import <Foundation/Foundation.h>

/// Config结果类型
typedef NS_ENUM(NSInteger, ORConfigResultType) {
    ///Config成功
    ORConfigResultTypeSuccess       = 1,
    ///Config停止，不重试
    ORConfigResultTypeStop,
    ///Config重试
    ORConfigResultTypeRetry
};

typedef void(^ORConfigResponseHandle)(ORConfigResultType resultType, NSData *data);

/// 模块共享数据
@protocol ORConfigCrossData <NSObject, NSCopying>

/// 消息来源
@property (nonatomic, copy) NSString *fromModule;

/// 会话标识
@property (nonatomic, copy) NSString *session;

/// 额外信息
@property (nonatomic, copy) NSDictionary *extraInfo;

@end

/// Config模块控制数据
@protocol ORConfigControlDataProtocol <NSObject>

/// 自身模块名称
@property (nonatomic, copy) NSString *moduleName;
/// 重试次数，默认5次，设置为0则不重试
@property (nonatomic, assign) NSInteger retryCount;
/// Config本地版本号[不传不缓存到本地]
@property (nonatomic, copy) NSString *localVersion;
/// Config本地版本KEY，UserDefault使用[不传不缓存到本地]
@property (nonatomic, copy) NSString *localVersionKey;
/// Config本地路径[不传不缓存到本地]
@property (nonatomic, copy) NSString *localPath;
/// Config本地文件名称[不传不缓存到本地]
@property (nonatomic, copy) NSString *localFileName;

@end

/// Config模块消息接收者
@protocol ORConfigReceiverProtocol <NSObject>

/// 获取Config请求对象
- (NSURLRequest *)getConfigRequest;

/// Config收到响应
/// @param response 响应原数据
/// @param httpResponse 系统响应
/// @param error 错误信息
/// @param handle 回调给Config的消息
- (void)configDidReceiveResponse:(NSData *)response
                    httpResponse:(NSHTTPURLResponse *)httpResponse
                           error:(NSError *)error
                          handle:(ORConfigResponseHandle)handle;

/// Config已加载本地数据
- (void)configDidLoadLocalResponse:(NSData *)response;

@optional
/// 接收共享数据
- (void)didReceiverCrossData:(id<ORConfigCrossData>)crossData;

@end
