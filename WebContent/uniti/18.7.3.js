// generator函数返回一个遍历器,异步的generator函数返回异步遍历器.异步generator函数就是async和generator的结合
let agen = async function* () {
	yield await 'czy';
}
let ag = agen();
// 执行异步的generator函数返回一个异步的遍历器对象,调用next返回promise对象并then监听回调接收参数
ag.next().then(function ({value, done}) {

})
// 异步遍历器设计目的之一,就是让处理同步和异步的操作使用同一个接口
// 异步generator实例
let af = async function* (path) {
	let file = await fileOpen(path);
	try {
		while (!file.EOF) {
			yield await file.readLine();
		}
	} finally {
		await file.colse();
	}
}
// 对应的遍历方法
for await (let a of af()) {
	console.log(a);
}
// for await...of 可以配合异步遍历器使用
let af2 = async function* () {
	for await (let a of af()) {
		yield a;
	}
}
// 异步generator返回一个遍历器对象,调用next每一步返回值都是promise对象,也就是yield需要跟promise对象
// 异步函数generator抛出错误,promise对象会reject,被catch到
// 异步generator/async/generator/普通函数 构成了js的4种函数形式. 按顺序读文件可以使用async函数;一系列产生相同数据结构的异步操作,可以用异步generator
// 同步的操作也可以使用异步generator并且可以省略await