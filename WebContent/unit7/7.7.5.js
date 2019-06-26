// 尾调用优化只有在严格模式下开启,因为非严格模式下函数有2个变量可以跟踪调用帧
let f1 = function () {
	// 返回调用函数的函数
	console.log(f1.caller);
	// 返回函数的参数
	console.log(f1.arguments);
}
f1(1);
// 严格模式禁用了这2个变量,所以可以使用尾调用优化