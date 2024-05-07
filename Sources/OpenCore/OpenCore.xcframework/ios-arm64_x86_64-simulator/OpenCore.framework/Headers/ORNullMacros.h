#ifndef ORNullMacros_h
#define ORNullMacros_h

//字符串是否为空
#define StringIsEmpty(str) ( [str isKindOfClass:[NSNull class]] || str == nil || ([str length] < 1 ? YES : NO) )
#define StringNoNull(str) StringIsEmpty(str) ? @"" : str
#define ArrayNoNull(arr) (arr != nil && arr.count) ? arr : @[]

#endif 
