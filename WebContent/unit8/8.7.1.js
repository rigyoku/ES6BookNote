let arr = ['a', 'b', 'c'];
console.log(arr);
// es6在数组实例上新增了3个方法返回遍历器对象,可以使用for...of遍历
console.log(arr.entries()); // 返回键值对
console.log(arr.keys()); // 返回键名
//console.log(arr.values()); // 返回键值