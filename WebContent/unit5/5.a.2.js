// 由于具名组匹配结果是对象,可以使用解构赋值
let {groups: {one, two}} = /^(?<one>.*): (?<two>.*)/.exec('foo: bar');
// 相当于匹配对象.groups.one
console.log(one);
console.log(two);

// 也可以使用具名组匹配完成字符串替换,使用$<...>引用组名
let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
'1995-07-22'.replace(reg, '$<year>/$<month>/$<day>')

// replace第二个参数也可以是方法
'1995-07-22'.replace(reg, function(matched, capture1, capture2, capture3, position, S, groups) {
	// 具名组匹配在原参数基础上新增最后一个参数groups,函数内部可以对groups进行结构赋值
})