// new是通过构造函数创建对象的命令.es6引入了new.target属性,通过new命令调用构造方法中该属性的值是该构造函数,不是通过new调用的构造方法该值是undefined
let Ly = function () {
	this.name = 'ly';
	console.log(new.target);
}
let ly = new Ly();
Ly();
Ly.call(ly);
// 可以在构造方法内判断new.target的值保证只能被new调用
let Ly1 = function () {
	if (new.target === Ly1) {
		//...
	} else {
		throw new Error('must be new');
	}
}
//Ly1();

// 子类继承父类是,new.target会返回子类
class Lyy extends Ly {
	construct() {
		console.log(`New.Target: ${new.target}`);
	}
}
// Lyy继承自Ly,在Lyy调用new.target返回Lyy的构造方法
new Lyy();
// 可以利用该特性使一个类只能被继承使用
class Father {
	constructor() {
		if (new.target === Father) {
			throw new Error('Cannot be used directly');
		} else {
			console.log(new.target);
		}
	}
}
//new Father();
class Child extends Father {

}
new Child();

// new.target只能在类的内部使用,外部使用报错