// es5判断2个值是否相等,只能用 == 或者 ===. 存在各自的缺陷,前者会默认类型转换,后者不能正确判断NaN,-0和+0
console.log('0' == 0);
console.log(NaN === NaN);
console.log((-0) === (+0));

// es6提出了同值相等算法[Object.is()],用来判断值是否严格相等
console.log(Object.is('0', '0'));
console.log(Object.is('0', 0));

// 大部分情况和 === 一致,除了认为NaN相等 和 +0/-0不等
console.log(Object.is(+0, -0));
console.log(Object.is(NaN, NaN));