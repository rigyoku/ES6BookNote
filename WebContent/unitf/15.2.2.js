// 使用遍历器实现类指针结构
class Obj {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
	[Symbol.iterator]() {
		let cur = this;
		return {
			next() {
				if (cur) {
					let res = {value: cur.val};
					cur = cur.next;
					return res;
				} else {
					return {done: true}
				}
			}
		}
	}
}
let o1 = new Obj(1);
let o2 = new Obj(2);
let o3 = new Obj(3);
o1.next = o2;
o2.next = o3;
for (let oo of o1) {
	console.log(oo);
}

// 类似数组的结构,即有数字键和length属性的对象,可以使用数组的遍历器实现遍历
let obj1 = {
	'0': 'a',
	'1': 'b',
	'2': 'c',
	'd': 'd',
	'length': 4
}
obj1[Symbol.iterator] = Array.prototype[Symbol.iterator];
// 扩展运算符也是for...of遍历
console.log([...obj1]);

// Symbol.iterator属性的值不是一个遍历器生成函数[返回包含next对象的方法]将会报错
let obj2 = {
	[Symbol.iterator]: function() {
		return {
			a: 1
		}
	}
}
//console.log([...obj2]);

// 也可以使用while遍历
let it = obj1[Symbol.iterator]();
let itObj = it.next();
while (!itObj.done) {
	console.log(itObj.value);
	itObj = it.next();
}