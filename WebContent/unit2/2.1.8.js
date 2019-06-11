function f1(x = y, y = 1) {
	console.log(x + y);
}

// var定义存在'变量提升'导致不会报错
var x = x;
// 因为在y定义之前的'暂时性死区'使用了y,所以报错
//let y = y;

// 同样因为在y定义前,对x使用y进行了赋值
f1();