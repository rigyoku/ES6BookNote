// finally方法用于在promise执行完回调之后执行
Promise.prototype.finally = function(cb) {
	let p = this.constructor;
	return this.then(
		(param) => {console.log('ok');p.resolve(cb())},
		(param) => {console.log('ng');p.resolve(cb())}
	)
}
Promise.resolve('123').then((param) => console.log(param)).finally(() => console.log('finally'));
Promise.reject('456').catch((param) => console.log(param)).finally(() => console.log('finally'));