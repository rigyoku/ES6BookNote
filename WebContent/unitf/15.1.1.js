// js中表示集合的解构: array, object, set, map
// iterator是一种接口,为不同数据结构提供统一访问机制,只要部署iterator接口就可以遍历[依次取出所有成员]
// iterator接口主要作用有3个: 为各种数据结构提供统一接口; 使得数据结构成员按某种顺序排列; 供for...of遍历
// 遍历过程: 创建一个指针指向数据结构起始位置,不断调用next方法直到结束.每次next都会返回一个对象,有value和done属性,分别是遍历到的成员和是否结束flag
// 实现遍历
let getIt = function(param) {
	let index = 0;
	return {
		next() {
			return index < param.length ? {value: param[index++]} : {done: true}
		}
	}
}
let it = getIt([1, 2, 3]);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());