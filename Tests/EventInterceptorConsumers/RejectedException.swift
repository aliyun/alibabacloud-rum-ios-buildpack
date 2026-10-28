import AlibabaCloudRUM

#if SUBCLASS_EXCEPTION
class RejectedExceptionSubclass: AlibabaCloudExceptionEvent {}
#endif

func invalidExceptionAPI(_ exception: AlibabaCloudExceptionEvent, base: AlibabaCloudRUMEvent) {
#if CONSTRUCT_EXCEPTION
    _ = AlibabaCloudExceptionEvent()
#elseif NEW_EXCEPTION
    _ = AlibabaCloudExceptionEvent.init()
#elseif CLONE_EXCEPTION
    _ = exception.newEvent()
#elseif EXCEPTION_SET_TYPE
    exception.setType("changed")
#elseif EXCEPTION_SET_STACK
    exception.setStacktrace("changed")
#elseif EXCEPTION_SET_IMAGES
    exception.setBinaryImages("changed")
#elseif EXCEPTION_SET_THREAD
    exception.setThreadId("changed")
#elseif EXCEPTION_SET_VIEW
    exception.setViewName("changed")
#elseif EXCEPTION_SET_TRACE
    exception.setTraceId("changed")
#elseif EXCEPTION_SET_EVENT_TYPE
    exception.setEventType("resource")
#elseif EXCEPTION_SET_GROUP
    exception.setGroup("changed")
#elseif EXCEPTION_RESOURCE_RESULT
    exception.setResourceResult(200, success: .success)
#elseif EXCEPTION_WRITE_ATTRIBUTE
    exception.setAttribute("exception.name", value: "invalid")
#elseif EXCEPTION_REMOVE_ATTRIBUTE
    exception.removeAttribute("exception.snapshots")
#elseif EXCEPTION_CLEAR_NAME
    exception.clearName()
#elseif EXCEPTION_CLEAR_MESSAGE
    exception.clearMessage()
#elseif EXCEPTION_CLEAR_CAUSED_BY
    exception.clearCausedBy()
#elseif EXCEPTION_CLEAR_SNAPSHOTS
    exception.clearSnapshots()
#elseif EXCEPTION_ASSIGN_ATTRIBUTES
    exception.attributes = [:]
#elseif EXCEPTION_MUTATE_ATTRIBUTES
    exception.attributes["exception.name"] = "changed"
#elseif BASE_EXCEPTION_NAME
    base.setName("invalid")
#elseif BASE_EXCEPTION_MESSAGE
    base.setMessage("invalid")
#elseif BASE_EXCEPTION_CAUSED_BY
    base.setCausedBy("invalid")
#elseif BASE_EXCEPTION_SNAPSHOTS
    base.setSnapshots("invalid")
#elseif EXCEPTION_ASSIGN_NAME
    exception.name = "invalid"
#elseif EXCEPTION_ASSIGN_MESSAGE
    exception.message = "invalid"
#elseif EXCEPTION_ASSIGN_CAUSED_BY
    exception.causedBy = "invalid"
#elseif EXCEPTION_ASSIGN_SNAPSHOTS
    exception.snapshots = "invalid"
#elseif EXCEPTION_NIL_NAME
    exception.setName(nil)
#elseif EXCEPTION_NIL_MESSAGE
    exception.setMessage(nil)
#elseif EXCEPTION_NIL_CAUSED_BY
    exception.setCausedBy(nil)
#elseif EXCEPTION_NIL_SNAPSHOTS
    exception.setSnapshots(nil)
#endif
}
