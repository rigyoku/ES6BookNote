// 修饰器只能修饰类和方法,不能修饰函数.因为函数存在函数提升
var count = 0;
var autoAdd = function () {
	count++;
}
@autoAdd
function f() {

}
// 以上代码执行完count会是0而不是1,因为方法提升了,等价于以下写法
@autoAdd
function f() {

}
var count;
var autoAdd;
count = 0;
autoAdd = function () {
	count++;
}
// 而类是不存在提升的,所以可以修饰类
// 如果一定在修饰方法,可以直接执行修饰方法并使用返回值操作