// js的整数范围是 -2的53次方 到 2的53次方[不含端点], 超过范围无法正确表示
console.log(Math.pow(2, 53) === Math.pow(2, 53) + 1);

// es6引入了2个常量表示整数极限安全范围
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// es6引入Number.isSafeInteger()来判断整数是否在极限范围内
console.log(Number.isSafeInteger(1));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
console.log(Number.isSafeInteger());

// 注意运算时除了判断结果是否是安全数,参与运算的每一个数也都有判断
let num = 9007199254740995;
console.log(Number.isSafeInteger(num));
console.log(Number.isSafeInteger(num - 100));
// 结果虽然安全但是是错的
console.log(num - 100);