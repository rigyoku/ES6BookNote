// 函数的参数也可以解构
let f = function([x, y],{z}) {
	console.log(x);
	console.log(y);
	console.log(z);
};
// 在调用时传入参数,在方法内接收到的就是解构后得到的
f([1, 2], {z: 3});

// js数组的map方法,就是对数组的每个元素执行map的方法
[1, 2].map(function(x) {
	console.log(x);
});

// map方法也可以解构
[{a: 3}, {a: 4}].map(function({a}) {
	console.log(a);
});
[[1, 3], [2, 4]].map(function([x, y]) {
	console.log(x + y);
});