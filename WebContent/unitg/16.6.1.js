// 在generator函数内调用generator函数是无效的
let gen1 = function* () {
	yield 1;
	yield 2;
}
let gen2 = function* () {
	yield 3;
	// 这里执行了一个generator函数,返回的是遍历器对象而不是遍历得到的值
	yield gen1();
	yield 4;
}
for (let g2 of gen2()) {
	console.log(`g2: ${g2}`);
}

// 使用yield*语句可以实现这个效果
let gen3 = function* () {
	yield 3;
	// 使用yield*语句,将后面的遍历器对象遍历,并把得到的每个值都作为yield语句返回值
	yield* gen1();
	// 等同于
//	for (let g1 of gen1()) {
//		yield g1;
//	}
	yield 4;
}
for (let g3 of gen3()) {
	console.log(`g3: ${g3}`);
}

// 其他可遍历解构也可以使用yield*表达式
let gen7 = function* () {
	yield* [1, 2, 3];
}
for (let g7 of gen7()) {
	console.log(`g7: ${g7}`);
}