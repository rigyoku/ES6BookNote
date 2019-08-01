// 因为generator函数的yield语句实现了暂停,所以可以把异步操作写在yield语句中
let loadData = function* () {
	// 画面显示等待遮罩
	console.log('add loading...');
	// 异步[async]加载数据
	yield;
	// 去除等待遮罩
	console.log('remove loading...');
}
let load = loadData();
// 第一次调用next加载数据
load.next();
// 加载完成第二次调用next
load.next();