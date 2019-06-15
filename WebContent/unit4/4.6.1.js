// 在欧洲语言有语调和重音符号,有2种表示方法,分别是直接表示和2个字节合成
let a = '\u{01D1}';
let b = '\u{004F}\u{030C}';
// 打印效果一致[语义也一致]
console.log(a);
console.log(b);
// 但是js不认为其相等
console.log(a === b);
// 因为js因为b这种合成形式的长度是2
console.log(b.length);

// es6提供了normalize方法,用于把2种写法转换成统一格式,再去比较就是相等的了
console.log(a.normalize() === b.normalize());

// normalize方法可以接收4个参数
// NFC参数表示'标准等价合成',返回多个简单字符的合成字符
console.log(b.normalize('NFC'));
// NFD参数表示'标准等价分解',在'标准等价'[标准等价: 视觉和语义等价]前提下,返回合成字符分解出的多个简单字符
console.log(b.normalize('NFD'));
// NFKC参数表示'兼容等价合成',在'兼容等价'[兼容等价: 语义等价],返回多个简单字符的合成字符
console.log(b.normalize('NFKC'));
// NFKD参数表示'兼容等价分解',在'兼容等价'前提下,返回合成字节的多个简单字符
console.log(b.normalize('NFKD'));

// 合成字符长度为1
console.log(b.normalize('NFC').length);
// 分解后的简单字符长度为2
console.log(b.normalize('NFD').length);
// 目前normalize方法不能识别3个或以上的字符合成,这种情况需要使用正则去通过unicode编码区间判断