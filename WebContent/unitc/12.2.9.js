// isExtensible拦截Object.isExtensible操作
let p = new Proxy({}, {
	isExtensible(tar) {
		console.log(tar)
		// 返回值必须是布尔型,其他型会自动转型. 返回值必须和源对象的isExtensible值相同,不然报错
		return true;
//		return false;
	}
})
// 将对象变为不可扩展
let obj = Object.preventExtensions({});
let p2 = new Proxy(obj, {
	isExtensible() {
		return false;
	}
})
Object.isExtensible(p);
Object.isExtensible(p2);