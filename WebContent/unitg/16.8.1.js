// generator函数返回的遍历器对象是该函数实例,如果把generator函数当做普通构造函数不会生效,因为返回的是遍历器对象而不是this对象,所以不能使用new创建实例
let gen = function* () {
	this.val = 'VAL';
}
gen.prototype.log = function(param) {
	console.log(param)
}
let g = gen();
console.log(g instanceof gen);
g.log('TEST');
console.log(g.val);
//let g2 = new gen();

// 为了让generator函数返回的对象同时可用next遍历又能使用this,变通的方法是创建空对象后用call绑定this
let gen3 = function* () {
	this.name = 'ly';
	yield 2;
	this.age = '24';
}
let o3 = {};
let g3 = gen3.call(o3);
console.log(g3.next());
console.log(o3.name);
console.log(o3.age);
console.log(g3.next());
console.log(o3.name);
console.log(o3.age);

// 上面的实现虽然o3可以作为this,g3可以使用next,但是是2个不同的对象.
// 可以使用generator.prototype替换call的参数指代this,使属性绑定到原型上.如果再使用普通函数包裹就可以new了.
let GEN = function () {
	return gen3.call(gen3.prototype);
}
let g4 = new GEN();
console.log(`g4: ${g4.name}`);
console.log(`g4: ${g4.age}`);
console.log(g4.next());
console.log(`g4: ${g4.name}`);
console.log(`g4: ${g4.age}`);
console.log(g4.next());
console.log(`g4: ${g4.name}`);
console.log(`g4: ${g4.age}`);