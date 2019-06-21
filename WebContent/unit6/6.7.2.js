// Math.clz32方法,返回整数转成32位二进制形式有多少前导0[js中整数以32位二进制形式表示]
console.log(Math.clz32(0));
console.log(Math.clz32(1));
console.log(Math.clz32(2));
console.log(Math.clz32(8));
// 对于非整数,均转成数字然后截成整形处理
console.log(Math.clz32('8'));
console.log(Math.clz32(8.1));
// NaN的返回值是32
console.log(Math.clz32('aa'));
// 左移运算符<< 可以直观改变clz32的值
console.log(Math.clz32(8 << 1));
// cls32是 count leading zero 32 的缩写


// Math.imul方法,返回2个数以32位带符号形式相乘结果
console.log(Math.imul(1, 2));
console.log(Math.imul(1, -2));
// 大部分时候imul的结果和直接相乘一致,但是结果超出js安全数的范围,普通乘法无法返回正确结果[低位不精确],而imul可以返回正确低位值
console.log(Math.imul(0x7FFFFFFF, 0x7FFFFFFF));
console.log(0x7FFFFFFF * 0x7FFFFFFF);

// Math.fround方法,返回一个数的单精度浮点数形式
// 参数为整数时,返回结果和本身相同;参数为无法用64个二进制精确表示的小数时,返回最接近的单精度浮点数
console.log(Math.fround(1));
console.log(Math.fround(1.2));
console.log(Math.fround(1.23));
console.log(Math.fround(NaN));