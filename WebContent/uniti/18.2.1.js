// async返回一个promise对象,使用then添加回调.遇到await会先返回,异步结束再继续执行.
const fs = require('fs');
let read = function (path) {
	return new Promise(function (resolve, reject) {
		fs.readFile(path, 'utf-8', function (err, data) {
			if (err) reject(err);
			resolve(data);
		})
	})
}
let af = async function () {
	// 方法里await之前的代码会先执行
	console.log('ready');
	let data = await read('_directory');
	console.log(`Data: ${data}`);
}
af().then(function () {
	console.log('done');
});
console.log('start');

// 延迟打印字符串
let asyncLog = async function (str, timeout) {
	let p = new Promise(function (resolve, reject) {
		setTimeout(resolve, timeout);
	})
	await p;
	console.log(str);
}
//asyncLog('czy', 3000);
// 由于async返回的也是promise可以继续async,可以拆成2个函数
let timer = async function (timeout) {
	await new Promise(function (resolve, reject) {
		setTimeout(resolve, timeout);
	})
}
let asyncLog2 = async function (str, timeout) {
	await timer(timeout);
	console.log(str);
}
asyncLog('czy2', 3000);

// async的多种写法
// 函数
async function f1 () {};
// 表达式
let f2 = async function () {};
// 方法
let obj = {async log () {}}
// 类的方法
class f3 {
	async log () {

	}
}
// 箭头函数
let f4 = async (x) => x + 1;