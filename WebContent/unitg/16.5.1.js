// generator函数返回对象的return方法,用于返回指定值并终止generator函数运行
let gen = function* () {
	console.log('.');
	yield 1;
	console.log('..');
	yield 2;
	console.log('...');
}
let g = gen();
console.log(g.next());
// 终止gen函数执行,返回'RETURN'
console.log(g.return('RETURN'));
// 由于gen终止,返回{value: undefined, done: true}
console.log(g.next());
let g2 = gen();
// return方法不传参数,返回{value: undefined, done: true}
console.log(g2.return());

let gen3 = function* () {
	console.log('-');
	try {
		yield 1;
		console.log('--');
		yield 2;
	} catch (e) {
		console.log(`e: ${e}`);
	} finally {
		yield 3;
		console.log('FINALLY');
	}
}
let g3 = gen3();
g3.next();
// 如果return语句在try中执行,会先执行finally方法,再终止generator函数[相当于定义generator函数返回值,并进入finally语句执行next]
//g3.throw('eee');
console.log(g3.return('G3'));
// 这里return执行finally语句,但是该语句包含yield语句,所以先返回yield语句值,finally函数执行完在调用next相当于获得generator函数的返回值也就是上面定义的g3
console.log(g3.next());