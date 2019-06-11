function f1() {
	let a = 1;
	let a = 2;
}

function f2() {
	var a = 1;
	var a = 2;
}

function f3() {
	let a = 1;
	var a = 2;
}

function f4() {
	var a = 1;
	let a = 2;
}

function f5(a) {
	let a = 1;
}

function f6() {
	let a = 1;
	{
		console.log(a);
	}
}

function f7() {
	let a = 1;
	{
		console.log(a);
		let a = 2;
	}
}

// let不允许重复声明 所以报错
//f1();
// var允许重复声明 不报错
//f2();
// 先使用let声明再使用var声明也会报错
//f3();
// 先使用var声明再使用let声明也会报错
//f4();
// 使用let重复声明参数 报错
//f5();
// 在子块使用父块变量不报错
//f6();
// 子块暂时性死区 所以报错
f7();