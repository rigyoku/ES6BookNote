// Promise.reject方法用于返回一个reject状态的promise对象,和resolve方法类似
let p = Promise.reject('123');
p.catch(function(param) {
	console.log(`p : ${param}`);
})
// 要注意的是,即使参数是thenable对象[有then方法],也会直接把reject的参数作为返回值[不执行then方法],这和resolve方法不同
let p1 = {
	then(resolve, reject) {
		console.log('p1 then');
		resolve();
	}
}
let p2 = Promise.reject(p1);
p2.then(function() {
	console.log('p2 ok');
}).catch(function() {
	console.log('p2 ng');
})

let pp = Promise.reject(new Promise(function() {}));
pp.then(function(param) {
	console.log(`pp: ${param}`);
}).catch(function(param) {
	console.log(`ppp: ${param}`);
})