// 虽然Symbol属性不是私有属性,但是不能被Object.keys(),Object.getOwnPropertyNames取得到,也不会出现在for...in,for...of中
// 可以使用Object.getOwnPropertySymbols取得Symbol属性的数组
let a = Symbol();
let b = Symbol();
let obj = {
		[a]: 'a',
		[b]: 'b',
		c: 'c'
	};
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));
// 新API Reflect.ownKeys() 可以返回所有属性,包括字符串属性和Symbol属性
console.log(Reflect.ownKeys(obj));

// 由于Symbol属性即非私有又不会被常规取到的特性,可以造一些非私有又希望只用于内部的方法
let size = Symbol();
class Collection {
	constructor () {
		this[size] = 0;
	}
	add (item) {
		this[this[size]] = item;
		this[size]++;
	}
	static getLast (col) {
		return col[this[size]];
	}
}
let col = new Collection();
console.log(col);
col.add('test');
console.log(Collection.getLast(col));