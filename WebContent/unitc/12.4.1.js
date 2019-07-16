// proxy不是原对象的透明代理,即使不做拦截也无法保证和源对象行为一致,因为this会指向proxy代理.
let obj = {
	name: 'ly',
	log() {
		console.log(this === p);
	}
}
let p = new Proxy(obj, {});
obj.log();
p.log();

// 如果使用map存数据时键是this,那么代理之后由于this变化会取不到数据
let wm = new WeakMap();
class Test {
	constructor(par) {
		wm.set(this, par);
	}
	get t() {
		return wm.get(this);
	}
}
let test = new Test('123');
console.log(test.t);
let p2 = new Proxy(test, {});
console.log(p2.t);

let p3 = new Proxy(test, {
	get(tar, key) {
		if (key === 't') {
			return tar[key];
		}
	}
})
console.log(p3.t);

//以及对Date的代理,在代理上使用getDate()方法会报错
//将this绑定到原始对象可以解决这个问题
let d = new Date();
let pd = new Proxy(d, {});
//pd.getDate();
let pd2 = new Proxy(d, {
	get(tar, key) {
		if (key === 'getDate') {
			return tar.getDate.bind(tar);
		}
	}
})
console.log(pd2.getDate());