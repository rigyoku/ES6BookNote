// 尾调用: tail call .在函数结尾[也就是最后执行的语句]调用另一函数
let f = function (x) {
	//...
	return x;
}
let f1 = function (x) {
	let a = f(x);
	// 结尾是返回a,不是尾调用
	return a;
}
let f2 = function (x) {
	// 结尾是 +1 运算,不是尾调用
	return f(x) + 1;
}
let f3 = function (x) {
	f(x);
	// 结尾是 return undefined; 不是尾调用
}
// 只要是结尾[return语句]调用函数就是尾调用,不一定写在最后