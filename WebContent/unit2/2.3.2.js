{
	const a = 1;
}
// const常量和let变量类似,都是存在于块级作用域中
//console.log(a);

const b = 2;
{
	// const常量同let类似,都不存在变量提升
	console.log(b);
	if (false) {
		const b = 3;
	}
}

{
	// 暂时性死区
//	console.log(c);
	const c = 4;
}

const d = 5;
// 不可重复声明
const d = 6;