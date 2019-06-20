// es6提供了二进制和八进制的新写法,分别是 0b[或0B] 0o或者[0O]
console.log(0b111110111 === 503);
console.log(0o767 === 503);
// es5开始,严格模式下,八进制就不能使用0作为前缀表示.es6进一步明确要使用0o做前缀

// 可以使用Number方法将其转化为数字
console.log(Number('0b111110111'));
console.log(Number('0o767'));