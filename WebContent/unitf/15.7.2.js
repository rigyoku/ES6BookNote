// map和set具有原生的iterator接口,可以直接遍历
let map = new Map();
map.set('name', 'ly');
map.set('sex', 'boy');
for (let m of map) {
	console.log(m);
	let [name, sex] = m;
	// map遍历得到的是一个数组,2个元素分别是key和value
	console.log(`name: ${name} sex: ${sex}`);
}
let set = new Set();
set.add('ly');
set.add(24);
for (let s of set) {
	console.log(`s: ${s}`);
}