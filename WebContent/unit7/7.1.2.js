// 使用结构赋值作为默认值
let f1 = function ({x, y = 2}) {
	console.log('x :' + x);
	console.log('y :' + y);
}
// null和undefined不能参与解构,所以相当于限制了对应的参数类型
//f1();
f1({});
f1({y: 3});
f1({x: null, y: 3});
f1({x: undefined, y: 3});

// 结构赋值配合参数默认值使用
let f2 = function ({x, y = 5} = {}) {
	console.log('x :' + x);
	console.log('y :' + y);
}
// 这里的参数为undefined,触发了函数的默认值,在使用解构队默认值空对象{}进行解构
f2();
f2({});
f2({y: 6});

// 注意和下面写法不同,下面是为函数设默认参数,然后使用解构解构默认参数[值在默认参数上],而上边方法是为解构设默认值[值在解构上]
let f3 = function ({x, y} = {y: 5}) {
	console.log('x :' + x);
	console.log('y :' + y);
}
f3();
f3({});
f3({y: 6});