// 假设step1,step2,step3是3个耗时方法
// 回调函数写法
//step1(function() {
//	// ...
//	step2(function() {
//		// ...
//		step3(function() {
//			// ...
//		})
//	})
//})
// 使用promise改写
//Promise.resolve(step1)
//.then(step2)
//.then(step3)
// 使用generator函数改写[这样改写只适用于同步语句]
//let gen = function* () {
//	let r1 = yield step1();
//	let r2 = yield step2(r1);
//	let r3 = yield step3(r2);
//}
//for (let r of gen()) {
//	// ...
//}

// 利用generator函数依次执行方法
let task = [];
let t1 = function() {
	console.log('t1');
}
let t2 = function() {
	console.log('t2');
}
let t3 = function() {
	console.log('t3');
}
task.push(t1);
task.push(t2);
task.push(t3);
let gen2 = function* () {
	for (let t of task) {
		yield t();
	}
}
let g2 = gen2();
console.log('---');
g2.next();
g2.next();
g2.next();