// 正则使用圆括号进行组撇配
let reg1 = /(\d{4})-(\d{2})-(\d{2})/;
var arr1 = reg1.exec('1995-07-22');
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
// 具名组匹配提案: 为每个组匹配指定名字,方便阅读和引用 $<..>起名
let reg2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
var arr2 = reg2.exec('1995-07-22');
console.log(arr2.groups.year);
console.log(arr2.groups.month);
console.log(arr2.groups.day);
// 即使组名匹配失败,arr2.groups.day的值是undefined,但是day这个属性名依然存在