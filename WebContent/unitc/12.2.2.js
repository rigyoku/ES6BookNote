// set方法用于拦截某个属性的赋值操作,所以可以在赋值时进行判断,也可以在更新数据时执行类似更新画面的操作
let obj = {};
let p = new Proxy(obj, {
	set(tar, key, val) {
		if (val > 1) {
			tar[key] = val;
		}
	}
})
p.a = 1;
p.b = 2;
console.log(p.a);
console.log(p.b);

// 内部属性使用_开头,表示不应该被外部使用,可以拦截set/get方法对key进行判断,_开头不操作
let check = function(key) {
	if (key.startsWith('_')) {
		console.log('PRIVATE');
		return false;
	} else {
		return true;
	}
}
let p2 = new Proxy(obj, {
	set(tar, key, val) {
		check(key) ? tar[key] = val : null
	},
	get(tar, key) {
		return check(key) ? tar[key] : null
	}
})
p2._a = 1;
console.log(p2._a);