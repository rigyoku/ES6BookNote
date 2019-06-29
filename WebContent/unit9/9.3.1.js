// 方法的name属性返回方法名,同样适用于对象的方法
let obj = {
		log: function () {
			console.log('test');
		}
	};
console.log(obj.log.name);

// 如果方法使用了存取值函数[setter,getter],name就不在方法上而在get和set上
let obj2 = {
		set log(x) {
			this._log = x;
		},
		get log() {
			return this._log;
		}
	};
//console.log(obj2.log.name);
console.log(Object.getOwnPropertyDescriptor(obj2, 'log'). get.name);

// new Function创建的方法返回的name是anonymous,bind方法创建的函数返回 bound+原方法名
let f = new Function();
console.log(f.name);
console.log(f.bind(null).name);
// 对象的方法是Symbol值,返回描述
let name = Symbol('test');
let obj4 = {
		[name]: function () {

		}
	};
console.log(obj4[name].name);