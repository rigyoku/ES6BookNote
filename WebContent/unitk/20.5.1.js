// 原生的构造函数指的是语言内部的内置构造函数,常用来生成对象.ECMAScript原生构造函数大致包括:
// Boolean() / Number() / String() / Array() / Date() / Function() / RegExp() / Error() / Object()
// 原生的构造函数是无法被继承的,不能自己创建构造方法通过apply或者添加原型实现继承
let A = function () {
	Array.apply(this, arguments);
}
A.prototype = Object.create(Array.prototype, {
	constructor: {
		value: A,
		writable: true,
		configuable: true,
		anumerable: true
	}
})
let a = new A();
a[0] = 'ly';
// 通过apply或者添加原型方法得到的构造方法和原构造方法不同
console.log(a.length);
console.log(a[0]);
// 这是因为es5实现继承是先创建子类再去用父类apply像子类实例添加父类方法,但是原生构造函数会忽略apply方法导致内部属性无法被继承