// es6之前不能为函数直接赋默认值,只能在方法内判断
let f1 = function (param) {
	param = param || 'default';
	console.log(param);
}
f1();
f1('test');
//这样判断需要考虑全面,比如空字符串的布尔值是false,虽然赋值了却使用过默认值.可以通过typeof(param) === undefined判断
f1('');

// es6可以直接赋默认值
let f2 = function (param = 'default') {
	console.log(param);
}
f2();
f2('test');
f2('');
f2(null);
f2(undefined);

// 函数参数默认声明,所以不能用let或const再次声明
let f3 = function (param = 'default') {
//	let param = 1;
//	const param = 2;
	console.log(param);
}

// 使用默认值时,不能有同名参数
let f4 = function (param, param) {
	console.log(param);
}
f4(1, 2);
//let f5 = function (param, param = 'default') {
//	console.log(param);
//}
//let f6 = function (param, param, param1 = 'default') {
//	console.log(param);
//}

// 默认参数是惰性赋值的,每次使用都会重新计算
let i = 1;
let f7 = function (param = i++) {
	console.log(param);
}
f7();
f7();