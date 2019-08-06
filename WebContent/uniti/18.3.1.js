// async函数返回一个promise对象,return的值会成为then的参数
let asyncF = async function () {
	await new Promise(function (resolve, reject) {
		setTimeout(resolve, 2000);
	})
	return 'czy';
}
asyncF().then(function (data) {
	console.log(`Data: ${data}`);
})

// async函数中抛出的异常或者promise对象变为reject都会被catch捕捉
let asyncF2 = async function () {
	await new Promise(function (resolve, reject) {
//		setTimeout(resolve, 4000);
		setTimeout(function () {
			reject('czy2');
		}, 4000);
	})
	throw new Error('czy3');
}
asyncF2().then(function (data) {
	console.log(`Data: ${data}`);
}).catch(function (err) {
	console.log(`Error: ${err}`);
})