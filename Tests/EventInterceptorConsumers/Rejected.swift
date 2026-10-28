import AlibabaCloudRUM

func invalidEventAPI(_ event: AlibabaCloudCustomEvent) {
    let context: AlibabaCloudEventContext? = nil
#if CONSTRUCT
    _ = AlibabaCloudRUMEvent()
#elseif NEW
    _ = AlibabaCloudCustomEvent()
#elseif WRITE_ATTRIBUTE
    event.setAttribute("custom.name", value: "invalid")
#elseif REMOVE_ATTRIBUTE
    event.removeAttribute("custom.name")
#elseif RESOURCE_RESULT
    event.setResourceResult(200, success: 1)
#elseif ASSIGN_PROPERTY
    event.attributes = [:]
#elseif ASSIGN_NAME
    event.name = "invalid"
#elseif CONSTRUCT_CONTEXT
    _ = AlibabaCloudEventContext()
#elseif CONTEXT_ASSIGN_REQUEST
    context?.request = nil
#elseif CONTEXT_ASSIGN_RESPONSE
    context?.response = nil
#elseif CONTEXT_ASSIGN_ERROR
    context?.error = nil
#elseif CONTEXT_ASSIGN_PARAMETERS
    context?.originalParameters = [:]
#elseif CONTEXT_ASSIGN_SOURCE
    context?.source = "ios.urlconnection.delegate"
#elseif CONTEXT_ASSIGN_CONTROLLER
    context?.viewController = nil
#elseif CONTEXT_ASSIGN_TARGET
    context?.targetView = nil
#elseif CONTEXT_TASK
    _ = context?.task
#elseif CONTEXT_SESSION
    _ = context?.session
#elseif CONTEXT_BODY
    _ = context?.body
#elseif CONTEXT_DATA
    _ = context?.data
#elseif CONTEXT_CONNECTION
    _ = context?.connection
#elseif CONTEXT_MUTATE_PARAMETERS
    context?.originalParameters?["request"] = "invalid"
#endif
}
