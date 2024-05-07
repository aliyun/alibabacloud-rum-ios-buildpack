#import <Foundation/Foundation.h>
#import <mach/mach_types.h>
#import <UIKit/UIKit.h>

extern NSString *const kORWiFi;
/// 屏幕方向
typedef enum : NSUInteger {
    ScreenDirectionVertically = 1, /// 垂直
    ScreenDirectionHorizontally /// 水平
} ScreenDirection;

@interface ORDeviceCore : NSObject

/// 系统可用内存
+ (float) systemAvailableMemory;
/// app占用内存
+ (float) appMemory;
/// 系统占用cpu
+ (float) systemCpu;
/// app占用cpu
+ (double) appCpu;
/// 应用消耗的CPU时长 (user+system)
+ (long long)appCpuTimeInUs;
/// CPU 核数
+(NSUInteger)cpuNumber;
/// 获取系统最大内存
+ (float)sysTotalMemory;
/// 设备电量
+ (int32_t)availableBattery;
/// 剩余存储
+ (float)systemAvailableStorage;
/// 是否开启GPS
+ (BOOL)isGpsOpen;
/// 定位是否可用
+ (BOOL)isEnabledLocation;
/// 信号量（tcp连接网络的6次平均值）
+ (uint64_t)signal;
/// app版本
+ (NSString*)appShortVersion;
/// 获取app build版本
+ (NSString *)appBuildVersion;
/// 设置上一个应用版本
+ (void)setLastAppVersion:(NSString *)lastAppVersion;
/// 获取上一个应用版本
+ (NSString *)lastAppVersion;
/// 厂商
+ (NSString *)channelName;
/// 项目名称
+ (NSString *)projectName;
/// app名称
+ (NSString *)appName;
/// 包名
+ (NSString *)bundleId;
/// 是否越狱
+ (BOOL)isJailBreak;
/// 设备是否模拟器
+ (BOOL)isSimulator;
/// iOS原始设备型号
+ (NSString*)iphoneModel;
/// UUID
+ (NSString*)UUID;
/// 移除本地保存的UUID
+ (void)deleteUUID;
/// CPU型号
+ (NSString*)cpuArch;
/// 系统的当前语言
+ (NSString*)language;
/// 屏幕分辨率
+ (CGSize)displaySize;
/// 屏幕分辨率(宽*高)
+ (NSString*)displaySizeString;
/// 系统build版本
+ (NSString *)osBuildVersion;
//系统版本 e.g. @"4.0"
+ (NSString *)systemVersion;
//系统名称@"iOS"
+ (NSString *)systemName;
//屏幕方向
+ (ScreenDirection)orientation;
/// 系统总物理内存
+ (float)systemTotalStorage;
/// OS类型，iOS固定为0
+ (NSInteger)osType;

/**
 生成唯一的key 用于connection请求匹配的键

 @return 唯一的key
 */
+ (NSString *)createRandomKey;
@end


