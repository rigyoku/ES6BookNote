// generator函数通常返回一个promise对象
let doSomeThing = function() {
	return new Promise(function(resolve, reject) {
		resolve('123');
	})
}
let gen = function* () {
	try {
		let res = yield doSomeThing();
		console.log(res);
	} catch(e) {
		console.log(e);
	}
}
let run = function(generator) {
	let g = generator();
	let go = function(r) {
		console.log(`r : ${r}`);
		if (r.done) {
			return r.value;
		}
		return r.value.then(function(value) {
			return go(g.next(value));
		}).catch(function() {
			return go(g.throw(error));
		})
	}
	go(g.next());
}
run(gen);