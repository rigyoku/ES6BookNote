// 由于双unicode字节不能被正确识别,只匹配了第一个字节,认为相等[^表示字符串开始]
console.log(/^\uD842/.test('\uD842\uDFBB'));
// 使用u修饰符,表示unicode模式,可以正确识别双字节,所以不相等
console.log(/^\uD842/u.test('\uD842\uDFBB'));

// .点字符表示除了换行符的任意单个字符,但是默认不能识别双字节,需要使用u修饰符来识别[$表示字符串结尾]
console.log(/^.$/.test('\uD842\uDFBB'));
// 加了u才能匹配到单字符,不然认为双字符
console.log(/^.$/u.test('\uD842\uDFBB'));

// 在正则中使用\u{xx}表示unicode字符时需要使用u修饰符,不然{}会被认为是量词
// 这里的\u{61}因为没有u修饰符,被解释成61个u,没匹配到为false
console.log(/\u{61}/.test('a'));
console.log(/\u{61}/u.test('a'));

// {}表示字符出现次数
console.log(/a{2}/.test('aa'));
console.log(/𠮻{2}/.test('\uD842\uDFBB\uD842\uDFBB'));
// 使用u修饰符来让𠮻被正确识别成双字节
console.log(/𠮻{2}/u.test('\uD842\uDFBB\uD842\uDFBB'));

// 预定义模式 \S匹配任意非空格字符 \s匹配空格字符[空格,制表符,换行符等]
console.log(/^\S$/.test('\uD842\uDFBB'));
// 使用u修饰符使预定义识别到双字符
console.log(/^\S$/u.test('\uD842\uDFBB'));
// 因此可以正确返回字符串长度
console.log('\uD842\uDFBB'.length);
console.log('\uD842\uDFBB'.match(/^[\s\S]$/gu).length);

// 使用u修饰符识别非规范字符 \u004B 和 \u212A 都是大写K
console.log('\u004B');
console.log('\u212A');
// 但是 \u212A 无法直接被识别,需要使用i和u修饰符才能识别
console.log(/[a-z]/i.test('\u212A'));
console.log(/[A-Z]/u.test('\u212A'));
console.log(/[a-z]/iu.test('\u212A'));