// Object.assign的复制是浅复制,也就是说如果复制源对象的属性有对象,得到是将是该属性对象的引用
let obj1 = {
		a: {
			b: 1
		}
	};
let obj2 = {};
// 得到a对象的引用
Object.assign(obj2, obj1);
obj1.a.b = 2;
// 因为使用a的引用,所以obj1.a的值改变,obj2.a也会改变
console.log(obj2);

// 如果目标对象和源对象有同名属性,会整体覆盖
let obj3 = {
		a: {
			b: 1,
			c: 1
		}
	}
let obj4 = {
		a: {
			b: 2
		}
	};
Object.assign(obj4, obj3);
console.log(obj4);

// 对数组使用assign,会把数组转成对象处理
let arr1 = [1, 2, 3]; // {0: 1, 1: 2, 2: 3}
let arr2 = [4, 5]; // {0: 4, 1: 5}
Object.assign(arr1, arr2);
console.log(arr1);