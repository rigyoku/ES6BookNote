// x ** y 返回x的y次方[在v8引擎中,以下2种算法实现方式不同,在结果特别大情况存在细微差异]
console.log(Math.pow(2,3));
console.log(2 ** 3);
// ** 可以配合等号使用,和+=类似
let a = 2;
console.log(a **= 3);