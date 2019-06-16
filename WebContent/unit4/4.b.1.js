let data = [{name: 'liy'}, {name: 'Liy'}];
// 在模板字符串中使用常规模板.使用<%%>存放js代码,<%=%>输出js表达式
let temp = `
	<ul>
		<% for (let i = 0; i < data.length; i++) { %>
			<li><%=data[i].name%></li>
		<% } %>
	</ul>
`;

let eles = '';
let appendEle = function(ele) {
	return eles += ele;
}

// 编译上述模板字符串,可以转换成js表达式
let toScript = function() {
	appendEle('<ul>');
	for (let i = 0; i < data.length; i++) {
		appendEle('<li>');
		appendEle(data[i].name);
		appendEle('</li>');
	}
	appendEle('</ul>');
	console.log(eles);
}
toScript();