{
	console.log(typeof a);
	var a = 123;
	console.log(typeof b);
	// 从块体开始到let声明b开始,都为b变量的'暂时性死区',即使typeof也不是百分之百安全的操作
	let b = 456;
}