#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSMutableSet (ORSafe)

- (BOOL)containsObjectSafe:(id)anObject;
- (void)addObjectSafe:(id)object;
- (void)removeObjectSafe:(id)object;
- (void)addObjectsFromArraySafe:(NSArray<id> *)array;
- (void)intersectSetSafe:(NSSet<id> *)otherSet;
- (void)minusSetSafe:(NSSet<id> *)otherSet;
- (void)removeAllObjectsSafe;
- (void)unionSetSafe:(NSSet<id> *)otherSet;
- (void)setSetSafe:(NSSet<id> *)otherSet;

- (dispatch_semaphore_t)semaphoreLock;

@end

NS_ASSUME_NONNULL_END
