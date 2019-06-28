// 数组空位表示该位置没有任何值,构造方法返回的数组就全是空位
let arr1 = new Array(5);
console.log(arr1);
// 空位是没有值,和undefined不同
console.log(0 in arr1);
console.log(undefined in arr1);