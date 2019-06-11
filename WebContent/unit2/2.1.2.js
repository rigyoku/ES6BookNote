for (var i = 0; i < 5; i++) {
	console.log('I : ' + i);
}
// var声明的全局变量可以在块外使用
console.log('last i : ' + i);
for (let j = 0; j < 5; j++) {
	console.log('J : ' + j);
}
// let声明变量只有块内有效,故循环计数器适合使用let定义
console.log('last J : ' + j);