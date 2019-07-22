// 使用Promise控制加载图片回调
const loadImg = function(path) {
	return new Promise(function(resolve, reject) {
		let img = new Image();
		img.onload = resolve;
		img.onerror = reject;
		img.src = path;
	})
}
loadImg('C:\Users\Administrator\Desktop\icon.png').then(() => console.log('ok')).catch(() => console.log('ng'));