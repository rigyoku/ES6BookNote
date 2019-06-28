// es6可以简写对象,只写属性名,属性值为属性名变量的值
let a = '123';
let b = {a};
console.log(b);
let f1 = function (a, b) {
	return {a, b};
}
console.log(f1(1, 2));
// 除了属性,方法也可以简写
let c = {
	f (x) {
		console.log(x);
	}
}
c.f(1);

// 写返回值很方便
let f2 = function () {
	let a = 1;
	let b = 2;
	return {a, b};
}
console.log(f2());

// commonjs适合使用这种写法返回包含函数的对象

// 属性的赋值器和取值器也是这种写法
let obj = {
	_name: 'ly',
	set name (x) {
		this._name = x;
	},
	get name () {
		return this._name
	},
}
console.log(obj);
console.log(obj._name);
console.log(obj.name);

// 简写的属性名总是字符串,所以关键字不会报错
let d = {
		class () {

		}
	}
// Generator的方法使用简写需要加*
let e = {
		*gen () {
			yield 'test';
		}
	}