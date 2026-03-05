// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "ManagrsphereCapacitorAppleMaps",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "ManagrsphereCapacitorAppleMaps",
            targets: ["AppleMapsPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.0")
    ],
    targets: [
        .target(
            name: "AppleMapsPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/AppleMapsPlugin"),
        .testTarget(
            name: "AppleMapsPluginTests",
            dependencies: ["AppleMapsPlugin"],
            path: "ios/Tests/AppleMapsPluginTests")
    ]
)
