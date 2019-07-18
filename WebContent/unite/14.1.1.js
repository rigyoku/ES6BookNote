// promise是异步编程的一种解决案[最早由社区提出并实现,es6写入标准].
// promise是一个容器,包含了一个未来结束的事件的结果[通常是异步操作].
// promise对象有2个特点: 1.对象状态不受外界影响,promise对象只有3种状态Pending[进行中],Fulfilled[成功]和Rejected[失败],只有异步操作的结果能改变promise状态.
// 2.一旦状态改变就无法再更改,之后再取得都会是这个状态.只能从pending到fulfilled或者pending到rejected,改变之后的状态叫做Resolved[已定型],改变之后再添加回调函数也会生效,和事件[Event]不同.
// promise也有一些缺点: 一旦新建就会立即执行,无法中途取消; 不设置回调函数,promise内部错误就不会反映到外部; 进行时无法得知进行进度.
// 当某些事件反复发生时,使用stream模式更好.