// 字符串和数组类似,也有默认的iterator接口.
let str = 'ly alone';
let it = str[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// 可以重写iterator接口实现自定义遍历
String.prototype[Symbol.iterator] = function() {
	let self = this;
	let index = 0;
	return {
		next() {
			console.log(`val: ${self[index]}`);
			if (index < self.length && self[index] != 'y') {
				return {value: self[index++]};
			} else {
				return {done: true};
			}
		}
	}
}
let it2 = 'ly123'[Symbol.iterator]();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());