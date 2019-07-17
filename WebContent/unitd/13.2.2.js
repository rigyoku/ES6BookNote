// has方法对应 key in obj 的in运算符
let obj1 = {
		name: 'ly'
	};
console.log(Reflect.has(obj1, 'name'));
// 和 in 运算等价
console.log('name' in obj1);
// 第一个参数不是对象会报错
//Reflect.has(1, 'name');

// deleteProperty方法对应delete命令,删除属性,删除成功或属性不存在会返回true,删除失败返回false
console.log(obj1);
console.log(Reflect.deleteProperty(obj1, 'name'));
console.log(Reflect.deleteProperty(obj1, 'val'));
console.log(obj1);

// construct方法对应new命令,参数分别是目标类型和参数数组
let Test = function(name) {
	this.name = name;
	this.age = 24;
}
console.log(new Test('ly'));
console.log(Reflect.construct(Test, ['LY']));

// getPrototypeOf方法用于获取对象原型__proto__,对应Object.getPrototypeOf
let test = new Test('123');
Object.setPrototypeOf(test, {sex: 'man'});
console.log(Reflect.getPrototypeOf(test));
// 注意Reflect.getPrototypeOf参数不是对象会报错,而Object.getPrototypeOf参数不是对象会先转型
//console.log(Reflect.getPrototypeOf(1));
console.log(Object.getPrototypeOf(1));

// setPrototypeOf对应Object.setPrototypeOf,用来修改原型
Reflect.setPrototypeOf(test, {love: 'xxx'});
// 第一个参数不是对象会报错,但是Object.setPrototypeOf只有在第一个参数是null/undefined时报错,其他时候返回第一个参数本身
//Reflect.setPrototypeOf(1, {love: 'xxx'});
console.log(Object.getPrototypeOf(test));