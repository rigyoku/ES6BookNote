// 假设一个顺序执行的异步操作,其中一个失败停止执行并把上一个返回值打印
let promiseArr = [new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve(1);
	}, 2000);
}), new Promise(function (resolve, reject) {
	setTimeout(function () {
		reject(2);
	}, 3000);
})];
let p = Promise.resolve();
let data = '';
for (let pi of promiseArr) {
	p = p.then(function (td) {
		data = td;
		return pi;
	})
}
p.catch(function (e) {
	console.log(`e1: ${data}`);
})
// 使用promise完成异步操作相对回调写法有改进,但是代码存在大量promise的API
let gen = function* () {
	yield* promiseArr;
}
let g = gen();
let data2 = '';
let p2 = Promise.resolve();
for (let d of g) {
	p2 = p2.then(function (val) {
		data2 = val;
		return d;
	})
}
p2.catch(function (e) {
	console.log(`e2: ${data2}`);
})
// 使用generator也需要配套的执行器
let af = async function () {
	let data = '';
	try {
		data = await new Promise(function (resolve, reject) {
			setTimeout(function () {
				resolve(1);
			}, 2000);
		})
		data = await new Promise(function (resolve, reject) {
			setTimeout(function () {
				reject(2);
			}, 3000);
		})
	} catch (e) {
		console.log(`e3: ${data}`);
	}
}
af();
// 使用async函数最为简洁