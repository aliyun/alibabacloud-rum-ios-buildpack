#ifndef ORBusinessTypeDefine_h
#define ORBusinessTypeDefine_h

typedef NS_ENUM(NSUInteger, ORUploadOption) {
    ORUploadOptionNormal = 0,
    ORUploadOptionBackground,
    ORUploadOptionCrash,
};

typedef NS_ENUM(NSUInteger, ORUploadScenario) {
    ORUploadScenarioDefault = 0,
    ORUploadScenarioWiFi,
};

#endif
