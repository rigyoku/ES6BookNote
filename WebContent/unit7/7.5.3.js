// 箭头函数可以嵌套
let a = {
	a: function() {
		return function(b) {
			return b + 1;
		};
	}
}
console.log(a.a()(2));
let b = {
	b: () => (c) => {return c + 1}
}
console.log(b.b()(1));

// 管道机制: 前一个函数输出为后一个函数输入
let c = (x) => {return x + 1};
let d = (y) => {return y * y}
console.log(d(c(2)));

// 箭头函数的另一个功能是改写λ演算