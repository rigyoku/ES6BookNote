// 没有return语句时,yield*相当于for...of的缩写; 有return语句时,需要yield*写法来接收返回值
let gen4 = function* () {
	console.log('gen4');
	return 'GEN4';
}
let gen5 = function* () {
	// 这里获得了gen4的返回值'GEN4'并作为了yield语句返回值
	let g4 = yield* gen4();
	yield g4;
}
for (let g5 of gen5()) {
	console.log(`g5: ${g5}`);
}
let gen6 = function* () {
	let g4 = gen4();
	for (let g of g4) {
		yield g;
	}
}
for (let g6 of gen6()) {
	console.log(`g6: ${g6}`);
}

let gen7 = function* () {
	yield 1;
	yield 2;
	return 3;
}
let gen8 = function* () {
	let g7 = yield* gen7();
	console.log(g7);
}
// 遍历gen8时会打印3,然后再打印数组[1, 2]
console.log([...gen8()]);

// 使用yield*语句取得嵌套数组的元素
let getItems = function* (arr) {
	for (let a of arr) {
		// 数组的元素,如果是数组就遍历返回,不是数组直接返回
		if (Array.isArray(a)) {
			yield* a;
		} else {
			yield a;
		}
	}
}
for (let a of getItems([1, [2, 3], 4])) {
	console.log(`A: ${a}`);
}