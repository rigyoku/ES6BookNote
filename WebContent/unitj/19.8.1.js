// 和私有方法一样,es6不提供私有属性.
// 有一个为class添加私有属性的提案: 在属性名前使用#
class Ly {
	// 私有属性可以指定初始值,在构造函数执行时初始化.
	#name = '';
	constructor(name) {
		// 等价于this.#name = name
		#name = name;
		// 私有属性和普通属性可以同名
		this.name = name;
	}
	#log() {
		// #同样能用来写私有方法
		console.log('test');
	}
}