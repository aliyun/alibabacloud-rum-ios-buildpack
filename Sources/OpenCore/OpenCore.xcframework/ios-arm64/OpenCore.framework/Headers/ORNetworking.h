#import <Foundation/Foundation.h>
#import <Availability.h>
#import <TargetConditionals.h>

#ifndef _ORNETWORKING_
    #define _ORNETWORKING_

#import <OpenCore/ORURLRequestSerialization.h>
#import <OpenCore/ORURLResponseSerialization.h>
#import <OpenCore/ORSecurityPolicy.h>

#if !TARGET_OS_WATCH
#import <OpenCore/ORNetworkReachabilityManager.h>
#endif

#import <OpenCore/ORURLSessionManager.h>
#import <OpenCore/ORHTTPSessionManager.h>

#endif
