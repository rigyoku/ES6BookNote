// class的静态属性指的是定义在class上的属性,而不是实例上的属性
class Ly {

}
Ly._name = 'ly';
console.log(Ly._name);
// es6明确规定,类的内部只有静态方法没有静态属性,静态属性只能在类外定义
// 目前有一个提案,关于实例属性和静态属性的写法

// 实例属性可以通过 = 在类内定义
class CZY {
	// 提案中实例属性的定义不局限于构造方法中
	name = 'czy';
	// 构造方法中定义的实例属性,提案的写法可以直接列出
	age;
	constructor() {
		console.log(this.name);
		this.age = 24;
	}
}
new CZY();