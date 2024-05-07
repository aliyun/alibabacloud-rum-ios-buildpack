#import <Foundation/Foundation.h>

@interface NSObject (ORExt)

/**oc对象转换为整型(长整型)*/
- (int64_t)objectToInt;

/**oc对象转换为无符号整型(长整型)*/
- (uint64_t)objectToUInt;
/// 调用者仅限字典或者数组  @{@"aaa": [NSNull null]}的结果{"aaa" : null}
- (id)or_jsonString;

@property (nonatomic, strong, nullable) NSUUID *orUUID;

@end
