// reflect和proxy一样有对应的13个静态方法
// get方法用于从对象取得对应属性,没有对应属性返回undefined,Object的get方法的this执行第3个参数receiver
let obj1 = {
		name: 'ly',
		age: 24,
		get info() {
			return this.name + this.age;
		}
	};
console.log(Reflect.get(obj1, 'name'));
console.log(Reflect.get(obj1, 'ly'));
console.log(Reflect.get(obj1, 'info', {name: 'LY'}));
// 第一个参数不是对象会报错
//Reflect.get(1, 'key');
//Reflect.get(true, 'key');

// set方法用于对属性赋值,Object.set方法的this指向第4个参数receiver
let obj2 = {
		set name(par) {
			console.log(this.name);
			this.name = par;
		}
	}
let obj3 = {name: '123'};
Reflect.set(obj2, 'age', 24);
Reflect.set(obj2, 'name', '456', obj3);
console.log(obj2);
console.log(obj3);
// 第一个参数不是对象也会报错
//Reflect.set(1, 'key', 'val');
//Reflect.set(true, 'key', 'val');
// Reflect.set会被defineProperty拦截
let p1 = new Proxy(obj2, {
	set(...par) {
		console.log('ob1.set');
		// 为p1赋值被set拦截到,调用Reflect.set完成默认行为
		Reflect.set(...par);
	},
	defineProperty(...par) {
		// Reflect.set行为被defineProperty监听到
		console.log('reflect set');
		console.log(...par);
	}
})
p1.test = 'LY';