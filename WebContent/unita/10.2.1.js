// 由于Symbol类型返回值永远不同,所以作为对象的属性时不会出现覆盖情况
// 使用Symbol实例作为属性有3种写法
let s1 = Symbol('s1');
let obj1 = {
		[s1]: 1
	};
let obj2 = {};
obj2[s1] = 1;
let obj3 = {};
Object.defineProperty(obj3, s1, {value: 1});
console.log(obj1[s1]);
console.log(obj2[s1]);
console.log(obj3[s1]);

// 使用点赋值时,其实是为该字符串属性赋值
let obj4 = {};
obj4.s1 = 1;
console.log(obj4[s1]);
console.log(obj4['s1']);

// 注意Symbol实例作为属性时只能使用方括号取值,不能使用点取值
console.log(obj3.s1);

// Symbol类型可用于定义一组常量,保证常量值互不相等,可以保证switch按设计执行
// Symbol实例作为属性时,属性仍是公开属性