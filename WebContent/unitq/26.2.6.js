// ArrayBuffer和字符串的相互转换有一个前提就是字符串的编码方式确定
// 假设为utf-16编码
const ab2str = function (buffer) {
	return String.fromCharCode.apply(null, new Uint16Array(buffer))
}
const str2ab = function (str) {
	// 每个字符占用2个字节
	let ab = new ArrayBuffer(str.length * 2);
	for (let i = 0; i < str.length; i++) {
		ab[i] = str.charCodeAt(i);
	}
	return ab;
}
console.log(str2ab('ly'));
let ab = new ArrayBuffer(8);
let ta = new Int8Array(ab);
ta[0] = 2;
console.log(ab2str(ab));