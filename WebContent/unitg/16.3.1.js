// 因为for...of循环会调用对象的Symbol.iterator方法生成的对象,而generator函数生成的对象就有该方法
let gen = function* () {
	yield 1;
	yield 2;
	// return 语句会把done属性变为true,for...of循环终止不回获得这个值
	return 3;
}
for (let g of gen()) {
	console.log(g);
}
let gen2 = function* () {
	let a = 1;
	let b = 1;
	while (true) {
		yield function () {
			[a, b] = [b, a + b];
			console.log(`Num: ${b}`);
			return b;
		}();
	}
}
for (let g of gen2()) {
	if (g > 100) {
		break;
	}
}

// 为对象添加generator遍历器接口
let obj = {
	name: 'ly',
	age: 24,
	* [Symbol.iterator] () {
		for (let o of Object.keys(this)) {
			yield this[o];
		}
	}
}
for (let o of obj) {
	console.log(`o: ${o}`);
}

// for...of 扩展运算符 Array.from 解构赋值都是使用iterator接口遍历的
let gen3 = function* () {
	yield 'a';
	yield 'b';
	return 'c';
}
console.log([...gen3()]);
console.log(Array.from(gen3()));
for (let g of gen3()) {
	console.log(`g: ${g}`);
}
let [a] = gen3();
console.log(a);