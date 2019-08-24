// import命令会被js引擎静态分析,先于模块内其他模块执行,所以不能对import使用表达式
// 这样提高了编译效率,但是不能在运行时实现动态加载,语法上不允许条件加载
// 因为require是运行时加载的可以动态加载,而import做不到这一点.有一个提案是引入import()方法完成动态加载.
// 使用import()返回一个promise对象
let path = './Ly';
import(path).then(function (module) {
	console.log(module);
}).fail(function (err) {
	console.log(err);
})
// import()和require类似,但是前者异步加载,后者同步加载.

// 适用于按需加载,在需要时再去加载某个模块
button.click(function () {
	import('./Ly').then(function () {
		console.log(modelu.msg);
	})
})
// 条件加载,根据不同情况加载不同模块
if (random() > 0.5) {
	import('.Ly').then(function (module) {
		//...
	})
} else {
	import('.Hello').then(function (module) {
		//...
	})
}
// 动态生成加载路径
import(ly()).then(function (module) {
	//...
})

// import加载成功之后,模块会当做参数传入then方法,可以使用解构取得需要的方法
import('.Ly').then(function ({say, default: log}) {
	say();
	log();
})
// 也可以直接获取默认输出
import('.Ly').then(function (module) {
	module.default();
})
// 同时加载多个模块可以用Promise.all([...]).then(function ([..]) {})
// 由于import()返回promise对象,可以放在async函数的await后面