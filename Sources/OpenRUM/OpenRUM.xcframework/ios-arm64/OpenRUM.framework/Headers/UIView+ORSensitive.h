#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface UIView (ORSensitive)

/// UIView实例是否敏感
/// YES：敏感[过滤文本等信息] NO：不敏感[正常采集]
@property (nonatomic, assign) BOOL orSensitive;

@end

NS_ASSUME_NONNULL_END
