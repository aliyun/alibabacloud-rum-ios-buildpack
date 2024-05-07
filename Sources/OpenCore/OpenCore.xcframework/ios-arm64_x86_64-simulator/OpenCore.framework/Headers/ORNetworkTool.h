#import <Foundation/Foundation.h>
#import <OpenCore/ORNetworking.h>

#define ORRetryWaitingTime 1

NS_ASSUME_NONNULL_BEGIN

extern NSString *const ORQueryConfigMonitorTimeKey;
extern NSString *const ORQuerySessionKey;

typedef id _Nullable (^ORNetworkAuthenticationChallengeBlock)(NSURLSession *session, NSURLSessionTask *task, NSURLAuthenticationChallenge *challenge, void (^completionHandler)(NSURLSessionAuthChallengeDisposition disposition, NSURLCredential *credential));

@interface ORNetworkTool : NSObject

+ (instancetype)sharedInstance;

@property (nonatomic, strong, readonly) ORURLSessionManager *connectivitySessionManager;
// 会话回放
@property (nonatomic, strong, readonly) ORHTTPSessionManager *sessionReplayUploadSessionManager;

/// 重连次数限制1-10，超过进行过滤 超时时间默认30s
+ (void)sendRequest:(NSURLRequest *)request
         retryCount:(NSUInteger)retryCount
            success:(nullable void (^)(NSData * _Nullable data, NSHTTPURLResponse * _Nullable response))success
            failure:(nullable void (^)(NSError * _Nullable error))failure __attribute__((deprecated("DO NOT use this method which will remove in future version.")));

/// 重连次数默认为1，只执行一次，不进行重连 超时时间默认30s
+ (void)sendRequest:(NSURLRequest *)request
            success:(nullable void (^)(NSData * _Nullable data, NSHTTPURLResponse * _Nullable response))success
            failure:(nullable void (^)(NSError * _Nullable error))failure;

/// 上传文件
/// @note waitsForConnectivity
+ (void)uploadRequest:(NSURLRequest *)request
             filePath:(NSString *)filePath
              success:(nullable void (^)(NSData * _Nullable data, NSHTTPURLResponse * _Nullable response))success
              failure:(nullable void (^)(NSError * _Nullable error))failure;

/// 上传文件
/// /// @note waitsForConnectivity = NO
+ (void)uploadRequestImmediately:(NSURLRequest *)request
                        filePath:(NSString *)filePath
              complectionHandler:(nullable void (^)(NSURLResponse *response, id _Nullable responseObject, NSError  * _Nullable error))completionHandler;

/// 检测是否有网
+ (BOOL)isNetworkReachable;
/// 检测是否连接wifi
+ (BOOL)isNetworkReachableViaWiFi;

+ (NSURLRequest *)defaultRequestWithUrl:(NSURL *)url
                                 querys:(nullable NSDictionary<NSString *,NSString *> *)querys
                                   body:(NSData *)body
                                headers:(nullable NSDictionary<NSString *, NSString *> *)headers
                                  brKey:(nullable NSString *)brKey
                        timeoutInterval:(NSTimeInterval)timeoutInterval
                             failHandle:(void(^)(NSString *errorMsg))failHandle;

- (void)setAuthenticationChallengeHandler:(ORNetworkAuthenticationChallengeBlock)authenticationChallengeHandler;
- (void)setSecurityPolicy:(ORSecurityPolicy *)securityPolicy;

@end

NS_ASSUME_NONNULL_END


