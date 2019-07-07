// es6提供了新的数据类型Set,类似数组,但是成员都是唯一的.set本身也是构造函数,用来生成set数据结构.
let set = new Set();
// 由于成员不重复,只会添加进去1, 2, 3
[1, 2, 3, 1, 2].forEach(x => set.add(x));
console.log(set);

// Set方法也可以接受一个具有iterator接口的数据结构作为参数来初始化set
let set2 = new Set([1, 2, 3, 1, 2]);
console.log(set2);

// 使用set去除数组重复成员
let arr = [1, 2, 3, 1, 2];
console.log([...new Set(arr)]);

// set判断值是否重复使用零值相等方法,和 === 类似,区别在于NaN认为相当,但是和Object.is区别在于认为正负0也相等
console.log(new Set([1, '1']));
console.log(new Set([-0, 0]));
console.log(new Set([NaN, NaN]));
// 2个对象总是不相等
console.log(new Set([{}, {}]));