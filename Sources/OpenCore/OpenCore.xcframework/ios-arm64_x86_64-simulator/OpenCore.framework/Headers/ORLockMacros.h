#ifndef ORLockMacros_h
#define ORLockMacros_h

#define Lock(semaphore_lock)\
if (semaphore_lock) dispatch_semaphore_wait(semaphore_lock,DISPATCH_TIME_FOREVER);

#define UnLock(semaphore_lock)\
if (semaphore_lock) dispatch_semaphore_signal(semaphore_lock);

#endif
