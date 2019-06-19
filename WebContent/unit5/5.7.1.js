// .表示任意单字符,但是不能匹配到行终止符[U+000A换行符(\n) U+000D回车符(\r) U+2028行分隔符 U+2029段分隔符]
console.log(/hi.ly/.test('hi ly'));
console.log(/hi.ly/.test('hi\nly'));
// 这里面的[^]表示非
console.log(/hi[^]ly/.test('hily'));
console.log(/hi[^]ly/.test('hi ly'));
// es6的s修饰符提案,使.可以匹配任意单字符[dotAll模式]
console.log(/hi.ly/s.test('hi\nly'));
console.log(/hi.ly/s.dotAll);
console.log(/hi.ly/s.flags);
// s的dotAll修饰符和m的多行修饰符不冲突,可以匹配每一行的行首尾