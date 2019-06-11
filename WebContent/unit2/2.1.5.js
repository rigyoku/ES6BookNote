// 在var变量声明前使用,存在'变量提升'[相当于先声明变量i,然后打印,最后赋值]
console.log(i);
var i = 10;
// 在let变量声明前使用会报错,不存在'变量提升'
console.log(j);
let j = 11;