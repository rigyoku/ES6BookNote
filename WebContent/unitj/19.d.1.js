// 类相当于实例的原型,所有类中方法都会被继承.如果一个方法使用static修饰,那么该方法不糊被实例继承,可以直接通过类调用
class Ly {
	log() {
		console.log('emm');
	}
	static say() {
		console.log('hello');
	}
	static ret() {
		return 1;
	}
}
// 原型不能获得普通方法
console.log(Ly.log);
console.log(Ly.say);
console.log(new Ly().log);
// 实例不能获得静态方法
console.log(new Ly().say);
new Ly().log();
Ly.say();

// 静态方法可以被子类继承,也可在super上调用
class Lyy extends Ly {
	// 静态方法可以调用父类[super]静态方法
	static log() {
		console.log(super.ret() + 1);
	}
}
let lyy = new Lyy();
Lyy.say();
Lyy.log();