// await后面参数是promise对象,如果不是,会转成一个resolve的promise对象
let asyncF = async function () {
	// 相当于Promise.resolve(123)
	let num = await 123;
	console.log(num);
}
asyncF();

let asyncF2 = async function () {
	// await接一个reject的promise对象会直接被catch
	await Promise.reject('czy');
}
asyncF2().catch(function (err) {
	console.log(err);
});

let asyncF3 = async function () {
	await Promise.reject('czy2');
	// await后一个promise变为reject会短路后面所以操作
	console.log('ly')
}
asyncF3().catch(function (err) {
	console.log(err);
});

let asyncF4 = async function () {
	// 将await放在try...catch中可以使后面操作不被短路
	try {
		await Promise.reject('czy3');
	} catch (e) {
		console.log(`inner: ${e}`);
	}
	console.log('ly3')
}
asyncF4().catch(function (err) {
	console.log(err);
});

let asyncF5 = async function () {
	// await后面的promise自带catch保证后面操作不被短路
	await Promise.reject('czy4').catch(function (e) {
		console.log(`catch: ${e}`);
	})
	console.log('ly4')
}
asyncF5().catch(function (err) {
	console.log(err);
});