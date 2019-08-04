// 自动执行promise对象
let fs = require('fs');
let read = function (url) {
	return new Promise(function (resolve, reject) {
		fs.readFile(url, 'utf-8', function (err, data) {
			if (err) {
				reject(err);
			}
			resolve(data);
		})
	})
}
let gen = function* () {
	let f1 = yield read('TEXT.txt');
	console.log(`F1: ${f1}`);
	let f2 = yield read('TEXT.txt');
//	let f2 = yield read('TEST.txt');
	console.log(`F2: ${f2}`);
}
let run = function (f) {
	let g = f();
	let doNext = function (data) {
		let n = g.next(data);
		if (n.done) {
			console.log('DONE');
			return;
		}
		n.value.then(doNext).catch(function (e) {
			console.log('-DONE-');
			console.log(`Error: ${e}`);
		})
	}
	doNext();
}
run(gen);