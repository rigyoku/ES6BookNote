// Proxy 代理. 用于修改某些操作的默认行为,等同于在语言层面做出修改,属于一种'元编程',即对编程语言进行编程.
// es6提供了Proxy构造函数,接收2个参数,分别是拦截作用的目标对象,和进行拦截的操作
let target = {name: 'ly'};
// 使用Proxy代理目标对象target,相当于重写了.运算符
let p = new Proxy(target, {
	// 重载get方法,第一参数是目标对象,第二参数是属性名
	get(tarObj, pro) {
		console.log(`${Object.values(tarObj)} -> ${pro}`);
		return 123;
	},
	set(tarObj, pro, val) {
		console.log(`${tarObj} <- ${pro}`);
		Reflect.set(target, pro, val);
	}
})
// 获得重载的返回值123.[注意:使用的是Proxy实例,而不是原目标对象]
p.name = 'aaa';
console.log(p.name);
// 当代理对象不进行操作时,得到的Proxy实例和原对象方法相同
let p2 = new Proxy(target, {});
console.log(p2.name);

// 一个技巧是将proxy实例作为对象的一个属性.

// proxy实例也可以作为原型对象,这里obj没有a属性,在原型链上寻找a,被proxy拦截
let obj = Object.create(p);
console.log(obj.a);

// proxy可以拦截的操作如下
// get(tar, key, receiver) 读取属性
// set(tar, key, val, receiver) 为属性赋值
// has(tar, key) 判断key存在
// deleteProperty(tar, key) 删除对应属性
// ownKeys(tar) 获取可遍历的键
// getOwnProoertyDescriptor(tar, key) 获取对应值的描述
// defineProperty(tar, key, des) 为属性添加描述
// preventExtensions(tar)
// getPrototypeOf(tar)
// isExtensible(tar)
// setPrototypeOf(tar, pro)
// apply(tar, obj, args)
// construct(tar, args)