for (let i = 0; i < 5; i++) {
	let i = 5;
	// 还是会循环5次打印5次'5',因为for循环的循环条件部分是父作用域,循环体是子作用域,相互独立
	console.log(i);
}
console.log('----------');
for (let j = 0; j < 5; j++) {
	j = 5;
	// 不单独声明故使用的是父作用域的j变量,只循环一次
	console.log(j);
}
