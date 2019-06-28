// es5对空位处理在各个方法不同
let arr1 = new Array(5);
arr1[1] = 'b';
// forEach,filter,every和some方法都会跳过空位,map也跳过空位但是会返回原值
arr1.forEach(function () {
	console.log('forEach');
})
arr1.filter(function () {
	console.log('filter');
})
arr1.every(function () {
	console.log('every');
})
arr1.some(function () {
	console.log('some');
})
arr1.map(function () {
	console.log('map');
})
// join和toString将空位转换undefined,而undefined会当做空字符串处理
console.log(arr1.join('/'));
console.log(arr1.toString());
// es6明确把空位转成undefined处理
// Array.from会把空位转成undefined, 扩展运算符也会把空位转成undefined, copyWithin会复制空位, fill会把空位填充值, for...of会遍历空位[使用map遍历会跳过空位]
console.log(Array.from(arr1));
console.log([...arr1]);
console.log(arr1.copyWithin(1, 2, 3));
for (let a of arr1) {
	console.log('for...of');
}
// entries,keys,values,find,findIndex会把空位处理成undefined
console.log(arr1.entries);
console.log(arr1.keys);
//console.log(arr1.values);
console.log(arr1.find(x => x === undefined));
console.log(arr1.findIndex(x => x === undefined));
// 由于空位处理规则不统一,应避免出现空位