// 函数的name属性,返回函数的名字[很早就被支持,但是es6写入标准].
let f1 = function() {};
// 这种把匿名函数赋值给变量的函数,在es5取name属性为空字符串,在es6可以取得变量名
console.log(f1.name);

function f2() {};
console.log(f2.name);

// 将具名函数赋值给变量,name属性返回具名的名字
let f4 = function f3() {};
console.log(f4.name);

// 使用Function构造的函数,name属性为anonymous
console.log((new Function).name);

// bind返回的函数,name属性有bound前缀
console.log(f1.bind().name);