#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface ORGMTool : NSObject

/// 创建随机SM4key
+ (NSString *)orCreateSm4Key;

//加密文件调用，返回加密后的文件地址
+ (NSString *)orSM4EncryptWithFile:(NSString *)filePath encryptKey:(NSString *)key;
@end

NS_ASSUME_NONNULL_END
