// es6规定,promise对象是一个构造函数,用来生成promise实例
let p = new Promise(function(resolve, reject) {
	// 这里的resolve和reject参数由js引擎提供
	let status = true;
	let val = 'ly';
	console.log('create promise');
	//...
	if (status) {
		// resolve用来将状态置为完成,并返回数据
		resolve(val);
	} else {
		// reject用来将状态置为失败,并返回数据
		reject(val);
	}
})
// 使用then作为监听,参数分别是成功回调和失败回调
p.then(function(val) {
	console.log(`success : ${val}`);
}, function(val) {
	console.log(`fail : ${val}`);
})
// 注意创建promise对象后是立即执行的,而回调是在同步操作都执行完后再执行的
console.log('sync done');

// 如果一个promise返回了另一个promise,那么第一个自身状态将会无效,设置在第一个的监听将自动监听第二个promise对象
let p1 = new Promise(function(resolve, reject) {
	setTimeout(reject, 2000);
})
let p2 = new Promise(function(resolve, reject) {
	resolve(p1);
})
// p2虽然立即改变成了成功状态,但是返回的是p1的promise,所以2秒后还是会打印failed而不是直接打印done
p2.then(function() {
	console.log('done');
}, function() {
	console.log('failed');
})
// 在promise方法内执行resolve或者reject不会结束方法,而是继续向下执行[而且下方多少同步任务,会先于回调执行]
// 如果想执行resolve就退出,可以return resolve()