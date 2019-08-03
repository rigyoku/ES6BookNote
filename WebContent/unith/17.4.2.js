// 由于传名调用是传入表达式在使用时求值,编译器一般通过将参数放入临时函数[Thunk函数],再将临时函数传入计算函数
let a = 1;
let f = function (p) {
	console.log(p);
}
f(a + 1);
let temp = function () {
	return a + 1;
}
// 方法作为参数,在使用时调用方法进行计算获得值
let f2 = function (p) {
	console.log(p());
}
f2(temp);
// Thunk函数定义就是传名调用的实现

// 在js中,函数本身是传值调用的.Thunk作用不是实现传名调用,而是将多参数函数替换成单参数函数
const fs = require('fs');
let read = function (file) {
	return function (callback) {
		return fs.readFile(file, 'utf-8', callback);
	}
}
read('17.1.1.js')(function (err, data) {
	if (err) {
		throw err;
	}
	console.log(data);
})

// 普通函数转换成Thunk函数
// es6实现
let thunk = function (f) {
	return function (...args) {
		return function (callback) {
			f.call(this, ...args, callback);
		}
	}
}
thunk(f)(3)(console.log);