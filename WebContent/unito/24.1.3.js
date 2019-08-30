// ESLint是一个语法规则和代码风格的检查工具,可以保证写出语法正确,风格统一的代码

// 安装ESLint
$ npm i -g eslint

// 安装Airbnb语法规则
$ npm i -g eslint-config-airbnb

// 最后进行规则配置,在项目跟目录下创建.eslintrc文件
{
	"extends": "eslint-config-airbnb"
}

// 使用ESLint进行check名为index.js的文件
$ exlint index.js
