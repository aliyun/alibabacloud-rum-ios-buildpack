#import <Foundation/Foundation.h>

@interface NSMutableDictionary (ORSafe)

- (void)removeObjectForKeySafe:(id)aKey;
- (void)setObjectSafe:(id)anObject forKey:(id <NSCopying>)aKey;
- (void)setValueSafe:(id)value forKey:(NSString *)key;
- (void)removeAllObjectsSafe;
- (void)removeObjectsForKeysSafe:(NSArray<id> *)keyArray;
- (void)setDictionarySafe:(NSDictionary<id, id> *)otherDictionary;
- (id)objectForKeySafe:(id)aKey;
- (NSArray *)allValuesSafe;

- (dispatch_semaphore_t)semaphoreLock;

@end
