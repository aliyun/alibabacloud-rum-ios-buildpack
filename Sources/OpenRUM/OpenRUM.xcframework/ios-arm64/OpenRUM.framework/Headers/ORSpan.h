
#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

typedef NS_ENUM(NSInteger, ORSpanMetricUnit) {
    ORSpanMetricUnitBit = 0,///比特
    ORSpanMetricUnitByte,///字节
    ORSpanMetricUnitKilobytes,///KB
    ORSpanMetricUnitMegabytes,///MB
    ORSpanMetricUnitMillisecond,///毫秒
    ORSpanMetricUnitSecond,///秒
    ORSpanMetricUnitMinute,///分钟
    ORSpanMetricUnitHour,///小时
    ORSpanMetricUnitDay,///天
    ORSpanMetricUnitBitps,///比特/秒
    ORSpanMetricUnitByteps,///字节/秒
    ORSpanMetricUnitKbps,///千字节/秒
    ORSpanMetricUnitMbps,///兆字节/秒
};

/**
 * 将枚举ORSpanMetricUnit转换为字符串
 */
static NSString * _Nonnull const ORSpanMetricUnitNames[] = {
    @"b",///比特
    @"B",///字节
    @"KB",///千字节
    @"MB",///兆字节
    @"ms",///毫秒
    @"s",///秒
    @"m",///分
    @"h",///小时
    @"d",///天
    @"b/s",///比特/秒
    @"B/s",///字节/秒
    @"KB/s",///千字节/秒
    @"MB/s"///兆字节/秒
};

typedef NS_ENUM(NSInteger, ORSpanStatus) {
    ORSpanStatusUnknown = 0,
    ORSpanStatusSuccess,
    ORSpanStatusFailed
};

@protocol ORSpan <NSObject>

/// 创建一个子span
/// - Parameters:
///   - name: span名称，不能为空，长度限制256，超过截取。允许数字、字母、冒号、空格、斜杠、下划线、连字符、英文句号、@
///   - type: span类型，不能为空，长度限制256，超过截取。允许数字、字母、冒号、空格、斜杠、下划线、连字符、英文句号、@
/// - Returns: 成功开始子span时，返回子pan。否则返回nil
- (nullable id<ORSpan>)startChildWithName:(NSString *)name type:(NSString *)type;

/// 设置data
/// - Parameters:
///   - value: data的值。长度限制7000，超过截取。传nil，调用无效。
///   - key: 不能为空，长度限制200，超过调用无效。允许字母、下划线、连字符、英文句号，且必须已字母开始、字母结束
- (void)setDataValue:(NSString *)value forKey:(NSString *)key;

/// 移除指定data
- (void)removeDataForKey:(NSString *)key;

/// 设置tags
/// - Parameters:
///   - value: tag的值。长度限制7000，超过截取。传nil，调用无效。
///   - key: 不能为空，长度限制200，超过调用无效。允许字母、下划线、连字符、英文句号，且必须已字母开始、字母结束
- (void)setTagValue:(NSString *)value forKey:(NSString *)key;

/// 移除指定tag
- (void)removeTagForKey:(NSString *)key;

/// 设置metrics
/// - Parameters:
///   - key: 不能为空，长度限制200，超过调用无效。允许字母、下划线、连字符、英文句号，且必须已字母开始、字母结束
- (void)setMetricValue:(long long)value forKey:(NSString *)key;

/// 设置metrics
/// - Parameters:
///   - unit: value的单位名称，长度限制256，超过单位设置无效。允许数字、字母、冒号、空格、斜杠、下划线、连字符、英文句号、at符。预置单位类型见ORSpan.h中的ORSpanMetricUnitNames[ ]，支持自定义单位
///   - key: 不能为空，长度限制200，超过调用无效。允许字母、下划线、连字符、英文句号，且必须以字母开始、字母结束
- (void)setMetricValue:(long long)value unit:(NSString *)unit forKey:(NSString *)key;

/// 移除指定metric
- (void)removeMetricForKey:(NSString *)key;

/// 主动设置span耗时。如果未主动调用该方法，则span耗时为从start到finish的时长。
/// - Parameter duration: 耗时时长（单位us）
- (void)setDuration:(long long)duration;

/// 设置span的状态
- (void)setStatus:(ORSpanStatus)status;

/// 设置span的状态码
/// - Parameter statusCode: 长度限制7000。超过调用无效
- (void)setStatusCode:(NSString *)statusCode;

/// 完成span
/// - Note 如果没有调用 -setStatus:设置span状态，则span状态为success。
- (void)finish;

/// 完成span，且将span状态设置为status。
- (void)finishWithStatus:(ORSpanStatus)status;

/// 作为根结点时，子孙的数量
@property (nonatomic) int countOfDescendant;


@end

NS_ASSUME_NONNULL_END
