// 数组的includes(target, start)方法判断数组是否包含某个元素,接收2个参数,分别是要匹配的元素和匹配起点(负数为倒数,负值超过数组长度会按0处理)
console.log([1, 2, 3].includes(2));
console.log([1, 2, 3, 4, 5].includes(2, 6));
console.log([1, 2, 3, 4, 5].includes(2, -4));
console.log([1, 2, 3, 4, 5].includes(2, -6));

// 没有该方法之前使用indexOf判断是否包含某元素.indexOf不够语义化,且内部使用 === 判断,无法识别NaN

// 注意map,set的has方法和includes方法区别
// map的has是用来判断键名(key)的
// set的has是用来判断键值(value)的