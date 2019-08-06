// 正常情况下,async函数需要等所有await的promise对象执行完毕才会改变整体状态;除非抛出异常或者return
let asyncF = async function () {
	await new Promise(function (resolve, reject) {
		setTimeout(resolve, 2000);
	})
	console.log('done1');
	// return会结束async并把返回值作为then的参数
//	return 'ALL';
	// throw异常会结束async并把异常作为catch参数
//	throw new Error('ly');
	await new Promise(function (resolve, reject) {
//		setTimeout(resolve, 2000);
		setTimeout(function () {
			// 其中一个promise变为reject会结束async
			reject('czy');
		}, 2000);
	})
	console.log('done2');
	await new Promise(function (resolve, reject) {
		setTimeout(resolve, 2000);
	})
	console.log('done3');
	// 全部执行完会结束async,没有return默认undefined为then参数
}
asyncF().then(function (data) {
	console.log(`All done: ${data}`);
}).catch(function (err) {
	console.log(`Error: ${err}`);
})