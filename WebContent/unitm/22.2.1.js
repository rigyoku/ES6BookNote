// es6的模块自动采用严格模式,不管头部有没有use strict
// 严格模式主要存在存在以下限制
// 变量必须先声明后使用
// 函数的参数不能有同名属性,不然报错
// 不能使用with语句
// 不能对只读属性赋值
// 不能使用前缀0表示八进制,不然报错
// 不能删除不可删除属性,否则报错
// 不能删除变量delete prop,只能删除属性delete global
// eval不会在他的外层作用域引入变量
// eval和arguments不能重新赋值
// arguments不回反应函数参数的变化
// 不能使用arguments.callee
// 不能使用arguments.caller
// 禁止this指向全局变量[es6模块中,顶层this指向undefined]
// 不能使用fn.caller和fn.arguments获取函数调用栈
// 增加了保留字[如protected,static,interface]