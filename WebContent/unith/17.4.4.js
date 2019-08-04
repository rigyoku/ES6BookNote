// 在es6有generator函数之前,Thunk函数没什么用,现在用于generator函数进行自动流程控制
const fs = require('fs');
const thunkify = require('thunkify');
let gen = function* () {
	console.log('start');
	// 异步操作放入yield语句,并使用thunkify模块转,获得参数是回调函数的方法
	let r1 = yield thunkify(fs.readFile)('TEXT.txt', 'utf-8');
	console.log(`r1: ${r1}`);
}
let g = gen();
// 传入回调函数,并在回调中调用next将数据返回generator函数
g.next().value(function (err, data) {
	if (err) {
		throw err;
	}
	g.next(data);
})