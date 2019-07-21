// promise.all方法用于将多个promise实例包装成一个新的promise对象
let p1 = new Promise(function(resolve, reject) {
	setTimeout(reject, 1000);
})
let p2 = new Promise(function(resolve, reject) {
	resolve();
})
// 将p1和p2合并成p3,参数是一个promise对象数组[或具有iterator接口的其他类型].如果数组成员不是promise对象,会先用resolve转化成promise对象再处理
// 只有成员都resolve才会执行成功回调[回调参数是所有成员resolve的参数的数组],其中一个成员失败就触发失败回调[回调参数是第一个reject的参数]
let p3 = Promise.all([p1, p2]);
p3.then(function() {
	console.log('ok');
}).catch(function() {
	console.log('ng');
})

// 如果成员promise有自己的catch方法,那么该成员异常会被自己catch住,而参与合并的是该成员的catch方法返回的promise
let p4 = new Promise(function(resolve, reject) {
	resolve('P4');
})
let p5 = new Promise(function(resolve, reject) {
	reject('P5');
}).catch(function(param) {
	console.log(`P5 catch ${param}`);
})
let p6 = Promise.all([p4, p5]);
p6.then(function(param) {
	console.log(`P6 ok ${param}`);
}).catch(function() {
	console.log(`P6 catch ${param}`);
})