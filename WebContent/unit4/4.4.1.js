// es6为字符串提供了遍历器接口,可以使用for...of遍历.
// for...of相对于传统的for循环,会将2个字节的字符正确识别
let str = '\u{20BBB}';
console.log(str);
for (let char of str) {
	console.log('char1 : ' + char);
}
for (let i = 0; i < str.length; i++) {
	// 由于传统for循环使用索引判断,而这种2个字节的字符长度取得为2,所以不能正确识别
	console.log('char2 : ' + str[i]);
}