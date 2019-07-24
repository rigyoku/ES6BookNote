// es6引入for...of来进行统一遍历,在内部调用iterator接口
let arr = new Array(1, 2, 3);
let obj = {
	[Symbol.iterator]: arr[Symbol.iterator].bind(arr)
}
// 将数组的遍历方法绑定到obj上,进行遍历得到数组成员
for (let o of obj) {
	console.log(`value: ${o}`);
}
// for...of得到的是键值,for...in得到的键名
for (let i in arr) {
	console.log(`key: ${i}`);
}
for (let o of arr) {
	let ky = Object.entries(arr);
	let key = null;
	ky.forEach(function(item) {
		if(item[1] === o) {
			key = item[0];
		}
	})
	console.log(`key: ${key}`);
}
// 使用for...of循环数组,只会获得数字键名的属性
let arr2 = new Array(7, 8, 9);
arr2.ly = 'ly';
for (let o of arr2) {
	console.log(`value2: ${o}`);
}
for (let i in arr2) {
	console.log(`key2: ${i}`);
}