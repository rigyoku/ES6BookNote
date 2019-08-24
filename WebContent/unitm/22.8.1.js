// 模块直接是可以继承的
// export * 会输出模块所有属性和方法,但是不包括默认输出
export * from './Ly';
export function log () {};
export default function () {};
// 也可以对加载的方法重命名后输出
export {log as say} from './Ly';