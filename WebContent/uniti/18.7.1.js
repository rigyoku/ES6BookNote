// 遍历器iterator具有next方法,返回具有done和value属性的对象. 隐藏条件是next返回值需要同步产生
// 异步操作next返回的value是thunk函数或promise对象,后续再返回真正值;而done是同步产生的.
// 异步遍历器提案: 为异步操作提供原生接口,done和value异步产生
// 异步遍历器调用next返回的是一个promise对象,promise的回调then的参数仍然是包含value,done2个属性的对象
// 同步遍历器绑定在Symbole.iterator属性上,异步遍历器绑定在Symbol.asyncIterator属性上.
// 异步遍历器使用方法是先调用next返回promise对象并then监听,回调中返回遍历器.next继续更新状态并继续then监听下去...
// 由于then逐步监听上一步的状态,可以使用async+await实现,await接遍历器.next然后同步写法实现.
// 以上逐步监听是继发写法,也可以不管next的返回值,直接调用全部next然后await Promise.all([所有next返回值])或者执行完所有next在await 遍历器.return();