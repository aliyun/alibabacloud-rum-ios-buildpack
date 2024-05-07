#import <Foundation/Foundation.h>

@interface ORGZip : NSObject

/**gzip压缩*/
NSData *or_gzipData(NSData *uncompressedData);

/**gzip解压缩*/
NSData *or_un_gzipData(NSData *gzipData);

@end
