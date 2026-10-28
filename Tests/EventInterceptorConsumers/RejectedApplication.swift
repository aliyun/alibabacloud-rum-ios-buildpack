import AlibabaCloudRUM

#if SUBCLASS_APPLICATION
class RejectedApplicationSubclass: AlibabaCloudApplicationEvent {}
#endif

func invalidApplicationAPI(_ application: AlibabaCloudApplicationEvent, base: AlibabaCloudRUMEvent) {
#if CONSTRUCT_APPLICATION
    _ = AlibabaCloudApplicationEvent()
#elseif NEW_APPLICATION
    _ = AlibabaCloudApplicationEvent.init()
#elseif CLONE_APPLICATION
    _ = application.newEvent()
#elseif APPLICATION_SET_NAME
    application.setName("changed")
#elseif APPLICATION_SET_STATE
    application.setState("foreground")
#elseif APPLICATION_SET_DURATION
    application.setDuration(1)
#elseif APPLICATION_SET_START_TYPE
    application.setStartType("changed")
#elseif APPLICATION_SET_START_DURATION
    application.setStartDuration(1)
#elseif APPLICATION_SET_THREAD_NAME
    application.setThreadName("changed")
#elseif APPLICATION_SET_APP_ID
    application.setAppId("changed")
#elseif APPLICATION_SET_APP_NAME
    application.setAppName("changed")
#elseif APPLICATION_SET_EVENT_TYPE
    application.setEventType("resource")
#elseif APPLICATION_SET_SESSION_ID
    application.setSessionId("changed")
#elseif APPLICATION_SET_TYPE
    application.setType("changed")
#elseif APPLICATION_SET_MESSAGE
    application.setMessage("changed")
#elseif APPLICATION_SET_GROUP
    application.setGroup("changed")
#elseif APPLICATION_RESOURCE_RESULT
    application.setResourceResult(200, success: .success)
#elseif APPLICATION_WRITE_ATTRIBUTE
    application.setAttribute("application.state", value: "changed")
#elseif APPLICATION_REMOVE_ATTRIBUTE
    application.removeAttribute("application.snapshots")
#elseif APPLICATION_CLEAR_SNAPSHOTS
    application.clearSnapshots()
#elseif APPLICATION_ASSIGN_ATTRIBUTES
    application.attributes = [:]
#elseif APPLICATION_MUTATE_ATTRIBUTES
    application.attributes["application.state"] = "changed"
#elseif APPLICATION_ASSIGN_EVENT_TYPE
    application.eventType = "resource"
#elseif APPLICATION_ASSIGN_SNAPSHOTS
    application.snapshots = "invalid"
#elseif APPLICATION_ASSIGN_STATE
    application.state = "foreground"
#elseif APPLICATION_ASSIGN_DURATION
    application.duration = 1
#elseif BASE_APPLICATION_SNAPSHOTS
    base.setSnapshots("invalid")
#elseif APPLICATION_NIL_SNAPSHOTS
    application.setSnapshots(nil)
#endif
}
