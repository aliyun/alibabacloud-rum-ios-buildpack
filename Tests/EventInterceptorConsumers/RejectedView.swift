import AlibabaCloudRUM

#if SUBCLASS_VIEW
class RejectedViewSubclass: AlibabaCloudViewEvent {}
#endif

func invalidViewAPI(_ view: AlibabaCloudViewEvent, base: AlibabaCloudRUMEvent) {
#if CONSTRUCT_VIEW
    _ = AlibabaCloudViewEvent()
#elseif NEW_VIEW
    _ = AlibabaCloudViewEvent.init()
#elseif CLONE_VIEW
    _ = view.newEvent()
#elseif VIEW_SET_ID
    view.setViewId("changed")
#elseif VIEW_SET_TYPE
    view.setType("changed")
#elseif VIEW_SET_DURATION
    view.setDuration(1)
#elseif VIEW_SET_LOAD_DURATION
    view.setLoadDuration(1)
#elseif VIEW_SET_PARENT
    view.setParentId("changed")
#elseif VIEW_SET_TRACE
    view.setTraceId("changed")
#elseif VIEW_SET_EVENT_TYPE
    view.setEventType("resource")
#elseif VIEW_SET_MESSAGE
    view.setMessage("changed")
#elseif VIEW_SET_GROUP
    view.setGroup("changed")
#elseif VIEW_RESOURCE_RESULT
    view.setResourceResult(200, success: .success)
#elseif VIEW_WRITE_ATTRIBUTE
    view.setAttribute("view.name", value: "invalid")
#elseif VIEW_REMOVE_ATTRIBUTE
    view.removeAttribute("view.snapshots")
#elseif VIEW_CLEAR_SNAPSHOTS
    view.clearSnapshots()
#elseif VIEW_ASSIGN_ATTRIBUTES
    view.attributes = [:]
#elseif VIEW_MUTATE_ATTRIBUTES
    view.attributes["view.name"] = "changed"
#elseif BASE_VIEW_NAME
    base.setName("invalid")
#elseif BASE_VIEW_SNAPSHOTS
    base.setSnapshots("invalid")
#elseif VIEW_MANUAL_START
    AlibabaCloudRUM.startView("checkout")
#elseif VIEW_MANUAL_STOP
    AlibabaCloudRUM.stopView("checkout")
#elseif VIEW_ASSIGN_NAME
    view.name = "invalid"
#elseif VIEW_ASSIGN_SNAPSHOTS
    view.snapshots = "invalid"
#elseif VIEW_NIL_NAME
    view.setName(nil)
#elseif VIEW_NIL_SNAPSHOTS
    view.setSnapshots(nil)
#endif
}
