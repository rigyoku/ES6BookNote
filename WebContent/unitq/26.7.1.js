// 多线程共享内存时,最大的问题是如何防止2个线程同时修改某个地址,或者说一个线程修改后其他线程要同步.
// SharedArrayBuffer提供Atomics对象,保证共享内存的原子性,并可以在所有线程同步.
// 原子性: 现代编程语言,一条命令可能被编译器转成多条机器指令,但是多线程运行时这些条机器指令之间可能插入其他操作导致结果异常
// Atomics对象用来解决这个问题.将一个操作一次性执行完,保证多线程时操作的安全性.
// Atomics.store用来向内存写数据,Atomics.load用来从内存读取数据,可以让多线程使用同一内存作为flag
// store接收3个参数,分别是buffer,索引位置和值; load方法接收2个参数,分别是buffer和索引位置

// wait和wake方法用来等待通知,相当于内存锁
// wait方法接收4个参数,分别是buffer,索引位置,限定值和超时时间.
// 内存在索引位置的值不等于限定值时返回not-equal.使用wake或者超时时唤醒,使用wake唤醒返回ok,超时返回timed-out.

// 共享内存的某些运算是不能被打断的.比如: add[加法]/sub[减法]/and[位运算and]/or[位运算or]/xor[位运算xor]
// 以上运算都是接收 buffer,索引位置,值 进行运算,将结果插入索引位置,并返回运算之前的值

// compareExchange(buffer, index, oldVal, newVal) 索引位置值等于oldVal,就写入newVal,返回oldVal
// exchange(buffer, index, val) 将值写入执行索引位置,返回旧值
// isLockFree(size) 返回一个布尔值,表示Atomics是否可以处理某个size的内存锁定.返回false程序需要自己实现锁定.