// Node提供Stream模式读写数据,特点是一次处理数据的一部分,便于读取大文件.
// data事件: 下一个数据库已经准备好
// end事件: 真个数据流处理完成
// err事件: 发生异常
const co = require('co');
const fs = require('fs');
const stream = fs.createReadStream('_directory');
let str = '';
let gen = function* () {
	while(true) {
		// Promise.race会获得最先执行的结果
		const res = yield Promise.race([
			new Promise(resolve => stream.once('data', resolve)),
			new Promise(resolve => stream.once('end', resolve)),
			new Promise((resolve, reject) => stream.once('err', reject))
		])
		if (!res) {
			break;
		}
		stream.removeAllListeners('data');
		stream.removeAllListeners('end');
		stream.removeAllListeners('err');
		str += res.toString();
	}
	console.log(str);
}
co(gen);