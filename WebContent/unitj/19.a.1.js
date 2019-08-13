// es6的类 只是es5的构造函数的包装,所以函数的许多特性都被继承,包括函数的name属性,在类中可以获取类名
class CZY {

}
console.log(CZY.name);
// name总是返回class后面的类名