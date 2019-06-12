// es6的结构:按照一定模式从数组和对象提取值,然后对变量进行赋值[Destructuring]
// 本质是'模式匹配',只要等号两边的模式相同,左边的变量就会被赋予对应的值
let [a,b,c] = [1,2,3];
// 从数组提取值,按照对应位置对变量赋值
console.log(a);
console.log(b);
console.log(c);

// 结构声明的变量和普通变量一样,let变量也不能重复赋值
//let [a] = [1];
//console.log(a);

// 数组解构可以嵌套,只要模式一样就可以赋值,没有匹配到的赋予undefined,使用...name来获取剩余
let [e,[f],,g,...h] = [1,[2],3,,,,4,5,];
console.log(e + ' - ' + f + ' - ' + g);
console.log(h);

// 但是省略号获取剩余需要在最后一位
//let [i,...j,k] = [1,2,3];

// 这么写相当于 let l; let m = [1,2]
let l,m = [1,2];
console.log(l + ' - ' + m);

// 解构需要'可遍历的解构',即拥有iterator接口或者转成对象后拥有iterator接口.
// 换言之,只要拥有iterator接口就可以使用解构赋值
//let [n] = 1;