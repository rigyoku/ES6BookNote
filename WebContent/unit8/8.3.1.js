// Array.of 方法,用于将一堆数转成数组
console.log(Array.of());
console.log(Array.of(1));
console.log(Array.of(1, 2));
console.log(Array.of(1, 2, 3));
// 主要用于弥补Array构造参数因为参数导致的问题,Array只有在参数不小于2个时才是返回合并的数组
console.log(Array());
console.log(Array(1)); // 指定数组长度
console.log(Array(1, 2));
console.log(Array(1, 2, 3));
// Array.of 可以替代 Array构造方法,并且不会因为参数不同导致重载影响结果