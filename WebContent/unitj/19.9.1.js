// 类的方法内部使用this指向类的实例.需要小心使用,单独使用可能报错
class Ly {
	say(word = 'emmm') {
		this.log(`Say: ${word} `);
	}
	log(txt) {
		console.log(txt);
	}
}
let ly = new Ly();
// 使用实例调用方法时,this指向实例
ly.say('hello');
// 单独使用方法时取不到this
let speak = ly.say;
//speak();
let {say} = ly;
//say('hi');

// 一种方案是在构造方法中绑定this
class Ly2 {
	constructor() {
		this.say = this.say.bind(this);
	}
	say(word = 'emmm') {
		this.log(`Say2: ${word} `);
	}
	log(txt) {
		console.log(txt);
	}
}
let say2 = new Ly2().say;
say2(2);

// 另一种方案是使用箭头函数.箭头函数特性是this指向声明对象而不是调用对象
class Ly3 {
	constructor() {
		this.say = (word = 'emmm') => {
			this.log(`Say3: ${word} `);
		}
	}
	log(txt) {
		console.log(txt);
	}
}
let say3 = new Ly3().say;
say3();

// 或者使用proxy代理,在获取方法时绑定this
let ly0 = new Ly();
let proxy = new Proxy(ly0, {
	get(target, key) {
		let res = Reflect.get(target, key);
		if (typeof res === 'function') {
			return res.bind(target);
		} else {
			return res;
		}
	}
})
proxy.say('czy');