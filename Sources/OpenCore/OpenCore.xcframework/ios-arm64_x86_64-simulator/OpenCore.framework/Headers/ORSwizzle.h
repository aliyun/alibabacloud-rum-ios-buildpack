#import <Foundation/Foundation.h>
#import <objc/runtime.h>

/**
 指向被交换的方法的原始实现的函数指针类型
 */
typedef void (*ORSwizzleOriginalIMP)(void /* id, SEL, ... */ );

/**
 在新实现的block中，ORSwizzleInfo被用于获取被交换的方法的原始实现，以便在新实现中调用原始实现。
 */
@interface ORSwizzleInfo : NSObject

/// 返回被交换的方法的原始实现
-(ORSwizzleOriginalIMP)getOriginalImplementation;

/// 被交换的方法对应的selector
@property (nonatomic, readonly) SEL selector;

/**
 是否需要调用原始实现
 
 @note 在 newImpBlock 中一定要判断该值是否为真，只有为真的情况才可以获取原始实现并调用。
 
       在 classToSwizzle 及其父类中都没有实现 selector，也就是交换的方法不能通过
       class_getInstanceMethod(classToSwizzle, selector) 获取的情况下，该值为假。
 */
@property (nonatomic, readonly) BOOL originalImpExists;

@end

/**
 factory block，返回值是被交换的方法的新的实现的block。

 @param swizzleInfo 提供用于获取被交换的方法的原始实现的信息
 @return 返回新实现的block
 
 @note 返回的block的签名一定要与原始实现的方法签名一致。
 
       假设原始实现的方法签名是：`method_return_type ^(id self, SEL _cmd, method_args..)`，
       那么返回的block签名应该为：`method_return_type ^(id self, method_args...)`。
 */
typedef id (^ORSwizzleImpFactoryBlock)(ORSwizzleInfo *swizzleInfo);

@interface ORSwizzle : NSObject

/**
交换实例方法的实现

@note 最终交换的方法所在的类不一定是传入的classToSwizzle

内部逻辑：
   1. 在该类及其父类中查找最近的实现了selector的类A，如果该类及其父类中都没有实现selector，且forceImplement为真，那么类A赋值为classToSwizzle；

   2. 如果该类及其父类中都没有实现selector，如果forceImplement为false，hook失败；
      如果forceImplement为true，那么在classToSwizzle中添加新的实现，新的实现由factoryBlock返回的block生成；

      在forceImplement为true的情况下：

      假设继承关系 A <-- B <-- C，A 实现了 foo 方法、B 中覆盖了 A 的实现 foo 方法，C 中没有覆盖 foo 方法。
      那么在针对 C 类中的 foo 方法中 hook 时，实际上交换的是 B 中的 foo 方法。

      假设继承关系 A <-- B <-- C，A、B、C 中都没有覆盖 foo 方法。
      那么在针对 C 类中的 foo 方法中 hook 时，实际上是为 C 添加新的实现。

@param selector 要交换的方法名
@param classToSwizzle 要交换的方法所在的类
@param strictly 是否使用严格模式
@param factoryBlock 用于返回新实现block的factory block，要注意该factory block返回的新实现的block要与被交换的方法的原始实现的签名兼容
@param forceImplement 是否强制实现
@param typeEncodingProvider 提供方法签名的Method（forceImplement为YES时，typeEncodingProvider不能为NULL）
@param destinationClassPtr 真正hook的类（出参）
@param key 方法交换的key，用于保证只hook一次。如果key为NULL，那么内部取selector作为key。
@return 在forceImplement为假，且classToSwizzle及其父类中都没有实现selector的情况下，返回假；其余情况，都返回真。
*/
+ (BOOL)swizzleInstanceMethod:(SEL)selector
                      inClass:(Class)classToSwizzle
                     strictly:(BOOL)strictly
               forceImplement:(BOOL)forceImplement
         typeEncodingProvider:(Method)typeEncodingProvider
          destinationClsssPtr:(Class *)destinationClassPtr
                          key:(const void *)key
                newImpFactory:(ORSwizzleImpFactoryBlock)factoryBlock;

/**
相当于:
`[self swizzleInstanceMethod:selector
               inClass:classToSwizzle
               strictly:strictly
         forceImplement:forceImplement
    typeEncodingProvider:typeEncodingProvider
      destinationClsssPtr:nil
               key:NULL
         newImpFactory:factoryBlock]`
*/
+ (BOOL)swizzleInstanceMethod:(SEL)selector
                      inClass:(Class)classToSwizzle
                     strictly:(BOOL)strictly
               forceImplement:(BOOL)forceImplement
         typeEncodingProvider:(Method)typeEncodingProvider
                newImpFactory:(ORSwizzleImpFactoryBlock)factoryBlock;
/**
 相当于:
 `[self swizzleInstanceMethod:selector
                inClass:classToSwizzle
                strictly:NO
        forceImplement:forceImplement
   typeEncodingProvider:typeEncodingProvider
        newImpFactory:factoryBlock];`
 */
+ (BOOL)swizzleInstanceMethod:(SEL)selector
                      inClass:(Class)classToSwizzle
               forceImplement:(BOOL)forceImplement
         typeEncodingProvider:(Method)typeEncodingProvider
                newImpFactory:(ORSwizzleImpFactoryBlock)factoryBlock;

+ (BOOL)swizzleInstanceMethod:(SEL)selector
                      inClass:(Class)classToSwizzle
                newImpFactory:(ORSwizzleImpFactoryBlock)factoryBlock;

/**
 交换类方法的实现，相当于：
 [self swizzleInstanceMethod:selector
                inClass:object_getClass(classToSwizzle)
                strictly:strictly
         forceImplement:NO
    typeEncodingProvider:NULL
        newImpFactory:factoryBlock]
 */
+ (BOOL)swizzleClassMethod:(SEL)selector
                   inClass:(Class)classToSwizzle
                  strictly:(BOOL)strictly
             newImpFactory:(ORSwizzleImpFactoryBlock)factoryBlock;

/**
 交换类方法的实现，相当于：
 [self swizzleInstanceMethod:selector
                inClass:object_getClass(classToSwizzle)
          newImpFactory:factoryBlock]`
 */
+ (BOOL)swizzleClassMethod:(SEL)selector
                   inClass:(Class)classToSwizzle
             newImpFactory:(ORSwizzleImpFactoryBlock)factoryBlock;

@end
