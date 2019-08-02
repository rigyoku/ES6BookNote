// 协程是一种异步编程解决方案,多线程互相协作,完成异步任务.
// 协程的运行流程: 协程A执行 -> 协程A暂停,执行权移交给协程B -> 协程B归还执行权 -> 协程A继续执行
const fs = require('fs');
let readF = function* () {
	console.log('---start---');
	let data = yield fs.readFile('17.1.1.js', 'utf-8', function (err, data) {
		if (err) {
			throw err;
		}
		rf.next(data);
	});
	console.log(`Data: ${data}`);
	console.log('---end---');
}
let rf = readF();
rf.next();

// generator函数能进行异步处理依赖于数据交互和异常抛出
let gen = function* () {
	let p1 = yield 1;
	try {
		console.log(p1);
		let p2 = yield 2;
		console.log(p2);
	} catch (e) {
		console.log(`E: ${e}`);
	}
	console.log('outer');
	yield 3;
}
let g = gen();
// 获得yield的表达式1的值,打印1
console.log(g.next('11'));
// 传入22作为上一步结果并打印上一步参数22,获得返回值2
console.log(g.next('22'));
// 向内部抛出异常,进入catch并打印异常,跳出try并执行到下一个yield语句
console.log(g.throw('eee'));