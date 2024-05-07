#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSMutableArray (ORExt)

- (void)or_removeObjectUsingMatchHandler:(BOOL(^)(id))matchHandler;

@end

NS_ASSUME_NONNULL_END
