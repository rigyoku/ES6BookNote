// 当RegExp的第一个参数是字符串时,第二个参数表示正则表达式的修饰符,拼接成r3
let r1 = new RegExp('x', 'g');
// 当RegExp的第一个参数是正则时,返回该正则的拷贝,即r3.但是es5不允许添加第二个参数
let r2 = new RegExp(/x/g);
let r3 = /x/g;
let str = 'test x';
console.log(str.replace(r3, 'liy'));
console.log(str.replace(r2, 'liy'));
console.log(str.replace(r1, 'liy'));

// es6可以在第一个参数是正则情况下输入第二个参数,即修饰符.这时正则会忽略原修饰符改用新修饰符
let r4 = new RegExp(/X/g, 'i');
// [g全局匹配]
let r5 = new RegExp(/X/g);
// [i不分大小写匹配]
let r6 = new RegExp(/X/i);
console.log(str.replace(r4, 'liy'));
console.log(str.replace(r5, 'liy'));
console.log(str.replace(r6, 'liy'));