// 为函数参数解构时,赋予默认值需要指定数组或对象
let f1 = function({a = 0} = {}, [b = 0] = [], {c} = {c: 0}, [d] = [0]) {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
	console.log('---');
};
f1({a: 3});
// 同理undefined触发默认值
f1(undefined, [1]);
// 分别为 0 0 undefined undefined 因为前2个参数分别是为a,b赋予默认值0 第三,四个参数是c,d赋予默认值对象,数组
f1({}, [], {}, []);