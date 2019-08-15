// class可以通过extends实现继承,比es5通过修改原型链实现继承更清晰
class Parent {
	constructor() {
		console.log('P');
	}
}
// 通过extends让子类继承父类
class Child extends Parent {
	constructor() {
		// 使用super调用父类构造方法
		super();
		console.log('C');
	}
}
let child = new Child();
class Child2 extends Parent {
	constructor() {

	}
}
// 子类继承父类,要么不写构造方法完全使用父类构造方法,要么写构造方法并在构造方法内使用super.[或者return一个对象,但是继承就没有意义了].这是因为子类没有this而是使用父类的this,需要调用super得到this
//new Child2();

// es5的继承是先创建子类实例,然后通过 父类.apply(this) 为其添加父类方法.
// es6的继承是先创建父类实例,再在子类对实例进行修改.所以需要调用super

// 不写构造方法默认使用父类构造方法
class Child3 extends Parent {
	// 不写构造方法等同于这样
	constructor() {
		super();
	}
}

// 子类构造方法调用super后返回实例对象才能使用this关键字
class Child4 extends Parent {
	constructor() {
//		this.name = 'ly';
		super();
		this.name = 'ly';
	}
}
let child4 = new Child4();
// 子类实例同属于子类和父类类型
console.log(child4 instanceof Child4);
console.log(child4 instanceof Parent);

// 子类实例的原型是子类,子类的原型是父类
console.log(Object.getPrototypeOf(child4));
console.log(Object.getPrototypeOf(Child4));
console.log(Object.getPrototypeOf(Parent));
// .prototype是当前层的原型对象,getPrototypeOf是上一层的原型
console.log(child4.prototype);
console.log(Child4.prototype);
console.log(Parent.prototype);