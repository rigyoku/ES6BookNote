// 对象的Symbol.match方法,指向一个函数,执行str.match(obj)时,如果该属性存在,会调用该方法并返回其返回值
class Test {
	[Symbol.match]() {
		return {
			a: 1
		}
	}
}
console.log('a'.match(new Test()));

// 对象的Symbol.replace方法,在String.propotype.replace调用时,会调用该方法并返回其返回值
class Test2 {
	[Symbol.replace]() {
		return 'a';
	}
}
console.log('abcde'.replace(new Test2(), '0'));

// 对象的Symbol.search方法,当对象被String.prototype.search调用时会调用该方法并返回其返回值
class Test3 {
	[Symbol.search]() {
		return {
			b: 2
		}
	}
}
console.log('hello'.search(new Test3()));

// 对象的Symbol.split方法,当对象被String.prototype.split方法调用时,会调用该方法并返回其返回值
class Test4 {
	[Symbol.split]() {
		return {
			c: 3
		}
	}
}
console.log('hello'.split(new Test4()));