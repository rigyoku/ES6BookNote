// setPrototypeOf用于拦截对原型的修改Object.setPrototypeOf
let p = new Proxy({}, {
	setPrototypeOf(tar, par) {
		// 可以在试图修改原型时做出提示
		console.log('Can`t set proto');
		return tar;
	}
})
Object.setPrototypeOf(p, {name: 'ly'});