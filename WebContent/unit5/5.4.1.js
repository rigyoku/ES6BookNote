// es6新增了y修饰符[粘连]. 和g修饰符类似,都是全局匹配,都是从上一次匹配结束处开始下一次匹配.
// 区别在与g修饰符只有后面能匹配到就可以,但是y修饰符必须紧跟着上一次匹配结尾
let str = 'hello liy';
let str2 = 'llo liy';
// +表示 匹配一个或多个前边字符
let reg1 = /l+/g;
let reg2 = /l+/y;
// 匹配到ll
console.log(reg1.exec(str));
// 匹配到l
console.log(reg1.exec(str));
// 由于不是l开始,匹配不到
console.log(reg2.exec(str));
// 匹配到ll
console.log(reg2.exec(str2));
// ll的结尾是o,所以再次粘连匹配匹配不到
console.log(reg2.exec(str2));

const REGEXP = /l+/g;
// 指定匹配的头位置,即从索引为1的位置开始匹配[包含1]
REGEXP.lastIndex = 1;
// 返回匹配到的索引
console.log(REGEXP.exec(str).index);
// 下一次匹配的开始位置
console.log(REGEXP.lastIndex);
console.log(REGEXP.exec(str).index);

const REGEXP2 = /l+/y;
REGEXP2.lastIndex = 1;
// 从1索引开始匹配,匹配失败返回null.
console.log(REGEXP2.exec(str));
// 可以得出结论,y修饰符默认包含头部匹配符^. y修饰符设计本意就是让头部匹配标志^在全局匹配都有效

const REGEXP3 = /^l/g;
console.log(REGEXP3.exec(str2));
console.log(REGEXP3.exec(str2));