// 对字符串的解构,可以使用数组,对应索引为字符串的第几个字符
let [a, b] = '123';
console.log(a);
console.log(b);
// 也可以采用对象来解构字符串,匹配属性也是字符串索引
let {2: c} = '234';
console.log(c);
// 也可以使用字符串对象的属性[比如长度]来解构
let {length} = '345';
console.log(length);