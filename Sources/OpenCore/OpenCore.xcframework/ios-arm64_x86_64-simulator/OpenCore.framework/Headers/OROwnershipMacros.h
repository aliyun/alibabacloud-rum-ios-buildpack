#ifndef OROwnershipMacros_h
#define OROwnershipMacros_h

#define ORWeakSelf(type)  __weak typeof(type) weak##type = type;
#define ORStrongSelf(type)  __strong typeof(type) type = weak##type;

#endif 
