// es6在Math对象上新增了17个静态方法
// Math.trunc方法,截取数字的整数部分
console.log(Math.trunc(1.1));
console.log(Math.trunc(1.23));
// trunc方法在内部使用Number先将字符串转成数字
console.log(Math.trunc('1.1'));
console.log(Math.trunc(-1.1));
console.log(Math.trunc(-1.11));
// 无法转成数字并截位的返回NaN
console.log(Math.trunc('aaa'));
console.log(Math.trunc(NaN));
console.log(Math.trunc(undefined));
// null的截位结果是0,因为Number(null)是0
console.log(Math.trunc(null));

// Math.sign方法,判断一个数是正数,负数还是0
console.log(Math.sign(11));
// 正数返回1,0返回0
console.log(Math.sign(0));
console.log(Math.sign(-11));
// 负数返回-1,-0返回-0
console.log(Math.sign(-0));
// 非数字调用Number转成数字,转换失败返回NaN
console.log(Math.sign('11'));
console.log(Math.sign('aa'));

// Math.cbrt返回立方根
console.log(Math.cbrt(1));
console.log(Math.cbrt(0));
console.log(Math.cbrt(-1));
console.log(Math.cbrt(8));