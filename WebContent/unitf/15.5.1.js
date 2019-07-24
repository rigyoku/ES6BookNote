// 使用generator函数实现遍历器生成函数
let obj = {
//	[Symbol.iterator]: function*() {
//		yield 1;
//		yield 2;
//		yield 3;
//	},
	// 或者下面写法
	*[Symbol.iterator]() {
		yield 1;
		yield 2;
		yield 3;
	}
}
// 因为yield指定的就是next的返回值的value属性,相当于使用generator函数的yield指定每一次循环的值
console.log([...obj]);