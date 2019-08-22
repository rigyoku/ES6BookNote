// 可以不指定具体的功能而使用*来整体引入模块
import * as Ly from './22.3.1';
console.log(Ly.name);
// 注意引入的模块所在对象应该是可以静态分析的,不允许运行时改变
//Ly.age = 24;
//Ly.say = function () {};