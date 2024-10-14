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
sed -i '' "s/\(private static let RUM_SDK_VERSION = \).*/\1\"$VERSION\"/g" Sources/AlibabaCloudRUM/AlibabaCloudRUM.swift

pushd build
# create version readable txt file
touch ver_${VERSION}_$(date "+%Y%m%d_%H%M").txt
popd

# copy OpenRUM SDK to build directory
cp -r Sources/OpenBusiness/OpenBusiness.xcframework ./build/OpenBusiness.xcframework
cp -r Sources/OpenCore/OpenCore.xcframework ./build/OpenCore.xcframework
cp -r Sources/OpenRUM/OpenRUM.xcframework ./build/OpenRUM.xcframework

pushd Scripts
# create AlibabaCloudRUM.xcframework
sh build-alibabcloud-rum.sh
popd

#codesign --timestamp -v --sign "iPhone Distribution: Taobao (China) Software CO.,LTD" ./build/AliyunLogProducer.xcframework

#sh build-networkdiagnosis.sh
# remove URLSessionInstrumentation. from .swiftinterface files to remove the URLSessionInstrumentation module references.
# https://forums.developer.apple.com/forums/thread/123253
pushd ./build/AlibabaCloudRUM.xcframework
find . -name "*.swiftinterface" -exec sed -i '' 's/AlibabaCloudRUM\.//g' {} \;
popd

#codesign --timestamp -v --sign "iPhone Distribution: Taobao (China) Software CO.,LTD" ./build/AliyunLogNetworkDiagnosis.xcframework

pushd build
# zip distributable sdk
zip -q -r AlibabaCloudRUM-iOS-${VERSION}-$(date "+%Y%m%d_%H%M").zip *
popd

popd
