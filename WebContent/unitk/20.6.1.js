// mixin模式是将多个类的接口混入[mix in]另一个类
let mixin = function (...source) {
	class Mixed {

	}
	for (let s of source) {
		// 模拟es6类的继承
		extendsSource(Mixed, s);
	}
	return Mixed;
}
let extendsSource = function (target, source) {
	// 直接覆盖会导致前一个混入失效
//	target.__proto__ = source;
//	target.prototype.__proto__ = source.prototype;

	for (let k of Reflect.ownKeys(source)) {
		if (k !== 'constructor' && k !== 'prototype' && k !== 'name') {
			let des = Object.getOwnPropertyDescriptor(source, k);
			Object.defineProperty(target, k, des);
		}
	}
	for (let k of Reflect.ownKeys(source.prototype)) {
		if (k !== 'constructor' && k !== 'prototype' && k !== 'name') {
			let des = Object.getOwnPropertyDescriptor(source.prototype, k);
			Object.defineProperty(target.prototype, k, des);
		}
	}
}
class A {
	log() {
		console.log('ly');
	}
}
class B {
	say() {
		console.log('czy');
	}
}
class C extends mixin(A, B) {

}
let c = new C();
console.log(c);
c.log();
c.say();