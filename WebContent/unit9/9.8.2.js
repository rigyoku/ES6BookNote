// Object.setPrototypeOf来为对象设置prototype,返回参数对象本身,和__proto__作用相同
let source = {a: 1};
let target = {b: 2};
Object.setPrototypeOf(target, source);
console.log(target.a);
// 更改prototype, 参数对象也会改变
source.a = 3;
console.log(target.a);
// 第一个参数如果不是对象会自动转成对象,但是由于返回参数对象本身,所以是无效操作. 而第一个参数不能转成对象会报错