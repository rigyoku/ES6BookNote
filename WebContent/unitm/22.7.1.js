// 如果在一个模块中,先引入后输出同一个模块,可以合并到一起
import {log} from './log';
export {log};
// 等价于
export {log} from './log';
// 也可以进行接口改名和整体输出
export {log as say} from './log';
export * from './log';
// 直接输出默认接口
export {default} from './log';
// 将普通输出转成默认输出
export {log as default} from './log';
// 同理默认输出也能改成普通输出
export {default as log} from './log';
// 有3种情况没有复合写法: 整体引入模块并重命名, 引入默认方法并重命名, 同时引入普通输出和重命名的默认输出
import * as Log from './log';
import log from './log';
import log, {say} from './log';