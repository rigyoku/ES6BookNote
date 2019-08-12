// es6不直接提供私有方法,只能变通实现
// 一般私有方法命名时,使用 _ + 名字 提示这是一个私有方法,但是仍能被外部调用
// 一种方法是将私有方法移除模块,在方法内部去调用,因为模块内方法都是可见的,这样保证私有
let say = function (age) {
	console.log(`Name: ${this.name}`);
	console.log(`Age: ${age}`);
}
class Ly {
	constructor(name) {
		this.name = name;
	}
	// 在log方法内部调用say,而say不在Ly中相当于私有方法
	log(age) {
		say.call(this, age);
	}
}
new Ly('ly').log(25);
console.log(new Ly().say);

// 另一种方法和上述类似,但是是将方法名改成Symbol型,这样外部无法调用
let logger = Symbol('log');
class CZY {
	constructor(name) {
		this.name = name;
	}
	[logger]() {
		console.log(`Name~~ ${this.name}`);
	}
	log() {
		this[logger]();
	}
}
new CZY(2).log();
console.log(new CZY(2)[Symbol('log')]);