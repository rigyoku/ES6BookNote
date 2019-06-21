// es6将parseInt和parseFloat都移植到了Number对象上,和全局方法完全一致.意义是减少全局方法,使语言模块化.
console.log(Number.parseInt(1.2));
console.log(Number.parseFloat('1.2a'));
console.log(parseInt(1.2));
console.log(parseFloat('1.2a'));
console.log(Number.parseInt === parseInt);
console.log(Number.parseFloat === parseFloat);