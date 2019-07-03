// 魔术字符串: 在代码中多次出现,与代码形成强耦合的某一个具体字符串或数值. 良好的代码 应该消除魔术字符串,使用有实际意义的变量替代
let log = function (level, msg) {
	switch (level) {
	case 'info': console.log(msg);break;
	case 'warning': console.log('!!! ' + msg);break;
	}
}
log('warning', 'test');
// 在上述代码中,'warning'字符串多次出现,一般替换成变量来优化. 但是变量的值是什么并不重要,只要不和其他case重复即可,所以可用Symbol类型

let info = Symbol();
let warning = Symbol();
let level = {
		info,
		warning
	}
let log2 = function (lv, msg) {
	switch (lv) {
	case level.info: console.log(msg);break;
	case level.warning: console.log('!!! ' + msg);break;
	}
}
log2(level.info, 'test');