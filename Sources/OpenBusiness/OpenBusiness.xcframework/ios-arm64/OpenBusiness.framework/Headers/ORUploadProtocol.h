#import <Foundation/Foundation.h>
#import <OpenBusiness/ORBusinessTypeDefine.h>

@class ORFileInfo;

/// Upload控制数据
@protocol ORUploadControlDataProtocol <NSObject>

/// 自身模块名称
@property (nonatomic, copy) NSString *moduleName;
/// Upload地址
@property (nonatomic, copy) NSString *address;
/// 会话标识
@property (nonatomic, copy) NSString *session;
/// Config下发的monitorTime时间戳
@property (nonatomic, assign) uint64_t configMonitorTime;
/// Upload回传周期 recoveryCycle
@property (nonatomic, assign) NSInteger intervalTime;
/// Upload场景
@property (nonatomic, assign) ORUploadScenario uploadScenario;
/// 数据存储时间 [单位小时] unsigned int
@property (nonatomic, assign) NSUInteger saveTime;
///Config本地版本号[不传不缓存到本地]
@property (nonatomic, copy) NSString *localVersion;
///Config本地版本KEY，UserDefault使用[不传不缓存到本地]
@property (nonatomic, copy) NSString *localVersionKey;
///Upload本地路径[不传不缓存到本地]
@property (nonatomic, copy) NSString *localPath;

@end

/// Upload请求数据[内存/本地]
@protocol ORUploadRequestDataProtocol <NSObject>

/// 请求对象
@property (nonatomic, strong) NSURLRequest *request;
/// Upload Key
@property (nonatomic, copy) NSString *key;
/// 本地数据
@property (nonatomic, strong) NSData *localData;
/// 本地数据文件名
@property (nonatomic, copy) NSString *dataFileName;
/// Query数据
@property (nonatomic, strong) NSData *localQueryData;
/// Query数据文件名
@property (nonatomic, copy) NSString *queryFileName;
/// 数据创建时间
@property (nonatomic, strong) NSDate *date;

@end

/// Upload消息接收者
@protocol ORUploadReceiverProtocol <NSObject>

/// 获取Upload请求数据
/// @param option 获取选项
/// @param data 控制数据
- (id<ORUploadRequestDataProtocol>)getUploadRequestOption:(ORUploadOption)option data:(id<ORUploadControlDataProtocol>)data;

/// 获取要保存本地的数据
- (id<ORUploadRequestDataProtocol>)getNeedLocalSaveData;

/// 本地读取数据转换为可发送数据
/// @param files 文件数据
/// @param data 控制数据
- (NSArray<id<ORUploadRequestDataProtocol>> *)transformLocalFiles:(NSArray<ORFileInfo *> *)files data:(id<ORUploadControlDataProtocol>)data;

/// 异步上传时获取要额外附加的请求数据
/// @param isStart 是否是启动时
/// @param data 控制数据
- (NSArray<id<ORUploadRequestDataProtocol>> *)asyncLocalExtraDatasIsStart:(BOOL)isStart data:(id<ORUploadControlDataProtocol>)data;

/// Upload收到响应
/// @param response 响应数据
/// @param httpResponse HTTP响应信息
/// @param requestData 请求数据
/// @param error 错误信息
/// @return 解析响应是否成功
- (BOOL)uploadDidReceiveResponse:(NSData *)response httpResponse:(NSHTTPURLResponse *)httpResponse requestData:(id<ORUploadRequestDataProtocol>)requestData error:(NSError *)error;

/// Upload已停止
- (void)uploadDidStop;

@optional

/// Upload请求成功是否删除本地文件
/// @param requestData 请求数据
/// @param controlData 模块数据
/// @param option 上报类型
/// @return 是否删除
- (BOOL)uploadSuccessIsDeleteFileWithRequest:(id<ORUploadRequestDataProtocol>)requestData controlData:(id<ORUploadControlDataProtocol>)controlData option:(ORUploadOption)option;

/// 异步请求已经全部完成
/// @param data 控制数据
- (void)asyncDidCompleteWithData:(id<ORUploadControlDataProtocol>)data;

@end

