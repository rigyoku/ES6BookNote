var test = '000';
function f1() {
	if (true) {
		// 输出undefined,因为else的test变量提升到方法头部,导致函数外部变量被覆盖
		console.log(test);
	} else {
		var test = '123';
	}
}
f1();
// es5除了这种变量覆盖问题,还会有循环变量泄露成全局变量问题,参考2.1.2.js