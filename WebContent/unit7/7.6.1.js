// 函数绑定提案[es7]: 使用函数绑定运算符 :: 来替换apply,call和bind.用法是 obj::function,将对象作为方法的this
let a = {
	aF: function () {
		//...
	}
};
let b = function () {
	//...
}
// 下面2种写法等价
//a::b;
//b.bind(a);

// 下面2种写法等价
//a::b(...p);
//b.apply(a, p);

// 如果 :: 左面是空的,右面是对象的方法,相当于把方法绑定到该对象.下面2种写法等价
//let c = ::a.aF;
//let d = a::a.aF;

// 因为函数绑定返回的是原对象,所以可以使用链式写法