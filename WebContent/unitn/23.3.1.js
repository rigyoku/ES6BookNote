// node下加载es6模块很麻烦,因为CommonJS和es6模块不兼容,需要各自加载.
// 在静态分析阶段,只要有import或者export语句就会被认为是es6模块,如果不想输出内容又想作为模块,可以使用export {};这样不是输出空对象,而是不输出任何接口.
// 在不指定绝对路径情况下,node加载es6模块顺序和require一致
import * as Ly from './ly';
// 依次查找: './ly.js' './ly/package.json' './ly/index.js'
import * as Ly2 from 'ly2';
// 依次查找: './node_modules/ly2.js' './node_modules/ly2/package.json' './node_modules/ly2/index.js'
// 本层没有还会依次查找上一层: '../node_modules/ly2.js' '../node_modules/ly2/package.json' '../node_modules/ly2/index.js'
// 没有继续查找上一层

// 使用import加载CommonJS模块.node采用CommonJS模块格式,模块输出定义在module.exports上.
// 使用import引入模块时,自动将module.exports作为默认输出,等同于export default
// 整体引入 [import * as ly from './ly'] 时,default将取代module.exports作为默认输出,但是对象ly的default是module.exports
// node下,CommonJS同样存在缓存.即输出的是值的复制,并不会实时反映值的变化.
// 由于es6模块是编译时确定输出接口,而CommonJS模块是运行时确定输出接口,所以使用import命令加载CommonJS模块不能使用下面写法
import {readFile} from 'fs';
// 因为fs是CommonJS格式,只有运行时才能获得readFile接口,而import命令要求编译时获得接口.可以改成整体输入形式
import * as fs from 'fs';

// 采用require加载es6模块时,所以输出接口都会变成输入对象的属性.
let ly2 = require('./ly2');
console.log(ly.default);
// default输出会变成对象的default属性,且存在缓存机制,不回实时反映值的变化.