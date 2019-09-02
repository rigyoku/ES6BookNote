// ArrayBuffer对象/TypedArray视图/DataView视图是js操作二进制数据的接口
// 在2011年2月发布,属于独立规格.es6将其纳入ECMAScript,并增加了新的方法,都是以数组语法处理二进制数据,统称为二进制数组.
// 原始设计目的是和WebGL项目有关,为了处理js和显卡交互.
// ArrayBuffer对象代表内存中的一段二进制数据,可以通过视图操作,视图部署了数组接口.代表了原始的二进制数据.
// TypedArray视图包括9种类型的视图,用于处理不同的数据类型
// DataView视图可以自定义复合的视图,用于处理复杂类型的数据
// 很多浏览器操作的API用到了二进制数组操作二进制数据,比如: FileAPI XMLHttpRequest FetchAPI Canvas WebSockets
// 二进制数组并不是真正的数组,而是类似于数组的对象

// ArrayBuffer代表内存中的一段二进制数据,不能直接读写,需要使用TypedArray/DataView视图读写.视图的作用是以指定格式读取二进制数据.
// ArrayBuffer也是一个构造函数,用于分配内存来存放数据
let ab = new ArrayBuffer(32);
// 创建32位字节区域的ab,每个字节默认是0.构造方法的参数是需要的内存大小.

// 为了读写数据需要创建视图,使用ArrayBuffer作为cans
let dv = new DataView(ab);
// 以不带符号的八进制整数格式读取第一个字节
console.log(dv.getUint8(0));
// TypedArray 和 DataView的区别是TypedArray不是一个构造函数,而是一组构造函数,代表了不同格式的数据.
// 创建32位的带符号整数视图
let ta1 = new Int32Array(ab);
console.log(ta1[0]);
ta1[0] = '1';
// 创建8位不带符号整数视图
let ta2 = new Uint8Array(ab);
console.log(ta2[0]);
// 不同视图可能对应同一内存,因此通过一个视图修改内存可能影响另一个视图

// TypedArray构造函数除了使用ArrayBuffer作为参数,还可以接收普通数组作为参数,直接分配内存生成底层的ArrayBuffer实例,同时完成对这段内存赋值.
let arr = [1, 2, 3];
let ta3 = new Int32Array(arr);
console.log(ta3[2]);