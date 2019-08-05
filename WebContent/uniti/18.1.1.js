// es2017引入了async函数,是generator函数的语法糖.
// 使用generator异步读2个文件
const fs = require('fs');
let read = function (path) {
	return new Promise(function (resolve, reject) {
		fs.readFile(path, 'utf-8', function (err, data) {
			if (err) reject();
			resolve(data);
		});
	})
}
let gen = function* () {
	let f1 = yield read('_directory');
	let f2 = yield read('_directory');
	console.log(`F1: ${f1}`);
	console.log(`F2: ${f2}`);
}
let run = function (f) {
	let g = f();
	let next = function (d) {
		let res = g.next(d);
		if (res.done) console.log('done');
		res.value.then(function (data) {
			console.log(`D: ${data}`);
			next(data);
		}).catch (function (e) {
			console.log(`E: ${e}`);
		})
	}
	next();
}
//run(gen);

// 使用async函数
let gen2 = async function () {
	let f1 = await read('_directory');
	let f2 = await read('_directory');
	console.log(`F11: ${f1}`);
	console.log(`F22: ${f2}`);
}
gen2();
// 和上边的generator函数对比,async函数将*变成了async,将yield变成了await
// 相对于generator函数的改进:
// 1. 内置执行器.不需要写run函数或者调用co模块运行,可以像正常函数一样直接运行.
// 2. 更好的语义.async和await相对于*和yield更容易理解.
// 3. 更广适用性.co模块自动执行时需要yield语句是thunk函数或者promise对象,而async的await后面可以是promise对象或者原始类型[相当于同步]
// 4. 返回promise.相对于generator函数返回iterator对象,async返回的promise对象更容易操作