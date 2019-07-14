// construct方法会拦截new命令,注意是对[构造]方法的代理
let P = new Proxy(function() {}, {
	// construct方法接收2个参数,分别是目标对象和参数
	construct(tar, par) {
		console.log('new obj');
		console.log(`${tar} : ${par}`);
		// construct方法必须返回一个对象,不然报错
		return {name: 'ly'};
	}
})
let p = new P(2);
console.log(p);