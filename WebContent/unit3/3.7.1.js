// 结构赋值的用途

// 交换变量的值
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log('a : ' + a);
console.log('b : ' + b);

// 从方法返回的对象或数组里面取值
let fun = function() {
	return {
		a: 11,
		b: [22, 33]
	}
}

let {a: c, b: [d, e]} = fun();
console.log('c : ' + c);
console.log('d : ' + d);
console.log('e : ' + e);

// 用作函数参数的声明,方便和变量对应
let fun2 = function({x, y}) {
	console.log('x : ' + x);
	console.log('y : ' + y);
}
fun2({y: 1, x: 2, z: 3});

// 从json提取值
let json = {
		x: 1,
		y: 'y',
		z: [1, 2]
	};
let {x: f, y: g, z: h} = json;
console.log('f : ' + f);
console.log('g : ' + g);
console.log('h : ' + h);

// 默认参数
let fun3 = function({x = 1, y = 2} = {}, z) {
	console.log('x : ' + x);
	console.log('y : ' + y);
	console.log('z : ' + z);
}
fun3({}, 3);

// 使用for...of来遍历map
let map = new Map();
map.set('name', 'n1');
map.set('value', 'v1');
for (let [key, value] of map) {
	console.log(key + ' --- ' + value);
}

// 输入模块的指定方法
let {Log: i} = require('./3.7.1_Mode.js');
console.log(i);
i('TestLog');