// super关键字既可以当做构造方法,又可以当做对象使用
// 当做构造方法使用: 子类显示的构造方法需要调用super()获取this实例
class P {
	constructor() {
		console.log(this);
		console.log(new.target);
	}
}
class C extends P {
	constructor() {
		// 子类调用super的this指向子类,super相当于 P.prototype.constructor.apply(this)
		super();
	}
}
let c = new C();
class C1 extends P {
	log() {
		// 作为构造方法的super只能在子类的构造方法中使用,其他地方使用报错
//		super();
	}
}

// 当做父类对象使用: 普通方法中super指向父类原型对象,静态方法中指向父类
class P2 {
	constructor() {
		this._name = 'Ly';
	}
	static log(txt) {
		console.log(txt);
	}
}
P2.age = '25';
P2.prototype.sex = 'man';
class C2 extends P2 {
	constructor() {
		super();
		// 构造方法的super只能在构造方法使用
		console.log('-----------------------');
		console.log(`Name: ${super._name}`);
		console.log(`Age: ${super.age}`);
		console.log(`Sex: ${super.sex}`);
	}
	log() {
		// 普通方法的super可以当做父类的prototype对象使用
		console.log('-----------------------');
		console.log(`Name: ${super._name}`);
		console.log(`Age: ${super.age}`);
		console.log(`Sex: ${super.sex}`);
	}
	static say(txt) {
		// 静态方法中的super可以获取父类的静态方法和属性
		console.log('-----------------------');
		console.log(`Name: ${super._name}`);
		console.log(`Age: ${super.age}`);
		console.log(`Sex: ${super.sex}`);
		super.log(txt);
	}
}
// 普通方法的super指向的是父类的原型而不是实例所以不能调用属性
let c2 = new C2();
c2.log();
C2.say('hello');

// 通过super调用父类的方法时,this指向子类
class P3 {
	constructor() {
		this.age = 25;
	}
	log() {
		console.log(this.age);
	}
}
class C3 extends P3 {
	constructor() {
		super();
		this.age = 15;
		// 由于super指向this,所以对其赋值也相当于对this赋值
		super.sex = 'man';
		console.log(this.sex);
	}
}
// 相当于P3.prototype.log.apply(c3)
new C3().log();

// 使用super需要显示执行其究竟作为构造函数使用还是指向父类或父类原型使用,不然js无法识别会报错
// 由于对象总是继承另一个对象,可以在任意对象使用super