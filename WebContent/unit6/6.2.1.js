// es6在Number对象上新增了.isFinite()和.isNaN()2个方法
console.log(Number.isFinite(1));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite('2'));
// 和全局的isFinite方法区别在于,全局方法要先调用Number将非数值转成数值在判断,而Number的方法只对数值有效
console.log(isFinite(1));
console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite('2'));
// 使用全局方法实现为先判断类型为Number在调用isFinite()方法

console.log();
// isNaN和isFinite类似
console.log(Number.isNaN(1));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN('NaN'));
// 和全局的isNaN方法区别在于,全局方法要先调用Number将非数值转成数值在判断,而Number的方法只对数值有效
console.log(isNaN(1));
console.log(isNaN(NaN));
console.log(isNaN(Infinity));
console.log(isNaN('NaN'));
// 使用全局方法实现为先判断类型为Number在调用isNaN()方法