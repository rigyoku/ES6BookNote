// es6循环加载和CommonJS有本质不同.es6是静态分析动态引用的,使用import加载模块不会被缓存,而是得到一个模块的引用,在使用时才取值[需要保证取值时有值]

// a.js
import {b} from './b';
console.log('a');
console.log(b);
export let a = 'A';

// b.js
import {a} from './a';
console.log('b');
console.log(a);
export let b = 'B';

// 执行a.js时,先去加载并执行b.而b又循环加载了a.这时a先执行,在b加载a时由于a已经执行则不会重复执行.
// 先打印b,由于a不重复执行则b取不到a的输出而打印undefined,并在模块b输出变量,将执行权交给a,打印a,取得b输出并打印B
// 上面的例子和CommonJS类似,下面的例子可以看出和CommonJS区别

// a.js
import {foo} from './b';
export function bar () {
	console.log('bar');
	foo();
	console.log('done');
}
bar();

// b.js
import {bar} from './a';
export function foo () {
	console.log('foo');
	if (Math.random() > 0.5) {
		bar();
	}
}

// 使用CommonJS执行a会报错,因为a加载b,在b中是取不到bar的,调用该方法会报错.而es6则是获得引用再使用时再去取值,可以去到bar,得到结果  bar foo ... done