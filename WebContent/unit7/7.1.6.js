let errorFunc = function () {
	throw new Error('this param can`t be null');
}
// 定义一个方法来抛出错误,并复制给参数的默认值.这样在没有给定参数时会使用默认值,来抛出错误提示
let f1 = function (param = errorFunc()) {
	//...
}
f1('test');
//f1();
// 还可以把默认参数设为undefined,表示可以省略的参数