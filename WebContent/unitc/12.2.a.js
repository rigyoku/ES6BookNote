// ownKeys用来拦截对象自身属性的读取操作,只能返回数组且成员必须是字符串或者Symbol型,不然报错
let obj = {a: 1};
Object.defineProperty(obj, 'b', {
	value: 'b',
	enumerable: false
})
let p = new Proxy(obj, {
	ownKeys(tar) {
		console.log(`${tar} get key`);
		// 这里的返回值必须显示包含上面通过defineProperty定义的b这个key
		return ['name', 'a', Symbol(), 'b'];
//		return 'b';
//		return [null];
	}
})
// getOwnPropertyNames返回所有非Symbol的key
console.log(Object.getOwnPropertyNames(p));
// getOwnPropertySymbols返回Symbol型的key
console.log(Object.getOwnPropertySymbols(p));
// keys方法会进行过滤: 对象上没有的key,Symbol型key,不可遍历的key
console.log(Object.keys(p));

let obj2 = {a: 1};
Object.defineProperty(obj2, 'b', {
	value: 'b',
	configurable: false
})
let p2 = new Proxy(obj2, {
	ownKeys(tar) {
		// 和不可遍历属性类似,不可配置属性也必须显示的出现在返回数组
//		return ['a'];
		return ['b'];
	}
})
console.log(Object.keys(p2));

let obj3 = {a: 1};
Object.preventExtensions(obj3);
let p3 = new Proxy(obj3, {
	ownKeys() {
		// 如果一个对象是不可扩展的,那么ownKeys需要显示的返回全部key且不能有额外的key
//		return ['b'];
//		return ['a', 'b'];
		return ['a'];
	}
})
console.log(Object.keys(p3));