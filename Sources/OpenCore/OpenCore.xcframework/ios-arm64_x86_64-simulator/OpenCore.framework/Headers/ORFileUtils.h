#import <Foundation/Foundation.h>

#import <zlib.h>

NS_ASSUME_NONNULL_BEGIN

@interface ORFileUtils : NSObject

+ (BOOL)GZipCompressFilesInDirectory:(NSURL *)directory
                              toFile:(NSURL *)destinationFile
                       withBeginData:(nullable NSData *)beginData
                       separatorData:(nullable NSData *)separatorData
                             endData:(nullable NSData *)endData;

+ (BOOL)mergeFilesInDirectory:(NSURL *)directory
                       toFile:(NSURL *)destinationFile
                withBeginData:(nullable NSData *)beginData
                separatorData:(nullable NSData *)separatorData
                      endData:(nullable NSData *)endData;

@end

NS_ASSUME_NONNULL_END
