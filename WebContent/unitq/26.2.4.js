// 字节序列指的是数值在内存的表示方式.
// 建立16个字节的ArrayBuffer对象
let ar = new ArrayBuffer(16);
// 在ArrayBuffer上建立32位整数视图
let i32a = new Int32Array(ar);
for (let i = 0; i < i32a.length; i++) {
	i32a[i] = i;
}
// 接着在该ArrayBuffer上建立16位整数视图并输出
let i16a = new Int16Array(ar);
for (let item of i16a) {
	// 由于32位整数占用4字节,而16位整数只用2个字节,而重要的内容放在了后面,所以隔一位输出32位数组的值
	console.log(item);
}

// 小端字节序: 将最不重要[决定大小]的字节排在前面
// 大端字节序: 将最	重要的字节排在前面
// 个人电脑几乎都是小端字节序.网络设备和特点操作系统采用大端字节序.而TypedArray采用本机操作系统的字节序也就是小端字节序.
// 所以一大段大端字节序的数据使用TypedArray将无法处理,所以js引入了DataView对象.
// 使用32位和8位无符号整数转换可以比较出大端还是小端字节序