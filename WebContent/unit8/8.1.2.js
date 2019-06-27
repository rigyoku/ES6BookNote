// es5使用apply展开数组作为函数参数
let arr = [1, 2, 3];
let adds = function (x, y, z) {
	console.log(x + y + z);
}
adds.apply(null, arr);
// es6可以直接用扩展运算符展开
adds(...arr);
// push实例
let arr2 = [4, 5];
Array.prototype.push.apply(arr2, arr);
console.log(arr2);
let arr3 = [4, 5];
arr3.push(...arr);
console.log(arr3);