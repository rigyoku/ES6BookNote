class CZY {
	constructor() {
		this.name = 'czy';
		this.age = 24;
	}
	log() {
		console.log('heiheihei');
	}
}
// 使用new来生成类的实例对象,不写new会报错
let xc = new CZY();
console.log(`Name: ${xc.name}`);
//CZY();

// 实例的属性除非显式定义在本身[this对象]上,都是定义在原型上的.
console.log(`property name: ${xc.hasOwnProperty('name')}`);
// 通过object.hasOwnProperty来确定name属性是在实例上的,而log没指定this是在原型上的
console.log(`property log: ${xc.hasOwnProperty('log')}`);
console.log(`prototype log: ${CZY.prototype.hasOwnProperty('log')}`);
// xc.__proto__的写法不好,因为__proto__是浏览器实现的而非标准.建议使用Object.getPrototypeOf替代
console.log(`prototype log: ${Object.getPrototypeOf(xc).hasOwnProperty('log')}`);
// 同一个类的不同对象的原型是相等的
let xc2 = new CZY();
console.log(Object.getPrototypeOf(xc) === Object.getPrototypeOf(xc2));
// 所以在一个实例的原型上添加方法其他实例也能使用.对class修改需要谨慎,会改变原始定义影响所有实例.
Object.getPrototypeOf(xc2).say = function () {
	console.log('Ly');
}
xc.say();