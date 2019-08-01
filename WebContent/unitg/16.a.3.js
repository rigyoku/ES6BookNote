// 使用generator函数为普通对象部署遍历结构
let toIt = function* (obj) {
	for (let o of Reflect.ownKeys(obj)) {
		yield {key: o, value: obj[o]}
	}
}
let obj = {
	name: 'ly',
	age: 25
}
for (let o of toIt(obj)) {
	console.log(o);
}