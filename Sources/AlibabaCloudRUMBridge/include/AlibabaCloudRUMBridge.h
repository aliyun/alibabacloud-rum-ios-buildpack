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

#import <Foundation/Foundation.h>

#pragma mark -- Interface for AlibabaCloudRUM

#ifdef __cplusplus
extern "C" {
#endif

void _alibabacloud_rum__set_debuggable(int debuggable);
void _alibabacloud_rum__set_config_address(const char *config_address);
void _alibabacloud_rum__set_app_id(const char *app_id);
void _alibabacloud_rum__set_framework(int framework);
void _alibabacloud_rum__start(void);
void _alibabacloud_rum__stop(void);
void _alibabacloud_rum__set_user_name(const char *user_name);
void _alibabacloud_rum__set_extra_info(uint32_t length, char **kvs);
void _alibabacloud_rum__set_user_extra_info(uint32_t length, char **kvs);
void _alibabacloud_rum__set_custom_exception(const char *exception_name, const char *exception_causeby, const char *stack_trace);
void _alibabacloud_rum__set_custom_event(const char *event_name, const char *event_group, const char *snapshots, double value, uint32_t length, char **kvs);
void _alibabacloud_rum__set_custom_log(const char *content, const char *name, const char *snapshots, const char *level, uint32_t length, char **kvs);

#ifdef __cplusplus
}
#endif
