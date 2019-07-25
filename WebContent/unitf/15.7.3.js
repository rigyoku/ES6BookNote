// es6的数组,set和map都有keys,values和entries方法,计算获得一个可遍历对象,分别获得键名,键值,键值对数组
let arr = [1, 2, 3];
for (let k of arr.keys()) {
	console.log(`k: ${k}`);
}
for (let v of arr.values()) {
	console.log(`v: ${v}`);
}
for (let [k, v] of arr.entries()) {
	console.log(`k: ${k} v: ${v}`);
}