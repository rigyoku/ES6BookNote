// defineProperty用于拦截Object.defineProperty操作
// getOwnProperty用于拦截Object.getOwnPropertyDescriptor方法,返回undefined或者descriptor描述
let obj = {};
let p = new Proxy(obj, {
	defineProperty(tar, key, des) {
		if (key === 'name') {
			// 返回false会抛出错误
			return false;
		} else {
			return true;
		}
	},
	getOwnPropertyDescriptor(tar, key) {
		if (key === 'age') {
			console.log(`key : ${key}`);
			return;
		} else {
			return Reflect.getOwnPropertyDescriptor(tar, key);
		}
	}
})
Object.defineProperty(p, 'age', {
	value: 23
});
//Object.defineProperty(p, 'name', {
//	value: 'ly'
//})

console.log(Object.getOwnPropertyDescriptor(p, 'age'));