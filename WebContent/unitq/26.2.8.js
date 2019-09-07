// TypedArray.prototype.buffer返回视图的ArrayBuffer对象,是一个只读属性.
let ab = new ArrayBuffer(32);
let ia = new Int16Array(ab);
console.log(ab === ia.buffer);

// TypedArray.prototype.byteLength返回数组占内存长度[字节长度]
console.log(ia.byteLength);
// TypedArray.prototype.byteOffset返回数组从内存的那个字节开始
console.log(ia.byteOffset);

// TypedArray.prototype.length返回数组成员个数[成员长度]
console.log(ia.length);