// Copyright 2025 Alibaba Cloud Computing Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import XCTest
import AlibabaCloudRUM

final class AlibabaCloudRUMSwiftTests: XCTestCase {

    // MARK: - Enum: AlibabaCloudModule (12 values)

    func testModuleEnumValues() {
        XCTAssertEqual(AlibabaCloudModule.crash.rawValue, 0)
        XCTAssertEqual(AlibabaCloudModule.network.rawValue, 1)
        XCTAssertEqual(AlibabaCloudModule.view.rawValue, 2)
        XCTAssertEqual(AlibabaCloudModule.action.rawValue, 3)
        XCTAssertEqual(AlibabaCloudModule.webView.rawValue, 4)
        XCTAssertEqual(AlibabaCloudModule.longTask.rawValue, 5)
        XCTAssertEqual(AlibabaCloudModule.appLaunch.rawValue, 6)
        XCTAssertEqual(AlibabaCloudModule.appState.rawValue, 7)
        XCTAssertEqual(AlibabaCloudModule.netState.rawValue, 8)
        XCTAssertEqual(AlibabaCloudModule.customEvent.rawValue, 9)
        XCTAssertEqual(AlibabaCloudModule.customLog.rawValue, 10)
        XCTAssertEqual(AlibabaCloudModule.customMetric.rawValue, 11)
    }

    // MARK: - Enum: Env (NS_SWIFT_NAME, 6 values)

    func testEnvEnumValues() {
        XCTAssertEqual(Env.NONE.rawValue, 0)
        XCTAssertEqual(Env.PROD.rawValue, 1)
        XCTAssertEqual(Env.GRAY.rawValue, 2)
        XCTAssertEqual(Env.PRE.rawValue, 3)
        XCTAssertEqual(Env.DAILY.rawValue, 4)
        XCTAssertEqual(Env.LOCAL.rawValue, 5)
    }

    // MARK: - Enum: Framework (NS_SWIFT_NAME, 3 values)

    func testFrameworkEnumValues() {
        XCTAssertEqual(Framework.FLUTTER.rawValue, 0)
        XCTAssertEqual(Framework.REACT_NATIVE.rawValue, 1)
        XCTAssertEqual(Framework.UNITY.rawValue, 2)
    }

    // MARK: - Enum: AlibabaCloudTracingProtocol (2 values)

    func testTracingProtocolEnumValues() {
        XCTAssertEqual(AlibabaCloudTracingProtocol.W3C.rawValue, 0)
        XCTAssertEqual(AlibabaCloudTracingProtocol.SkywalkingV3.rawValue, 1)
    }

    // MARK: - AlibabaCloudRUM: Initialization & Lifecycle

    func testInit() {
        let instance = AlibabaCloudRUM()
        XCTAssertNotNil(instance)
    }

    func testStart() {
        AlibabaCloudRUM.start("test-service-id")
    }

    func testStopSDK() {
        AlibabaCloudRUM.stopSDK()
    }

    // MARK: - AlibabaCloudRUM: Configuration

    func testSetEndpoint() {
        AlibabaCloudRUM.setEndpoint("https://example.com")
    }

    func testSetWorkspace() {
        AlibabaCloudRUM.setWorkspace("test-workspace")
    }

    func testSetEnvironment() {
        AlibabaCloudRUM.setEnvironment(.PROD)
    }

    func testSetCustomEnvironment() {
        AlibabaCloudRUM.setCustomEnvironment("staging")
        AlibabaCloudRUM.setCustomEnvironment(nil)
    }

    func testSetAppVersion() {
        AlibabaCloudRUM.setAppVersion("1.0.0")
    }

    func testSetChannelID() {
        AlibabaCloudRUM.setChannelID("test-channel")
    }

    func testSetDebuggable() {
        AlibabaCloudRUM.setDebuggable(true)
    }

    func testSetAppFramework() {
        AlibabaCloudRUM.setAppFramework(.FLUTTER)
    }

    // MARK: - AlibabaCloudRUM: Device ID

    func testSetAndGetDeviceID() {
        let testID = "swift-test-device-id-\(UUID().uuidString)"
        AlibabaCloudRUM.setDeviceID(testID)
        let retrieved = AlibabaCloudRUM.deviceID
        XCTAssertFalse(retrieved.isEmpty)
        XCTAssertEqual(retrieved, testID, "deviceID property should return the exact value passed to setDeviceID")
    }

    func testGetDeviceId() {
        let testID = "swift-get-device-id-\(UUID().uuidString)"
        AlibabaCloudRUM.setDeviceID(testID)
        let deviceId = AlibabaCloudRUM.getDeviceId()
        XCTAssertNotNil(deviceId)
        XCTAssertFalse(deviceId.isEmpty)
        XCTAssertEqual(deviceId, testID, "getDeviceId() should return the exact value passed to setDeviceID")
    }

    func testDeviceIDPropertyAndGetDeviceIdConsistency() {
        let testID = "swift-consistency-\(UUID().uuidString)"
        AlibabaCloudRUM.setDeviceID(testID)
        XCTAssertEqual(AlibabaCloudRUM.deviceID, AlibabaCloudRUM.getDeviceId(), "deviceID property and getDeviceId() should return the same value")
    }

    // MARK: - AlibabaCloudRUM: User & Extra Info

    func testSetUserName() {
        AlibabaCloudRUM.setUserName("test-user")
    }

    func testSetExtraInfo() {
        AlibabaCloudRUM.setExtraInfo(["key": "value"])
    }

    func testAddExtraInfo() {
        AlibabaCloudRUM.addExtraInfo(["key2": "value2"])
    }

    func testSetUserExtraInfo() {
        AlibabaCloudRUM.setUserExtraInfo(["userKey": "userValue"])
    }

    func testAddUserExtraInfo() {
        AlibabaCloudRUM.addUserExtraInfo(["userKey2": "userValue2"])
    }

    // MARK: - AlibabaCloudRUM: Module Control

    func testDisableModule() {
        AlibabaCloudRUM.disableModule(.crash)
    }

    func testEnableModule() {
        AlibabaCloudRUM.enableModule(.crash)
    }

    // MARK: - AlibabaCloudRUM: Swizzle & Class Tracking

    func testDisableSwizzleMethod() {
        AlibabaCloudRUM.disableSwizzleMethod(#selector(NSObject.description), clazz: NSObject.self)
    }

    func testExcludeClassFromTracking() {
        AlibabaCloudRUM.excludeClassFromTracking("SomeClassName")
    }

    // MARK: - AlibabaCloudRUM: Resource Provider

    func testSetResourceProvider() {
        AlibabaCloudRUM.setResourceProvider(nil)
    }

    // MARK: - AlibabaCloudRUM: Custom Exception

    func testSetCustomException() {
        AlibabaCloudRUM.setCustomException("TestException", causeBy: "test cause", errorDump: "test dump")
    }

    // MARK: - Custom Metric

    func testSetCustomMetric() {
        AlibabaCloudRUM.setCustomMetric("test_metric", value: 42, snapshots: "snapshot_data")
        AlibabaCloudRUM.setCustomMetric("test_metric_nil", value: 0, snapshots: nil)
    }

    // MARK: - Custom Event (all 9 overloads)

    func testSetCustomEventNameOnly() {
        AlibabaCloudRUM.setCustomEvent("test_event")
    }

    func testSetCustomEventWithGroup() {
        AlibabaCloudRUM.setCustomEvent("test_event", group: "test_group")
    }

    func testSetCustomEventWithGroupSnapshots() {
        AlibabaCloudRUM.setCustomEvent("test_event", group: "g", snapshots: "s")
    }

    func testSetCustomEventWithGroupValue() {
        AlibabaCloudRUM.setCustomEvent("test_event", group: "g", value: 1.5)
    }

    func testSetCustomEventWithGroupInfo() {
        AlibabaCloudRUM.setCustomEvent("test_event", group: "g", info: ["k": "v"])
    }

    func testSetCustomEventWithGroupSnapshotsValue() {
        AlibabaCloudRUM.setCustomEvent("test_event", group: "g", snapshots: "s", value: 2.0)
    }

    func testSetCustomEventWithGroupSnapshotsInfo() {
        AlibabaCloudRUM.setCustomEvent("test_event", group: "g", snapshots: "s", info: ["k": "v"])
    }

    func testSetCustomEventWithGroupValueInfo() {
        AlibabaCloudRUM.setCustomEvent("test_event", group: "g", value: 3.0, info: ["k": "v"])
    }

    func testSetCustomEventWithAllParams() {
        AlibabaCloudRUM.setCustomEvent("test_event", group: "g", snapshots: "s", value: 4.0, info: ["k": "v"])
    }

    // MARK: - Custom Log (all 4 overloads)

    func testSetCustomLogInfoOnly() {
        AlibabaCloudRUM.setCustomLog("test log message")
    }

    func testSetCustomLogWithName() {
        AlibabaCloudRUM.setCustomLog("test log", name: "log_name")
    }

    func testSetCustomLogWithNameSnapshots() {
        AlibabaCloudRUM.setCustomLog("test log", name: "log_name", snapshots: "snap")
    }

    func testSetCustomLogWithAllParams() {
        AlibabaCloudRUM.setCustomLog("test log", name: "n", snapshots: "s", level: "ERROR", info: ["k": "v"])
    }

    // MARK: - Custom Resource (2 overloads)

    func testSetCustomResource6Params() {
        let _ = AlibabaCloudRUM.setCustomResource("xhr", success: true, url: "https://example.com", method: "GET", statusCode: 200, errorMessage: nil)
    }

    func testSetCustomResource9Params() {
        let _ = AlibabaCloudRUM.setCustomResource("xhr", success: true, url: "https://example.com", method: "POST", statusCode: 200, errorMessage: nil, provider: "test", tracing: nil, measure: nil)
    }

    // MARK: - Deprecated Methods

    func testDeprecatedDisableInspectClass() {
        AlibabaCloudRUM.disableInspectClass("TestClass")
    }

    func testDeprecatedEnableBattery() {
        AlibabaCloudRUM.enableBattery(true)
    }

    func testDeprecatedEnableTrackingWebView() {
        AlibabaCloudRUM.enableTrackingWebView(true)
    }

    func testDeprecatedStartWithAppID() {
        AlibabaCloudRUM.start(withAppID: "test-app-id")
    }

    func testDeprecatedSetConfigAddress() {
        AlibabaCloudRUM.setConfigAddress("https://config.example.com")
    }

    func testDeprecatedSetLogFlag() {
        AlibabaCloudRUM.setLogFlag(NSNumber(value: 1))
    }

    // MARK: - AlibabaCloudResourceMeasure

    func testResourceMeasureInit() {
        let measure = AlibabaCloudResourceMeasure()
        XCTAssertNotNil(measure)
        XCTAssertEqual(measure.duration, 0)
        XCTAssertEqual(measure.size, 0)
    }

    func testResourceMeasureInitAlternate() {
        let measure = AlibabaCloudResourceMeasure()
        XCTAssertNotNil(measure)
    }
    
    func testResourceMeasureStaticInit() {
        let measure = AlibabaCloudResourceMeasure.measure()
        XCTAssertNotNil(measure)
    }

    func testResourceMeasureProperties() {
        let measure = AlibabaCloudResourceMeasure()
        measure.duration = 100
        measure.size = 2048
        measure.connectDuration = 10
        measure.sslDuration = 20
        measure.dnsDuration = 5
        measure.redirectDuration = 3
        measure.firstByteDuration = 50
        measure.downloadDuration = 80
        XCTAssertEqual(measure.duration, 100)
        XCTAssertEqual(measure.size, 2048)
        XCTAssertEqual(measure.connectDuration, 10)
        XCTAssertEqual(measure.sslDuration, 20)
        XCTAssertEqual(measure.dnsDuration, 5)
        XCTAssertEqual(measure.redirectDuration, 3)
        XCTAssertEqual(measure.firstByteDuration, 50)
        XCTAssertEqual(measure.downloadDuration, 80)
    }

    // MARK: - AlibabaCloudTracingContext

    func testTracingContextInitBasic() {
        let ctx = AlibabaCloudTracingContext(traceId: "trace123", spanId: "span456", tracingProtocol: .W3C)
        XCTAssertNotNil(ctx)
    }

    func testTracingContextInitFull() {
        let ctx = AlibabaCloudTracingContext(traceId: "trace123", spanId: "span456", parentSpanId: "parent789", sampled: true, tracingProtocol: .SkywalkingV3)
        XCTAssertNotNil(ctx)
    }

    func testTracingContextFactoryBasic() {
        let ctx = AlibabaCloudTracingContext(traceId: "t1", spanId: "s1", tracingProtocol: .W3C)
        XCTAssertNotNil(ctx)
    }

    func testTracingContextFactoryFull() {
        let ctx = AlibabaCloudTracingContext(traceId: "t1", spanId: "s1", parentSpanId: "p1", sampled: false, tracingProtocol: .SkywalkingV3)
        XCTAssertNotNil(ctx)
    }

    // MARK: - AlibabaCloudTracingGenerator

    func testGenerateTraceIdW3C() {
        let traceId = AlibabaCloudTracingGenerator.generateTraceId(.W3C)
        XCTAssertNotNil(traceId)
        XCTAssertFalse(traceId.isEmpty)
    }

    func testGenerateTraceIdSkywalking() {
        let traceId = AlibabaCloudTracingGenerator.generateTraceId(.SkywalkingV3)
        XCTAssertNotNil(traceId)
        XCTAssertFalse(traceId.isEmpty)
    }

    func testGenerateSpanIdW3C() {
        let spanId = AlibabaCloudTracingGenerator.generateSpanId(.W3C)
        XCTAssertNotNil(spanId)
        XCTAssertFalse(spanId.isEmpty)
    }

    func testGenerateSpanIdSkywalking() {
        let spanId = AlibabaCloudTracingGenerator.generateSpanId(.SkywalkingV3)
        XCTAssertNotNil(spanId)
        XCTAssertFalse(spanId.isEmpty)
    }

    func testGenerateTraceIdUniqueness() {
        let id1 = AlibabaCloudTracingGenerator.generateTraceId(.W3C)
        let id2 = AlibabaCloudTracingGenerator.generateTraceId(.W3C)
        XCTAssertNotEqual(id1, id2, "Two generated W3C trace IDs must be unique")
    }

    func testGenerateSpanIdUniqueness() {
        let id1 = AlibabaCloudTracingGenerator.generateSpanId(.W3C)
        let id2 = AlibabaCloudTracingGenerator.generateSpanId(.W3C)
        XCTAssertNotEqual(id1, id2, "Two generated W3C span IDs must be unique")
    }

    func testGenerateTraceIdSkywalkingUniqueness() {
        let id1 = AlibabaCloudTracingGenerator.generateTraceId(.SkywalkingV3)
        let id2 = AlibabaCloudTracingGenerator.generateTraceId(.SkywalkingV3)
        XCTAssertNotEqual(id1, id2, "Two generated Skywalking trace IDs must be unique")
    }

    func testTracingGeneratorInit() {
        let generator = AlibabaCloudTracingGenerator()
        XCTAssertNotNil(generator)
    }

    // MARK: - AlibabaCloudTracingHeaderWriter

    func testGenerateHeaders() {
        let ctx = AlibabaCloudTracingContext(traceId: "trace1", spanId: "span1", tracingProtocol: .W3C)
        let headers = AlibabaCloudTracingHeaderWriter.generateHeaders(ctx)
        XCTAssertNotNil(headers)
    }

    func testGenerateSingleHeader() {
        let ctx = AlibabaCloudTracingContext(traceId: "trace1", spanId: "span1", tracingProtocol: .W3C)
        // May return nil, that's OK — we just verify it compiles and runs
        let _ = AlibabaCloudTracingHeaderWriter.generateSingleHeader(ctx)
    }

    func testSetTraceHeader() {
        let ctx = AlibabaCloudTracingContext(traceId: "trace1", spanId: "span1", tracingProtocol: .W3C)
        let request = NSMutableURLRequest(url: URL(string: "https://example.com")!)
        AlibabaCloudTracingHeaderWriter.setTraceHeader(request, context: ctx)
    }

    func testIsRequestContainsTraceHeader() {
        let request = URLRequest(url: URL(string: "https://example.com")!)
        let contains = AlibabaCloudTracingHeaderWriter.isRequestContainsTraceHeader(request)
        XCTAssertFalse(contains)
    }

    func testTracingHeaderWriterInit() {
        let writer = AlibabaCloudTracingHeaderWriter()
        XCTAssertNotNil(writer)
    }
}
