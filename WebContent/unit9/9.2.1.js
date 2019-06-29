// js可以用标识符.获取对象属性,也可以用[表达式]获取对象属性
let obj = {
		ab: 'a-b'
	};
console.log(obj.ab);
console.log(obj['a' + 'b']);
// es5只能使用标识符定义属性,es6可以用表达式定义属性[也可以定义方法名]
let obj2 = {
		['a' + 'b']: 'a-b',
		['a' + 'c']: function () {
			console.log(this.ab)
		}
	};
console.log(obj2.ab);
obj2.ac();

// 属性名表达式不能和简写一起使用
let item = '123';
let obj3 = {
//		['item'],
		item
	};

// 如果表达式是一个对象,会转成字符串形式
let obj4 = {
		[obj]: 'test'
	}
console.log(obj4);