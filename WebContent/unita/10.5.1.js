// 使用Symbol.for来寻找描述对应的Symbol实例,找到返回,找不到创建并进行全局登记,可以复用Symbol实例
let s1 = Symbol.for('test');
let s2 = Symbol.for('test');
console.log(s1 === s2);
// Symbol.keyFor方法返回一个Symbol实例在全局声明的key,没找到返回undefined
let s3 = Symbol('test');
console.log(Symbol.keyFor(s1));
console.log(Symbol.keyFor(s3));
// 由于Symbol.for是在全局注册,所以在不同的serviceworker或者iframe中使用