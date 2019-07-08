// 使用WeakSet构造函数时,可以接收有iterator接口的对象作为参数.因为weakset成员只能是对象,所以数组元素也只能是对象
let arr1 = [1, 2];
let arr2 = [[1], [2]];
//let ws1 = new WeakSet(arr1);
let ws2 = new WeakSet(arr2);

// weakset有3个操作方法 add/delete/has
let a = {a:1};
ws2.add(a);
// weakset不能遍历,没有size属性
console.log(ws2);
console.log(ws2.has(a));
ws2.delete(a);
console.log(ws2);

// weakset的一个用途就是储存dom节点,在节点移除时不用担心内存泄露.
let objs = new WeakSet();
class obj {
	constructor() {
		objs.add(this);
	}
	doSomeThing() {
		if (!objs.has(this)) {
			// 确保实例存在时才能调用
			throw new Error('Obj Has Remoeve');
		}
	}
}