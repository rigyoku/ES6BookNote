// generator函数可看做数组解构.因为其返回一系列值,可以提供类似数组的接口
let gen = function* () {
	yield 1;
	yield 2;
}
let g = gen();
console.log([...g]);