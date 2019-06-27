// Array.from: 将类似数组对象 或 可遍历对象 转成数组
let obj = {
		0: 'a',
		1: 'b',
		2: 'c',
		length: 3
	};
// es5写法
console.log([].slice.call(obj));
// es6写法
console.log(Array.from(obj));
// 常用于把操作dom元素返回的NodeList转成数组,或把参数arguments转成数组
// 和扩展运算符类型,只要有Iterator接口都能转成数组.
// 扩展运算符本质调用Symbol.iterator遍历器接口,而Array.from除了支持遍历器接口,只要有length属性的对象,都可以转成数组.
// 对于不支持Array.from的浏览器,可以使用Array.prototype.slice实现

// Array.from除了第一个参数接收对象,还可以接收第二个参数作为处理元素的方法,相当于数组的map
let str = '123456';
console.log(Array.from(str, x => x + 1));
// Array.from还可以使用第三个参数绑定this
// 通过制定length控制map循环次数
Array.from({length: 3}, () => {this.log}, {log: console.log('test')});
// 原本就是数组的话,Array.from返回一个和原数组一样的数组