// 对数字的解构,相当于把数字转换成Number的对象,可以获取其方法
let {toString: a} = 1;
console.log(a);
console.log(a === Number.prototype.toString);

// 对布尔型的解构,也相当于转换成Boolean对象再解构
let {toString: b} = false;
console.log(b);
console.log(b === Boolean.prototype.toString);

// 解构本质就是在等号右边不是数组或对象时,将其转化为对象再进行模式匹配,对于无法转化对象的值会报错
//let {c} = undefined;
//let {d} = null;