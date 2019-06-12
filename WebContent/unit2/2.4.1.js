// node环境下顶层对象为global
global.a = 1;
console.log(a);
global.c = 3;
console.log(c);
// 想不分环境适应,需要写方法进行分别判断self[浏览器和webworker的顶层],window[浏览器顶层]和global[node顶层]是否存在
// es6有一个提案,所有环境下,global都存在[现在垫片库system.global模拟了这个提案]