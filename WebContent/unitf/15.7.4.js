// 类数组对象有好几类,比如字符串,nodelist和arguments参数
let str = 'abc';
// 字符串的for...of还可以正确识别32位字符
for (let s of str) {
	console.log(s);
}
//let list = document.querySelectorAll('p');
//for (let l of list) {
//	console.log(l);
//}
let f = function() {
	for (let a of arguments) {
		console.log(a);
	}
}
f(1, 2, 3);
// 并不是所有类数组对象都有iterator接口,可以使用Array.from转成数组再遍历
let obj = {
	0: 'q',
	1: 'w',
	length: 2
}
//for (let a of obj) {
//	console.log(a)
//}
for (let a of Array.from(obj)) {
	console.log(a)
}