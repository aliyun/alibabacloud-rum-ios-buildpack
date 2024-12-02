#! /bin/sh

set -o pipefail
set -e

PLATFORM_LIST=()
PLATFORM_COUNT=0

ENABLE_DEBUG=0

VERSION=$(cat ../VERSION)
echo "current version: ${VERSION}"

SCHEME="AlibabaCloudRUMBridge"
SCHEME_SHADOW="AlibabaCloudRUMBridge"
PROJECT="AlibabaCloudRUM.xcodeproj"
PROJECT_BUILDDIR="build"

usage()
{
    # productName与target不同时，应该指定shadow scheme为productName
    echo "Usage: $0 [-s <scheme>] [-h <shadow scheme>] [-p <platforms>]."; exit 1;
}

build_static_library()
{
    PLATFORM=$1;
    echo "start building ${SCHEME} for ${PLATFORM} ..."

#    iphoneos iphonesimulator appletvos appletvsimulator macosx macosx_catalyst
    generic_platform=""
    final_sdk=${PLATFORM}
    case "${PLATFORM}" in
        "iphoneos") generic_platform="generic/platform=iOS"
        ;;
        "iphonesimulator") generic_platform="generic/platform=iOS Simulator"
        ;;
        "appletvos")  generic_platform="generic/platform=tvOS"
        ;;
        "appletvsimulator")  generic_platform="generic/platform=tvOS Simulator"
        ;;
        "macosx") generic_platform="generic/platform=macOS"
        ;;
        "macosx_catalyst") generic_platform="generic/platform=macOS,variant=Mac Catalyst"; final_sdk="iphoneos"
        ;;
        *)
        echo "not support ${PLATFORM}"; exit 1;
        ;;
    esac

    echo "generic_platform: ${generic_platform}"

    PLATFORM_WORKING_DIRECTORY="${PROJECT_BUILDDIR}/${SCHEME}/${PLATFORM}"

    echo "building ${PLATFORM} for ${SCHEME}. generic_platform: ${generic_platform}, PLATFORM_WORKING_DIRECTORY: ${PLATFORM_WORKING_DIRECTORY}"
    # clean
    xcodebuild clean -project ${PROJECT} -scheme ${SCHEME} -configuration Release
    # build .a file
    xcodebuild -project ${PROJECT} \
        -scheme ${SCHEME} \
        -configuration Release \
        -sdk "${PLATFORM}" \
        build \
        CONFIGURATION_BUILD_DIR="${PLATFORM_WORKING_DIRECTORY}" \
        SKIP_INSTALL=NO BUILD_LIBRARY_FOR_DISTRIBUTION=YES

    # simulator specified
    if [[ ${PLATFORM} == *"simulator"* ]];
    then
        lipo -remove arm64 ${PLATFORM_WORKING_DIRECTORY}/lib${SCHEME}.a -output ${PLATFORM_WORKING_DIRECTORY}/lib${SCHEME}.a
    fi

    echo "building ${SCHEME} static library for ${PLATFORM} end."
}

lipo_create_librarys()
{
    echo "start create static library ..."
    static_librarys=()
    for ((i=0; i< ${PLATFORM_COUNT}; i++)); do
            static_librarys+=("${PROJECT_BUILDDIR}/${SCHEME}/${PLATFORM_LIST[i]}/lib${SCHEME}.a ")
    done

    if [[ ${ENABLE_DEBUG} == 1 ]];
    then echo "lipo static librarys cmd: ${static_librarys[@]}"
    fi

    # lipo create
    lipo -create ${static_librarys[@]} -output ${PROJECT_BUILDDIR}/lib${SCHEME}.a
}

clean_env()
{
    rm -rf ${PROJECT_BUILDDIR}/${SCHEME}
}

# parameters
while getopts ":s:h:p:d:" opt; do
    case "${opt}" in
        s)
            echo "intput scheme: ${OPTARG}"
            SCHEME=${OPTARG}
            SCHEME_SHADOW=${OPTARG}
        ;;
        h)
            echo "input shadow scheme: ${OPTARG}"
            SCHEME_SHADOW=${OPTARG}
        ;;
        p)
            echo "input platforms: ${OPTARG}"
            IFS=' ' read -ra PLATFORM_LIST <<< "${OPTARG}"
            PLATFORM_COUNT=${#PLATFORM_LIST[@]}
        ;;
        d)
            echo "enable debug mode"
            ENABLE_DEBUG=1
        ;;
        *)
            echo "未知参数!! ${OPTARG}"
            usage
        ;;
    esac
done
shift $((OPTIND-1))

echo "SCHEME: ${SCHEME}, length: ${#SCHEME}, SHADOW_SCHEME: ${SCHEME_SHADOW}, PLATFORM_LIST: ${PLATFORM_LIST[@]}, PLATFORM_COUNT: ${PLATFORM_COUNT}"

if [[ ${#SCHEME} == 0 ]];
then
    echo "scheme must not be empty!!"
    usage
elif [[ ${PLATFORM_COUNT} < 1 ]];
then
    echo "platforms must not be empty!!"
    usage
fi

# prepare env
pushd ..
rm -rf ${PROJECT_BUILDDIR}/${SCHEME}

# build .a file for each platform
for ((i=0; i< ${PLATFORM_COUNT}; i++))
do
    build_static_library ${PLATFORM_LIST[i]}
done

# create xcframework
lipo_create_librarys

if [[ ${ENABLE_DEBUG} != 1 ]];
then
    clean_env
fi
popd
