// es5的charAt方法用于返回字符串指定索引的字符,但是2个字节的字符不能正确识别
let str = '\u{20BBB}';
console.log(str.charAt(0));
// es6有一个at提案,使用at方法正确读取2个字节的字符. 现在垫片库可以实现使用.
//console.log(str.at(0));