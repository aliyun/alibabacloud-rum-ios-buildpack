#import <UIKit/UIKit.h>
#import <OpenRUM/UIView+ORSensitive.h>

NS_ASSUME_NONNULL_BEGIN

@interface UIView (ORExternalExt)

/// UIView自定义标题，仅在点击时使用生效
@property (nonatomic, copy) NSString *orActionControlTitle;

@end


@interface UIBarItem (ORExternalExt)

/// UIBarItem自定义标题，仅在点击时使用生效
@property (nonatomic, copy) NSString *orActionControlTitle;

@end

NS_ASSUME_NONNULL_END
