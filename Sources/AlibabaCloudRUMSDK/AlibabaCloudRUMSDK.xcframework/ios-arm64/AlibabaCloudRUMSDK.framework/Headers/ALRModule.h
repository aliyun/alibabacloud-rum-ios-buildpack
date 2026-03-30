//
// Copyright 2024 Alibaba Cloud Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

/// Internal bitmask identifying capture modules for local enable/disable logic.
///
/// This is the internal counterpart of the public `AlibabaCloudRUMModule` type
/// defined in `AlibabaCloudRUMSDK.h`. Bit values must stay in sync.
typedef NS_OPTIONS(NSUInteger, ALRModule) {
    ALRModuleNone          = 0,
    ALRModuleCrash         = 1 << 0,
    ALRModuleNetwork       = 1 << 1,   // Controls both URLSession and URLConnection
    ALRModuleView          = 1 << 2,
    ALRModuleAction        = 1 << 3,
    ALRModuleWebView       = 1 << 4,   // WKWebView / H5
    ALRModuleLongTask      = 1 << 5,
    ALRModuleAppLaunch     = 1 << 6,
    ALRModuleAppState      = 1 << 7,
    ALRModuleNetState      = 1 << 8,
    ALRModuleCustomEvent   = 1 << 9,
    ALRModuleCustomLog     = 1 << 10,
    ALRModuleCustomMetric  = 1 << 11,
    ALRModuleAll           = (1 << 12) - 1
};

NS_ASSUME_NONNULL_END
