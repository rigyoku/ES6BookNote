// es6有5种遍历对象的方法
// for...in 返回自身和继承的可枚举属性[不含Symbol属性]
// Object.keys() 返回一个数组,包含对象自身的可枚举属性[不含Symbol属性]
// Object.getPropertyName() 返回一个数组,包含自身所有属性[不含Symbol属性]
// Object.getOwnPropertySymbol() 返回一个数组,包含自身的所有Symbol属性
// Reflect.ownKeys() 返回自身所有属性,包括不可枚举和Symbol
// 以上5种遍历的共同规则: 遍历属性名是数值的,并按数字排列; 遍历字符串属性,按生成时间排序; 遍历Symbol属性,按生成时间排序