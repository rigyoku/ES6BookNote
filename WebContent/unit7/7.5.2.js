// 箭头函数的this指向了声明函数的对象,而不是调用函数的对象
let f1 = function () {
	setTimeout(function() {
		console.log(this.a);
	}, 1000)
}
let f2 = function () {
	setTimeout(() => console.log(this.a), 1000)
}
var a = '123';
// 在浏览器中,var a相当于把a定义到window下.调用f1方法,setTimeout也是window的方法,this会指向window,从而得到123
f1.call({a: '234'});
// 箭头函数的this指向声明函数的对象,也就是f2,使用call更改f2的this为{a: '234'}之后,得到的就是234
f2.call({a: '234'});
// 由于箭头函数绑定this的特效,可以方便的用作回调函数

// 箭头函数不能当做构造函数,也就是不能new
let f3 = function () {return {a: 1}};
let f4 = () => ({a: 1});
console.log(new f3());
//console.log(new f4());

// 箭头函数没有arguments对象,可以使用rest替代.这里的arguments指向了外层函数,除了arguments还有super和new.target
let f5 = function () {
	console.log(arguments);
};
let f6 = (...p) => {
	console.log(arguments);
	console.log(p);
};
f5(1, 2);
f6(1, 2);

// 箭头函数本质是使用外层声明时的对象作为this,本身没有this对象,所以不能用apply/call/bind改变this对象
let f7 = () => {console.log(this.a)};
f7.call({a: 2});

// 因为箭头函数不能用作Generator函数,所以不能使用yield命令