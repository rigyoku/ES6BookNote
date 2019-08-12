// 与函数一样,class也可以通过表达式定义
// 外部使用LY作为类名,内部可以使用ly指代当前类,和LY等价
let LY = class ly {
	constructor(name) {
		this.name = name;
	}
	log() {
		// 2个指代等价,都是指代当前类
		console.log(LY === ly);
		console.log(this === ly);
		console.log(`inner: ${ly.name}`);
		console.log(`this: ${this.name}`);
	}
}
new LY('ly').log();
// 内部指代不使用可以省略
let CZY = class {
	constructor() {
		this.name = 'czy';
	}
}
console.log(new CZY().name);
// 立即执行类
let friend = new class {
	constructor(name) {
		this.name = name;
	}
	log() {
		console.log(`we are good friend : ${this.name}`);
	}
}('czy').log();