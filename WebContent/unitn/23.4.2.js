// CommonJS的特性是加载时执行,即脚本require时全部执行.一旦一个模块被循环加载,就只会输出已经执行部分,不会输出没执行部分.

// a.js
exports.done = false;
var b = require('./b');
exports.done = true;

// b.js
exports.done = false;
var a = require('./a');
exports.done = true;

// 上面代码b执行到加载a时就会发生循环加载.a没执行完,b只能获得a执行完的部分,相当于只获得了done: false.
// 然后b执行完毕,a获得全部的b,即done: true
// 加载完a之后再去加载b,不会重复执行b的代码,只对读取缓存.

// 直接require('a').test使用不安全,因为可能遇到循环加载导致test被改写,应该使用require('a'); a.test();