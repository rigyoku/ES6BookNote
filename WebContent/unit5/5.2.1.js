let str = 'hi liy';
let reg = /li/g;
// 字符串的4种使用正则的方法
// 匹配到的正则数组
console.log(str.match(reg));
// 替换正则内容为第二个参数
console.log(str.replace(reg, 'Li'));
// 查找该正则匹配的字符所在位置
console.log(str.search(reg));
// 将字符串在正则字符处分割
console.log(str.split(reg));

// es6将字符串的使用正则方法在语言内部调用RegExp对象的方法,将所有正则相关操作都定义在RegExp对象上
console.log(reg[Symbol.match](str));
console.log(reg[Symbol.replace](str, 'Li'));
console.log(reg[Symbol.search](str));
console.log(reg[Symbol.split](str));

// Symbol es6的数据类型*
console.log(Symbol);