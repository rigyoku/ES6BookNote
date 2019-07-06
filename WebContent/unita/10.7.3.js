// 对象的Symbol.iterator属性指向对象的默认遍历器方法
let obj = {};
obj[Symbol.iterator] = function *() {
	yield 1;
	yield 2;
	yield 3;
}
console.log(...obj);

// 对象的Symbol.toPrimitive,在对象被转换成原始值类型调用,并返回该方法返回值
let obj2 = {};
obj2[Symbol.toPrimitive] = function() {
	return '123';
}
console.log(Number(obj2));

// 对象的Symbol.toStringTag属性,在调用Object.prototype.toString时,类型使用该属性
let obj3 = {};
obj3[Symbol.toStringTag] = 'abc';
console.log(obj3.toString());
// es6新增了toStringTag: JSON / Math / Module / ArrayBuffer / DataView / Map / Promise
// Set / Uint8Array / WeakMap / WeakSet / Map Interator / Set Itorator / String Itoretor / Symbol / Generator / GeneratorFunction

// 对象的Symbol.unscopables属性指向一个对象,指定了使用with关键字时,哪些属性不会触发with
class Test {
	get [Symbol.unscopables]() {
		return {log: true}
	}
	log() {
		console.log('test');
	}
}
class Test2 {
	log() {
		console.log('test2');
	}
}
let log = function() {
	console.log('outer');
}
with(Test.prototype) {
	log();
}
with(Test2.prototype) {
	log();
}