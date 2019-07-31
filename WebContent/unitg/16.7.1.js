// 对象的generator方法使用*方法名(){}来简写
let obj = {
	*gen () {
		yield 1;
		yield 2;
	}
}
for (let g of obj.gen()) {
	console.log(g);
}