// const常量只在当前代码块有效,想要跨模块使用常量,可以将常量输出
// Ly.js
export const name = 'Ly';
export const age = 25;
// use
import * as Ly from './Ly';
console.log(Ly.name);
console.log(Ly.age);
// 如果要使用的常量非常多,可以设置一个专门的常量目录,将常量文件放置
// 将常量文件合并到index.js并输出,使用时只需要引用index.js即可