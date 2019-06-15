let a = '\u0061';
// js可以使用 \u + xxxx 表示字符,xxxx表示Unicode码.但是这种表示仅限于\u0000~\uFFFF,超出范围需要使用2个字节表示
console.log(a);
// 本章的特殊字符可能在CMD无法打印,可在浏览器console操作
let b = '\uD842\uDFBB';
console.log(b);

let c = '\u12346';
// 如果字符超过了\uFFFF,就会解析成\uFFFF+x.这里的\u1234是不可打印的字符,所以拼接成了 6
console.log(c);

// 在es6对字符表示做了改进,将Unicode放入大括号解析
let d = '\u{61}';
console.log(d);
d = '\u{61}\u{62}';
console.log(d);

// 这里的Unicode解析成d,故打印变量d的值ab
console.log(\u{64});

// 大括号写法和4位写法
console.log(\u{61} === \u0061);

// 以下写法均表示z字符
console.log('z');
console.log('\z');
console.log('\172');
console.log('\x7A');
console.log('\u007A');
console.log('\u{7A}');