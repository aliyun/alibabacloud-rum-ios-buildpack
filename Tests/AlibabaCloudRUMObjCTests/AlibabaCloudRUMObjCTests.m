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

@import XCTest;
@import AlibabaCloudRUM;

@interface AlibabaCloudRUMObjCTests : XCTestCase
@end

@implementation AlibabaCloudRUMObjCTests

#pragma mark - Enum Values

- (void)testModuleEnumValues {
    XCTAssertEqual(AlibabaCloudModuleCrash, 0);
    XCTAssertEqual(AlibabaCloudModuleNetwork, 1);
    XCTAssertEqual(AlibabaCloudModuleView, 2);
    XCTAssertEqual(AlibabaCloudModuleAction, 3);
    XCTAssertEqual(AlibabaCloudModuleWebView, 4);
    XCTAssertEqual(AlibabaCloudModuleLongTask, 5);
    XCTAssertEqual(AlibabaCloudModuleAppLaunch, 6);
    XCTAssertEqual(AlibabaCloudModuleAppState, 7);
    XCTAssertEqual(AlibabaCloudModuleNetState, 8);
    XCTAssertEqual(AlibabaCloudModuleCustomEvent, 9);
    XCTAssertEqual(AlibabaCloudModuleCustomLog, 10);
    XCTAssertEqual(AlibabaCloudModuleCustomMetric, 11);
}

- (void)testEnvEnumValues {
    XCTAssertEqual(AlibabaCloudEnvNONE, 0);
    XCTAssertEqual(AlibabaCloudEnvPROD, 1);
    XCTAssertEqual(AlibabaCloudEnvGRAY, 2);
    XCTAssertEqual(AlibabaCloudEnvPRE, 3);
    XCTAssertEqual(AlibabaCloudEnvDAILY, 4);
    XCTAssertEqual(AlibabaCloudEnvLOCAL, 5);
}

- (void)testFrameworkEnumValues {
    XCTAssertEqual(AlibabaCloudFrameworkFLUTTER, 0);
    XCTAssertEqual(AlibabaCloudFrameworkREACT_NATIVE, 1);
    XCTAssertEqual(AlibabaCloudFrameworkUNITY, 2);
}

- (void)testTracingProtocolEnumValues {
    XCTAssertEqual(AlibabaCloudTracingProtocolW3C, 0);
    XCTAssertEqual(AlibabaCloudTracingProtocolSkywalkingV3, 1);
}

#pragma mark - Initialization & Lifecycle

- (void)testInit {
    AlibabaCloudRUM *instance = [[AlibabaCloudRUM alloc] init];
    XCTAssertNotNil(instance);
}

- (void)testStart {
    [AlibabaCloudRUM start:@"test-service-id"];
}

- (void)testStopSDK {
    [AlibabaCloudRUM stopSDK];
}

#pragma mark - Configuration

- (void)testSetEndpoint {
    [AlibabaCloudRUM setEndpoint:@"https://example.com"];
}

- (void)testSetWorkspace {
    [AlibabaCloudRUM setWorkspace:@"test-workspace"];
}

- (void)testSetEnvironment {
    [AlibabaCloudRUM setEnvironment:AlibabaCloudEnvPROD];
}

- (void)testSetCustomEnvironment {
    [AlibabaCloudRUM setCustomEnvironment:@"staging"];
    [AlibabaCloudRUM setCustomEnvironment:nil];
}

- (void)testSetAppVersion {
    [AlibabaCloudRUM setAppVersion:@"1.0.0"];
}

- (void)testSetChannelID {
    [AlibabaCloudRUM setChannelID:@"test-channel"];
}

- (void)testSetDebuggable {
    [AlibabaCloudRUM setDebuggable:YES];
}

- (void)testSetAppFramework {
    [AlibabaCloudRUM setAppFramework:AlibabaCloudFrameworkFLUTTER];
}

#pragma mark - Device ID

- (void)testSetAndGetDeviceID {
    NSString *testID = [NSString stringWithFormat:@"objc-test-device-id-%@", [[NSUUID UUID] UUIDString]];
    [AlibabaCloudRUM setDeviceID:testID];
    NSString *deviceID = AlibabaCloudRUM.deviceID;
    XCTAssertNotNil(deviceID);
    XCTAssertTrue(deviceID.length > 0);
    XCTAssertEqualObjects(deviceID, testID, @"deviceID property should return the exact value passed to setDeviceID");
}

- (void)testGetDeviceId {
    NSString *testID = [NSString stringWithFormat:@"objc-get-device-id-%@", [[NSUUID UUID] UUIDString]];
    [AlibabaCloudRUM setDeviceID:testID];
    NSString *deviceId = [AlibabaCloudRUM getDeviceId];
    XCTAssertNotNil(deviceId);
    XCTAssertTrue(deviceId.length > 0);
    XCTAssertEqualObjects(deviceId, testID, @"getDeviceId should return the exact value passed to setDeviceID");
}

- (void)testDeviceIDPropertyAndGetDeviceIdConsistency {
    NSString *testID = [NSString stringWithFormat:@"objc-consistency-%@", [[NSUUID UUID] UUIDString]];
    [AlibabaCloudRUM setDeviceID:testID];
    XCTAssertEqualObjects(AlibabaCloudRUM.deviceID, [AlibabaCloudRUM getDeviceId], @"deviceID property and getDeviceId should return the same value");
}

#pragma mark - User & Extra Info

- (void)testSetUserName {
    [AlibabaCloudRUM setUserName:@"test-user"];
}

- (void)testSetExtraInfo {
    [AlibabaCloudRUM setExtraInfo:@{@"key": @"value"}];
}

- (void)testAddExtraInfo {
    [AlibabaCloudRUM addExtraInfo:@{@"key2": @"value2"}];
}

- (void)testSetUserExtraInfo {
    [AlibabaCloudRUM setUserExtraInfo:@{@"userKey": @"userValue"}];
}

- (void)testAddUserExtraInfo {
    [AlibabaCloudRUM addUserExtraInfo:@{@"userKey2": @"userValue2"}];
}

#pragma mark - Module Control

- (void)testDisableModule {
    [AlibabaCloudRUM disableModule:AlibabaCloudModuleCrash];
}

- (void)testEnableModule {
    [AlibabaCloudRUM enableModule:AlibabaCloudModuleCrash];
}

#pragma mark - Swizzle & Class Tracking

- (void)testDisableSwizzleMethod {
    [AlibabaCloudRUM disableSwizzleMethod:@selector(description) clazz:[NSObject class]];
}

- (void)testExcludeClassFromTracking {
    [AlibabaCloudRUM excludeClassFromTracking:@"SomeClassName"];
}

#pragma mark - Resource Provider

- (void)testSetResourceProvider {
    [AlibabaCloudRUM setResourceProvider:nil];
}

#pragma mark - Custom Exception

- (void)testSetCustomException {
    [AlibabaCloudRUM setCustomException:@"TestException" causeBy:@"test cause" errorDump:@"test dump"];
}

#pragma mark - Custom Metric

- (void)testSetCustomMetric {
    [AlibabaCloudRUM setCustomMetric:@"test_metric" value:42 param:@"snapshot_data"];
    [AlibabaCloudRUM setCustomMetric:@"test_metric_nil" value:0 param:nil];
}

#pragma mark - Custom Event (all 9 overloads)

- (void)testSetCustomEventNameOnly {
    [AlibabaCloudRUM setCustomEvent:@"test_event"];
}

- (void)testSetCustomEventWithGroup {
    [AlibabaCloudRUM setCustomEvent:@"test_event" group:@"test_group"];
}

- (void)testSetCustomEventWithGroupSnapshots {
    [AlibabaCloudRUM setCustomEvent:@"test_event" group:@"g" snapshots:@"s"];
}

- (void)testSetCustomEventWithGroupValue {
    [AlibabaCloudRUM setCustomEvent:@"test_event" group:@"g" value:1.5];
}

- (void)testSetCustomEventWithGroupInfo {
    [AlibabaCloudRUM setCustomEvent:@"test_event" group:@"g" info:@{@"k": @"v"}];
}

- (void)testSetCustomEventWithGroupSnapshotsValue {
    [AlibabaCloudRUM setCustomEvent:@"test_event" group:@"g" snapshots:@"s" value:2.0];
}

- (void)testSetCustomEventWithGroupSnapshotsInfo {
    [AlibabaCloudRUM setCustomEvent:@"test_event" group:@"g" snapshots:@"s" info:@{@"k": @"v"}];
}

- (void)testSetCustomEventWithGroupValueInfo {
    [AlibabaCloudRUM setCustomEvent:@"test_event" group:@"g" value:3.0 info:@{@"k": @"v"}];
}

- (void)testSetCustomEventWithAllParams {
    [AlibabaCloudRUM setCustomEvent:@"test_event" group:@"g" snapshots:@"s" value:4.0 info:@{@"k": @"v"}];
}

#pragma mark - Custom Log (all 4 overloads)

- (void)testSetCustomLogInfoOnly {
    [AlibabaCloudRUM setCustomLog:@"test log message"];
}

- (void)testSetCustomLogWithName {
    [AlibabaCloudRUM setCustomLog:@"test log" name:@"log_name"];
}

- (void)testSetCustomLogWithNameSnapshots {
    [AlibabaCloudRUM setCustomLog:@"test log" name:@"log_name" snapshots:@"snap"];
}

- (void)testSetCustomLogWithAllParams {
    [AlibabaCloudRUM setCustomLog:@"test log" name:@"n" snapshots:@"s" level:@"ERROR" info:@{@"k": @"v"}];
}

#pragma mark - Custom Resource (2 overloads)

- (void)testSetCustomResource6Params {
    (void)[AlibabaCloudRUM setCustomResource:@"xhr" success:YES url:@"https://example.com" method:@"GET" statusCode:200 errorMessage:nil];
}

- (void)testSetCustomResource9Params {
    (void)[AlibabaCloudRUM setCustomResource:@"xhr" success:YES url:@"https://example.com" method:@"POST" statusCode:200 errorMessage:nil provider:@"test" tracing:nil measure:nil];
}

#pragma mark - Deprecated Methods

- (void)testDeprecatedDisableInspectClass {
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
    [AlibabaCloudRUM disableInspectClass:@"TestClass"];
#pragma clang diagnostic pop
}

- (void)testDeprecatedEnableBattery {
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
    [AlibabaCloudRUM enableBattery:YES];
#pragma clang diagnostic pop
}

- (void)testDeprecatedEnableTrackingWebView {
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
    [AlibabaCloudRUM enableTrackingWebView:YES];
#pragma clang diagnostic pop
}

- (void)testDeprecatedStartWithAppID {
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
    [AlibabaCloudRUM startWithAppID:@"test-app-id"];
#pragma clang diagnostic pop
}

- (void)testDeprecatedSetConfigAddress {
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
    [AlibabaCloudRUM setConfigAddress:@"https://config.example.com"];
#pragma clang diagnostic pop
}

- (void)testDeprecatedSetLogFlag {
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
    [AlibabaCloudRUM setLogFlag:@1];
#pragma clang diagnostic pop
}

#pragma mark - AlibabaCloudResourceMeasure

- (void)testResourceMeasureInit {
    AlibabaCloudResourceMeasure *measure = [[AlibabaCloudResourceMeasure alloc] init];
    XCTAssertNotNil(measure);
    XCTAssertEqual(measure.duration, 0u);
    XCTAssertEqual(measure.size, 0u);
}

- (void)testResourceMeasureFactory {
    AlibabaCloudResourceMeasure *measure = [AlibabaCloudResourceMeasure measure];
    XCTAssertNotNil(measure);
}

- (void)testResourceMeasureProperties {
    AlibabaCloudResourceMeasure *measure = [[AlibabaCloudResourceMeasure alloc] init];
    measure.duration = 100;
    measure.size = 2048;
    measure.connectDuration = 10;
    measure.sslDuration = 20;
    measure.dnsDuration = 5;
    measure.redirectDuration = 3;
    measure.firstByteDuration = 50;
    measure.downloadDuration = 80;
    XCTAssertEqual(measure.duration, 100u);
    XCTAssertEqual(measure.size, 2048u);
    XCTAssertEqual(measure.connectDuration, 10u);
    XCTAssertEqual(measure.sslDuration, 20u);
    XCTAssertEqual(measure.dnsDuration, 5u);
    XCTAssertEqual(measure.redirectDuration, 3u);
    XCTAssertEqual(measure.firstByteDuration, 50u);
    XCTAssertEqual(measure.downloadDuration, 80u);
}

#pragma mark - AlibabaCloudTracingContext

- (void)testTracingContextInitBasic {
    AlibabaCloudTracingContext *ctx = [[AlibabaCloudTracingContext alloc] initWithTraceId:@"trace123" spanId:@"span456" tracingProtocol:AlibabaCloudTracingProtocolW3C];
    XCTAssertNotNil(ctx);
}

- (void)testTracingContextInitFull {
    AlibabaCloudTracingContext *ctx = [[AlibabaCloudTracingContext alloc] initWithTraceId:@"trace123" spanId:@"span456" parentSpanId:@"parent789" sampled:YES tracingProtocol:AlibabaCloudTracingProtocolSkywalkingV3];
    XCTAssertNotNil(ctx);
}

- (void)testTracingContextFactoryBasic {
    AlibabaCloudTracingContext *ctx = [AlibabaCloudTracingContext contextWithTraceId:@"t1" spanId:@"s1" tracingProtocol:AlibabaCloudTracingProtocolW3C];
    XCTAssertNotNil(ctx);
}

- (void)testTracingContextFactoryFull {
    AlibabaCloudTracingContext *ctx = [AlibabaCloudTracingContext contextWithTraceId:@"t1" spanId:@"s1" parentSpanId:@"p1" sampled:NO tracingProtocol:AlibabaCloudTracingProtocolSkywalkingV3];
    XCTAssertNotNil(ctx);
}

#pragma mark - AlibabaCloudTracingGenerator

- (void)testGenerateTraceIdW3C {
    NSString *traceId = [AlibabaCloudTracingGenerator generateTraceId:AlibabaCloudTracingProtocolW3C];
    XCTAssertNotNil(traceId);
    XCTAssertTrue(traceId.length > 0);
}

- (void)testGenerateTraceIdSkywalking {
    NSString *traceId = [AlibabaCloudTracingGenerator generateTraceId:AlibabaCloudTracingProtocolSkywalkingV3];
    XCTAssertNotNil(traceId);
    XCTAssertTrue(traceId.length > 0);
}

- (void)testGenerateSpanIdW3C {
    NSString *spanId = [AlibabaCloudTracingGenerator generateSpanId:AlibabaCloudTracingProtocolW3C];
    XCTAssertNotNil(spanId);
    XCTAssertTrue(spanId.length > 0);
}

- (void)testGenerateSpanIdSkywalking {
    NSString *spanId = [AlibabaCloudTracingGenerator generateSpanId:AlibabaCloudTracingProtocolSkywalkingV3];
    XCTAssertNotNil(spanId);
    XCTAssertTrue(spanId.length > 0);
}

- (void)testGenerateTraceIdUniqueness {
    NSString *id1 = [AlibabaCloudTracingGenerator generateTraceId:AlibabaCloudTracingProtocolW3C];
    NSString *id2 = [AlibabaCloudTracingGenerator generateTraceId:AlibabaCloudTracingProtocolW3C];
    XCTAssertNotEqualObjects(id1, id2, @"Two generated W3C trace IDs must be unique");
}

- (void)testGenerateSpanIdUniqueness {
    NSString *id1 = [AlibabaCloudTracingGenerator generateSpanId:AlibabaCloudTracingProtocolW3C];
    NSString *id2 = [AlibabaCloudTracingGenerator generateSpanId:AlibabaCloudTracingProtocolW3C];
    XCTAssertNotEqualObjects(id1, id2, @"Two generated W3C span IDs must be unique");
}

- (void)testGenerateTraceIdSkywalkingUniqueness {
    NSString *id1 = [AlibabaCloudTracingGenerator generateTraceId:AlibabaCloudTracingProtocolSkywalkingV3];
    NSString *id2 = [AlibabaCloudTracingGenerator generateTraceId:AlibabaCloudTracingProtocolSkywalkingV3];
    XCTAssertNotEqualObjects(id1, id2, @"Two generated Skywalking trace IDs must be unique");
}

- (void)testTracingGeneratorInit {
    AlibabaCloudTracingGenerator *generator = [[AlibabaCloudTracingGenerator alloc] init];
    XCTAssertNotNil(generator);
}

#pragma mark - AlibabaCloudTracingHeaderWriter

- (void)testGenerateHeaders {
    AlibabaCloudTracingContext *ctx = [[AlibabaCloudTracingContext alloc] initWithTraceId:@"trace1" spanId:@"span1" tracingProtocol:AlibabaCloudTracingProtocolW3C];
    NSDictionary<NSString *, NSString *> *headers = [AlibabaCloudTracingHeaderWriter generateHeaders:ctx];
    XCTAssertNotNil(headers);
}

- (void)testGenerateSingleHeader {
    AlibabaCloudTracingContext *ctx = [[AlibabaCloudTracingContext alloc] initWithTraceId:@"trace1" spanId:@"span1" tracingProtocol:AlibabaCloudTracingProtocolW3C];
    // May return nil, that's OK - we just verify it compiles and runs
    (void)[AlibabaCloudTracingHeaderWriter generateSingleHeader:ctx];
}

- (void)testSetTraceHeader {
    AlibabaCloudTracingContext *ctx = [[AlibabaCloudTracingContext alloc] initWithTraceId:@"trace1" spanId:@"span1" tracingProtocol:AlibabaCloudTracingProtocolW3C];
    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"https://example.com"]];
    [AlibabaCloudTracingHeaderWriter setTraceHeader:request context:ctx];
}

- (void)testIsRequestContainsTraceHeader {
    NSURLRequest *request = [NSURLRequest requestWithURL:[NSURL URLWithString:@"https://example.com"]];
    BOOL contains = [AlibabaCloudTracingHeaderWriter isRequestContainsTraceHeader:request];
    XCTAssertFalse(contains);
}

- (void)testTracingHeaderWriterInit {
    AlibabaCloudTracingHeaderWriter *writer = [[AlibabaCloudTracingHeaderWriter alloc] init];
    XCTAssertNotNil(writer);
}

@end
