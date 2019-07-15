// preventExtensions用于拦截Object.preventExtensions()方法,该方法必须返回一个布尔值,不然会默认转型.
// 返回值存在限制,只有在对象是不可扩展对象时,才可以返回true,不然报错
let obj = {};
let p1 = new Proxy(obj, {
	preventExtensions() {
		return true;
	}
})
//Object.preventExtensions(p1);
let p2 = new Proxy(obj, {
	preventExtensions(tar) {
		// 如果想返回true,需要将源对象编程不可扩展的
		Object.preventExtensions(tar);
		return true;
	}
})
Object.preventExtensions(p2);