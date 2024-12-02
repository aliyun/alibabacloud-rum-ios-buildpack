//
// Copyright 2023 aliyun-sls Authors
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

#import "AlibabaCloudRUMBridge.h"
@import AlibabaCloudRUM;

#ifdef __cplusplus
extern "C" {
#endif
    static const char *_app_id;

    void _alibabacloud_rum__set_debuggable(int debuggable)
    {
        if (debuggable)
        {
            [AlibabaCloudRUM setLogFlag:@0xFFFFFFFF];
        }
    }

    void _alibabacloud_rum__set_config_address(const char *config_address)
    {
        [AlibabaCloudRUM setConfigAddress:[NSString stringWithUTF8String:config_address]];
    }

    void _alibabacloud_rum__set_app_id(const char *app_id)
    {
        _app_id = strdup(app_id);
    }

    void _alibabacloud_rum__set_framework(int framework)
    {
        [AlibabaCloudRUM setAppFramework:framework];
    }

    void _alibabacloud_rum__start(void)
    {
        [AlibabaCloudRUM startWithAppID:[NSString stringWithUTF8String:_app_id]];
    }

    void _alibabacloud_rum__stop(void)
    {
        if (NULL != _app_id)
        {
            free((void *)_app_id);
        }

        [AlibabaCloudRUM stopSDK];
    }

    void _alibabacloud_rum__set_user_name(const char *user_name)
    {
        [AlibabaCloudRUM setUserName:[NSString stringWithUTF8String:user_name]];
    }

    void _alibabacloud_rum__set_extra_info(uint32_t length, char **kvs)
    {
        if (length <= 0)
        {
            return;
        }

        NSMutableDictionary *dictionary = [NSMutableDictionary dictionary];
        for (uint32_t i = 0; i < length; i++) {
            if (NULL == kvs[2 * i] ||
                NULL == kvs[2 * i + 1] ||
                strlen(kvs[2 * i + 1]) == 0 ||
                strlen(kvs[2 * i + 1]) == 0 )
            {
                continue;;
            }

            [dictionary setObject:[NSString stringWithUTF8String:kvs[2 * i + 1]]
                           forKey:[NSString stringWithUTF8String:kvs[2 * i]]
            ];
        }

        [AlibabaCloudRUM setExtraInfo:dictionary];
    }

    void _alibabacloud_rum__set_user_extra_info(uint32_t length, char **kvs)
    {
        if (length <= 0)
        {
            return;
        }

        NSMutableDictionary *dictionary = [NSMutableDictionary dictionary];
        for (uint32_t i = 0; i < length; i++) {
            if (NULL == kvs[2 * i] ||
                NULL == kvs[2 * i + 1] ||
                strlen(kvs[2 * i]) == 0 ||
                strlen(kvs[2 * i + 1]) == 0 )
            {
                continue;;
            }

            [dictionary setObject:[NSString stringWithUTF8String:kvs[2 * i + 1]]
                           forKey:[NSString stringWithUTF8String:kvs[2 * i]]
            ];
        }

        [AlibabaCloudRUM setUserExtraInfo:dictionary];
    }

    void _alibabacloud_rum__set_custom_exception(const char *exception_name, const char *exception_causeby, const char *stack_trace)
    {
        if (NULL == exception_name ||
            NULL == exception_causeby ||
            NULL == stack_trace ||
            strlen(exception_name) == 0 ||
            strlen(exception_causeby) == 0 ||
            strlen(stack_trace) == 0)
        {
            return;
        }

        [AlibabaCloudRUM setCustomException:[NSString stringWithUTF8String:exception_name]
                                    causeBy:[NSString stringWithUTF8String:exception_causeby]
                                  errorDump:[NSString stringWithUTF8String:stack_trace]
        ];
    }

    void _alibabacloud_rum__set_custom_event(const char *event_name, const char *event_group, const char *snapshots, double value, uint32_t length, char **kvs)
    {
        NSMutableDictionary *dictionary = [NSMutableDictionary dictionary];
        if (length > 0)
        {
            for (uint32_t i = 0; i < length; i++) {
                if (NULL == kvs[2 * i] ||
                    NULL == kvs[2 * i + 1] ||
                    strlen(kvs[2 * i]) == 0 ||
                    strlen(kvs[2 * i + 1]) == 0 )
                {
                    continue;;
                }

                [dictionary setObject:[NSString stringWithUTF8String:kvs[2 * i + 1]]
                               forKey:[NSString stringWithUTF8String:kvs[2 * i]]
                ];
            }
        }

        [AlibabaCloudRUM setCustomEvent:[NSString stringWithUTF8String:event_name]
                                  group:NULL == event_group ? nil : [NSString stringWithUTF8String:event_group]
                              snapshots:NULL == snapshots ? nil : [NSString stringWithUTF8String:snapshots]
                                  value:value
                                   info:dictionary
        ];
    }

    void _alibabacloud_rum__set_custom_log(const char *content, const char *name, const char *snapshots, const char *level, uint32_t length, char **kvs)
    {
        if (NULL == content || strlen(content) == 0)
        {
            return;
        }

        NSMutableDictionary *dictionary = [NSMutableDictionary dictionary];
        if (length > 0)
        {
            for (uint32_t i = 0; i < length; i++) {
                if (NULL == kvs[2 * i] ||
                    NULL == kvs[2 * i + 1] ||
                    strlen(kvs[2 * i]) == 0 ||
                    strlen(kvs[2 * i + 1]) == 0 )
                {
                    continue;;
                }

                [dictionary setObject:[NSString stringWithUTF8String:kvs[2 * i + 1]]
                               forKey:[NSString stringWithUTF8String:kvs[2 * i]]
                ];
            }
        }

        [AlibabaCloudRUM setCustomLog:[NSString stringWithUTF8String:content]
                                 name:NULL == name ? nil : [NSString stringWithUTF8String:name]
                            snapshots:NULL == snapshots ? nil : [NSString stringWithUTF8String:snapshots]
                                level:NULL == level ? nil : [NSString stringWithUTF8String:level]
                                 info:dictionary
        ];
    }
#ifdef __cplusplus
}
#endif
