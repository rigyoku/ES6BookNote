// generator函数是es6提供的异步编程解决方案,可以理解成状态机[封装了内部多个状态],也是遍历器生成函数[next方法每次都返回一个包含value和done的对象,依次遍历每个状态]
// 在形式上,function命令和函数名之间有个星号[*],函数体内使用yield[产出]定义不同的状态,最后使用return作为最后一个状态结束执行
// 调用generator函数后,函数并不执行,也不返回运行结果,而是指向内部状态的指针对象,使用f.next()让指针指向下一个状态.[即generator函数分段执行,yield暂停,next继续]
let gen = function* () {
	yield 'hello';
	yield 'ly';
	return 'alone';
}
let g = gen();
console.log(g.next());
console.log(g.next());
// return语句的done会变成true
console.log(g.next());
// return之后再next会得到undefined的值和true的flag
console.log(g.next());

// es6没有规定*所在位置,只要放在function和方法名之间就可以