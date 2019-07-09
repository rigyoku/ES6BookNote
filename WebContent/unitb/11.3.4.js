let map = new Map();
map.set('a', 1);
map.set('b', 2);
let arr = [['c', 3], ['d', 4]];
// map和array的转化,注意Map构造函数的参数是二维数组
console.log([...map]);
console.log(new Map(arr));
// 如果map的键都是字符串,可以转成对象
let targetObj = {};
map.forEach((value, key) => {
	targetObj[key] = value;
})
console.log(targetObj);
// 对象转成map
let targetMap = new Map();
// 或者用 let key of Object.keys(targetObj)
for (let key in targetObj) {
	targetMap.set(key, targetObj[key]);
}
console.log(targetMap);
// map转json型时,如果key都是字符串,可以转成对象然后JSON.stringify转json
console.log(JSON.stringify(targetObj));
targetMap.set({a: 1}, 2);
// 如果key不仅是字符串,转成数组使用JSON.stringify
let json = JSON.stringify([...targetMap]);
console.log(json);
// json转map时,正常所有键名都是字符串,使用JSON.parse转回原型即可
console.log(JSON.parse(JSON.stringify([...map])));
// 特殊情况是,整个json是一个数组,且数组的成员也是具有2个成员的 数组,往往是数组转json的逆向操作
console.log(new Map(JSON.parse(json)));