// map同set一样,也提供了3个遍历器生成函数和一个遍历方法.map遍历的顺序就是插入的顺序
let map = new Map();
map.set('a', 1);
map.set('b', 2);
// keys返回键的数组
for (let i of map.keys()) {
	console.log(i + ' : ' + map.get(i));
}
console.log('keys------------');
// values返回值的数组
for (let i of map.values()) {
	console.log(i);
}
console.log('values------------');
// entries返回键值对的数组
for (let i of map.entries()) {
	console.log(i);
}
console.log('entries------------');
// 等同于遍历entries
for (let [key, value] of map.entries()) {
	console.log(key + ' : ' + value);
}
console.log('entries------------');
// 使用扩展运算符将map转成数组,并利用数组的filter过滤,map本身没有filter方法
let map2 = new Map([...map].filter(([key, value]) => value > 1));
console.log(map2);
console.log('filter------------');
// forEach方法的参数是f(value, key, map), this指向
map.forEach((key, value, entry) => console.log(key + ' : ' + value + ' / ' + entry));