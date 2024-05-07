/*
 1.用来写日志到沙盒中
 2.用开关标志 来 针对性的打印某类需要打印的log日志
 */

#import <Foundation/Foundation.h>

#ifndef ORLOG_H
#define ORLOG_H

/// 模块划分
typedef NS_OPTIONS(NSInteger, ORAgentLogModule)
{
    ORAgentLogModuleNone               = 0x0,           /// 未知模块
    ORAgentLogModuleRUM                = 0x1,           /// RUM模块
    ORAgentLogModuleLogRecord          = 0x1 << 1       /// 日志分析模块
};

/// 日志级别
typedef NS_OPTIONS(NSInteger, ORLogFlag)
{
    
    ORLogFlagNone          = 0x0,         /// 关闭日志输出
    ORLogFlagPublic        =  0x1,        /// 显示主流程的相关信息，对sdk启动或使用有重大影响的配置或者参数使用, default
    
    ORLogFlagData          =  0x1 << 1,   /// 展示上报数据、响应数据
    
    ORLogFlagInfo          =  0x1 << 2,   /// 提示信息
    ORLogFlagWarn          =  0x1 << 3,   /// 警告信息
    ORLogFlagError         =  0x1 << 4,   /// 错误信息
    
    ORLogFlagWeb           =  0x1 << 5,
    ORLogFlagNet           =  0x1 << 6,
    ORLogFlagLag           =  0x1 << 7,
    ORLogFlagCrash         =  0x1 << 8,
    ORLogFlagView          =  0x1 << 9,
    ORLogFlagCustom        =  0x1 << 10,
    ORLogFlagUpload        =  0x1 << 12,
    ORLogFlagConfig        =  0x1 << 13,
    ORLogFlagAction        =  0x1 << 14,
    ORLogFlagLaunch        =  0x1 << 15,
    ORLogStateChange       =  0x1 << 16,
    ORLogDevice            =  0x1 << 17,
    ORLogFlagLogback       =  0x1 << 18,
    ORLogFlagSpeedTest     =  0x1 << 19,
    ORLogFlagReactNative   =  0x1 << 20,
    ORLogFlagRouteChange   =  0x1 << 21,
    ORLogFlagWatchdog      =  0x1 << 22,
    ORLogOnlineTracking    =  0x1 << 23,
    ORLogFlagTrace         =  0x1 << 24,
    ORLogFlagBattery       =  0x1 << 25,
    ORLogFlagLogRecord     =  0x1 << 26,
    ORLogFlagSessionReplay =  0x1 << 27,

    ORLogFlagAll           =  0xFFFFFFF,
    
    ORLogFlagWriteFile     =  0x1 << 31,
};

#ifdef __cplusplus
extern "C" {
#endif //__cplusplus
    
    //日志开关标志
    
extern ORLogFlag eORLogFlag;
extern ORLogFlag eORLogModuleFlag;

void or_outputLog(ORAgentLogModule moduleType, ORLogFlag options,NSString *fmt);
BOOL or_shouldLog(ORAgentLogModule moduleType, ORLogFlag options);

//回调SDK错误信息
void or_errorMessegeLog(const char *file, const char *method, int line, NSString *fmtStr);

/// Common
#define ORLOG(module, flag, fmt, ...) \
    do { \
        if (or_shouldLog(module, flag)) { \
            or_outputLog(module, flag, [NSString stringWithFormat:fmt, ##__VA_ARGS__]);\
        } \
    } while (0)

#define ORLOGERROR(module, flag, fmt, ...) ORLOG(module, flag | ORLogFlagError, fmt, ##__VA_ARGS__)
#define ORLOGWARN(module, flag, fmt, ...) ORLOG(module, flag | ORLogFlagWarn, fmt, ##__VA_ARGS__)
#define ORLOGINFO(module, flag, fmt, ...) ORLOG(module, flag | ORLogFlagInfo, fmt, ##__VA_ARGS__)

#ifdef __cplusplus
}
#endif //__cplusplus

#endif

