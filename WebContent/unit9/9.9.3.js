// Object.entries返回对象可枚举的自身属性的键值对数组
let obj = {
		a: 1,
		1: 3,
		b: 2,
		2: 4
	};
// 数组元素的排列顺序和Object.values方法的顺序一致[keys方法也是这个顺序]
console.log(Object.entries(obj));
// 可用于遍历对象,或者将对象转成map结构