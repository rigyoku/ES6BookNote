// es6的新提案: \p{..}和\P{..}允许正则表达式匹配符合unicode某种属性的所有字符.\p是满足条件匹配,\P是不满足条件匹配
// 这里指定匹配一个希腊字母
//const reg = /\p{Script=Greek}/u;
//console.log(reg.test('π'));

// Unicode属性类要指定属性名和属性值
//console.log(/\p{UnicodePropertyName=UnicodePropertyVale}/u.test('π'));
// \p和\P2种类只对Unicode有效,使用时需要u修饰符,不加会报错

// 匹配所有箭头
//console.log(/\p{Block=Arrows}/u.test('←'));