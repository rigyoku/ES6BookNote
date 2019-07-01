// es2017将扩展运算符...引入了对象
// 使用扩展运算符结构赋值
let {a, ...b} = {a: 1, b: 2, c: 3};
console.log(a);
// 会把解构剩余键值对放入一个对象
console.log(b);
// 同样要求扩展运算符在最后一位,不然报错
//let {...c, d} = {a: 1, b: 2, c: 3};

// 使用解构赋值得到的也是浅复制的值,即复制对象得到的是引用而不是值的副本
let obj = {a: {b: 2}};
let {...e} = obj;
console.log(e.a);
obj.a.b = 3;
console.log(e.a);
// 结构赋值的浅复制同样限制了只能复制自身值,不能复制继承值,不能复制不可枚举值
Object.setPrototypeOf(obj, {c: 4});
console.log(obj.c);
let {...f} = obj;
console.log(f);

// 注意,单纯解构可以取得继承值,只有扩展运算符的解构取不到继承值

// 使用扩展运算符解构可以从参数读取指定属性,再将剩余属性交给其他方法处理