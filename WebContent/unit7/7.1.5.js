// 函数参数使用默认值时,参数会形成一个单独的作用域
let a = 1;
let f1 = function (a, b = a) {
	console.log(b);
}
// 相当于先声明局部变量a,在声明变量b,b的默认值是局部a的值
f1(2);

let f2 = function (b = a) {
	console.log(b);
}
// 参数局部作用域a没有意义,指向全局a变量
f2();

let f3 = function (b = b) {
	console.log(b);
}
// 参数局部作用域内,相当于 let b = b; 在使用b赋值时,b还没有被声明,暂时性死区,报错.
//f3();

let f4 = function (a, b = function () {a = 2}) {
	b();
	console.log(a);
}
// 参数局部作用域内,相当于先声明局部a变量,在声明局部b变量,b的值是一个方法,在b内修改了局部a的值,最后输出局部a
f4(3);

let f5 = function (a, b = function () {a = 2}) {
	// 注意只能是var重新声明,使用let会报错
	var a = 0;
	b();
	console.log(a);
}
// 参数局部作用域内,相当于先声明局部a变量,在声明局部b变量,b的值是一个方法,在b内修改了局部a的值,方法内重新声明局部a,最后输出局部a
f5(3);