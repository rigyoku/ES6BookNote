// async的实现原理就是将generator函数和自动执行器放在一个函数内
let f = function (p) {
	return new Promise(function (resolve, reject) {
		let g = p();
		let next = function (nf) {
			let gn = {};
			try {
				gn = nf();
			} catch (e) {
				console.log(e);
			}
			if (gn.done) {
				resolve(gn.value);
				return;
			}
			Promise.resolve(gn.value).then(function (data) {
				next(function () {
					return g.next(data);
				});
			}).catch(function (e) {
				next(function () {
					return g.throw(e);
				});
			});
		}
		next(function () {
			return g.next();
		});
	})
}
let gen = function* () {
	yield new Promise(function (resolve, reject) {
//		setTimeout(reject, 1000);
		setTimeout(resolve, 1000);
	});
	yield new Promise(function (resolve, reject) {
		setTimeout(resolve, 1000);
	});
}
f(gen).then(function () {
	console.log('done');
}).catch(function () {
	console.log('eee');
})