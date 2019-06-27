// 扩展运算符[spread] ... 是3个点,相当于rest的逆运算,即把数组转成逗号分隔的参数序列
let arr1 = [1, 2, 3, 4];
console.log(...arr1);
console.log(1, 2, ...arr1, 5);

// 主要用于函数调用
let append = function (target, arr) {
	target.push(...arr);
}
let arr2 = [1, 2];
append(arr2, [3, 4]);
console.log(arr2);
let add = function (x, y) {
	console.log(x + y);
}
add(...[1, 2]);

// 扩展运算符可以和普通参数一起使用
let adds = function (x, y, z) {
	console.log(x + y + z);
}
adds(...[1, 2], 3);

// 扩展运算符可以接表达式
let arr3 = [...(true ? [1, 2] : [3, 4]), 5];
console.log(arr3);

// 对空数组使用扩展运算符无返回
let arr4 = [];
console.log(arr4);
console.log(...arr4);
console.log([...arr4, 1]);