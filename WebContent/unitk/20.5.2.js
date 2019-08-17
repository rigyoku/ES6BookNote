// es6允许继承原生构造函数定义子类,因为es6是先创建父类再去扩展
// extends不仅可以用来继承类,还可以用来继承原生构造函数,实现对原生构造函数的扩展
class A extends Array {
	log() {
		for (let t of this) {
			console.log(t);
		}
	}
}
let a = new A();
a[0] = 'ly';
console.log(a);
console.log(a.length);
a.log();

// 继承object的子类有一个行为差异,es6一旦发现object不是通过new Object调用的,那么参数会被忽略
class O extends Object {
	constructor(...p) {
		super(...p);
	}
}
let o = new O({age: 24});
// 忽略参数导致取不到age属性
console.log(o.age);