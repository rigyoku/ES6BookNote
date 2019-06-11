var f1 = [];
for (var i = 0; i < 5; i++) {
	f1[i] = function() {
		console.log('I : ' + i);
	}
}
// 全局可用的i,导致打印的i都指向同一个变量,随循环递增
f1[2]();
var f2 = [];
for (let j = 0; j < 5; j++) {
	f2[j] = function() {
		console.log('J : ' + j);
	}
}
// 局部可用的j,导致打印时指向单次循环产生的j变量
f2[3]();