// Object.values返回对象自身所有可枚举属性的值的数组
let obj = {
		a: 1,
		1: 3,
		b: 2,
		2: 4
	};
// 属性值按照属性名排序,顺序是 数字[从大到小] -> 字母[字母表顺序]
console.log(Object.values(obj));

// 参数是字符串,会转成对象再操作,也就是返回字符数组
console.log(Object.values('test'));
// 而数字和布尔型转成对象不包含可枚举属性,所有返回空数组
console.log(Object.values(1));
console.log(Object.values(true));