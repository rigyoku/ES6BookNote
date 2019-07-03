// es6引入了一种新的原始数据类型: Symbol. 是第7种数据类型[Null,Undefined,Number,String,Boolean,Object]
// Symbol类型通过Symbol函数生成.对象的属性可以有2种类型,字符串和Symbol.属性名是Symbol类型的,就是独一无二不冲突的.
// 使用Symbol函数创建Symbol对象时,注意没有new关键字,因为生成的不是对象而是原始数据类型,所以也不能添加属性.
let sym = Symbol();
console.log(sym);

// Symbol函数可以接收一个字符串参数,表示对Symbol实例的描述
let sym2 = Symbol('2');
console.log(sym2);

// 即使描述相同,得到的也不是同一个实例
let sym3 = Symbol('2');
console.log(sym2 === sym3);

// 如果描述是一个对象类型,会调用其toString方法转成字符串作为描述
let obj = {
		toString () {
			return 'test';
		}
	};
console.log(Symbol(obj));

// Symbol值不能和其他类型值一起运算,会报错
//console.log(1 + sym3);

// 但是Symbol值可以显示转成Boolean或者Stirng
console.log(String(sym2));
console.log(Boolean(sym3));
// 不能显示转成Number
//console.log(Number(sym));