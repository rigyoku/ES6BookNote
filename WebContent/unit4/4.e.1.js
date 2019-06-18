// 字符串模板存在限制,字符的转义导致解析出错,*这里的字符串被解析成unicode编码
console.log(`\unicode`);
console.log(`\\unicode`);
// es6有一个提案,放松对标签模板里模板字符串转义限制,不合法的转义会返回undefined,并从raw属性得到原始字符串
// 但是仅对于标签模板,其他情况的模板字符串还是会报错