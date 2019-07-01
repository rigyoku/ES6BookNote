// Object.keys方法,返回对象自身所有可枚举属性
let obj = {
		a: 1,
		1: 3,
		b: 2,
		2: 4
	};
console.log(Object.keys(obj));
// es2017有一个提案,引入和Object.keys配套的Object.values和Object.entries供for...of循环
console.log(Object.values(obj));
console.log(Object.entries(obj));