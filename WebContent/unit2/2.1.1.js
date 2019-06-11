let a = 1;
{
	var b = 2;
	let c = 3;
}
console.log(a);
console.log(b);
// let只有所在代码块内有效,在块外调用无效
console.log(c);