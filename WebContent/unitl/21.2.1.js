// 修饰器不仅可以修饰类,还可以修饰类的属性
class P {
	@test
	@log
	log() {

	}
}
//console.log(Object.getOwnPropertyDescriptor(P.prototype, 'log'));
// 方法修饰器的3个参数,分别是 目标对象[P.prototype],修饰的属性名[log],该属性的描述[Object.getOwnPropertyDescriptor(P.prototype, 'log')]
let test = function (target, name, descriptor) {
	//...
	return descriptor;
}
// 方法的修饰符相当于 Object.defineProperty(P.prototype, 'log', descriptor); 即修改属性的描述
// 对P.log执行log方法,先记录原属性值,然后 修改属性值,在调用原属性之前先打印方法和参数信息.
let log = function (target, name, descriptor) {
	let val = descriptor.value;
	descriptor.value = function () {
		console.log(`Calling ${target}.${name} [${arguments}] Function`);
		return val.apply(null, arguments);
	}

	return descriptor;
}

// 修饰器也可以起到注释作业,看到修饰器见名知意
// 如果一个方法有多个修饰器,方法会从外到内进入修饰器,然后由内向外执行.
let f = function (i) {
	console.log(`outer ${i}`);
	return function () {
		console.log(`inner ${i}`);
	}
}
let P2 {
	@f(1);
	@f(2);
	log() {

	}
}
// 会依次打印  outer1 / outer2 / inner2 / inner1