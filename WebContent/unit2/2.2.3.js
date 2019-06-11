{{
	let a = 1;
	// 块级作用域可以嵌套
	console.log(a);
}}

{{
	let b = 1;
	{
		// 可以在子块重复声明父块变量
		let b = 2;
	}
}}

// 立即执行函数 LIFE 写法,用于使变量d只能自己访问
var c = function(){
	var d = 1;
}();

{
	let e = 1;
}
// let的块级作用域可以也可以保证变量只有自己访问
console.log(e);