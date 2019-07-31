// es5实现状态机
let status = true;
let doSomething = function () {
	if (status) {
		console.log('doing');
	} else {
		console.log('pause');
	}
	status = !status;
}
doSomething();
doSomething();
doSomething();

// generator函数实现
let gen = function* () {
	while (true) {
		console.log('Doing');
		yield;
		console.log('Pause');
		yield;
	}
}
let g = gen();
g.next();
g.next();
g.next();
// 因为generator函数本身就有状态,所以是实现状态机的最佳解构,省去了保存状态的变量且状态除了next方法不回呗更改