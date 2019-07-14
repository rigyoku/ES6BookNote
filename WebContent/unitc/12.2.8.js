// getPrototypeOf用于拦截获取对象原型的操作
let p = new Proxy({name: 'ly'}, {
	getPrototypeOf(tar) {
		console.log(`tar : ${tar}`);
		return null;
	}
})
// 即拦截一下操作
p.__proto__;
Object.isPrototypeOf(p);
Object.getPrototypeOf(p);
Reflect.getPrototypeOf(p);
p instanceof Object;