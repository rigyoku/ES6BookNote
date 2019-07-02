// es5使用 Object.getOwnPropertyDescriptor 获取自身某个属性的描述
let obj = {
		a: 1,
		get x () {
			console.log('test');
			return 'test';
		}
	};
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
console.log(Object.getOwnPropertyDescriptor(obj, 'x'));
// es2017引入 Object.getOwnProtertyDescriptors 方法来获取自身所以属性的描述
console.log(Object.getOwnPropertyDescriptors(obj));

// 引入这个方法主要解决Object.assign复制属性时无法复制get和set方法
console.log(obj);
console.log(Object.assign({}, obj));
// 进行复制时只会复制值,而不会复制值的set/get方法,所以这里复制不到get方法,只能复制到x的值test
console.log(Object.getOwnPropertyDescriptor(Object.assign({}, obj), 'x'));
// 而 Object.getOwnPropertyDescriptors 可以配合 Object.defineProperties 实现正确复制
let obj2 = {};
Object.defineProperties(obj2, Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptor(obj, 'x'));

// 还可以配合Object.create来(浅)复制对象
let obj3 = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
console.log(obj3);