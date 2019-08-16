// 大多数的浏览器的es5实现中,每个对象都有__proto__属性,指向对象构造函数的prototype属性.
// class作为构造函数的语法糖,同时拥有prototype属性和__proto__属性,因此同时存在2条继承链
// 子类__proto__属性表示构造函数的继承,总是指向父类.
// 子类prototype属性的__proto__属性表示方法的继承,总是指向父类的prototype属性.
class P {

}
class C extends P {

}
console.log(C.__proto__ === P);
console.log(C.prototype.__proto__ === P.prototype);
// 上边的结果是因为继承是按照如下操作实现的
Object.setPrototypeOf(C.prototype, P.prototype);
Object.setPrototypeOf(C, P);
// 这2条继承链可以理解为:
// 作为一个对象,子类[C]的原型[__proto__]是父类[P]
// 作为一个构造函数,子类[C]的原型[prototype]是父类的实例
console.log(P);
console.log(P.prototype);