// 有一些时候会默认调用iterator接口[Symbol.iterator方法]
// 对数组和set结构进行解构赋值时默认调用iterator接口
Array.prototype[Symbol.iterator] = function() {
	let index = 0;
	let self = this;
	return {
		next() {
			console.log('arr_iterator');
			return index < self.length ? {value: self[index++]} : {done: true};
		}
	}
}
let arr = new Array(1, 2, 3);
//let [a, b, c] = arr;
//console.log(`${a} ${b} ${c}`);

// 使用扩展运算符时默认调用iterator接口
//console.log([...arr]);

// yield*后面跟一个可遍历结构会调用iterator接口
let gen = function*() {
	yield 1;
	yield* [2, 3];
}
let g = gen();
//console.log(g.next());
//console.log(g.next());
//console.log(g.next());
//console.log(g.next());

// 数组的遍历会调用iterator接口,所以数组作为参数的方法都会调用遍历器接口
//for (let a of arr) {
//	console.log(a);
//}
//Array.from(arr);
Promise.all(arr);