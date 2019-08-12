console.log(a);
// 变量a提升到了使用之前
var a = '1';

//类的定义不存在变量提升,所以先使用后定义会报错
//new CZY().log();
class CZY {
	log() {
		console.log('czy');
	}
}
new CZY().log();
// 因为不存在变量提升,所以继承时父类必须在子类之前声明