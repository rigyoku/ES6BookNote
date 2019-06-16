// 标签模板的重要应用是过滤HTML字符串,转换用户提供内容
let name = '<script>alet(1234)</script>';
let changeInput = function(arr) {
		let ret = arr[0];
		for (let i = 1; i < arguments.length; i++) {
			arguments[i] = arguments[i].replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
			ret += arguments[i];
		}
		ret += arr[1];
		return ret;
	};
let msg = changeInput `<p>your name is : ${name}</p>`;
console.log(msg);

// 标签模板还可以用于多语言转换[国际化处理]和自定义模板[模板字符串没有条件判断和循环处理],甚至可以使用标签模板在js中嵌入其他语言
// 标签模板的第一个参数有一个raw属性,保存的是转义后的原字符串.raw的元素和原参数一样,只有反斜杠变成了双反斜杠,即转义后的反斜杠.
let str = `hello \n world`;
console.log(str);
let f = function(param) {
		console.log(param.raw);
	}
f `hello \n world`;