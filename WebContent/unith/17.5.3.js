// co模块的源码只有十几行,是自动执行器的扩展
// co函数接收generator函数作为参数,返回一个promise对象
// 参数是generator函数则执行函数获得对象,不是则将promise对象置为resolve状态
// 将next方法包装成onFulfilled函数,然后next反复调用自身
let co = function (f) {
	let self = this;
	return new Promise(function (resolve, reject) {
		if (typeof f === 'function') f = f.call(this);
		if (!f || typeof f.next !== 'function') return resolve(f);
		let next = function (res) {
			if (res.done) return resolve(res.value);
			let value = toPromise.call(self, res.value);
			if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
			return onRejected(new TypeError('ERROR'));
		}
		let onFulfilled = function (ret) {
			let res;
			try {
				res = f.next(ret);
			} catch (e) {
				return reject(e);
			}
			next(res);
		}
		onFulfilled();
	})
}
const fs = require('fs');
const thunkify = require('thunkify');
let gen = function* () {
	let data = yield thunkify(fs.readFile)('17.1.1.js', 'utf-8');
	console.log(data);
	let data2 = yield thunkify(fs.readFile)('17.1.1.js', 'utf-8');
	console.log(data2);
}
co(gen);