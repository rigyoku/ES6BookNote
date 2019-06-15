// 传统的js只有 indexOf 方法来判断字符串是否包含某字符,es6新增了 includes,startsWith,endsWith 方法
let str = 'Hello World By Liy';
console.log(str.indexOf('e'));
console.log(str.includes('e'));
console.log(str.startsWith('Hel'));
console.log(str.startsWith('Hello W'));
console.log(str.endsWith('y'));
console.log(str.endsWith(' Liy'));

// 这3个新增方法都可以接收参数,表示开始检索位置
// includes 和 startsWith的参数表示从第 x 位开始检索,从0开始计数
console.log(str.includes('e'));
console.log(str.startsWith('el', 1));
console.log(str.startsWith('lo W', 3));
// endsWith表示前 x 位,从1开始计数
console.log(str.endsWith('e', 2));
console.log(str.endsWith('or', 9));