// Promise.race方法也是将参数数组的promise对象包装成一个promise对象,但是只要有一个成员状态改变,整体就会跟着改变
let p1 = new Promise(function(resolve, reject) {
	// 5s之后reject,作为超时处理
	setTimeout(reject, 5000);
})
let p2 = new Promise(function(resolve, reject) {
	// 假设进行的异步操作
	setTimeout(resolve, 1000);
})
let p3 = new Promise(function(resolve, reject) {
	// 假设进行的异步操作
	setTimeout(resolve, 7000);
})
let p4 = Promise.race([p1, p2]);
let p5 = Promise.race([p1, p3]);
// 这里进行超时处理,超过5s的操作会被p1短路抛出异常,而小于5s的操作会把p1短路
p4.then(function() {
	console.log('p4 ok');
}).catch(function() {
	console.log('p4 ng');
})
p5.then(function() {
	console.log('p5 ok');
}).catch(function() {
	console.log('p5 ng');
})