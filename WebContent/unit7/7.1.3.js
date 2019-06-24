// 通常情况,默认参数放在参数结尾,可以省略.
let f1 = function (x, y = 1) {
	console.log('x :' + x);
	console.log('y :' + y);
}
f1();
f1(2);

// 如果默认参数放在前面,不能省略,需要显式写上undefined才能触发默认值
let f2 = function (x = 1, y) {
	console.log('x :' + x);
	console.log('y :' + y);
}
f2();
//f1(, 2);
f2(undefined, 2);