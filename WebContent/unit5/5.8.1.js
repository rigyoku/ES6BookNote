// 先行断言,x在y前面才能够匹配,写成/x(?=y)/
// 匹配x到y的字符,包含x不包含y
console.log(/x[\S](?=y)/g.exec('yax'));
console.log(/x[\S](?=y)/g.exec('xay'));

// 先行否定断言,x不在y前面才能匹配写成/x(?!y)/
console.log(/x[\S](?!y)/g.exec('yxb'));
console.log(/x[\S](?!y)/g.exec('axayxb'));

// 后行断言,x在y后面匹配,写成/(?<=y)x/
console.log(/(?<=y)[\S]x/g.exec('yax'));
console.log(/(?<=y)[\S]x/g.exec('xaybxc'));

// 后行否定断言,x不在y后面匹配,写成/(?<!y)x/
console.log(/(?<!y)[\S]x/g.exec('axcy'));
console.log(/(?<!y)[\S]x/g.exec('dxaybxc'));

// 后行断言的实现需要先匹配x,再回到左边匹配y.这种从右到左的顺序导致一些结果和正常情况不一致
// 这里的第一个括号是贪婪模式,第二个括号匹配到一个字符
console.log(/(\d+)(\d+)$/g.exec('12034'));
// 后行断言,从右到左执行,这里的第二个括号是贪婪模式,第一个括号匹配到一个字符
console.log(/(?<=(\d+)(\d+))$/g.exec('12034'));