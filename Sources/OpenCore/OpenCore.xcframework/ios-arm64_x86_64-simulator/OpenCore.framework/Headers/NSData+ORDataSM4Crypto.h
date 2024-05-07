#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface NSData (ORDataSM4Crypto)

//SM4加密数据
- (NSData *)orDataSM4EncryptWithKey:(NSString *)key;
//SM4解密密数据
- (NSData *)orDataSM4DecryptWithKey:(NSString *)key;


//SM4加密文件不padding数据
- (NSData *)orDataSM4EncryptNoPaddingWithKey:(NSString *)key;

@end

NS_ASSUME_NONNULL_END
