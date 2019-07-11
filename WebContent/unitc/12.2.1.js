// get方法用于拦截某个属性的读取操作
let obj = {name: 'ly'};
let pro = new Proxy(obj, {
	get(tar, key, receiver) {
		if (key in tar) {
			return tar[key]
		} else {
			return 'default';
		}
	}
})
console.log(pro.name);
// 可以设置默认值
console.log(pro.age);
let obj2 = Object.create(pro);
// 拦截的get方法被obj2继承
console.log(obj2.sex);
// 可以自定义读取方法,根据参数进行各种操作.
// 可以将读取方法作为代理成链式操作

// 如果一个属性不可配置[configurable]或者不可写[writable],代理这个属性会报错
let obj3 = Object.defineProperties(obj2, {
	name: {
		value: 'ly',
		writable: false,
        configurable: false
	}
})
let pro2 = new Proxy(obj3, {
	get(tar, key) {
		console.log('TEST');
		return key;
	}
})
console.log(pro2.name);