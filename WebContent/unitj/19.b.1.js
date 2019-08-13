// 和es5一样,类的内部可以使用get/set方法对某个属性存取值进行拦截
class Ly {
	set friend(val) {
		this._f = val;
	}
	get friend() {
		return `${this._f} + czy`;
	}
}
let ly = new Ly();
ly.friend = 'alone';
console.log(ly.friend);

// set/get定义在属性的descriptor上
let des = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(ly), 'friend');
console.log(des);
console.log('set' in des);
console.log('get' in des);