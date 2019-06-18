console.log(/_/y.exec('a_b_c'));
console.log(/_/y.exec('__b_c'));
// 这里仍可以匹配到_并进行截取*[这个位置书上写的匹配不到]
console.log('a_b_c'.split(/_/y));
console.log('__b_c'.split(/_/y));

// 替换时,只有连续的分隔符才能替换.[注意配合g来全局匹配,不然只会修改第一个匹配到的值]
console.log('a_b_c'.replace(/_/yg, '-'));
console.log('__b_c'.replace(/_/yg, '-'));

// 输出匹配到数组时,也需要连续的匹配项目才能匹配到.[注意配合g来全局匹配,不然返回第一个匹配到的值]
console.log('a_a__a_'.match(/a_/g));
console.log('a_a__a_'.match(/a_/yg));

// y修饰符的主要应用就是从字符串提取token[词元],y修饰符确保不回漏字符.
const TOKEN_Y = /\s*(\+|[0-9]+)\S*/y;
// *表示前面字符出现0次或多次 |表示或者
const TOKEN_G = /\s*(\+|[0-9]+)\S*/g;
function getToken(regexp, str) {
	let res = [];
	let match;
	while (match = regexp.exec(str)) {
		res.push(match[1]);
	}
	return res;
}
// g修饰符会忽略非法字符继续向下查找,而y修饰符会停下.比较2者差异可以发现非法字符
let str = '3 + 4';
console.log(getToken(TOKEN_Y, str));
console.log(getToken(TOKEN_G, str));
let str2 = '3 - + 4';
console.log(getToken(TOKEN_Y, str2));
console.log(getToken(TOKEN_G, str2));