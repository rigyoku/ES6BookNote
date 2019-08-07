// await后面操作抛出异常,相当于async函数返回的promise对象置为reject,会被catch捕获
let af = async function () {
	await new Promise(function (reject, resolve) {
		throw new Error('czy');
	})
}
af().catch(function (e) {
	console.log(`Error: ${e}`);
})
// 可以将多个异步操作统一try...catch
let af2 = async function () {
	try {
		await new Promise(function (resolve, reject) {
			resolve();
		})
		await new Promise(function (resolve, reject) {
			throw new Error('czy');
		})
	} catch (e) {
		console.log('catch e~');
	}
}
af2();
// 失败后多次尝试
const fs = require('fs');
let read = function (path) {
	return new Promise(function (resolve, reject) {
		fs.readFile(path, 'utf-8', function (err, data) {
			if (err) reject(err);
			resolve(data);
		})
	})
}
let tryRead = async function (path, times) {
	for (var i = 0; i < times; i++) {
		try {
			let data = await read(path);
			return data;
		} catch (e) {
			console.log(`read file error. tried ${i + 1} times`);
		}
	}
}
tryRead('test.txt', 3).then(function (data) {
	console.log(`Data: ${data}`);
}).catch(function (err) {
	console.log(`Error: ${err}`);
})