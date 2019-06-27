// find方法用于找到第一个符合条件的元素,没有返回undefined,参数是判断函数
let arr = [1, 2, 3, 4, 5];
console.log(arr.find((x) => {return x > 3}));
// find的判断函数可以接收3个参数,分别是: 当前元素,当前元素索引,原数组

// findIndex方法用于找到第一个符合条件的元素索引,没有返回-1,参数是判断函数,判断函数参数和find相同
console.log(arr.findIndex((x) => {return x > 3}));

// find和findIndex都可以找到NaN,而indexOf找不到NaN
let arr2 = [1, 2, NaN, 4, 5];
console.log(arr2.find((x) => {return isNaN(x)}));
console.log(arr2.findIndex((x) => {return isNaN(x)}));
console.log(arr2.indexOf(NaN));