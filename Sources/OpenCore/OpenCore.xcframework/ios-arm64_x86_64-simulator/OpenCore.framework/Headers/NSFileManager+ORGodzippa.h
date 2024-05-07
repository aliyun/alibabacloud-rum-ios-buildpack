// NSFileManager+ORGodzippa.h

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

/**
 Godzippa provides a category on `NSFileManager` to inflate and deflate files using gzip compression.
 */
@interface NSFileManager (ORGodzippa)

///------------------
/// @name Compressing
///------------------

/**
 Compresses the specified file, writing data to a destination file.

 @param sourceFile The file to be compressed.
 @param destinationFile The destination of the compressed file.
 @param error The error that occurred while attempting to compress the source file, if any.

 @return Whether the compressed file contents were written successfully.
 */
- (BOOL)GZipCompressFile:(NSURL *)sourceFile
   writingContentsToFile:(NSURL *)destinationFile
                   error:(NSError * __autoreleasing *)error;

/**
 Compresses the specified file at a particular level, writing data to a destination file.

 @param sourceFile The file to be compressed.
 @param destinationFile The destination of the compressed file.
 @param level The compression level must be Z_DEFAULT_COMPRESSION, or between 0 and 9: 1 gives best speed, 9 gives best compression, 0 gives no compression at all (the input data is simply copied a block at a time). Z_DEFAULT_COMPRESSION requests a default compromise between speed and compression (currently equivalent to level 6).
 @param error The error that occurred while attempting to compress the source file, if any.

 @return Whether the compressed file contents were written successfully.
 */
- (BOOL)GZipCompressFile:(NSURL *)sourceFile
   writingContentsToFile:(NSURL *)destinationFile
                 atLevel:(int)level
                   error:(NSError *__autoreleasing *)error;

///--------------------
/// @name Decompressing
///--------------------

/**
 Decompresses the specified Gzip-compressed file, writing data to a destination file.

 @param sourceFile The compressed file.
 @param destinationFile The destination for the decompressed file.
 */
- (BOOL)GZipDecompressFile:(NSURL *)sourceFile
     writingContentsToFile:(NSURL *)destinationFile
                     error:(NSError * __autoreleasing *)error;

@end

NS_ASSUME_NONNULL_END
