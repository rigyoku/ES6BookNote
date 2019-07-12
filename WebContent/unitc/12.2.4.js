// has方法的拦截在调用hasProperty时被调用
let obj = {a: 1,_a: 1};
let p = new Proxy(obj, {
	has(tar, key) {
		// 在调用in方法判断key是否存在时,将_开头的属性隐藏
		if (key.startsWith('_')) {
			return false;
		} else {
			return key in tar;
		}
	}
})
console.log('a' in p);
console.log('_a' in p);
// 当对象属性不可扩展[preventExtensions]或者不可配置时进行has代理会报错[返回false才会报错]
let obj2 = Object.defineProperties({}, {
	b: {
		configurable: true,
//		configurable: false,
		value: 'b'
	}
})
//Object.preventExtensions(obj2);
let p2 = new Proxy(obj2, {
	has(tar, key) {
		return false;
	}
})
console.log('b' in p2);
// has代理的是HasProperty而不是HasOwnProperty,即不会判断属性是继承的还是本身的
// for...in 虽然也使用了in运算,但是has代理不生效