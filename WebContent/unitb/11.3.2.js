let map = new Map();
// 使用set方法,添加键和值
map.set('a', 1);
// map的set方法返回map本身,所以可以使用链式写法
map.set('b', 2).set(undefined, 3);
// map的size属性,返回成员数
console.log(map.size);
// map的get方法,返回键对应的值,取不到值返回undefined
console.log(map.get(undefined));
console.log(map.get(null));
// map的has方法,返回一个布尔值,判断键是否存在于map
console.log(map.has('b'));
// map的delete方法,删除参数键,返回true删除成功
console.log(map.delete('b'));
console.log(map.get('b'));
// map的clear方法清除所有成员
map.clear();
console.log(map.size);