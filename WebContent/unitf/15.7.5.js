// 普通对象不能直接用for...of遍历,但是可以用for...in遍历
let obj = {
	name: 'ly',
	age: 24
}
//for (let o of obj) {
//	console.log(o);
//}
for (let o in obj) {
	console.log(obj[o]);
}
// 可以使用keys方法在for...of
for (let o of Object.keys(obj)) {
	console.log(obj[o]);
}
// 也可以使用generator函数包装一下对象
let g = function*(obj) {
	for (let o of Object.keys(obj)) {
		yield obj[o];
	}
}
for (let o of g(obj)) {
	console.log(o);
}