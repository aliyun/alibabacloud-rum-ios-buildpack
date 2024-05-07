#import <Foundation/Foundation.h>

#if __has_include(<OpenCore/ORModel.h>)
FOUNDATION_EXPORT double ORModelVersionNumber;
FOUNDATION_EXPORT const unsigned char ORModelVersionString[];
#import <OpenCore/NSObject+ORModel.h>
#import <OpenCore/ORClassInfo.h>
#else
#import "NSObject+ORModel.h"
#import "ORClassInfo.h"
#endif
