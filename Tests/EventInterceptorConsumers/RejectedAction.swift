import AlibabaCloudRUM

#if SUBCLASS_ACTION
class RejectedActionSubclass: AlibabaCloudActionEvent {}
#endif

func invalidActionAPI(_ action: AlibabaCloudActionEvent, base: AlibabaCloudRUMEvent) {
#if CONSTRUCT_ACTION
    _ = AlibabaCloudActionEvent()
#elseif NEW_ACTION
    _ = AlibabaCloudActionEvent.init()
#elseif CLONE_ACTION
    _ = action.newEvent()
#elseif ACTION_SET_ID
    action.setActionId("changed")
#elseif ACTION_SET_TYPE
    action.setType("changed")
#elseif ACTION_SET_DURATION
    action.setDuration(1)
#elseif ACTION_SET_VIEW_ID
    action.setViewId("changed")
#elseif ACTION_SET_VIEW_NAME
    action.setViewName("changed")
#elseif ACTION_SET_TRACE
    action.setTraceId("changed")
#elseif ACTION_SET_EVENT_TYPE
    action.setEventType("resource")
#elseif ACTION_SET_MESSAGE
    action.setMessage("changed")
#elseif ACTION_SET_GROUP
    action.setGroup("changed")
#elseif ACTION_RESOURCE_RESULT
    action.setResourceResult(200, success: .success)
#elseif ACTION_WRITE_ATTRIBUTE
    action.setAttribute("action.name", value: "invalid")
#elseif ACTION_REMOVE_ATTRIBUTE
    action.removeAttribute("action.snapshots")
#elseif ACTION_CLEAR_NAME
    action.clearName()
#elseif ACTION_CLEAR_SNAPSHOTS
    action.clearSnapshots()
#elseif ACTION_ASSIGN_ATTRIBUTES
    action.attributes = [:]
#elseif ACTION_MUTATE_ATTRIBUTES
    action.attributes["action.name"] = "changed"
#elseif BASE_ACTION_NAME
    base.setName("invalid")
#elseif BASE_ACTION_SNAPSHOTS
    base.setSnapshots("invalid")
#elseif ACTION_ASSIGN_NAME
    action.name = "invalid"
#elseif ACTION_ASSIGN_SNAPSHOTS
    action.snapshots = "invalid"
#elseif ACTION_NIL_NAME
    action.setName(nil)
#elseif ACTION_NIL_SNAPSHOTS
    action.setSnapshots(nil)
#endif
}
