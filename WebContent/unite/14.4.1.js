// Promise.prototype.catch是then方法的别名,用于指定发生错误时的回调
let p = new Promise(function(resolve, reject) {
	setTimeout(resolve, 1000);
})
p.then(function() {
	console.log('done');
	// 抛出异常
//	throw new Error('ERROR');
	// 执行拒绝函数也会进入catch回调
	return new Promise(function(resolve, reject){
		reject(new Error('test'));
	})
}).catch(function(param) {
	// 捕获异常触发回调
	console.log(`error : ${param}`);
})
// 由此可见,reject作用等同于抛出异常
// 注意,已经resolve之后再去抛出异常是无效的,因为状态已经不可能编程reject

// promise具有冒泡性质,会一直向后传递,直到被catch
new Promise(function(resolve, reject){
	reject(new Error('123'));
}).then(function() {
	console.log('ok');
}, function() {
	// 这里会被ng捕获,如果then不写第二个参数来捕获,会被后续catch捕获
	console.log('ng');
}).catch(function() {
	// 一般来说,不应该在then传入第二个参数,而应该使用catch来捕获异常
	console.log('catch');
})

new Promise(function(resolve, reject){
	// 由于这个promise没有对应的catch方法,所以内部的异常不会被外部处理
	reject(new Error('456'));
}).then(function() {
	console.log('ok2');
})

// promise没有抛出异常,会直接跳过下一个catch,跳过之后再抛出异常也不会被catch
new Promise(function(resolve, reject){
	resolve();
}).catch(function() {
	console.log('catch2');
}).then(function() {
	console.log('ok3');
	throw new error('skip error');
})

// catch方法也可以抛出异常来被下一个catch捕获