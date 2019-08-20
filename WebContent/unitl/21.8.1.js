// 目前Babel转码器已经支持Decorator
// 安装babel-core和babel-plugin-taransfrom-docorators[或者babel-preset-stage-0]
$ npm install babel-core babel-plugin-transform-decorators
// 设置配置文件
{
	'plugins': ['transform-decorators']
}
// 脚本命令
babel.tansform('code', {plugins: ['transform-decorators']})