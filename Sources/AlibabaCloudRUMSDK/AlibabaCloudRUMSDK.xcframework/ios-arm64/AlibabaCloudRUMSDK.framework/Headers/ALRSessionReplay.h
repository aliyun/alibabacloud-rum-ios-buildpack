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

typedef NS_ENUM(NSUInteger, ALRSessionReplayTextAndInputPrivacy) {
    ALRSessionReplayTextAndInputPrivacyMaskAll = 0,
    ALRSessionReplayTextAndInputPrivacyMaskAllInputs = 1,
    ALRSessionReplayTextAndInputPrivacyMaskSensitiveInputs = 2,
};

typedef NS_ENUM(NSUInteger, ALRSessionReplayImagePrivacy) {
    ALRSessionReplayImagePrivacyMaskAll = 0,
    ALRSessionReplayImagePrivacyMaskNonBundledOnly = 1,
    ALRSessionReplayImagePrivacyMaskNone = 2,
};

typedef NS_ENUM(NSUInteger, ALRSessionReplayTouchPrivacy) {
    ALRSessionReplayTouchPrivacyHide = 0,
    ALRSessionReplayTouchPrivacyShow = 1,
};

@interface ALRSessionReplayConfiguration : NSObject <NSCopying>

@property(nonatomic, assign, readonly) NSUInteger sampleRate;
@property(nonatomic, assign, readonly) ALRSessionReplayTextAndInputPrivacy textAndInputPrivacy;
@property(nonatomic, assign, readonly) ALRSessionReplayImagePrivacy imagePrivacy;
@property(nonatomic, assign, readonly) ALRSessionReplayTouchPrivacy touchPrivacy;

- (instancetype)initWithSampleRate:(NSUInteger)sampleRate
               textAndInputPrivacy:(ALRSessionReplayTextAndInputPrivacy)textAndInputPrivacy
                      imagePrivacy:(ALRSessionReplayImagePrivacy)imagePrivacy
                      touchPrivacy:(ALRSessionReplayTouchPrivacy)touchPrivacy NS_DESIGNATED_INITIALIZER;

- (instancetype)init NS_UNAVAILABLE;
+ (instancetype)new NS_UNAVAILABLE;

@end

@interface ALRSessionReplay : NSObject

/// Starts Session Replay with the latest remote sampling and privacy settings.
/// The Session Replay module must have been enabled before RUM initialization.
/// Calling this method again with the same configuration mode is idempotent.
/// Call this method on the main thread; otherwise it returns NO.
+ (BOOL)start;

/// Starts Session Replay with local sampling and privacy settings. Remote
/// storage settings remain effective. A different configuration is rejected
/// while recording; call `stop` before starting with new settings. Call this
/// method on the main thread; otherwise it returns NO.
+ (BOOL)startWithConfiguration:(ALRSessionReplayConfiguration *)configuration
    NS_SWIFT_NAME(start(_:));

/// Stops accepting new replay input and returns without waiting for background
/// sealing, durable handoff, or upload. Already accepted data remains eligible
/// for normal asynchronous upload. Call this method on the main thread;
/// otherwise it returns NO.
+ (BOOL)stop;

/// Returns the latest explicit user intent, including a start pending an older
/// generation's durable handoff. It does not indicate sampling or upload state.
+ (BOOL)isStarted;

@end

NS_ASSUME_NONNULL_END
