// 严格模式下可以使用尾递归优化,非严格模式需要自己执行优化
let f1 = function (x, y = 1) {
	if (x < 1) return y;
	y *= x;
	return f1(x - 1, y);
}
console.log(f1(3));
// 堆栈溢出
//console.log(f1(1000000));

// 使用 蹦床函数 来优化递归.把递归转换成循环[typeof用来判断类型,instance of 判断其原型链是否包含该构造函数prototype]
let trampoline = function (f) {
	while (f && typeof(f) === 'function') {
		f = f();
	}
	return f;
}
// 改写原方法,让其返回的是函数[call和apply更改this之后会立即执行,bind不回,只会返回原函数]
let f2 = function (x, y = 1) {
	if (x < 1) return y;
	y *= x;
	return f2.bind(f2, x - 1, y);
}
console.log(trampoline(f2(3)));
console.log(trampoline(f2(1000000)));