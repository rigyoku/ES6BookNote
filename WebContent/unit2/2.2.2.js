var a = 1;
let b = 1;
function f1() {
	// a的变量提前导致输出undefined
	console.log(a);
	// let存在块级作用域不受影响
	console.log(b);
	if (false) {
		var a = 2;
		let b = 2;
	}
}
f1();
