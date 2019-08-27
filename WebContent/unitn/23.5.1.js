// es6 module transpiler 是square公司开源的一个转码器,可以把es6模块转成CommonJS或者AMD模块
$ npm install -g es6-module-transpiler
// 使用$ compile-modules convert -o 转码后名 需要转换文件来转码
$ compile-modules convert -o ly.js hello.js

// 可以使用SystemJS垫片库,可以在浏览器内加装es6模块,CommonJS和AMD模块,转成es5格式.后台调用的是Google的Traceur转码器
// 使用时先在网页内嵌入SystemJS文件
<script  src="system.js"></script>
// 使用system.import加载文件
<script>
	System.import('./ly.js').then((module) => {
		// system.import是异步加载,返回promise对象,可以进行操作
	});
</script>