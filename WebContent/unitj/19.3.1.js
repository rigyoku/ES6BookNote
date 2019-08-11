// constructor是类的默认方法,通过next命令生成对象时调用.constructor方法是class的必须方法,没定义会自动添加一个空的constructor
class LY {

}
console.log(new LY());

// constructor方法默认返回实例对象this,但是也可以指定其他对象
class CZY {
	constructor() {
		return {
			name: 'czy',
			_this: this
		}
	}
}
let xc = new CZY();
console.log(xc.name);
// xc是一个新的object所以不是CZY型
console.log(xc instanceof CZY);
// xc._this是CZY实例this,所以是CZY型
console.log(xc._this instanceof CZY);

// 传统构造函数不使用new可以看做普通函数,而class不使用new报错
let CZY2 = function () {
	this.name = 'czy';
}
let xc2 = new CZY2();
CZY2();
//LY();