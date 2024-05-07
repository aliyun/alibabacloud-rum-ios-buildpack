#import <Foundation/Foundation.h>
#import <OpenCore/ORLOG.h>

typedef void(^ORDataBreakHandle)(ORLogFlag logFlag,  NSString * _Nullable breakMsg);

NS_ASSUME_NONNULL_BEGIN

@interface ORFileInfo : NSObject

@property (nonatomic, copy) NSString *fileName;
@property (nonatomic, strong) NSData *fileData;
@property (nonatomic, strong) NSDate *createDate;

@end

@interface ORDataManager : NSObject

+ (instancetype)sharedManager;

- (BOOL)removeFileOrDirectoryInDoucmentPath:(NSString *)path breakHandle:(ORDataBreakHandle)breakHandle;

- (BOOL)writeData:(NSData *)object toDoucmentPath:(NSString *)path breakHandle:(ORDataBreakHandle)breakHandle;
- (BOOL)writeData:(NSData *)object toDoucmentPath:(NSString *)path attributes:(nullable NSDictionary<NSFileAttributeKey, id> *)attributes breakHandle:(ORDataBreakHandle)breakHandle;

- (nullable NSData *)readFileInDocumentPath:(NSString *)path;
- (nullable ORFileInfo *)readFileInfoInDocumentPath:(NSString *)path breakHandle:(ORDataBreakHandle)breakHandle;

- (nullable NSArray<NSData *> *)readFilesInDocumentDirectory:(NSString *)dir breakHandle:(ORDataBreakHandle)breakHandle;
- (nullable NSArray<ORFileInfo *> *)readFileInfosInDocumentDirectory:(NSString *)dir breakHandle:(ORDataBreakHandle)breakHandle;


+ (NSString *)fullPathBasedOnDocumentByPath:(NSString *)path;
+ (NSString *)fullPathBasedOnLibraryByPath:(NSString *)path;
+ (NSString *)fullPathBasedOnTmpByPath:(NSString *)path;

@end

NS_ASSUME_NONNULL_END
