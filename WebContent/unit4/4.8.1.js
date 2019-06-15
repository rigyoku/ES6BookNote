let str = 'ab';
// 字符串的repeat方法,用于重复字符串并返回,不影响原值
console.log(str.repeat(2));
// 重复一次和原字符串相等
console.log(str === str.repeat(1));
// 参数为小数时,进行截取整数位
console.log(str.repeat(2.1));
// 负数和Infinity[无穷]作为参数会报错
//console.log(str.repeat(-1));
//console.log(str.repeat(Infinity));
// -1 ~ 0 区间的小数使用时,会先截取整数位 -0,当做0处理,循环0次返回空字符串
console.log(str.repeat(-0.5));
console.log(str.repeat(-0.5) === '');
// NaN也当做0处理
console.log(str.repeat(NaN));
// 参数不是数字时会先转型成数字再做重复
console.log(str.repeat('3'));
console.log(str.repeat('test'));