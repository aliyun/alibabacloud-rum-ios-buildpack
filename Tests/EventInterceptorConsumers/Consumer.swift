import AlibabaCloudRUM

final class ConsumerInterceptor: NSObject, AlibabaCloudEventInterceptor {
    func intercept(_ event: AlibabaCloudRUMEvent, context: AlibabaCloudEventContext) -> AlibabaCloudRUMEvent? {
        let _: String = event.eventType
        let _: Any? = event.attribute(forKey: "event_id")
        let _: [String: Any] = event.attributes
        let _: String = context.source
        let _ = context.originalParameters
        let _: URLRequest? = context.request
        let _: URLResponse? = context.response
        let _: Error? = context.error
        let _: URLSession? = context.originalParameters?["session"] as? URLSession
        let _: URLSessionTask? = context.originalParameters?["task"] as? URLSessionTask
        let _: URL? = context.originalParameters?["location"] as? URL
        if let custom = event as? AlibabaCloudCustomEvent {
            let _: String? = custom.name
            let _: String? = custom.group
            let _: String? = custom.snapshots
            let _: Bool = custom.setName("sanitized")
            let _: Bool = custom.setGroup("checkout")
            let _: Bool = custom.setSnapshots("plain text")
        } else if let exception = event as? AlibabaCloudExceptionEvent {
            let _: String? = exception.name
            let _: String? = exception.message
            let _: String? = exception.causedBy
            let _: String? = exception.snapshots
            let _: [String: Any]? = context.recoveredRecord
            let updateName: (String) -> Bool = exception.setName(_:)
            let updateMessage: (String) -> Bool = exception.setMessage(_:)
            let updateCausedBy: (String) -> Bool = exception.setCausedBy(_:)
            let updateSnapshots: (String) -> Bool = exception.setSnapshots(_:)
            let _: Bool = updateName("checkout.exception")
            let _: Bool = updateMessage("business failure")
            let _: Bool = updateCausedBy("business cause")
            let _: Bool = updateSnapshots("plain text")
            if context.source == "ios.exception.oom" {
                let _: [String: Any]? = context.recoveredRecord?["head"] as? [String: Any]
                let _: [Any]? = context.recoveredRecord?["items"] as? [Any]
            }
            // Processing follows report storage, possibly during a later launch.
            // Borrow the available report only during this safe synchronous callback.
        } else if let longTask = event as? AlibabaCloudLongTaskEvent {
            let _: String? = longTask.message
            let _: String? = longTask.snapshots
            let _: Any? = longTask.attribute(forKey: "longtask.type")
            let _: [String: Any]? = context.recoveredRecord
            let updateMessage: (String) -> Bool = longTask.setMessage(_:)
            let updateSnapshots: (String) -> Bool = longTask.setSnapshots(_:)
            let _: Bool = updateMessage("checkout delayed")
            let _: Bool = updateSnapshots("plain text")
            // The safe parser runs after the stall, outside internal locks.
            // Read the original report here without retaining its borrowed context.
        } else if let view = event as? AlibabaCloudViewEvent {
            let _: String? = view.name
            let _: String? = view.snapshots
            let _: UIViewController? = context.viewController
            let _: UIViewController? = context.originalParameters?["viewController"] as? UIViewController
            let updateName: (String) -> Bool = view.setName(_:)
            let updateSnapshots: (String) -> Bool = view.setSnapshots(_:)
            let _: Bool = updateName("checkout")
            let _: Bool = updateSnapshots("plain text")
            if context.source == "ios.replay.metadata" {
                let _: Any? = context.originalParameters?["metadata"]
                let _: Any? = view.attribute(forKey: "view.type")
                // Replay shares the View API; do not retain the callback's metadata.
                let _: Bool = updateSnapshots("")
            }
        } else if let action = event as? AlibabaCloudActionEvent {
            let _: String? = action.name
            let _: String? = action.snapshots
            let _: UIViewController? = context.viewController
            let _: UIView? = context.targetView
            let _: UIView? = context.originalParameters?["targetView"] as? UIView
            let updateName: (String) -> Bool = action.setName(_:)
            let updateSnapshots: (String) -> Bool = action.setSnapshots(_:)
            let _: Bool = updateName("checkout")
            let _: Bool = updateSnapshots("plain text")
            // UI references may be nil and are borrowed only on this callback's thread.
            // Do not retain or dispatch them, or generate business events in this callback.
        } else if let application = event as? AlibabaCloudApplicationEvent {
            let _: String? = application.snapshots
            let _: Any? = application.attribute(forKey: "application.state")
            let _: Any? = application.attributes["application.duration"]
            let _: Any? = application.attribute(forKey: "start.type")
            let _: Any? = application.attribute(forKey: "thread.name")
            let _: Any? = application.attribute(forKey: "app.name")
            let updateSnapshots: (String) -> Bool = application.setSnapshots(_:)
            let _: Bool = updateSnapshots("plain text")
            // Missing UI objects do not prevent Application callbacks or snapshot edits.
            // State, timing and app/thread attributes retain their original representations.
        } else if let resource = event as? AlibabaCloudResourceEvent {
            switch context.source {
            case "ios.urlsession.data.completion":
                // The host completion has returned; borrow its original Foundation objects.
                let parameters = context.originalParameters
                let _: URLSession? = parameters?["session"] as? URLSession
                let _: URLSessionDataTask? = parameters?["task"] as? URLSessionDataTask
                let _: NSURLRequest? = parameters?["request"] as? NSURLRequest
                let response = parameters?["response"] as? HTTPURLResponse
                let _: NSError? = parameters?["error"] as? NSError
                let data = parameters?["data"] as? NSData
                let _: Int? = data?.length
                let businessCode = response?.allHeaderFields.first { header in
                    (header.key as? String)?.caseInsensitiveCompare("X-Test-Business-Code") == .orderedSame
                }?.value as? String
                if businessCode == "1001" {
                    let _: Bool = resource.setResourceResult(1001, success: .failed)
                }
                // Do not retain these objects, consume body streams, or emit business events.
            case "ios.urlconnection.synchronous", "ios.urlconnection.completion":
                // Borrow Foundation objects during this callback; do not copy the body.
                let parameters = context.originalParameters
                let _: NSURLRequest? = parameters?["request"] as? NSURLRequest
                let _: URLResponse? = parameters?["response"] as? URLResponse
                let _: NSError? = parameters?["error"] as? NSError
                let data = parameters?["data"] as? NSData
                let _: Int? = data?.length
            case "ios.urlconnection.delegate":
                // This terminal callback has a connection, without an assembled body.
                let parameters = context.originalParameters
                let _: NSURLConnection? = parameters?["connection"] as? NSURLConnection
                let _: NSURLRequest? = parameters?["request"] as? NSURLRequest
                let _: URLResponse? = parameters?["response"] as? URLResponse
                let _: NSError? = parameters?["error"] as? NSError
            default:
                break
            }
            let _: String? = resource.name
            let _: String? = resource.message
            let _: String? = resource.snapshots
            let _: NSNumber? = resource.statusCode
            let _: NSNumber? = resource.success
            let _: Int64? = resource.statusCode?.int64Value
            let _: Bool = resource.setName("checkout")
            let _: Bool = resource.setMessage("business failure")
            let _: Bool = resource.setSnapshots("plain text")
            // A typed method reference rejects an accidental Int or Double import.
            let updateResult: (Int64, AlibabaCloudResourceSuccess) -> Bool = resource.setResourceResult(_:success:)
            let _: Bool = updateResult(Int64.min, .unknown)
            let _: Bool = updateResult(Int64.max, .success)
            let _: Bool = updateResult(1001, .failed)
            let _: Int = AlibabaCloudResourceSuccess.unknown.rawValue
        }
        return event
    }
}

func registerConsumerInterceptor() {
    let _: Bool = AlibabaCloudRUM.setEventInterceptor(ConsumerInterceptor())
    let _: Bool = AlibabaCloudRUM.setEventInterceptor(nil)
    // Reporting is deliberately outside the interceptor callback.
    AlibabaCloudRUM.setCustomException("checkout.exception", causeBy: "business cause", errorDump: "original stack")
    let _: Bool = AlibabaCloudRUM.setCustomResource("manual", success: true,
        url: "https://example.invalid/checkout", method: "GET", statusCode: 200, errorMessage: nil)
    let _: Bool = AlibabaCloudRUM.setCustomResource("manual", success: true,
        url: "https://example.invalid/checkout", method: "GET", statusCode: 200, errorMessage: nil,
        provider: "consumer", tracing: nil, measure: AlibabaCloudResourceMeasure.measure())
}
