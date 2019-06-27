// es5合并数组
let arr1 = [1, 2];
console.log(arr1.concat([2, 3]));
// 扩展运算符合并数组
let arr2 = [1, 2];
console.log([...arr2, 2, 3]);

// 扩展运算符配合解构
let [x, ...arr3] = [1, 2, 3];
console.log(arr3);
// 和rest类似,都只能放在最后一位

// js函数只能返回一个值,想返回多个值只能返回数组或对象. 通过扩展运算符可以直接把返回值转成参数列表

// 使用扩展运算符把字符串转成真正的数组
let str = '123';
console.log(...str);
// 将字符串转成数组,可以让js正确识别到双字节的Unicode码. 所以正确获得字符串长度可以使用 [...str].length
let str2 = '\uD842\uDFBB';
console.log(str2.length);
console.log([...str2].length);

// 任何实现Iterator接口的对象都可以使用扩展运算符转成数组
// 没有实现Iterator接口的对象可以用Array.from转成对象

// Map和Set都实现了Iterator接口,以及Generator函数返回的是一个遍历器对象,所以都可以用扩展运算符