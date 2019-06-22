// Math的sign方法判断除0正负是可以的,但是正负0无法判断正负
// js内部使用64位浮点数表示,第一位是符号位,0表示整数,1表示
console.log(0 === -0);
// 因为正负0相等,判断困难. es6有一个提案,Math.signbit方法判断一个数的符号位是否赋值
console.log(Math.signbit(-0)); //true
console.log(Math.signbit(0)); //false
console.log(Math.signbit(NaN)); //false