// 调用未声明变量会报错
//console.log(`${a}`);

// ${}内部是要执行的js代码,如果是字符串,直接原样输入
console.log(`'Test'`);

// 可以在模板中使用其他模板
const getTable = function(data) {
	return `
		<tbale>
			${data.map(function(item) {
				return `<tr>${item.name}</tr>`;
			})}
		</table>
	`;
}
// 使用2个模板,分别获得表格框和内容行. *数组map过后,逗号也会进行输出
let data = [{name: 'l1'}, {name: 'l2'}];
//console.log(getTable(data));

// 调用模板字符串
let str = 'console.log(`Print ${name}`)';
let fun = new Function('name', str);
fun('ly');

// 调用模板字符串,*第一个str2会报错
//let str2 = 'function(name) {return `Print ${name}`}';
let str2 = '(name) => `Print ${name}`';
let func2 = eval.call(null, str2);
console.log(func2('LY'));