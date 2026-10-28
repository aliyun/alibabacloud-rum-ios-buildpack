import AlibabaCloudRUM

func invalidResourceAPI(_ resource: AlibabaCloudResourceEvent, base: AlibabaCloudRUMEvent) {
#if CONSTRUCT_RESOURCE
    _ = AlibabaCloudResourceEvent()
#elseif NEW_RESOURCE
    _ = AlibabaCloudResourceEvent.init()
#elseif CLONE_RESOURCE
    _ = resource.newEvent()
#elseif RESOURCE_SET_STATUS
    resource.setStatusCode(200)
#elseif RESOURCE_SET_SUCCESS
    resource.setSuccess(.success)
#elseif RESOURCE_SET_URL
    resource.setURL("https://example.invalid/changed")
#elseif RESOURCE_SET_TRACE
    resource.setTraceId("changed")
#elseif RESOURCE_SET_VIEW
    resource.setViewName("changed")
#elseif RESOURCE_WRITE_ATTRIBUTE
    resource.setAttribute("resource.name", value: "invalid")
#elseif RESOURCE_REMOVE_ATTRIBUTE
    resource.removeAttribute("resource.snapshots")
#elseif RESOURCE_CLEAR_SNAPSHOTS
    resource.clearSnapshots()
#elseif RESOURCE_ASSIGN_ATTRIBUTES
    resource.attributes = [:]
#elseif RESOURCE_MUTATE_ATTRIBUTES
    resource.attributes["view.name"] = "changed"
#elseif BASE_RESOURCE_RESULT
    base.setResourceResult(200, success: .success)
#elseif RESOURCE_ASSIGN_NAME
    resource.name = "invalid"
#elseif RESOURCE_ASSIGN_MESSAGE
    resource.message = "invalid"
#elseif RESOURCE_ASSIGN_SNAPSHOTS
    resource.snapshots = "invalid"
#elseif RESOURCE_ASSIGN_STATUS
    resource.statusCode = 200
#elseif RESOURCE_ASSIGN_SUCCESS
    resource.success = 1
#elseif RESOURCE_NIL_SNAPSHOTS
    resource.setSnapshots(nil)
#elseif RESOURCE_INT_STATUS
    let platformInteger: Int = 200
    resource.setResourceResult(platformInteger, success: .success)
#endif
}
