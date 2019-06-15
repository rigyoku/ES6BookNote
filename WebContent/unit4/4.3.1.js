// es5字符串的fromCharCode方法用于把16进制的unicode码转成字符
console.log(String.fromCharCode(0x0061));
// 但是无法识别双字节
console.log(String.fromCharCode(0x20BBB));
// es6字符串提供了fromCodePoint方法,可以识别双字节
console.log(String.fromCodePoint(0x20BBB));
// 接收多个参数时,会依次解析并进行拼接
console.log(String.fromCodePoint(0x20BBB,0x0061));
// fromCodePoint定义在String对象上,使用String.formCodePoint调用,而codePointAt定义在字符串实体,使用str.codePointAt(index)调用.