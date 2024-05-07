#ifndef ORBASELIB_H
#define ORBASELIB_H

#import <UIKit/UIKit.h>

typedef struct {
    double usage;
    long long user_time;
    long long system_time;
} ORCpuUsageInfo;

#ifdef __cplusplus
extern "C" {
#endif //__cplusplus
    
#import <netdb.h>
#import <OpenCore/ORThreadTypes.h>

/// 成功时返回当前线程消耗的cpu时间（微秒）；失败时返回0
uint64_t or_getThreadClockTime() API_AVAILABLE(ios(10.0));
/// 成功时返回进程消耗的cpu时间（微秒）；失败时返回0
int64_t or_getProcessClockTime() API_AVAILABLE(ios(10.0));

NSTimeInterval or_processStartTime();

/// 当前设备时间戳
uint64_t or_timestamp_in_us();

/**cpu启动到现在的微秒数*/
uint64_t or_cpu_time_us(void);

/**cpu启动到现在的毫秒数*/
uint64_t or_cpu_time_ms(void);

uint64_t or_absolute_time(void);

/**判断某类（cls）是否为指定类（acls）的子类*/
BOOL or_isSubclassOfClass(Class _Nullable cls, Class _Nullable acls);

/**判断某类（cls）是否为指定类（acls）或其子类*/
BOOL or_isKindOfClass(Class _Nullable cls, Class _Nullable acls);

/**动态添加方法*/
void or_addInstanceMethod(Class _Nullable cls, SEL _Nonnull sel, IMP _Nonnull imp);

Class _Nullable or_getOriginalClassOfFirebaseClass(Class _Nullable cls);

NSString * _Nonnull or_frameToString(CGRect frame);

NSString * _Nullable or_getClsName(NSObject * _Nullable target);

void or_dispatch_sync_on_main(DISPATCH_NOESCAPE dispatch_block_t _Nonnull block);

/// 获取当前线程
ORThreadType or_thread_self();

/// 获取主线程
BOOL or_get_main_thread(ORThreadType * _Nonnull thread);

NSString * _Nonnull or_thread_stringThreadId(ORThreadType threadId);

/// 应用消耗的CPU时长 (user+system)
int64_t or_appCpuTimeInUs();

BOOL or_appCpuUsageInfo(ORCpuUsageInfo * _Nonnull usageInfo);

#ifdef __cplusplus
}
#endif //__cplusplus

#endif
