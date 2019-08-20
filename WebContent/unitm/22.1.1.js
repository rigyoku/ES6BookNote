// es6之前,js模块化主要依赖社区的模块加载方案: CommonJS 和 AMD. 前者用于服务器,后者用于浏览器.
// es6的模块设计思想是尽量静态化,在编译时就能确定依赖关系和输入输入变量.而CommonJS和AMD在运行时确定这些东西.
// CommonJS模块
let {readFile} = require('fs');
// 等同于
let fs = require('fs');
let read = fs.readFile;
// 本质是整体加载fs模块[fs的所以方法],再从fs上读取需要的方法.这种方法称为运行时加载,只有运行才能得到对象,不能编译时静态优化.
// es6的模块不是对象,而是export命令显示指定输出的代码,再通过import命令引入
import {readFile} from 'fs'
// 上面的代码是从fs模块加载readFile方法,而不加载其他方法,称为静态加载或者编译时加载.效率更高,但是es6模块整体无法被引用因为不是对象