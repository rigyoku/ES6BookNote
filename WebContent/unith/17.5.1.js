// co模块是程序员TJ在2013年6月发布的小工具,用于generator函数的自动执行.
// 安装co模块
// npm install co
let fs = require('fs');
let co = require('co');
let thunkify = require('thunkify');
let gen = function* () {
	let r1 = yield thunkify(fs.readFile)('TEXT.txt', 'utf-8');
	let r2 = yield thunkify(fs.readFile)('TEXT.txt', 'utf-8');
	console.log(`R1: ${r1}`);
	console.log(`R2: ${r2}`);
}
//co(gen);
// co方法返回一个promise对象,可以用then在最后执行完毕时触发回调
co(gen).then(function () {
	console.log('DONE');
})

// 自动执行generator函数,需要在异步执行完毕时移交回执行权.2种实现方案
// 1. 回调函数: 把异步操作包装成thunk函数,在回调函数中移交回执行权.
// 2. Promise对象: 把异步操作包装成promise对象,在then回调移交执行权.
// co模块是将上述2种执行器包装成一个模块. 使用条件是: yield命令后面的表达式返回的只能是thunk函数或者promise对象.
// 因为generator函数是类数组结构,所以promsie对象的数组也可以使用co执行