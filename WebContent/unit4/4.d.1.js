// 字符串对象的raw方法,返回的是转义后的字符串,把\变成\\.
let a = 1;
let b = 2;
let r1 = String.raw`hi \n ${a + b}`;
// 打印原模板字符串,会得到hi 换行 3
console.log(`hi \n ${a + b}`);
// 打印会得到 hi \n 3 这里的\n变成\\n 没有被解析成换行符
console.log(r1);
let r2 = String.raw `\u0057`;
// 打印会得到\u0057,斜杠被转义导致没有解析成unicode字节
console.log(r2);
// 打印模板字符串,会得到 W
console.log(`\u0057`);

// 如果已经是被转义过的\\,就不会进行处理
console.log(`test \\n hi`);
// 由于\\n已经被转义,直接输出 test \\n hi
console.log(String.raw `test \\n hi`);

// String.raw方法的本质
function raw(obj, ...vals) {
	let ret = '';
	let i = 0;
	for (; i < vals.length; i++) {
		ret += obj[i].raw + vals[i];
	}
	ret += obj[i];
	return ret;
}
console.log(raw(`\u0057`));

// String.raw也可以当作普通函数,第一个参数是有raw属性的object,且raw属性的值是一个数组[这里的字符串相当于['l', 'i', 'y']]
console.log(String.raw({raw:'liy'},1,2));