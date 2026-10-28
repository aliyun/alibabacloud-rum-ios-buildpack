import AlibabaCloudRUM

#if SUBCLASS_LONGTASK
class RejectedLongTaskSubclass: AlibabaCloudLongTaskEvent {}
#endif

func invalidLongTaskAPI(_ longTask: AlibabaCloudLongTaskEvent, base: AlibabaCloudRUMEvent) {
#if CONSTRUCT_LONGTASK
    _ = AlibabaCloudLongTaskEvent()
#elseif NEW_LONGTASK
    _ = AlibabaCloudLongTaskEvent.init()
#elseif CLONE_LONGTASK
    _ = longTask.newEvent()
#elseif LONGTASK_SET_NAME
    longTask.setName("changed")
#elseif LONGTASK_SET_DURATION
    longTask.setDuration(1)
#elseif LONGTASK_SET_STACK
    longTask.setStacktrace("changed")
#elseif LONGTASK_SET_IMAGES
    longTask.setBinaryImages("changed")
#elseif LONGTASK_SET_THREAD
    longTask.setThreadId("changed")
#elseif LONGTASK_SET_VIEW
    longTask.setViewName("changed")
#elseif LONGTASK_SET_TRACE
    longTask.setTraceId("changed")
#elseif LONGTASK_SET_EVENT_TYPE
    longTask.setEventType("resource")
#elseif LONGTASK_SET_GROUP
    longTask.setGroup("changed")
#elseif LONGTASK_SET_CAUSED_BY
    longTask.setCausedBy("changed")
#elseif LONGTASK_RESOURCE_RESULT
    longTask.setResourceResult(200, success: .success)
#elseif LONGTASK_WRITE_ATTRIBUTE
    longTask.setAttribute("longtask.message", value: "invalid")
#elseif LONGTASK_REMOVE_ATTRIBUTE
    longTask.removeAttribute("longtask.snapshots")
#elseif LONGTASK_CLEAR_MESSAGE
    longTask.clearMessage()
#elseif LONGTASK_CLEAR_SNAPSHOTS
    longTask.clearSnapshots()
#elseif LONGTASK_ASSIGN_ATTRIBUTES
    longTask.attributes = [:]
#elseif LONGTASK_MUTATE_ATTRIBUTES
    longTask.attributes["longtask.message"] = "changed"
#elseif BASE_LONGTASK_MESSAGE
    base.setMessage("invalid")
#elseif BASE_LONGTASK_SNAPSHOTS
    base.setSnapshots("invalid")
#elseif LONGTASK_ASSIGN_MESSAGE
    longTask.message = "invalid"
#elseif LONGTASK_ASSIGN_SNAPSHOTS
    longTask.snapshots = "invalid"
#elseif LONGTASK_NIL_MESSAGE
    longTask.setMessage(nil)
#elseif LONGTASK_NIL_SNAPSHOTS
    longTask.setSnapshots(nil)
#endif
}
