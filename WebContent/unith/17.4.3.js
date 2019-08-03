// 安装Thunkify模块
// npm install thunkify
// 引用thunkfiy模块
const tky = require('thunkify');
const fs = require('fs');
let f = tky(fs.readFile);
f('17.1.1.js', 'utf-8')(function (err, data) {
	if (err) {
		throw err;
	}
	console.log(data);
})
// 相比于上一节的转换thunk方法,该模块有回调检查算法,确定回调只会执行一次,即函数多次使用回调也只生效一次.