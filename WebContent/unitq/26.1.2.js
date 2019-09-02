// ArrayBuffer.prototype.byteLength表示所分配内存长度
// 由于可能没有预想的那么多连续内存,有可能分配失败,所以需要检验是否分配成功
let len = 1024;
let ab = new ArrayBuffer(len);
if (len === ab.byteLength) {
	console.log('Done');
} else {
	console.log('Fail');
}
let ta = new Int32Array(ab);
ta[0] = '1';

// ArrayBuffer.prototype.slice方法用于将内存区域的一部分复制生成新的ArrayBuffer对象
let ab2 = ab.slice(0,16);
let ta2 = new Int32Array(ab2);
console.log(ta2[0]);
// slice的2个参数分别表示开始位置[包括]和结束位置[不包括],省略第二个参数表示到原对象结尾.
// 除slice方法外,对ArrayBuffer的操作都需要通过视图

// ArrayBuffer.isVive是一个静态方法,返回参数是否是ArrayBuffer的视图
console.log(ArrayBuffer.isView(ab))
console.log(ArrayBuffer.isView(ta));