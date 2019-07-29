// Generator.prototype.throw方法,可以在generator函数外抛出错误,在函数内部捕获
let gen = function* () {
	console.log('start');
	try {
		let val = yield;
		console.log(`val: ${val}`);
	} catch (e) {
		console.log(`fail: ${e}`);
	}
}
let g = gen();
console.log('-----');
g.next();
//g.next('VAL');
// 这里的throw相当于yield语句返回异常,在generator被try捕获了
try {
	g.throw('ERROR');
	// 第一个throw之后,会跳出try语句而不会继续捕捉异常,所以被generator函数外部catch捕捉到
	g.throw('ERROR2');
} catch (e) {
	console.log(`out: ${e}`);
}
// 注意这里用的是generator对象.throw,而不是直接throw,前者异常在generator函数内部先捕捉,后者直接被外部捕捉,前者内部不处理呗外部捕捉,而后者不可能被前者捕捉

// generator函数内部不进行catch的话,会被外部捕获其对象抛出的异常,且该函数后续语句都不会执行
let gen2 = function* () {
	console.log('start2');
	let a = yield;
	console.log('done2');
}
let g2 = gen2();
g2.next();
try {
	g2.throw('error2');
} catch (e) {
	console.log(`g2 : ${e}`);
}

// throw语句附带一次next操作,即执行到try之外的下一个yield,并且因为部署了try...catch所以其内抛出异常不会终止整个函数
let gen3 = function* () {
	console.log('start3');
	try {
		yield;
	} catch (e) {
		console.log(`second: ${e}`);
	}
	console.log('thrid3');
	yield;
	console.log('forth3');
}
let g3 = gen3();
g3.next();
g3.throw('g3');

// generator函数内部也可以抛出错误并被外部捕获,且捕获之后再去执行next会当做函数执行完毕而返回{alue:undefined, done: true}
let gen4 = function* () {
	console.log(a);
	yield;
}
let g4 = gen4();
try {
	console.log(g4.next());
} catch (e) {
	console.log(`e: ${e}`);
}
console.log(g4.next());