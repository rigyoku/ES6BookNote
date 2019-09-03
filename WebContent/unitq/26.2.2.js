// TypedArray数组有9种构造函数,用于生成相应类型的数组实例
// 构造函数有多种用法

// TypedArray(buffer, byteOffset, length)
// 3个参数中buffer是必须项目[底层ArrayBuffer对象],byteOffset[视图开始字节序号]和length[视图包含数据个数,默认到本段内存区域接收]都是可选项目
// 同一个ArrayBuffer可以根据不同数据类型建立多个视图
// byteOffset必须和所建立的数据类型一致,不然报错.比如16位整数的offset需要能够被2整除
// 想要从任意位置开始解读ArrayBuffer对象,需要使用DataView视图,因为TypedView只有9种固定解读方式

// TypedArray(length)
// 可以直接定义长度分配内存,长度就是成员个数.

// TypedArray(typedArray)
// 可以使用另一个typedArray对象作为参数.
// 只是复制了参数视图的值,底层内存并不一样,会开辟新的内存存储数据,所以一个视图修改不会影响另一个视图.

// TypedArray(arrayLikeObject)
// 构造函数的参数也可以是一个普通是数组,直接生成TypedArray实例
// 会开辟新的内存,而不会使用原数建立视图