// apply方法等同于Function.prototype.apply.call(方法, this指向, 参数)
// 一般来说,可以通过f.apply绑定方法的this指向,但是如果函数定义了自己的apply方法就只能通过Function.prototype.apply.call实现,Reflect.apply简化了这种操作
let obj = {
		name: 'ly'
	};
let log = function() {
	console.log(this.name);
}
Reflect.apply(log, obj, []);

// defineProperty方法基本等同于Object.defineProperty,后者会被废弃
Reflect.defineProperty(obj, 'age', {
	value: 24
})
console.log(obj.age);
// 第一个参数不是对象会报错
//Reflect.defineProperty(1, 'age', {value: 24});

// getOwnPropertyDescriptor等同于Object.getOwnPropertyDescriptor,后者会被废弃
console.log(Reflect.getOwnPropertyDescriptor(obj, 'age'));
// 第一个参数不是对象会报错,而obj的该方法不会报错而是返回undefined
//Reflect.getOwnPropertyDescriptor(1, 'age');

// isExtensible方法对应Object.isExtensible,用来判断对象是不是可扩展的,同样需要参数是对象,不然报错
console.log(Reflect.isExtensible(obj));
// preventExtensions对应Object.preventExtensions,用来禁止对象扩展,参数需要是对象
Reflect.preventExtensions(obj);
//Reflect.preventExtensions(1);
console.log(Reflect.isExtensible(obj));
//console.log(Reflect.isExtensible(1));

// ownKeys方法用来获取所有属性,基本等同于getOwnPropertyNames和getOwnPropertySymbols的和
let obj2 = {
		name: 'ly',
		[Symbol()] : 's'
	}
console.log(Reflect.ownKeys(obj2));
console.log(Object.getOwnPropertyNames(obj2));
console.log(Object.getOwnPropertySymbols(obj2));