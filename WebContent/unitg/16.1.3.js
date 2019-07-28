// 因为generator函数就是遍历器生成器,所以可以复制给对象的Symbol.iterator属性让对象可遍历
let obj = {
	[Symbol.iterator]: function* () {
		yield 'ly';
		yield '25';
		yield 'alone';
	}
}
console.log([...obj]);

let gen = function* () {
	yield 'ly';
}
let g = gen();
// generator函数执行完是一个遍历器对象,该对象本身也有Symbol.iterator属性,执行返回其本身
console.log(g[Symbol.iterator]() === g);