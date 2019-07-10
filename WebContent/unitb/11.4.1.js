// weakmap和map类似,区别在于weakmap的键只能是对象类型[null除外]
// 可以使用数组最为构造函数参数
let a = {a: 1};
let wm1 = new WeakMap([[a, 2]]);
console.log(wm1.get(a));
let wm2 = new WeakMap();
// 可以使用set添加键值对
wm2.set({b:2}, 3);
// 添加键不是对象类型或者null的键值对会报错
//wm2.set(1, 2);
//wm2.set(null, 3);

// 和weakset类似,其引用的对象键也不会计入引用,会被垃圾回收机制直接删除
// 适用于引用的对象会消除的场景,比如dom元素,为其添加一些描述,在移除dom时,垃圾回收会将weakmap中键值对释放
// 注意键名是弱引用,而键值是正常引用
// 因为其键值随时可能消失,所以weakmap不能遍历且没有size,不能用clear清空.只有 set / get / delete / has 这4个方法

// 实验其自动回收效果时,可以使用一个对象占用大量内存,然后添加引用,并作为weakmap键,删除引用查看内存.

// weakmap的实际用途,可以为dom添加事件[事件使用weakmap取值],在dom消失时对应事件也消失; 或者作为对象的内部属性[键使用对象本身this],在对象消失时,对应属性也消失