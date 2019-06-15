// es6中引入了模板字符串.使用``来表示,是增强版的字符串.可以用作普通字符串,也可以定义多行字符串,也可以嵌入变量使用
let str = 'hi';

// 反引号中的换行和空格都会保留
let str2 = `
	Hello
	world`;
console.log(str2);

// 在反引号中使用${}嵌入变量
let str3 = `Test ${str}`;
console.log(str3);

// 在反引号中使用字符串的反引号,需要使用\来转义
let str4 = `Hello \` world`;
console.log(str4);

// 使用trim来消除前边的空格和换行
console.log(str2.trim());

// 模板字符串不进可以嵌入变量,还可以嵌入表达式,使用对象属性和调用函数.如果${}内不是字符串,转成Object型调用toString方法
let fun = function() {
	return 'FN';
}
let obj = {
	name: 'liy'
}
let str5 = `
	fun		: ${fun()}
	name	: ${obj.name}
	value	: ${1 + 2}
	obj		: ${obj}
`;
console.log(str5);