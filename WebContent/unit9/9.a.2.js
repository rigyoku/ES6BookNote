// 使用扩展运算符取出参数对象的所有可遍历属性,并复制到指定对象中
let obj = {a: 1, b: 2};
Object.setPrototypeOf(obj, {c: 3});
let a = {...obj};
console.log(a);
console.log(a.c);
// 这样复制属性等同于Object.assign
console.log(Object.assign({}, obj));
console.log(Object.assign({}, obj).c);
// 这样复制只复制到了实例属性,要想复制原型属性,可以使用下面写法
let b = {
		__proto__: Object.getPrototypeOf(obj),
		...obj
	}
console.log(b);
console.log(b.c);
// 由于__proto__属性在非浏览器环境不一定部署,推荐下面写法
let c = Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
console.log(c);
console.log(c.c);

// 因为扩展运算符取出所有(可遍历)属性,可以将2个对象属性取出并合并
let obj2 = {d: 4};
console.log({...obj, ...obj2});
// 等同于
console.log(Object.assign({}, obj, obj2));
// 合并对象时,后面的同名属性会覆盖之前的
let obj3 = {...obj, a: 5};
console.log(obj3);

// 和数组的扩展运算符类似,扩展运算符可以接表达式,对空对象使用无效,对null/undefined使用忽略
console.log({...(true ? obj : {})});
console.log({...{}});
console.log({...null});
// 扩展运算符的参数如果有get方法将被执行
let obj4 = {
		get test () {
			console.log('test');
		}
	}
console.log({...obj4});