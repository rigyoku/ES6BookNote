// yield是generator函数的暂停标签
// next语句的逻辑: 遇到yield语句就停下并执行该语句且作为返回值, 再调用next会继续执行到下一条yield语句, 如果没有yield会运行到函数结束, 没有return语句相当于return undefined.
let gen = function* () {
	let a = 'a';
	yield console.log(a);
}
let g = gen();
// 执行generator函数不会执行所有语句,yield语句只有next时候才会执行
console.log('start next');
console.log(g.next());
console.log(g.next());

// return语句和yield语句类似,都能返回后面的表达式的值,但是yield可以有多个,而return只能执行一条
// 普通函数只能return一个值,而generator[生成器]函数可以yield和return返回多个值

// generator函数没有yield语句时就变成了暂停函数,等待next调用
let gen2 = function* () {
	console.log('done');
}
let g2 = gen2();
console.log('start');
g2.next();

// yield语句只能在generator函数使用,普通函数使用会报错
let fun = function () {
//	yield 1;
}
let gen3 = function* (arr) {
	// 这里的gen3虽然是generator函数,但是yield语句写在map的匿名函数里面,仍然报错,可以使用for循环替换该操作
	arr = arr.map(function (item) {
//		yield item * 2;
	})
	console.log(arr);
}
gen3(new Array(1, 2));

// yield如果写在表达式中,需要使用小括号包裹
let gen4 = function* () {
	// 这里相当于先 yield (+1) 然后再return;
	return yield + 1;
}
let g4 = gen4();
console.log(g4.next());
console.log(g4.next());

let gen5 = function* () {
	// 这里相当于先 yield undefined 然后再return undefined + 1;
	return (yield) + 1;
}
let g5 = gen5();
console.log(g5.next());
console.log(g5.next());
// 直接作为参数或者用来赋值可以不用加括号