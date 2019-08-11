// 传统js通过构造函数创建对象
let Cons = function () {
	this.name = 'CZY';
	this.inner = function () {

	}
}
let xc = new Cons();
console.log(xc.name);
Cons.prototype.log = function () {
	console.log('ly');
}
xc.log();

// es6提供了class用来定义类.可以看做语法糖,功能在es5都可以做到.
class CZY {
	// 构造方法同es5,使用this代表返回的实例对象
	constructor() {
		this.name = 'czy';
	}
	// 类的方法相当于定义在构造方法的原型上,类似上面es5的 F.prototype.f
	log() {
		console.log('ly');
	}
	// 类的方法也可以使用表达式写法
	['inner'] () {
		console.log('sleep');
	}
}
let xc2 = new CZY();
console.log(xc2.name);
// 调用类的方法相当于调用构造方法原型上的方法
xc2.log();
xc2.inner();

// 定义类时,前面不需要加上function. 但是类的本质仍是function
console.log(typeof CZY);
// 实例的方法相当于 构造方法/类 的原型上的方法
console.log(xc2.log === CZY.prototype.log);

// 使用Object.assign将对象属性复制到 F.prototype上
Object.assign(CZY.prototype, {
	say() {
		console.log('hello');
	},
	eat() {
		console.log('i hate mg');
	}
})
xc2.say();
xc2.eat();

// 类的内部定义的方法都是不可枚举的,而显示的声明在原型上是可以枚举的
console.log(Object.getOwnPropertyNames(CZY.prototype));
for (let p of Object.keys(CZY.prototype)) {
	console.log(`P1: ${p}`);
}
for (let p of Object.keys(Cons.prototype)) {
	console.log(`P2: ${p}`);
}

