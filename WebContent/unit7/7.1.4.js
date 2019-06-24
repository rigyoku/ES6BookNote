// 方法的lenght属性,返回[参数列表从左到右到第一个默认值为止]有多少个没有默认值的参数.length意义是预期传入参数个数
let f1 = function(x, y) {

};
let f2 = function(x, y = 1, i, j = 2) {

};
let f3 = function(x, y = 1) {

};
let f4 = function(x = 1, y = 2) {

};
console.log(f1.length);
console.log(f2.length);
console.log(f3.length);
console.log(f4.length);

// rest参数不计入length
let f5 = function(x, ...params) {

};
console.log(f5.length);