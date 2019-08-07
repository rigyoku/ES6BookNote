// 由于async函数会因为await接的promise变为reject导致短路,所以最好放在try...catch中,或者接自带catch的promise对象
let af1 = async function () {
	try {
		await Promise.reject();
	} catch (e) {
		console.log('e1');
	}
	await Promise.reject().catch(function (e) {
		console.log('e2');
	})
	console.log('done');
}
af1();
// 多个await命令如果不存在先后逻辑,最好并发实现
let af2 = async function () {
	let f1 = function () {
		return new Promise(function (resolve, reject) {
			setTimeout(resolve, 1000);
		})
	}
	let f2 = function () {
		return new Promise(function (resolve, reject) {
			setTimeout(resolve, 1000);
		})
	}
	// 继发写法
//	await f1();
//	console.log('...');
//	await f2();
//	console.log('...');
	// 并发写法
//	let p1 = f1();
//	let p2 = f2();
//	await p1;
//	console.log('...');
//	await p2;
//	console.log('...');
	// 并发写法
	await Promise.all([f1(), f2()]);
}
af2().then(function () {
	console.log('F done');
})
// 普通函数使用await会报错
let f = function () {
//	await 1;
	let arr = [1, 2];
	// 假设f是一个异步操作
	let f = function (p) {
		return Promise.resolve(p);
	}
	// 这里的await相当于并发操作,继发的写法应该是整体async然后for内部await
	// 将异步结果的promise放在数组之后Promise.all也是并发处理
	arr.map(async function (p) {
		await f(p);
	})
}
f();