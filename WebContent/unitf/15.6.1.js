// 自定义的遍历器必须有next方法,而return方法和throw方法是可选的
// return方法会在循环提前结束时调用[比如发生异常,使用break或者continue语句]
let obj = {
	[Symbol.iterator]() {
		let index = 0;
		return {
			next() {
				return index < 3 ? {value: index++} : {done: true};
			},
			return() {
				console.log('out...');
				// 如果这里不返回done,那么循环还会继续导致循环体内使用成员时报错
				return {done: true};
			}
		}
	}
}
let index = 0;
for(let o of obj) {
	console.log(o);
	if (index++ > 0) {
		break;
	}
}
// throw方法主要配合generator方法,会在unith章节出现