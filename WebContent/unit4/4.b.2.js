let data = [{name: 'liy'}, {name: 'Liy'}];
// 在模板字符串中使用常规模板.使用<%%>存放js代码,<%=%>输出js表达式
let temp = `
	<ul>
		<% for (let i = 0; i < data.length; i++) { %>
			<li><%=data[i].name%></li>
		<% } %>
	</ul>
`;

let getEles = function(temp2) {
	// 使用正则完成转化,把temp转换成js表达式形式.
	let evalExpr = /<%=(.+?)%>/g;
	let expr = /<%([\s\S]+?)%>/g;
	temp2 = temp2.replace(evalExpr, '`); \n appendEle($1); \n appendEle(`')
			.replace(expr, '`); \n $1 \n appendEle(`');
	temp2 = 'appendEle(`' + temp2 + '`)'

	console.log('----------');
	console.log(temp2);
	console.log('----------');

	let ele = `(function() {
		let eles = '';
		let appendEle = function(ele) {
			return eles += ele;
		}
		${temp2};
		return eles;
	})`;
	return ele;
}

// 先将嵌入常规模板的模板字符串转成js代码的字符串,使用eval执行字符串
var ele = eval(getEles(temp));
console.log(ele());