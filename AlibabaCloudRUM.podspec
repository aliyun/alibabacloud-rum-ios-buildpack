################################################################################################################################
##################################################### podspec file for dev #####################################################
################################################################################################################################

Pod::Spec.new do |s|
    s.name             = 'AlibabaCloudRUM'
    s.version          = "0.4.0-beta.4"
    s.summary          = 'AlibabaCloud RUM service for iOS.'

    s.description      = <<-DESC
    iOS SDK for Alibaba Cloud RUM.
    https://help.aliyun.com/zh/arms/user-experience-monitoring/product-overview
    https://help.aliyun.com/zh/arms/user-experience-monitoring/access-to-ios-applications
    DESC

    s.homepage         = 'https://help.aliyun.com/zh/arms/user-experience-monitoring/access-to-ios-applications'
    s.license          = { :type => 'MIT', :file => 'LICENSE' }
    s.author           = { 'aliyun-log' => 'aliyunsdk@aliyun.com' }
    s.source           = { :git => 'https://github.com/aliyun/alibabacloud-rum-ios-buildpack.git', :tag => s.version.to_s }
    s.social_media_url = 'https://help.aliyun.com/zh/arms/product-overview'

    s.platform     = :ios, "9.0"

    s.requires_arc  = true
    s.libraries = 'z', "c++", "resolv"
    s.swift_version = "5.0"
    s.vendored_frameworks = 'Sources/AlibabaCloudRUMSDK/AlibabaCloudRUMSDK.xcframework'
    s.source_files = 'Sources/AlibabaCloudRUM/**/*.{m,h,swift}'
    s.pod_target_xcconfig = {
        'OTHER_LDFLAGS' => '-ObjC'
    }
end

