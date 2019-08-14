// 提案的静态属性在实例属性前加static修饰即可
class Ly {
	static age = 24;
}
console.log(Ly.age);
Ly.sex = 'boy';
// 提案写法相对于原静态属性写法更简便,更不容易被忽略,是显示声明而不是赋值处理,语义更好