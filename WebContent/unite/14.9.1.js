// 因为promise的错误在内部处理,所以只要最后一个方法抛出异常就有可能捕捉不到,可以定义一个方法,在最后执行
Promise.prototype.done = function(onResolve, onReject) {
	this.then(onResolve, onReject).catch(function(param) {
		// 这里的setTimeout将方法在下轮操作开始时执行
		setTimeout(() => {throw new Error(`DONE ERROR ${param}`)}, 0);
	})
}
let p = Promise.reject('test');
p.then(function(param) {
	console.log(`p done ${param}`);
}).catch(function(param) {
	console.log(`p fail ${param}`);
//	return Promise.reject('123');
}).done();

let p2 = Promise.reject('test');
p2.done(function(param) {
	console.log(`p2 done ${param}`);
}, function(param) {
	console.log(`p2 fail ${param}`);
	return Promise.reject('234');
});

console.log('sync');