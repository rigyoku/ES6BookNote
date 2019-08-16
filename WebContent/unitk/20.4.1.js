// extends关键字可以接许多类型,只要有prototype属性就能被继承
// 任意函数都有prototype属性[除了Function.prototype函数],因此可以继承任意函数

// 子类继承Object
class o extends Object {
	// 这样o是Object的复制,o的实例就是Object的实例
}
console.log(Object.getPrototypeOf(o) === Object);
console.log(Object.getPrototypeOf(o.prototype) === Object.prototype);

// 不继承类
class f {
	// 这样f就是一个普通函数,相当于继承Function.prototype
	// f调用后返回一个空对象是Object的实例,所以f.prototype.__proto__指向了构造方法Object的实例Object.prototype
}
console.log(Object.getPrototypeOf(f) === Function.prototype);
console.log(Object.getPrototypeOf(f.prototype) === Object.prototype);

// 继承null
class n extends null {
	// 这样n也是一个普通函数,所以相当于继承Function.prototype
	// n调用返回的实例是null,所以n.prototype.__proto__指向null
}
console.log(Object.getPrototypeOf(n) === Function.prototype);
console.log(Object.getPrototypeOf(n.prototype) === null);