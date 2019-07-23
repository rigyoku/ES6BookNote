// 使用for...of遍历,会自动寻找iterator接口
// 默认的iterator接口部署在Symbol.iterator属性上,执行该属性会返回一个遍历器对象,本质是包含next方法的对象.
let obj1 = {
		[Symbol.iterator] : function() {
			let index = 0;
			return {
				next() {
					return index++ < 3 ? {
						value: 1
					} : {
						done: true
					}
				}
			}
		}
}
for (let o of obj1) {
	console.log(o);
}
// 数组不用处理就可以遍历,因为默认部署了遍历器属性Symbol.iterator;而对象不能直接遍历因为没有部署该属性
// 默认部署遍历器的类型: Array Map Set String TypeArray arguments参数 NodeList对象
let arr1 = [1, 2, 3];
let it1 = arr1[Symbol.iterator]();
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
// 没有默认部署遍历器的结构需要自己手动添加或者添加到原型链
class Log {
	constructor(end) {
		this.end = end;
		this.index = 0;
	}
	[Symbol.iterator]() {
		return this;
	}
	next() {
		return this.index++ < this.end ? {value: this.index} : {done: true}
	}
}
let log = new Log(8);
for (let l of log) {
	console.log(l);
}