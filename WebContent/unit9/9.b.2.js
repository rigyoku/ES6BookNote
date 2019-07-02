// 使用__proto__继承对象
let obj = {
		a: 1
	};
let obj2 = {
		__proto__: obj,
		b: 2
	};
console.log(obj2.a);
// 使用create继承对象
let obj3 = Object.create(obj);
console.log(obj3.a);
let obj4 = Object.assign(Object.create(obj));
console.log(obj4.a);
// 使用Object.getOwnPropertyDescriptors继承
let obj5 = Object.create(obj, Object.getOwnPropertyDescriptors({b: 2}));
console.log(obj5.a);

// Object.getOwnPropertypeDescriptors也可以实现混入模式[Mixin]
let mix = (object) => ({
			with: (...source) => source.reduce((obj, sou) => Object.create(obj, Object.getOwnPropertyDescriptors(sou)), object)
		})
let obj6 = {c: 3};
console.log(mix(obj).with(obj6).a);
console.log(mix(obj).with(obj6).c);