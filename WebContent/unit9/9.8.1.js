// __proto__属性,用来读取或设置当前对象的prototype对象
let obj1 = {
		test: function () {

		}
	};
let obj2 = {a: 1};
obj1.__proto__ = obj2;
console.log(obj1.a);

// es6正文不包括__proto__,而是写在了附录.因为其本质是内部属性,es6规定浏览器必须部署这个属性,其他环节不必部署.
// 最好不要使用这个属性,因为无论是语义还是兼容性,Object.setPrototypeOf[写属性] / Object.getPrototypeOf[读属性] / Object.create[创建对象]都是更好的
// 如果一个对象本身部署了__proto__属性,那么该属性的值就是该对象的原型