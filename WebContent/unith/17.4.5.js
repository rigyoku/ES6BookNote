// 使用Thunk自动执行generator函数.
const fs = require('fs');
const thunkify = require('thunkify');
let run = function (f) {
	let g = f();
	// 使用thunkify将generator函数返回值转成接收回调的方法,调用next进行异步操作,回调时没执行完则继续把调用next的方法作为回调传入
	let next = function (err, data) {
		if (err) throw err;
		let res = g.next(data);
		if (res.done) return;
		res.value(next);
	}
	next();
}
let f = function* () {
	let res = yield thunkify(fs.readFile)('TEXT.txt', 'utf-8');
	console.log(`Res: ${res}`);
	let res2 = yield thunkify(fs.readFile)('TEXT.txt', 'utf-8');
	console.log(`Res2: ${res2}`);
}
// 这样调用run方法会自动连续执行所有thunkify的异步操作
run(f);