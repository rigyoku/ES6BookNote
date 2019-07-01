// Object.getPrototypeOf和set方法配套,用来读取prototype
let obj = function () {

	};
console.log(Object.getPrototypeOf(new obj()) === obj.prototype);
// 非对象参数会转成对象再操作,不能转对象会报错
console.log(Object.getPrototypeOf(1));
console.log(Object.getPrototypeOf('test'));