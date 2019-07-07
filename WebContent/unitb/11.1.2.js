// Set实例有以下属性: Set.prototype.contructor构造方法 Set.prototype.size返回成员个数
// Set的4个操作方法: add,delete,has,clear0
let set = new Set([1]);
// 添加成员
set.add(2);
console.log(set);
// 删除成员
set.delete(2);
console.log(set);
// 返回成员数
console.log(set.size);
// 判断是否有该成员
console.log(set.has(1));
set.clear();
// 清空所以成员
console.log(set);
// Array.from可以将Set转成数组,可用于数组去重
console.log(Array.from(new Set([1, 2, 1])));