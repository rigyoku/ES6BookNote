// 可以对异步generator使用yield*
let g1 = async function* () {
	yield 1;
	yield 2;
	return 3;
}
let g2 = async function* () {
	let d = yield* g1();
	console.log(d);
}
(async function () {
	for await (let g of g2()) {
		// for await...of会展开yield*
		console.log(g);
	}
})()