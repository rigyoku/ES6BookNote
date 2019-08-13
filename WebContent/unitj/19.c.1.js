// 类的方法名前加上*, 表示该方法是一个generator方法
class Ly {
	*say () {
		yield 1;
	}
}
let ly = new Ly();
let s = ly.say()
console.log(s.next().value);