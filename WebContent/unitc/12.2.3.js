// apply方法拦截函数的调用,call和apply操作
let f = function() {
	console.log('F');
}
let p = new Proxy(f, {
	// 3个参数分别是拦截的方法,方法的上下文,方法的参数
	apply(fun, ctx, par) {
		console.log([...par]);
	}
})
p(1, 2, 3);
p.apply(null, [2, 3, 4]);
p.call(null, 3, 4);
// 对p使用Reflect调用也会被拦截