// yield语句本身没有返回值,或者说执行该语句返回undefined.next方法的参数可以当做上一条yield语句返回值
let gen = function* () {
	console.log('start');
	let a = yield 1;
	console.log(`a : ${a}`);
	let b = yield 1;
	console.log(`b : ${b}`);
	let c = yield 1;
	console.log(`c : ${c}`);
}
let g = gen();
console.log('...');
g.next('a');
// 参数b作为第一条yield语句的返回值
g.next('b');
g.next('c');

// 由于next的参数表示上一条yield语句返回值,而第一次next是没有上一条yield的,所以第一个next的参数默认无效[虽然无效,但是还是会执行]
let g2 = gen();
g2.next((function() {
	console.log('first done');
})())

// 如果想第一个next参数就有效,可以在目标generator函数外面再包一层函数
let log = function* () {
	console.log(yield);
}
let wrap = function (f) {
	f.next();
	return f;
}
let w = wrap(log());
w.next('first input');