// Promise实例具有then方法,说明then是定义在原型上的
// then返回的是一个新的promise实例,不是原来的实例,可以采用链式写法
// 多个then会根据promise状态顺序执行
// 如果then没有返回promise对象,将会直接顺序执行
let getPromise = function() {
	return new Promise(function(resolve, reject) {
		setTimeout(resolve, 1000);
	})
}
getPromise()
.then(() => {
	// 等待1s后打印d1
	console.log('d1');
	// 将新的promise返回
	return getPromise()
})
// 新的返回值又将等待1s,打印d2
.then(() => console.log('d2'))