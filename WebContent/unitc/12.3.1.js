// proxy.revocable方法返回一个可以取消的Proxy实例.使用场景是,原对象不可访问,只能通过代理访问,访问结束后收回代理禁止访问
// 返回一个对象,属性分别是proxy和revoke,一个是代理对象,一个是取消代理函数
let {proxy: p, revoke: re} = Proxy.revocable({name: 'ly'}, {
	get(tar, key) {
		return tar[key];
	}
});
console.log(p.name);
re();
// 取消代理之后再访问会报错
console.log(p.name);