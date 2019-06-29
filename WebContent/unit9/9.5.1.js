// Object.assign(target, source1, ...) 用于把所有source的可枚举属性复制到目标
let tar = {};
let s1 = {a: 1};
// 多source存在同名属性,后者覆盖前者
let s2 = {a: 2, b: 2};
Object.assign(tar, s1, s2);
console.log(tar);

// 只有一个参数时直接返回
console.log(Object.assign(s1));

// 目标参数不是对象会先转成对象,不能转换会报错
console.log(Object.assign(1));
console.log(Object.assign('2'));
console.log(Object.assign(true));
//console.log(Object.assign(null));

// source参数的值不是对象时,也是先转成对象,不能转的会跳过
console.log(Object.assign(s1, null, undefined));
// 数值,字符串和布尔类型也不报错,但是只有字符串[转成数组]会复制到目标对象
console.log(Object.assign(s1, 1, '2', true));
// 因为只有字符串的包装对象产生了可枚举属性,原始值在对象的内部属性[[PrimitiveValue]]上

// 在复制属性时,只能复制自身属性[继承属性无效], 不可枚举属性无效[enumerable: false]
let p = function () {};
p.prototype.a = '1';
let c = function() {};
c.prototype = new p();
console.log(new c().a);
console.log(Object.assign(s1, new c()));

let s3 = Object.defineProperty({}, 'name', {
	value: 'ly',
	enumerable: false
})
console.log(s3.name);
console.log(Object.assign(tar, s3));