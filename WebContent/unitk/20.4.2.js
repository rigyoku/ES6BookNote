// 子类实例的__proto__属性的__proto__属性指向父类的__proto__属性,也就是子类原型的原型是父类的原型
class P {

}
class C extends P {

}
console.log(C.prototype);
console.log(P.prototype);
console.log(Object.getPrototypeOf(C));
console.log(Object.getPrototypeOf(P));
console.log(Object.getPrototypeOf(Object.getPrototypeOf(C)) === Object.getPrototypeOf(P))
// 这样就可以通过子类过去父类以及父类的原型并进行修改
Object.getPrototypeOf(Object.getPrototypeOf(C)).log = function (str) {
	console.log(str);
}
let f = function () {

}
// 通过对对象C的原型的原型也就是Function进行了扩展,其他方法可以使用log方法
f.log('123');