// co模块可以处理并发的异步操作,将并发的异步操作放在数组或对象中,跟在yield语句后
const fs = require('fs');
const thunkify = require('thunkify');
const co = require('co');
let gen1 = function* () {
	let d = yield [
		thunkify(fs.readFile)('17.1.1.js', 'utf-8'),
		thunkify(fs.readFile)('17.1.1.js', 'utf-8')
	]
	console.log(d);
	console.log('DONE');
}
//co(gen1);
let gen2 = function* () {
	let d = yield {
		1: thunkify(fs.readFile)('17.1.1.js', 'utf-8'),
		2: thunkify(fs.readFile)('17.1.1.js', 'utf-8')
	}
	console.log(d);
	console.log('DONE');
}
//co(gen2);
// 对象也是写作数组形式,即key是数字

let asyncF = function* (path) {
	return yield thunkify(fs.readFile)(path, 'utf-8');
}
let gen3 = function* () {
	let arr = ['17.1.1.js', '17.1.1.js', '17.1.1.js'];
	let d = yield arr.map(asyncF);
	console.log(d);
}
co(gen3);