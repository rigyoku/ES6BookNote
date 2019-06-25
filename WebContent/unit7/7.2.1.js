// es6引入了rest参数,形式为 ...变量名 ,来获取函数多余的参数.对应的变量为数组.
let add = function (...params) {
	let ret = 0;
	for (let param of params) {
		ret += param;
	}
	return ret;
}
console.log(add(1, 2, 3));

// rest参数必须为最后一个参数,不然报错
//let f1 = function (...a, b) {};
let f2 = function (c, ...d) {};
// rest参数不计入length属性
console.log(f2.length);