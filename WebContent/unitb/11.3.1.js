// js的对象本质是键值对,但是键只能是字符串或者Symbol实例
// map是对象的扩展,键可以是任意类型.
let map = new Map();
let obj = {a: 1};
// 这里使用对象作为键值

// map的set / get / has / delete方法
map.set(obj, '1');
console.log(map);
console.log(map.get(obj));
console.log(map.has(obj));
map.delete(obj);
console.log(map);

// Map作为构造函数时,可以使用具有iterator接口的对象作为参数
let map2 = new Map([[1, 2], [3, 4]]);
// 这里的二维数组,每个元素数组都是键值数组
console.log(map2.get(3));

// 当同一键多次赋值时,后者覆盖前者
map.set(obj, '1');
map.set(obj, '2');
console.log(map.get(obj));

// get方法取不到对应值,返回undefined
console.log(map.get('123'));

// 注意map只能取出对应key的值,而2次声明的同值对象不等,取不到值
map.set({a: 1}, 1);
console.log(map.get({a: 1}));

// map同值的判定也是零值相等,和set相同,认为正负0相等,NaN相等
map.set(+0, '111');
console.log(map.get(-0));
map.set(NaN, '222');
console.log(map.get(NaN));