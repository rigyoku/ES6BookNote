// 可以为解构变量赋予默认值,没有对应解构值使用默认值,有值使用解构到的值
let [a = 1, b = 2] = [,'b'];
console.log(a);
console.log(b);

// js使用严格相等为解构判断有没有对应的结构值,严格等于[===]undefined的才会使用默认值
let [c = 1, d = 2] = [undefined, null];
console.log(c);
console.log(d);

function f() {
	console.log(123);
}
let [e = f()] = [2];
// 用来做默认值的函数是惰性加载的,只有在使用到默认值时才会调用
let [g = f()] = [];

// 默认值也可以用其他解构值,但必须先声明,如 let [x = y, y = 1]会报错
let [x = 1, y = x] = [2]
console.log(x);
console.log(y);