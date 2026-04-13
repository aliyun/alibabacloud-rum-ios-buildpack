#!/bin/sh
set -o pipefail
set -e

# cd project root directory
pushd ..

# clean env first
rm -rf build
mkdir build

# read version from VERSION file
VERSION=$(cat VERSION)
echo "version: $VERSION"

# rewrite RUM_SDK_VERSION
sed -i '' "s/\(static NSString \*const RUM_SDK_VERSION = @\).*/\1\"$VERSION\";/g" Sources/AlibabaCloudRUM/AlibabaCloudRUM.m

pushd build
# create version readable txt file
touch ver_${VERSION}_$(date "+%Y%m%d_%H%M").txt
popd

# copy OpenRUM SDK to build directory
cp -r Sources/AlibabaCloudRUMSDK/AlibabaCloudRUMSDK.xcframework ./build/AlibabaCloudRUMSDK.xcframework

pushd Scripts
# create AlibabaCloudRUM.xcframework
sh build-alibabcloud-rum.sh
popd

#codesign --timestamp -v --sign "iPhone Distribution: Taobao (China) Software CO.,LTD" ./build/AliyunLogProducer.xcframework

#sh build-networkdiagnosis.sh

#codesign --timestamp -v --sign "iPhone Distribution: Taobao (China) Software CO.,LTD" ./build/AliyunLogNetworkDiagnosis.xcframework

pushd build
# zip distributable sdk
zip -q -r AlibabaCloudRUM-iOS-${VERSION}-$(date "+%Y%m%d_%H%M").library.zip *
popd

popd
