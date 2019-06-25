// es6允许使用 箭头 => 定义函数
let a = b => b + 1;
// 这里相当于 let a = function(b) {return b + 1}
console.log(a(2));

// 圆括号内写参数,可以是多个,也可以没有
let b = () => 1;
console.log(b());
let c = (a, b) => a + b;
console.log(c(1, 2));

// 如果代码块不是单语句,需要使用{}括起来,使用return返回
let d = (a) => {
	let b = a++;
	return b + ' / ' + a;
}
console.log(d(2));

// 箭头函数也可以使用解构赋参数
let e = ({x, y = 1}) => {
	console.log('x : ' + x);
	console.log('y : ' + y);
}
e({x: 1, y: 2});
e({x: 2});

// 注意单语句返回对象时,对象需要使用()包裹
let f = () => {a: 1}
console.log(f());
let g = () => ({a: 1})
console.log(g());

// 使用rest参数
let h = (p1, ...p2) => {
	console.log(p1);
	console.log(p2);
}
h(1, 2, 3);