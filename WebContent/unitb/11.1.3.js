// Set实例提供4个遍历方法: keys / values / entries / forEach. 注意Set的遍历顺序就是添加成员的顺序,可用于顺序执行回调
// keys / values / entries方法都是遍历器方法. 由于Set没有键名只有键值,所以keys和values的行为一致
let set = new Set([1, 2]);
for (let a of set.keys()) {
	console.log('a : ' + a);
}
for (let b of set.values()) {
	console.log('b : ' + b);
}
// 而应该返回键值对的entries方法,每次输出返回一个数组,key和value相等
for (let c of set.entries()) {
	console.log('c : ' + c);
}
// set的默认遍历器就是values方法
console.log(Set.prototype[Symbol.iterator] === Set.prototype.values);
// 这意味着可以省略values直接用for...of遍历
for (let d of set) {
	console.log('d : ' + d);
}

// forEach遍历Set,并对每个成员执行其操作,没有返回值,第一个参数是操作方法,第二个参数是this指向
set.forEach(x => console.log('x : ' + x + 1));

// 扩展运算符内部使用for...of循环,所以set可以使用扩展运算符展开并去重
console.log([...new Set([1, 2, 1])]);
// 数组的map和filter方法也可以用于Set
console.log(new Set([...set].map(x => x + x)));
console.log(new Set([...set].filter(x => x > 1)));
// 使用filter实现交集和差集
let set2 = new Set([2, 3]);
// 交集
console.log(new Set([...set].filter(x => set2.has(x))));
// 差集
console.log(new Set([...set].filter(x => !set2.has(x))));
// 并集
console.log(new Set([...set, ...set2]));

// Set在遍历时不能改变成员,但是有变通方法,可以映射成新map赋值回去,或者利用Array.from方法重构set并赋值回去
set2 = new Set([...set2].map(x => x + x));
console.log(set2);
set2 = new Set(Array.from([...set2], x => x + x));
console.log(set2);