// swift-tools-version:5.3
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "alibabacloud-rum-ios-buildpack",
    products: [
        // Products define the executables and libraries a package produces, making them visible to other packages.
        .library(
            name: "AlibabaCloudRUM",
            targets: ["AlibabaCloudRUM"]),
        .library(
            name: "AlibabaCloudRUMSDK",
            targets: ["AlibabaCloudRUM"]),
    ],
    targets: [
        // Targets are the basic building blocks of a package, defining a module or a test suite.
        // Targets can depend on other targets in this package and products from dependencies.
        .target(
            name: "AlibabaCloudRUM",
            dependencies: [
                "AlibabaCloudRUMSDK"
            ],
            path: "Sources/AlibabaCloudRUM",
//            cSettings: [
//                .unsafeFlags(["-ObjC"])
//            ],
            linkerSettings: [
                .linkedLibrary("z"),
                .linkedLibrary("c++"),
                .linkedLibrary("resolv"),
            ]
        ),
        .target(
            name: "AlibabaCloudRUMBridge",
            dependencies: [
                "AlibabaCloudRUM"
            ],
            path: "Sources",
            sources: [
                "AlibabaCloudRUMBridge"
            ],
            publicHeadersPath: "AlibabaCloudRUMBridge/include"
        ),
        .binaryTarget(
            name: "AlibabaCloudRUMSDK",
            path: "Sources/AlibabaCloudRUMSDK/AlibabaCloudRUMSDK.xcframework"
        ),
        .testTarget(
            name: "OpenRUMTests",
            path: "Tests/OpenRUMTests"
        )
    ]
)

//for target in package.targets {
//    guard target.name == "OpenRUMWrapper" else {
//        break
//    }
//    
//    target.linkerSettings = target.linkerSettings ?? []
//    target.linkerSettings?.append(
//        .unsafeFlags(["-ObjC"])
//    )
//}
