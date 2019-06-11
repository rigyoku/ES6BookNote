// cosnt保证的本质是变量的指针指向的内存不变,简单类型内存即为值,复合类型内存为一个指针.
'use strict'
const a = 1;
// const定义的简单类型[数字,字符串,布尔]不可变
//a = 2;

const obj1 = {
		name: 'liy'
	}
// const定义的复合型数据,指向不可变,而数据内容可变
// 不会限制指向对象内容
obj1.name = 'yu';
// 但是不可以重新指向其他对象
//obj1 = {};

// 数组和对象都是复合型,同理.
const list = [];
list.push('hey');
//list = ['girl'];

// 想彻底冻结一个对象,const不好用,需要使用Object.freeze方法,除了冻结对象本身,其属性也可以遍历冻结.
const obj2 = Object.freeze({
	name: 'liy'
})
console.log(obj2);
// 普通模式这样重新赋值无效,严格模式报错
//obj2.name = 'yu';
//console.log(obj2);

//es5只有var和function这2种声明变量方法,es6添加了4种,除了var,function,let,const还有import和class