// 除了自定义的Symbol值,es6还提供了11个内置的Symbol值

// 对象的Symbol.hasInstance属性指向一个内部方法,对象使用instanceof时会调用该方法
let obj = {};
console.log(obj instanceof Object);
// 相当于调用
console.log(Object[Symbol.hasInstance](obj));
// 可以自定义一个类,然后控制instanceof返回值
class Test {
	static [Symbol.hasInstance](param) {
		return Number(param) % 3 === 0;
	}
}
console.log(2 instanceof Test);
console.log(3 instanceof Test);

// 对象Symbol.isConcatSpreadable等于一个布尔值,表示该对象用Array.prototype.concat()时是否可以展开
let arr1 = [1, 2];
console.log(arr1[Symbol.isConcatSpreadable]);
// 进行concat操作时,数组每个元素都插入新数组
console.log([0].concat(arr1));
let arr2 = [1, 2];
arr2[Symbol.isConcatSpreadable] = false;
// 进行concat时,数组作为整体插入新数组
console.log([0].concat(arr2));
// 数组默认可展开[isConcatSpreadable是true或者undefined可展开],对象默认不可展开
// 对于一个类而言,Symbol.isConcatSpreadable必须写成实例的属性,即写在构造方法中

// Symbol.species方法,指向当前对象的构造函数.使用该方法返回值作为构造函数创建对象. 这里的Symbol.species替换了map方法返回的构造方法,将类型从Test2改成了Array
class Test2 extends Array{
	static get [Symbol.species]() {
		console.log('s');
		return Array;
	}
}
let obj2 = new Test2(1, 2, 3);
console.log('--');
let arr3 = obj2.map(x => x * x);
console.log(arr3 instanceof Test2);
console.log(arr3 instanceof Array);