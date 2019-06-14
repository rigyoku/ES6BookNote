// jiu 3声. 在Unicode使用2个字符表示,unicode为 \u{20BBB} 或者 \uD842\uDFBB
let a = '𠮻';
// 因为使用2字符Unicode,所以长度为2,且charAt无法读取整个字符,charCodeAt方法得到的是2个字节的值
// 在js中,字符使用utf-16存储,每个字符使用2个字节,a变量的值就需要4个字节. es6提供了能正确识别到全部字符的codePointAt方法
console.log(a.length);
console.log(a.charAt(0));
console.log(a.charAt(1));
console.log(a.charCodeAt(0));
console.log(a.charCodeAt(1));

let b = '𠮻a';
// 这里codePointAt正确识别了𠮻,获得了 20BBB 的十进制 134075
console.log(b.codePointAt(0));
// 获得16进制的20BBB
console.log(b.codePointAt(0).toString(16));
// 这里获得了𠮻的第二个字符 DFBB 的十进制 57275
console.log(b.codePointAt(1));
// 获得了a的十进制 97
console.log(b.codePointAt(2));

// 虽然codePointAt识别了完整字符,但是第二位取得的仍是第二个字符的Unicode而不是a的,可以使用for...of循环正确读取
for (let str of b) {
	// 每次读取的str对应一个完整字符
	console.log(str.codePointAt(0));
	console.log(str.codePointAt(0).toString(16));
	// 可以用于判断是2个还是4个字节组成
	console.log(str.codePointAt(0) > 0xFFFF);
}