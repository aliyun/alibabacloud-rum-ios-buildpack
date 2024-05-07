#import <Foundation/Foundation.h>
#import <objc/runtime.h>

NS_ASSUME_NONNULL_BEGIN

/**
 Type encoding's type.
 */
typedef NS_OPTIONS(NSUInteger, OREncodingType) {
    OREncodingTypeMask       = 0xFF, ///< mask of type value
    OREncodingTypeUnknown    = 0, ///< unknown
    OREncodingTypeVoid       = 1, ///< void
    OREncodingTypeBool       = 2, ///< bool
    OREncodingTypeInt8       = 3, ///< char / BOOL
    OREncodingTypeUInt8      = 4, ///< unsigned char
    OREncodingTypeInt16      = 5, ///< short
    OREncodingTypeUInt16     = 6, ///< unsigned short
    OREncodingTypeInt32      = 7, ///< int
    OREncodingTypeUInt32     = 8, ///< unsigned int
    OREncodingTypeInt64      = 9, ///< long long
    OREncodingTypeUInt64     = 10, ///< unsigned long long
    OREncodingTypeFloat      = 11, ///< float
    OREncodingTypeDouble     = 12, ///< double
    OREncodingTypeLongDouble = 13, ///< long double
    OREncodingTypeObject     = 14, ///< id
    OREncodingTypeClass      = 15, ///< Class
    OREncodingTypeSEL        = 16, ///< SEL
    OREncodingTypeBlock      = 17, ///< block
    OREncodingTypePointer    = 18, ///< void*
    OREncodingTypeStruct     = 19, ///< struct
    OREncodingTypeUnion      = 20, ///< union
    OREncodingTypeCString    = 21, ///< char*
    OREncodingTypeCArray     = 22, ///< char[10] (for example)
    
    OREncodingTypeQualifierMask   = 0xFF00,   ///< mask of qualifier
    OREncodingTypeQualifierConst  = 1 << 8,  ///< const
    OREncodingTypeQualifierIn     = 1 << 9,  ///< in
    OREncodingTypeQualifierInout  = 1 << 10, ///< inout
    OREncodingTypeQualifierOut    = 1 << 11, ///< out
    OREncodingTypeQualifierBycopy = 1 << 12, ///< bycopy
    OREncodingTypeQualifierByref  = 1 << 13, ///< byref
    OREncodingTypeQualifierOneway = 1 << 14, ///< oneway
    
    OREncodingTypePropertyMask         = 0xFF0000, ///< mask of property
    OREncodingTypePropertyReadonly     = 1 << 16, ///< readonly
    OREncodingTypePropertyCopy         = 1 << 17, ///< copy
    OREncodingTypePropertyRetain       = 1 << 18, ///< retain
    OREncodingTypePropertyNonatomic    = 1 << 19, ///< nonatomic
    OREncodingTypePropertyWeak         = 1 << 20, ///< weak
    OREncodingTypePropertyCustomGetter = 1 << 21, ///< getter=
    OREncodingTypePropertyCustomSetter = 1 << 22, ///< setter=
    OREncodingTypePropertyDynamic      = 1 << 23, ///< @dynamic
};

/**
 Get the type from a Type-Encoding string.
 
 @discussion See also:
 https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtTypeEncodings.html
 https://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/ObjCRuntimeGuide/Articles/ocrtPropertyIntrospection.html
 
 @param typeEncoding  A Type-Encoding string.
 @return The encoding type.
 */
OREncodingType OREncodingGetType(const char *typeEncoding);


/**
 Instance variable information.
 */
@interface ORClassIvarInfo : NSObject
@property (nonatomic, assign, readonly) Ivar ivar;              ///< ivar opaque struct
@property (nonatomic, strong, readonly) NSString *name;         ///< Ivar's name
@property (nonatomic, assign, readonly) ptrdiff_t offset;       ///< Ivar's offset
@property (nonatomic, strong, readonly) NSString *typeEncoding; ///< Ivar's type encoding
@property (nonatomic, assign, readonly) OREncodingType type;    ///< Ivar's type

/**
 Creates and returns an ivar info object.
 
 @param ivar ivar opaque struct
 @return A new object, or nil if an error occurs.
 */
- (instancetype)initWithIvar:(Ivar)ivar;
@end


/**
 Method information.
 */
@interface ORClassMethodInfo : NSObject
@property (nonatomic, assign, readonly) Method method;                  ///< method opaque struct
@property (nonatomic, strong, readonly) NSString *name;                 ///< method name
@property (nonatomic, assign, readonly) SEL sel;                        ///< method's selector
@property (nonatomic, assign, readonly) IMP imp;                        ///< method's implementation
@property (nonatomic, strong, readonly) NSString *typeEncoding;         ///< method's parameter and return types
@property (nonatomic, strong, readonly) NSString *returnTypeEncoding;   ///< return value's type
@property (nullable, nonatomic, strong, readonly) NSArray<NSString *> *argumentTypeEncodings; ///< array of arguments' type

/**
 Creates and returns a method info object.
 
 @param method method opaque struct
 @return A new object, or nil if an error occurs.
 */
- (instancetype)initWithMethod:(Method)method;
@end


/**
 Property information.
 */
@interface ORClassPropertyInfo : NSObject
@property (nonatomic, assign, readonly) objc_property_t property; ///< property's opaque struct
@property (nonatomic, strong, readonly) NSString *name;           ///< property's name
@property (nonatomic, assign, readonly) OREncodingType type;      ///< property's type
@property (nonatomic, strong, readonly) NSString *typeEncoding;   ///< property's encoding value
@property (nonatomic, strong, readonly) NSString *ivarName;       ///< property's ivar name
@property (nullable, nonatomic, assign, readonly) Class cls;      ///< may be nil
@property (nullable, nonatomic, strong, readonly) NSArray<NSString *> *protocols; ///< may nil
@property (nonatomic, assign, readonly) SEL getter;               ///< getter (nonnull)
@property (nonatomic, assign, readonly) SEL setter;               ///< setter (nonnull)

/**
 Creates and returns a property info object.
 
 @param property property opaque struct
 @return A new object, or nil if an error occurs.
 */
- (instancetype)initWithProperty:(objc_property_t)property;
@end


/**
 Class information for a class.
 */
@interface ORClassInfo : NSObject
@property (nonatomic, assign, readonly) Class cls; ///< class object
@property (nullable, nonatomic, assign, readonly) Class superCls; ///< super class object
@property (nullable, nonatomic, assign, readonly) Class metaCls;  ///< class's meta class object
@property (nonatomic, readonly) BOOL isMeta; ///< whether this class is meta class
@property (nonatomic, strong, readonly) NSString *name; ///< class name
@property (nullable, nonatomic, strong, readonly) ORClassInfo *superClassInfo; ///< super class's class info
@property (nullable, nonatomic, strong, readonly) NSDictionary<NSString *, ORClassIvarInfo *> *ivarInfos; ///< ivars
@property (nullable, nonatomic, strong, readonly) NSDictionary<NSString *, ORClassMethodInfo *> *methodInfos; ///< methods
@property (nullable, nonatomic, strong, readonly) NSDictionary<NSString *, ORClassPropertyInfo *> *propertyInfos; ///< properties

/**
 If the class is changed (for example: you add a method to this class with
 'class_addMethod()'), you should call this method to refresh the class info cache.
 
 After called this method, `needUpdate` will returns `YES`, and you should call 
 'classInfoWithClass' or 'classInfoWithClassName' to get the updated class info.
 */
- (void)setNeedUpdate;

/**
 If this method returns `YES`, you should stop using this instance and call
 `classInfoWithClass` or `classInfoWithClassName` to get the updated class info.
 
 @return Whether this class info need update.
 */
- (BOOL)needUpdate;

/**
 Get the class info of a specified Class.
 
 @discussion This method will cache the class info and super-class info
 at the first access to the Class. This method is thread-safe.
 
 @param cls A class.
 @return A class info, or nil if an error occurs.
 */
+ (nullable instancetype)classInfoWithClass:(Class)cls;

/**
 Get the class info of a specified Class.
 
 @discussion This method will cache the class info and super-class info
 at the first access to the Class. This method is thread-safe.
 
 @param className A class name.
 @return A class info, or nil if an error occurs.
 */
+ (nullable instancetype)classInfoWithClassName:(NSString *)className;

@end

NS_ASSUME_NONNULL_END
