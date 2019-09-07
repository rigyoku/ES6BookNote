// 由于视图可以指定起始长度和位置,所以可以在同一段内存存放不同类型数据,叫做复合视图
let ab = new ArrayBuffer(32);
let ia = new Int8Array(ab, 0, 2);
let fa = new Float32Array(ab, 2, 2);
// 在0~2段内存使用8位带符号整形,在2~4位使用32位浮点数