// 在尾调用调用函数自身叫做尾递归.递归会保存大量调用帧消耗大量内存,容易堆栈溢出,但是尾递归只有一个调用帧就没问题
let f1 = function (x) {
	if (x < 2) return x;
	return x * f1(x - 1);
}
console.log(f1(4));
// 将递归优化成尾递归,减少使用的调用帧
let f2 = function (x, y = 1) {
	if (x < 2) return y;
	y *= x;
	return f2(x - 1, y);
}
console.log(f2(4));