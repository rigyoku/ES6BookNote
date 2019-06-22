// js中数组使用64位浮点数,这决定整数的精度只有53个二进制,超过不精确,不适合金融和科学计算
// es6有一个提案,使用Integer类型表示整数,没有位数限制都能精确表示,Integer类型必须使用后缀n来区分Number
console.log(1n + 2n === 3n); //true
// 二进制,八进制和十六进制都要使用n
console.log(0b11n);
console.log(0o11n);
console.log(0x11n);
// 类型为integer
console.log(typeof(1n)); //interger
// 使用Integer构造
console.log(Integer(1)); //1n
console.log(Integer('1')); //1n
console.log(Integer(true)); //1n
console.log(Integer(false)); //0n

// Integer类似的 + - * 和 ** 运算都和Number类型一致,但是除法会舍去小数部分
console.log(8n / 5n); //1n
// 大部分Number运算符都能在Integer类型使用,不包括>>>右移位和+求正运算
// 右移需要最高位补0,但是Integer没有最高位.求正在asm.js总是返回Number或者报错
// Integer和Number一起运算会报错,包括 == 因为会默认类型转换