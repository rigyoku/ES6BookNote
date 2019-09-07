// TypedArray.prototype.set用于复制视图数组
let ab = new ArrayBuffer(32);
let ia1 = new Int8Array(ab);
ia1[2] = 5;
let ia2 = new Int8Array(32);
// set的第二个参数是从第几位开始复制
ia2.set(ia1, 0);
console.log(ia2[2]);

// TypedArray.prototype.subarray使用数组的一部分构建新的数组,2个参数分别是起点位置[包含]和结束位置[不包含]
let ia3 = ia1.subarray(2,3);
console.log(ia3[0]);
console.log(ia3.length);

// TypedArray.prototype.slice用于从指定位置返回新的数组,负数参数表示倒序
let ia4 = ia1.slice(-30);
console.log(ia4[0]);
console.log(ia4.length);

// TypedArray.of 该静态方法用于将参数转成TypedArray视图
let ia5 = Int8Array.of(1, 2, 3);
console.log(ia5[1]);

// TypedArray.from 该静态方法用于将参数数组转成TypedArray视图
let ia6 = Int8Array.from([1, 2, 3]);
console.log(ia6[1]);
// from方法还可以接收第二个参数完成map功能
let ia7 = Int8Array.from([1, 2, 3], (item) => item + 1);
console.log(ia7[1]);