// 观察者模式: 函数自动观察数据对象的模式,一旦对象发生变化,函数自动执行
let getObserve = function(obj, f) {
	return new Proxy(obj, {
		set(...par) {
			f();
			Reflect.set(...par);
		}
	})
}
let obj = {
		name: 'ly'
	};
let observe = getObserve(obj, function() {
	console.log('set property');
})
observe.age = 24;