// 网页canvas输出的二进制像素数组就是TypedArray数组.
// canvas.data是一个Uint8ClampedArray类型的数组,只能处理0~255的8位整数,溢出时取极限值,专门处理颜色
// 自己处理颜色麻烦且影响性能,使用Uint8ClamperArray类型可以自动完成极限值控制
// IE10不支持该类型