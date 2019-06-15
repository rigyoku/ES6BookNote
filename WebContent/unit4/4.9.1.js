// ES2017引入字符串补全长度功能.
// padStart(x, y) 在开始位置补全,补到x位为止,使用y进行补全
let str = 'ly';
console.log(str.padStart(4, 'ha'));
// 补全长度超过原字符串+补全字符串长度,则循环使用补全字符串
console.log(str.padStart(7, 'ha'));
// 补全长度小于原字符串长度,返回原字符串
console.log(str.padStart(1, 'ha'));
// 补全长度大于原字符串长度,小于原字符串+补全字符串长度,则从头截取补全字符串
console.log(str.padStart(3, 'ha'));
// 不传补全字符串则默认使用空字符串
console.log(str.padStart(3));

// padEnd方法,在结尾开始补全,参数同padStart
console.log(str.padEnd(4, 'ha'));
console.log(str.padEnd(7, 'ha'));
console.log(str.padEnd(1, 'ha'));
// 补全长度大于原字符串长度,小于原字符串+补全字符串长度,也是从头开始截取补全字符串
console.log(str.padEnd(3, 'ha'));
console.log(str.padEnd(3));

// 常见用途,补全0到指定位数的数字,或者提示格式
let num = '123';
console.log(num.padStart(5, '0'));
let format = '06-15';
console.log(format.padStart(10, 'yyyy-MM-dd'));