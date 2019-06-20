// 在正则内部也可以引用具名组匹配到的结果,\k<...>表示引用
let reg1 = /^(?<word>[a-z]+)!\k<word>$/;
console.log(reg1.test('ab!ab'));
console.log(reg1.test('ab!a'));

// 数字引用依然有效
let reg2 = /^(?<word>[a-z]+)!\1$/;
console.log(reg2.test('ab!ab'));
console.log(reg2.test('ab!a'));

// 可以同时使用组名和数字引用
let reg3 = /^(?<word>[a-z]+)!\k<word>\1$/;
console.log(reg3.test('ab!ab!ab'));
console.log(reg3.test('ab!ab!a'));