// 对象解构也可以进行嵌套,这里的b作为 b: b的缩写表示变量,而a只是匹配用不是变量
let {a: {b}} = {a: {b: 1}}
//console.log(a);
console.log(b);

// 这里第一个c表示c: c,匹配到c属性赋值到c,d取c属性对应的对象的d属性.也就是只有缩写或者全写出来的:后面的是变量
let {c, c: {d}} = {c: {d: 1}};
console.log(c);
console.log(d);

// 除了直接赋值给一个变量,还能赋值给复合变量的指针,注意需要小括号包围
let e = {};
let f = [];
({p1: e.name, p2: f[0]} = {p1: 1, p2: 2});
console.log(e);
console.log(f);

// 对象解构也可以赋予默认值,和数组解构使用默认值逻辑一样,都是严格等于undefined
let {p1: g = 1, p2: h = 2, i} = {p1: undefined, p2: null};
console.log(g);
console.log(h);
// 匹配失败赋予undefined
console.log(i);