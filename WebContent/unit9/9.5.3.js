// 使用assign来为对象添加属性和方法
class Point {
	constructor(x, y) {
		Object.assign(this, {x, y});
	}
}
let p = new Point(1, 2);
Object.assign(p, {log () {
	console.log(this.x + ' - ' + this.y);
}})
p.log();

// 使用assign克隆对象.因为assign方法限制,不能克隆继承值和不可枚举属性
let clone = function (source) {
	return Object.assign({}, source);
}
console.log(clone(p));

// 使用assign合并对象
let obj2 = {a: 1};
let obj3 = {b: 2};
let merge = function (...source) {
	return Object.assign({}, ...source);
}
console.log(merge(p, obj2, obj3));

// 为属性设默认值.因为assign的浅复制导致默认对象的属性不能是对象,不然会被参数整体替换
let setDefault = function (options) {
	let defaultObj = {
			name: 'ly'
		};
	return Object.assign({}, defaultObj, options);
}
console.log(setDefault({name: 'Ly'}));
console.log(setDefault());