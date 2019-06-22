// Math的hypot方法,返回每个参数平方的和的平方根
console.log(Math.hypot(3, 4));
// 非数字参数先调用Number方法转成数字
console.log(Math.hypot(3, '4'));
// 转换数字失败返回NaN
console.log(Math.hypot(3, NaN));

// Math的expm1方法,返回e的x次方-1,相当于Math.exp(x) - 1
console.log(Math.exp(1) - 1);
console.log(Math.expm1(1));
console.log(Math.expm1(0));
console.log(Math.expm1(-1));
// Math的log1p方法,返回ln(1 + x),即Math.log(1 + x)
console.log(Math.log(2));
console.log(Math.log1p(1));
console.log(Math.log1p(-1));
console.log(Math.log1p(-2));
// Math的log10方法,返回以10为底的x的对数
console.log(Math.log10(-1));
console.log(Math.log10(0));
console.log(Math.log10(1));
// Math的log2方法,返回以2为底的x的对数
console.log(Math.log2(-1));
console.log(Math.log2(0));
console.log(Math.log2(1));

// es6新增了双曲函数方法,以下分别为双正弦,双余弦,双正切,反双正弦,反双余弦,反双正切
console.log(Math.sinh(1));
console.log(Math.cosh(1));
console.log(Math.tanh(1));
console.log(Math.asinh(1));
console.log(Math.acosh(1));
console.log(Math.atanh(1));