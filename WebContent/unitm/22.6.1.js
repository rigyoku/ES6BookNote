// 使用import引入模块需要指定引入的功能.而使用export default可以为模块指定默认输出.
// 输出模块 test.输出的是一个匿名函数
export default function () {

}
// 引入模块 test.可以为该匿名函数指定任意名字.注意这时import命令后面接的变量不需要大括号.
import testF from './test';
// export default模块也可以输出非匿名函数
export default function log () {

}
// 也可以最后默认输出
function log() {

}
export default log;
// 匿名和非匿名的输出在引入时语法相同

// import默认输出可以不加大括号的原因是只能有一个默认输出,本质上就是输出一个叫default的变量,系统允许为他取名.
// 由于默认输出等价于输出变量default,所以下列输出等价
export {log as default};
export default log;
// 下列引入也是等价的
import {default as log} from './log';
import log from './log';

// 由于默认输出相当于输出变量default,所以export default不能接变量声明语句.
export let a = 1;
let a = 1;
export default a;
// 上面声明都可以,但是下面声明报错.
export default let a = 1;

// 同时使用普通输出和默认输出
export default function () {};
export function log() {};
// 同时引用普通输出和默认输出
import test, {log} from './log';

// 默认输出也可以输出类
export default class {};
// 引入默认类
import myClass from './class';
let mc = new myClass();