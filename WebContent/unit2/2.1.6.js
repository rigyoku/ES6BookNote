var test = 123;
{
	test = 456;
	// 在块内使用let来声明变量,会导致变量在块内被'绑定',不再受到外界影响
	// [即区域内引用该变量指向let声明的变量],故相当于在变量test声明前进行使用,报错
	let test = 789;
}
console.log(test);