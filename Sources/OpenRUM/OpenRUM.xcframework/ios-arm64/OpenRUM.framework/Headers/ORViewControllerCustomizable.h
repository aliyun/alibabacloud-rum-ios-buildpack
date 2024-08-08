#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@protocol ORViewControllerCustomizable <NSObject>

@optional
/// 自定义页面标题[控制器实现协议]
/// @return 自定义页面标题
- (NSString *)orViewTitle;

@end

NS_ASSUME_NONNULL_END
