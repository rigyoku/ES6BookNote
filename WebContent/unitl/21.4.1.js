// core-decorators.js是一个第三方模块,提供了几个常见修饰器
// @autobind修饰器,使方法中this绑定原始对象
import {autobind} from 'core-decorators';
class Ly {
	@autobind
	log() {
		return this;
	}
}
let ly = new Ly();
let log = ly.log;
console.log(log() === ly); // true
// @readonly修饰器,使属性只读
import {readonly} from 'core-decorators';
class Ly2 {
	@readonly
	logger = 'hello';
}
let ly2 = new Ly2();
ly2.logger = 'hi'; // 报错
// @override修饰器判断子类是否正确覆盖父类同名方法,不正确覆盖会报错
import {override} from 'core-decorators';
class P {
	log(str) {

	}
}
class C extends P {
	@override
	log() {
		// 参数不同,不是正确覆盖
	}
	@override
	logg() {
		// 方法名不同,不是正确覆盖
	}
}
// @deprecate(别名@deprecated)修饰器,在控制台显示一条警告,表示该方法即将废除
// @suppressWarnings修饰器,抑制deprecate的警告
class T {
	@deprecate
	// 修饰器可以接收2个参数,分别是 提示文字 和 详细url
	test() {

	}
	@suppressWarnings
	test2() {
		// 抑制deprecate,不会打印警告
		this.test();
	}
}