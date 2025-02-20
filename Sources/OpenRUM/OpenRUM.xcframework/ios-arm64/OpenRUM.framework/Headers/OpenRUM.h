#import <Foundation/Foundation.h>
#import <OpenRUM/ORSpan.h>
#import <OpenRUM/ORViewControllerCustomizable.h>
#import <OpenRUM/UIView+ORSensitive.h>
#import <OpenRUM/UIView+ORExternalExt.h>
#import <OpenCore/ORNetworking.h>

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
@class ORRouteModel;

@class WKWebView;

@interface OpenRUM : NSObject

/// 启动 SDK（Ver:8.17.102）
+ (void)startWithAppID:(NSString *)appID;

/// 设置Config地址（请在SDK启动之前设置） 默认为公有云地址，无需设置
/// @param configAddress 私有云Config地址
+ (void)setConfigAddress:(NSString *)configAddress;

/// 设置应用环境（请在BonreeSDK启动之前设置）
/// @param environment 应用环境
+ (void)setAppEnvironment:(NSString *)environment;

/// 设置app版本（请在SDK启动之前设置） 默认获取应用CFBundleShortVersionString
+ (void)setAppVersion:(NSString *)appVersion;

/// 设置渠道标识（请在SDK启动之前设置）
+ (void)setChannelID:(NSString *)channelID;

/// 配置自定义的设备deviceID（请在SDK启动之前设置）
+ (void)setDeviceID:(NSString *)deviceID;
/// 获取设备的deviceID
+ (NSString *)deviceID;

#pragma mark - 用户信息

/// 设置用户ID
+ (void)setUserID:(nullable NSString *)userID;

/// 设置附加信息
/// @param extraInfo 附加信息为Key-Value形式，Value限制NSString或NSNumber类型
+ (void)setExtraInfo:(nullable NSDictionary <NSString *, id>*)extraInfo __attribute__((deprecated(" Use setUserExtraInfo: instead.")));

/// 设置用户附加信息（在已设置userID的情况下调用）
///
/// key限制为NSString类型，且字符串长度大于0、小于等于256，否则key无效。
///
/// value限制为NSString、NSDate、NSNumber类型，当为NSString时，其长度大于0、小于512，超过截取。
///
/// 有效的kv数量超过64时，仅取64个。
+ (void)setUserExtraInfo:(NSDictionary<NSString *, id>*)extraInfo;

/**
 打开日志标志（默认只打开OR_LOG_PUBLIC日志。此接口调试时调用，请勿在生产环境调用。）
 
 例:打开OR_LOG_PBDATA日志
 [OpenRUM setLogFlag:@(OR_LOG_PUBLIC|OR_LOG_PBDATA)];
 
 若需要通过iTunes导出log文件,应在程序的Info.plist文件中添加Application supports iTunes file sharing键，并将键值设置为YES.
 日志文件保存在沙盒目录 Documents/SDK/Log 下.
 
 例:打开OR_LOG_PBDATA日志且写到文件中
 [OpenRUM setLogFlag:@(OR_LOG_PUBLIC|OR_LOG_PBDATA|OR_LOG_TO_FILE)];
 
 关闭日志开关:
 [OpenRUM setLogFlag:@(OR_LOG_OFF)];
*/
+ (void)setLogFlag:(NSNumber *)flag;

/// 获取SDK的版本号
+ (NSString *)SDKVersion;

+ (void)stopSDK;

/// 更新本地配置中的电量模块开关，默认为开（请在BonreeSDK启动之前设置）
/// @param batteryOn 电量模块开关
+ (void)updateLocalConfigWithBatteryOn:(BOOL)batteryOn;

/// 推迟执行探针内的耗时任务（放弃应用启动后一段时间内的部分数据采集，对应用行为没有影响）
///
/// @note 需在探针启动前调用
+ (void)delayExecuteHeavyTask;

/**禁止网络模块采集cname*/
+ (void)disableCnameCollection;

/// 禁止swizzle类中的某个方法
///
/// 可以传递普通类和元类。禁止传入动态注册的类
///
/// @note 需在探针启动前调用。**请谨慎使用**
+ (void)disableSwizzleMethod:(SEL)selector inClass:(Class)clz;

/// 禁止检查某个类
/// @note 需在探针启动前调用。**请谨慎使用**
+ (void)disableInspectClass:(NSString *)className;

/// 允许捕获NSException子类的异常
/// @note 需在探针启动前调用。
+ (void)enableCatchNSExceptionSubClasses;

/// 禁止通过iOS探针注入web探针
+ (void)disableWebAgentInjection;

/// 设置web探针的本地绝对路径
/// - Parameter path: web探针的本地路径
///
/// 设置路径后，路径对应的文件存在时，文件内容将被用作web探针。
/// 若路径对应的文件不存在，将使用内置的JS探针。
+ (void)useWebAgentWithLocalPath:(NSString *)path;

/// 标识使用自定义冷启动结束时间（需在SDK启动之前设置）
+ (void)useCustomLaunch:(BOOL)used;
/// 记录冷启动结束
+ (void)recordCustomLaunchEnd;

/// 持续丢帧时长（单位秒），允许的范围[1, 30]，默认5（需在SDK启动之前设置）
+ (void)setDropFrameTime:(NSInteger)time;

/**
 设置一个block。该block用于处理探针内主动发起的请求的身份验证挑战。
 
 在实现身份验证挑战处理时，您应首先检查身份验证方法(`challenge.protectionSpace.authenticationMethod`)，以决定是自己处理身份验证挑战，还是在探针内的默认处理。如果您希望探针处理身份验证挑战，请返回`@(NSURLSessionAuthChallengePerformDefaultHandling)`。例如，在authentication method == `NSURLAuthenticationMethodServerTrust`时，您希望探针根据安全策略（security policy）来处理证书验证。
 
 如果您想自己处理跳针，则有四个选项：
 1. 返回`nil`，表示您**必须**自己调用completionHandler。
 2. 返回一个`NSError`对象。您**不得**调用completionHandler，返回的错误对象会在任务的completionHandler中体现。
 3. 返回一个`NSURLCredential`。您**不得**调用completionHandler，返回的凭证用于满足挑战。
 4. 返回一个包装`NSURLSessionAuthChallengeDisposition`的`NSNumber`对象，支持的值有`@(NSURLSessionAuthChallengePerformDefaultHandling)`, `@(NSURLSessionAuthChallengeCancelAuthenticationChallenge)` 和 `@(NSURLSessionAuthChallengeRejectProtectionSpace)`。您**不得**调用completionHandler。
 
 如果您返回其他内容，将抛出一个异常。
 
 @note 需在探针启动前调用
 */
+ (void)setAuthenticationChallengeHandler:(id (^)(NSURLSession *session, NSURLSessionTask *task, NSURLAuthenticationChallenge *challenge, void (^completionHandler)(NSURLSessionAuthChallengeDisposition , NSURLCredential * _Nullable)))authenticationChallengeHandler;


/// 设置一个安全策略，用于评估安全连接的服务器信任。探针内默认使用`defaultPolicy`。
///
/// @note 需在探针启动前调用
+ (void)setSecurityPolicy:(ORSecurityPolicy *)securityPolicy;

/// 设置inteceptFilter，用于判断请求是否允许被探针内的URLProtocol拦截（需在BonreeSDK启动之前设置）
/// @param interceptFilter 返回NO时，不允许拦截。返回YES时，允许拦截。
+ (void)setRequestInterceptFilter:(nullable BOOL (^)(NSURLRequest *))interceptFilter;

/// 该接口需要在BonreeSDK启动之前调用
/// 设置请求分组规则。同一分组的请求，使用同一个session发送请求。未分组的请求，使用单独的session。
/// @param handler 用于确定请求的分组，参数为request，返回值为分组ID。
+ (void)setRequestGroupHandler:(nullable NSString * _Nullable (^)(NSURLRequest *request))handler;

/// 设置敏感的控件类型
/// @param classes 设置为敏感的控件类型，例：UIView.class
/// 支持类型(及子类)：UIView,UIBarButtonItem,UIAlertAction,UIAlertView,UIActionSheet
+ (void)setViewSensitiveClasses:(NSArray<Class> *)classes;

# pragma mark - PDF录制

/// 设置WebView中是否存在PDF[会话回放]
/// @param isPDFWebView YES:查找PDF内容，找到则录制 NO:忽略PDF内容
+ (void)setHavePDFWebView:(BOOL)isPDFWebView;

/// 设置包含PDF的WebView[会话回放]
/// @param webView 包含PDF的WebView，如果存在多个WebView,需指明包含PDF的WebView,否则无法捕获正确的内容
+ (void)setPDFWebView:(WKWebView *)webView;

#pragma mark - Span

/// 创建span
/// - Parameters:
///   - name: span名称，不能为空，长度限制256，超过截取。允许数字、字母、冒号、空格、斜杠、下划线、连字符、英文句号、@
///   - type: span类型，不能为空，长度限制256，超过截取。允许数字、字母、冒号、空格、斜杠、下划线、连字符、英文句号、@
/// - Returns: 成功开始span时，返回pan。否则返回nil
+ (nullable id<ORSpan>)startSpanWithName:(NSString *)name type:(NSString *)type;

#pragma mark - 自定义接口

/// 自定义异常收集
/// @param exceptionType 异常类型
/// @param causedBy 异常原因
/// @param errorDump 异常堆栈
+ (void)setCustomExceptionWithType:(NSString *)exceptionType
                           causeBy:(NSString * _Nullable)causedBy
                         errorDump:(NSString * _Nullable)errorDump;
 
/// 自定义事件(精简)
/// @param eventID 事件ID
/// @param eventName 事件名称
+ (void)setCustomEventWithID:(NSString *)eventID
                        name:(nullable NSString *)eventName;
/// 自定义事件(精简)
/// @param eventID 事件ID
/// @param eventName 事件名称
/// @param eventLabel 事件标签
+ (void)setCustomEventWithID:(NSString *)eventID
                        name:(nullable NSString *)eventName
                       label:(nullable NSString *)eventLabel;
/// 自定义事件(精简)
/// @param eventID 事件ID
/// @param eventName 事件名称
/// @param param 事件附加信息
+ (void)setCustomEventWithID:(NSString *)eventID
                        name:(nullable NSString *)eventName
                       param:(nullable NSString *)param;
/// 自定义事件(精简)
/// @param eventID 事件ID
/// @param eventName 事件名称
/// @param eventLabel 事件标签
/// @param param 事件附加信息
+ (void)setCustomEventWithID:(NSString *)eventID
                        name:(nullable NSString *)eventName
                       label:(nullable NSString *)eventLabel
                       param:(nullable NSString *)param;

/// 自定义事件(精简)
/// @param eventID 事件ID
/// @param eventName 事件名称
/// @param eventLabel 事件标签
/// @param param 事件附加信息
/// @param info 事件信息
+ (void)setCustomEventWithID:(NSString *)eventID
                        name:(nullable NSString *)eventName
                       label:(nullable NSString *)eventLabel
                       param:(nullable NSString *)param
                        info:(nullable NSDictionary<NSString *, NSString *> *)info;

/// 自定义事件开始
/// @param eventID 事件ID
/// @param eventName 事件名称
+ (void)setCustomEventStartWithID:(NSString *)eventID
                             name:(nullable NSString *)eventName;
/// 自定义事件开始
/// @param eventID 事件ID
/// @param eventName 事件名称
/// @param eventLabel 事件标签
+ (void)setCustomEventStartWithID:(NSString *)eventID
                             name:(nullable NSString *)eventName
                            label:(nullable NSString *)eventLabel;
/// 自定义事件开始
/// @param eventID 事件ID
/// @param eventName 事件名称
/// @param eventLabel 事件标签
/// @param param 事件附加信息
+ (void)setCustomEventStartWithID:(NSString *)eventID
                             name:(nullable NSString *)eventName
                            label:(nullable NSString *)eventLabel
                            param:(nullable NSString *)param;

/// 自定义事件开始
/// @param eventID 事件ID
/// @param eventName 事件名称
/// @param eventLabel 事件标签
/// @param param 事件附加信息
/// @param info  附加信息
+ (void)setCustomEventStartWithID:(NSString *)eventID
                             name:(nullable NSString *)eventName
                            label:(nullable NSString *)eventLabel
                            param:(nullable NSString *)param
                             info:(nullable NSDictionary<NSString *, NSString *> *)info;

/// 自定义事件结束
/// @param eventID 事件ID
/// @param eventName 事件名称
+ (void)setCustomEventEndWithID:(NSString *)eventID
                           name:(nullable NSString *)eventName;
/// 自定义事件结束
/// @param eventID 事件ID
/// @param eventName 事件名称
/// @param eventLabel 事件标签
+ (void)setCustomEventEndWithID:(NSString *)eventID
                           name:(nullable NSString *)eventName
                          label:(nullable NSString *)eventLabel;
/// 自定义事件结束
/// @param eventID 事件ID
/// @param eventName 事件名称
/// @param eventLabel 事件标签
/// @param param 事件附加信息
+ (void)setCustomEventEndWithID:(NSString *)eventID
                           name:(nullable NSString *)eventName
                          label:(nullable NSString *)eventLabel
                          param:(nullable NSString *)param;

/// 自定义事件结束
/// @param eventID 事件ID
/// @param eventName 事件名称
/// @param eventLabel 事件标签
/// @param param 事件附加信息
/// @param info  附加信息
+ (void)setCustomEventEndWithID:(NSString *)eventID
                           name:(nullable NSString *)eventName
                          label:(nullable NSString *)eventLabel
                          param:(nullable NSString *)param
                           info:(nullable NSDictionary<NSString *, NSString *> *)info;
/// 自定义日志
/// @param logInfo 日志信息
+ (void)setCustomLog:(NSString *)logInfo;
/// 自定义日志
/// @param logInfo 日志信息
/// @param param 日志附加信息
+ (void)setCustomLog:(NSString *)logInfo
               param:(nullable NSString *)param;

/// 自定义指标
/// @param metricName 指标名称
/// @param metricValue 指标值
+ (void)setCustomMetricWithName:(NSString *)metricName
                          value:(NSInteger)metricValue;
/// 自定义指标
/// @param metricName 指标名称
/// @param metricValue 指标值（整型）
/// @param param 指标附加信息
+ (void)setCustomMetricWithName:(NSString *)metricName
                          value:(NSInteger)metricValue
                          param:(nullable NSString *)param;

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

/// 设置请求信息接口
/// @param headerKey 请求头中对应的键
/// @param value 需要匹配的value值
/// @param info 设置的请求信息
+ (void)setRquestExtraInfoWithHeaderKey:(nonnull NSString *)headerKey value:(nonnull NSString *)value info:(nullable NSString *)info;

/// 设置路由信息接口
/// @param routeModel 自定义路由模型
+ (void)reportRouteChange:(ORRouteModel *)routeModel;

/// 崩溃上报接口
/// @param time 发生时间
/// @param platformType 平台类型[1:Native,3:ReactNative,4:Flutter,5:Weex]
/// @param causeby 原因
/// @param type 崩溃类型
/// @param dump 崩溃堆栈
/// @param isFatal 退出应用是不是自定义异常
+ (void)reportCrashWithTime:(long long)time
               platformType:(int)platformType
                    causeby:(NSString *)causeby
                       type:(NSString *)type
                       dump:(NSString *)dump
                    isFatal:(BOOL)isFatal;

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
/// @param pageType 所在页面类型，1为Bundle(首页)，2为路由页
/// @param bundleTag Tag
/// @param anchorID RN事件关联ID
/// @param routeName 路由名称
+ (void)reportCrashWithTime:(long long)time
                    causeby:(NSString *)causeby
                       type:(NSString *)type
                       dump:(NSString *)dump
                   pageType:(int)pageType
                  bundleTag:(NSNumber *)bundleTag
                   anchorID:(NSString *)anchorID
                  routeName:(NSString *)routeName;

/// React Native Bundle路由上报接口
/// @param bundleTag Tag
/// @param routeID 路由ID
/// @param routeName 路由名称
/// @param routeTime 路由加载耗时
/// @param time 路由发生时间
+ (void)reportRNRouteChangeWithBundleTag:(NSNumber *)bundleTag
                                 routeID:(NSString *)routeID
                               routeName:(NSString *)routeName
                               routeTime:(long long)routeTime
                                    time:(long long)time;

/// React Native Bundle开始加载
/// @param bundleName Bundle名称
/// @param moduleName Module名称
+ (void)reportBundleStartLoadWithBundle:(NSString *)bundleName
                             moduleName:(NSString *)moduleName;

/// React Native Bundle中JS完成加载
/// @param bundleName Bundle名称
+ (void)reportBundleJSFinishLoadWithBundle:(NSString *)bundleName;

/// React Native Bundle视图出现
/// @param rootTag bundle对应tag
/// @param moduleName Module名称
/// @param time 时间
+ (void)reportBundleViewAppearTag:(NSNumber *)rootTag
                       moduleName:(NSString *)moduleName
                             time:(int64_t)time;

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

///自定义网络接口对象定义
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

///自定义路由接口对象定义
@interface ORRouteModel : NSObject

@property (nonatomic, copy) NSString *toUrl;                //目标路由
@property (nonatomic, copy) NSString *fromUrl;              //来源路由
@property (nonatomic, assign) NSInteger time;               //开始时间戳 「单位:us」
@property (nonatomic, assign) NSInteger duration;           //路由切换耗时
@property (nonatomic, assign) int status;                   //切换路由状态 0 正常 2异常
@property (nonatomic, copy) NSString *path;                 //当前路由子路径
@property (nonatomic, copy) NSString *root;                 //路由全量地址
@property (nonatomic, copy) NSString *pageUrl;              //主页面地址
@property (nonatomic, copy) NSString *frameworkName;        //框架名称vue rect angular
@property (nonatomic, copy, nullable) NSString *alias;      //路由地址名称 非必要
@property (nonatomic, assign) BOOL isCustom;                //是否为自定义

@end

NS_ASSUME_NONNULL_END
