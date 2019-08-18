// 修饰器是一个函数,用来修改类的行为.在es2017引入
@log
class Ly {

}
let log = function (target) {
	// 向目标类添加静态属性
	target.log = 'Loneliness Makes People Grow';
}
console.log(Ly.log);
// log修饰器等同于 Ly = log(Ly) || Ly

// 修饰器的第一个参数就是要被修饰的类.如果觉得一个参数不够用,可以在包一层函数
let say = function (str) {
	return function (target) {
		// 通过prototype向目标类添加实例属性
		target.prototype.say = str;
	}
}
@say('Hello')
class Ly2 {

}
console.log(new Ly2().say);

// 可以通过修饰器调用混入方法并传入参数完成对类的混入使代码更易于理解