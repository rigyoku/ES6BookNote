'use strict'

// 应避免在块级作用域内声明函数,如有需要,应使用函数表达式而不是声明语句
var f = function() {
	console.log(0);
}

// es6的块级作用域下声明函数只有在大括号内有效  *严格模式下报错,非严格模式不报错
if (true) {
	function f() {
		console.log(1);
	}
}
f();

if (true)
	function f() {
		console.log(2);
	}
f();