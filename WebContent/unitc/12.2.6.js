// deleteProperty方法用于拦截delete操作,抛出错误或者返回false时,当前属性无法被delete命令删除
let p = new Proxy({}, {
	deleteProperty(tar, key) {
		if (key === 'name') {
			console.log(`ok ${key}`);
//			throw new Error('test');
			return false;
		} else {
			console.log(`ng ${key}`);
			// 进行删除
			Reflect.deleteProperty(tar, key);
			// 并不是返回true就进行了删除,只是表示可以删除
			return true;
		}
	}
})
p.name = 'ly';
p.age = 24;
delete p.name;
delete p.age;
console.log(`name: ${p.name}  /  age: ${p.age}`);

// 不可配置属性使用deleteProperty删除会报错
let obj = Object.defineProperties({}, {
	test: {
		value: 'test',
		configurable: false
	}
})
console.log(obj.test);
let p2 = new Proxy(obj, {
	deleteProperty() {
//		return true;
	}
})
delete p2.test;