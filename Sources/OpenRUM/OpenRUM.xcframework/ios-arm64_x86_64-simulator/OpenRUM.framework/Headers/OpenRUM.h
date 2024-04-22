#import <Foundation/Foundation.h>

#define OR_LOG_OFF      0x0         /// 关闭日志输出
#define OR_LOG_PUBLIC   0x1         /// 输出主流程信息, default
#define OR_LOG_PBDATA   0x1 << 1    /// 输出上报数据、响应数据
#define OR_LOG_INFO     0x1 << 2    /// 输出提示信息
#define OR_LOG_WARN     0x1 << 3    /// 输出警告信息
#define OR_LOG_ERROR    0x1 << 4    /// 输出错误信息
#define OR_LOG_TO_FILE  0x1 << 31

NS_ASSUME_NONNULL_BEGIN

@class ORSpeedTestInfo;
@class ORNetworkModel;

@interface OpenRUM : NSObject

/// 启动 SDK（Ver:7.12.0）
+ (void)startWithAppID:(NSString *)appID;

/// 设置Config地址（请在SDK启动之前设置） 默认为公有云地址，无需设置
/// @param configAddress 私有云Config地址
+ (void)setConfigAddress:(NSString *)configAddress;

/// 设置app版本（请在SDK启动之前设置） 默认获取应用CFBundleShortVersionString
+ (void)setAppVersion:(NSString *)appVersion;

/// 设置渠道标识（请在SDK启动之前设置）
+ (void)setChannelID:(NSString *)channelID;

/// 配置自定义的设备deviceID（请在SDK启动之前设置）
+ (void)setDeviceID:(NSString *)deviceID;
/// 获取设备的deviceID
+ (NSString *)deviceID;

/// 设置用户ID
+ (void)setUserID:(nullable NSString *)userID;

/**
 打开日志标志（默认只打开OR_LOG_PUBLIC日志。此接口调试时调用，请勿在生产环境调用。）
 
 例:打开OR_LOG_PBDATA日志
 [OpenRUM setLogFlag:@(OR_LOG_PUBLIC|OR_LOG_PBDATA)];
 
 若需要通过iTunes导出log文件,应在程序的Info.plist文件中添加Application supports iTunes file sharing键，并将键值设置为YES.
 日志文件保存在沙盒目录 Documents/OpenRUM/Log 下.
 
 例:打开OR_LOG_PBDATA日志且写到文件中
 [OpenRUM setLogFlag:@(OR_LOG_PUBLIC|OR_LOG_PBDATA|OR_LOG_TO_FILE)];
 
 关闭日志开关:
 [OpenRUM setLogFlag:@(OR_LOG_OFF)];
*/
+ (void)setLogFlag:(NSNumber *)flag;

/// 获取SDK的版本号
+ (NSString *)SDKVersion;

+ (void)stopSDK;

/**禁止网络模块采集cname*/
+ (void)disableCnameCollection;

/// 标识使用自定义冷启动结束时间（需在SDK启动之前设置）
+ (void)useCustomLaunch:(BOOL)used;
/// 记录冷启动结束
+ (void)recordCustomLaunchEnd;

/// 持续丢帧时长（单位秒），允许的范围[1, 30]，默认5（需在SDK启动之前设置）
+ (void)setDropFrameTime:(NSInteger)time;

#pragma mark - 自定义接口

/// 自定义异常收集
/// @param exceptionType 异常类型
/// @param causedBy 异常原因
/// @param errorDump 异常堆栈
+ (void)setCustomExceptionWithType:(NSString *)exceptionType
                           causeBy:(NSString * _Nullable)causedBy
                         errorDump:(NSString * _Nullable)errorDump;
/// 自定义方法开始
/// @param methodName 方法名
+ (void)setCustomMethodStartWithName:(NSString *)methodName;
/// 自定义方法开始
/// @param methodName 方法名
/// @param param 附加信息
+ (void)setCustomMethodStartWithName:(NSString *)methodName
                               param:(nullable NSString *)param;
/// 自定义方法结束
/// @param methodName 方法名
+ (void)setCustomMethodEndWithName:(NSString *)methodName;
/// 自定义方法结束
/// @param methodName 方法名
/// @param param 附加信息
+ (void)setCustomMethodEndWithName:(NSString *)methodName
                             param:(nullable NSString *)param;

/// 站点测速接口
/// @param ip 当前测速最优站点IP
/// @param speedTestInfo 测速信息集合
+ (void)setCustomSpeedTestWithIP:(NSString *)ip
                   speedTestInfo:(NSArray<ORSpeedTestInfo *> *)speedTestInfo;

#pragma mark - React Native交互接口
/* 以下接口为React Native插件交互接口,请勿主动调用! */

/// React Native上报行为接口
/// @param time 发生时间
/// @param type 操作类型
/// @param name 名称
/// @param info 信息
/// @param viewName 视图名称
/// @param loadTime 加载耗时
+ (void)reportActionWithTime:(long long)time
                        type:(int)type
                        name:(NSString *)name
                        info:(NSString *)info
                    viewName:(NSString *)viewName
                    loadTime:(NSInteger)loadTime;

/// React Native上报视图接口
/// @param time 发生时间
/// @param viewId 视图id
/// @param loadTime 加载耗时
/// @param model 方式
/// @param name 视图名称
/// @param methodName 方法名称
+ (void)reportViewWithTime:(long long)time
                    viewId:(NSString *)viewId
                  loadTime:(NSInteger)loadTime
                     model:(int)model
                      name:(NSString *)name
                methodName:(NSString *)methodName;

/// React Native崩溃上报接口
/// @param time 发生时间
/// @param causeby 原因
/// @param type 崩溃类型
/// @param dump 崩溃堆栈
+ (void)reportCrashWithTime:(long long)time
                    causeby:(NSString *)causeby
                       type:(NSString *)type
                       dump:(NSString *)dump;

//获取端到端打通配置
+ (NSDictionary *)networkTraceConfig;

#pragma mark - Flutter交互接口
/* 以下接口为Flutter插件交互接口,请勿主动调用! */

/// Flutter崩溃上报接口
/// @param time 发生时间
/// @param causeby 原因
/// @param type 崩溃类型
/// @param dump 崩溃堆栈
+ (void)flutterReportErrorWithTime:(long long)time
                           causeby:(NSString *)causeby
                              type:(NSString *)type
                              dump:(NSString *)dump;

/// Flutter上报视图接口
/// @param time 发生时间（单位：ms）
/// @param viewId 视图id
/// @param loadTime 加载耗时（单位：ms）
/// @param model 方式
/// @param name 视图名称
/// @param methodName 方法名称
+ (void)flutterReportViewWithTime:(long long)time
                           viewId:(NSString *)viewId
                         loadTime:(NSInteger)loadTime
                            model:(int)model
                             name:(NSString *)name
                       methodName:(NSString *)methodName;

/// Flutter上报网络接口
/// @param netModel 网络模型
+ (void)flutterReportNetwork:(ORNetworkModel *)netModel;

@end

///站点测速接口对象定义
@interface ORSpeedTestInfo : NSObject

@property (nonatomic, copy)   NSString *ip;     // 测速站点IP
@property (nonatomic, copy)   NSString *name;   // 测速站点名称
@property (nonatomic, assign) NSInteger speed;  // 站点速度(ms) 整型

@end

///Flutter网络接口对象
@interface ORNetworkModel : NSObject

@property (nonatomic, copy)   NSString *requestUrl; //请求地址「必传」
@property (nonatomic, assign) uint32_t protocolType;//协议类型「0:其它协议,1:h1,2:h1s,3:h2,5:ws,6:wss,7:tcp,10:udp,11:quic」
@property (nonatomic, copy, nullable) NSString *targetIpV6; //目标IP(支持IPv4、IPv6)
@property (nonatomic, assign) uint32_t targetPort;  //目标端口

@property (nonatomic, strong, nullable) NSDictionary<NSString *, id> *requestHeader; //请求header
@property (nonatomic, strong, nullable) NSDictionary<NSString *, id> *responseHeader;//响应header

@property (nonatomic, copy, nullable)   NSString *method;       //请求方式 [大写]
@property (nonatomic, copy, nullable)   NSString *resourceType; //资源类型「响应头Content-Type内容 eg:image/jpeg、text/html」
@property (nonatomic, strong, nullable) NSArray<NSString *> *cnames;//cname的数组

@property (nonatomic, assign) uint64_t dnsTimeUs;       //dns查询耗时「单位:us」
@property (nonatomic, assign) uint64_t connectTimeUs;   //tcp建连耗时「单位:us」
@property (nonatomic, assign) uint64_t ssltimeUs;       //ssl握手耗时「单位:us」
@property (nonatomic, assign) uint64_t requestTimeUs;   //请求耗时「单位:us」
@property (nonatomic, assign) uint64_t responseTimeUs;  //响应耗时「单位:us」
@property (nonatomic, assign) uint64_t downloadTimeUs;  //下载耗时「单位:us」
@property (nonatomic, assign) int64_t requestDataSize;  //请求大小「单位:byte」
@property (nonatomic, assign) int64_t responseDataSize; //响应数据「单位:byte」

@property (nonatomic, strong, nullable) NSNumber *errorCode;    //错误码
@property (nonatomic, copy, nullable)   NSString *errorMessage; //错误信息「非错误请求请勿赋值」
@property (nonatomic, strong, nullable) NSNumber *errorOccurrentprocess;//错误过程「1:SSL过程，2:DNS过程，3:TCP过程，4:其他过程」

@end

NS_ASSUME_NONNULL_END
