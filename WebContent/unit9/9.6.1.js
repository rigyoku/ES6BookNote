// 对象的每一个属性都具有一个描述对象[Descriptor],用来控制行为
let obj = {
		name: 'ly'
	};
// Object.getOwnPropertyDescriptor来获取属性的描述对象
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
// 描述对象 {value: 'ly', writable: true, enumerable: true, configurable: true}
// 其中enumerable属性为可枚举性.如果值是false,那么某些操作会忽略当前属性[for...in循环/ Object.keys()/ JSON.stringify()/ Object.assign()]
// 例如: 遍历对象属性时,不会取得其toString方法
// 这4种忽略不可枚举属性的方法,只有for...in会返回继承属性[引入继承属性会使问题复杂化,最好使用keys遍历]
// es6规定,所有class原型的方法都是不可枚举的