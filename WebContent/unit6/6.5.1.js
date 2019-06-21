// es6新增了Number.EPSILON,这是一个极小的常量
console.log(Number.EPSILON);
console.log(Number.EPSILON.toFixed(20));
// 引入该常量的目的是作为浮点数运算的精确值,因为js中浮点数运算是不精确的,如果误差小于EPSILON,认为计算是'精确'的
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 - 0.3 < Number.EPSILON);