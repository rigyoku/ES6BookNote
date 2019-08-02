// 异步操作,就是不连续的任务,被人为分出2段,先执行一段,然后执行别的任务,合适时机再执行第二段
// 而连续执行的任务就是同步操作
const fs = require('fs');
// 这里使用回调函数完成读取文件之后的处理,因为回调时调用的上下文已经结束,错误只能在回调处理,所以第一个参数是错误
fs.readFile('17.1.1.js', 'utf-8', function (err, data) {
	if (err) {
		throw err;
	}
	console.log(data);
})

// 回调函数本身没有问题,但是如果进行嵌套,那么一个函数修改之后其他的也需要修改[回调函数地狱].
// 使用promise实现读取文件
new Promise(function (resolve, reject) {
	fs.readFile('17.1.1.js', 'utf-8', function (err, data) {
		if (err) {
			reject(err);
		}
		resolve(data);
	})
}).then(function (data) {
	console.log(`data: ${data}`);
}).catch(function (err) {
	console.log(`ERROR: ${err}`);
})
// promise问题在于大量代码冗余