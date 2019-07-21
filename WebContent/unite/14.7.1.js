// promise.resolve用于将参数转化成promise对象
let p = Promise.resolve('test');
// 这里相当于 new Promise(function(resolve, reject) {resolve('test'})
p.then(function(param) {
	console.log(param);
})
// 如果参数是一个promise对象,将不会进行任何操作直接返回
let pp = Promise.resolve(new Promise(function() {}));
pp.then(function(param) {
	console.log(`pp: ${param}`);
}).catch(function(param) {
	console.log(`ppp: ${param}`);
})
// 如果参数是一个具有then方法的thenable对象,会将该对象转成promise对象并立即执行then方法
let p1 = {
	then(resolve, reject) {
//		resolve('then');
		console.log('THEN');
	}
}
Promise.resolve(p1).then(function(param) {
	console.log(`p1: ${param}`);
})
// 如果参数是没有then方法的对象或者不是对象,将返回一个promise且状态为resolve
Promise.resolve(123).then(function(param) {
	console.log(`param : ${param}`);
})
// 不写参数也是返回一个promise对象且状态为resolve
Promise.resolve().then(function(param) {
	console.log(`param -- ${param}`);
})
// promise.resolve方法是在本次执行结束时执行,setTimeout是在下次开始时执行
console.log('sync');
