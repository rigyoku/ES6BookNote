const fs = require('fs');
let read = function (path) {
	return new Promise(function (resolve, reject) {
		fs.readFile(path, 'utf-8', function (err, data) {
			if (err) {
				reject(err);
			}
			resolve(data);
		})
	})
}
// 使用promise并发读取一组文件,按顺序打印
let pathArr = ['_directory', '_directory'];
//let newArr = pathArr.map((path) => {return read(path).then((d) => console.log(d))})
//newArr.reduce((p1, p2) => {
//	return p1.then(() => p2)
//})

// 使用async实现继发读取
let af = async function () {
	for (let a of pathArr) {
		let d = await read(a);
		console.log(`D: ${d}`);
	}
}
//af();

// 使用async实现并发读取,顺序打印
let af2 = async function () {
	let newArr = pathArr.map(async (p) => {return await read(p)});
	for (let na of newArr) {
		console.log(`Data: ${await na}`);
	}
}
af2();