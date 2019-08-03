// 使用generator封装异步操作
const fetch = require('node-fetch');
let gen = function* () {
	let res = yield fetch('http://localhsot:8080');
	console.log(`RES: ${res}`);
}
let g = gen();
g.next().value.then(function (data) {
	console.log('DONE');
	console.log(data);
	return data.json();
}).then(function (json) {
	g.next(json);
})

// 异步操作写在generator函数中像同步一样.then只需处理next
// generator函数让异步写法变得简洁,但是流程控制并没有简洁.