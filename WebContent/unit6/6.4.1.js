// es6在Number对象上新增了isInteger方法来判断是否是整数.
console.log(Number.isInteger(5));
// 注意js中整数和浮点数存储方法一致
console.log(Number.isInteger(5.0));
console.log(Number.isInteger(5.1));
console.log(Number.isInteger('5'));
// es5可以通过判断类型为Number,是有限数,使用float转换后和原值相等来实现isInteger方法