// copyWithin(target, start = 0, end = this.length)
// copyWithin方法,在target位置开始进行覆盖,使用start[包括]到end[不包括]的值进行覆盖,并返回修改之后的原数组
console.log([1, 2, 3, 4, 5].copyWithin(2));
console.log([1, 2, 3, 4, 5].copyWithin(1, 2, 3));
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// start和end可以为负数,表示倒数[倒数从最后一位的-1位开始]
console.log([1, 2, 3, 4, 5].copyWithin(1, 2, -2));
console.log([1, 2, 3, 4, 5].copyWithin(0, -3));

let arrObj = {
		2: 'a',
		length: 5
	};
console.log(arrObj);
console.log(Array.from(arrObj));
console.log(Array.from(arrObj).copyWithin(0, 2, 3));