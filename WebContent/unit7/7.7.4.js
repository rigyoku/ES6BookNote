// 尾递归需要把内部变量改成函数参数,有2种解决案
// 其1就是在递归函数外套一层函数,这样外层函数调用只用传一个参数
// 其2就是使用函数的默认值
// 函数式编程有一个柯里化的概念,将多参数函数专为单参数函数
let transform = function (f, p1) {
	return function (p2) {
		return f.call(f, p1, p2);
	}
}
let f1 = function (x, y) {
	if (x < 2) return y;
	y *= x;
	return f1(x - 1, y);
}
// 原调用
let f2 = function (x) {
	return f1(x, 1);
}
console.log(f2(4));
// 柯里调用
console.log(transform(f1, 4)(1));
// 递归本质是循环操作.纯粹的函数式编程没有循环操作命令,都是使用递归实现的