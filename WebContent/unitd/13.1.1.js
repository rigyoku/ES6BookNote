// Reflect对象和Proxy对象都是es6为了操作对象提供的新API.
// 设计目的是:
// 将语言内部方法从Object移到Reflect[比如defineProperty]
// 修改Object返回结果[比如defineProperty在Object上无法定义属性时报错,而Reflect上返回false]
// 让Object操作都变成函数式[比如delete操作和name in obj都是命令式的,替换成Reflect.deleteProperty和Reflect.has]
// Reflect方法和Proxy方法一一对应[即在Proxy代理中可以调用Reflect上的方法完成原有操作再进行额外操作]