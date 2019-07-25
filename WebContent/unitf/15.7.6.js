// 以数组为例,js提供了多种遍历方法
let arr = ['a', 'b', 'c'];
// 使用for循环遍历,但是会比较麻烦
for (let index = 0; index < arr.length; index++) {
	console.log(`for: ${arr[index]}`);
}
// 使用forEach遍历,缺点是无法break或者return中断循环
arr.forEach(function(item) {
	console.log(`forEach: ${item}`);
	return;
})
// 使用for...in循环,缺点是键名会把数字转成字符串,手动添加到其他键也会被遍历
arr.name = 'ly';
for (let a in arr) {
	console.log(`in: ${arr[a]}`);
}
// for...of写法和for...in一样简洁但是没有其缺点,可以使用break退出遍历
for (let a of arr) {
	if (a === 'b') {
		break;
	}
	console.log(`of: ${a}`);
}