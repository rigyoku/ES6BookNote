// 使用修饰器处理方法,在调用之时发布事件
import postal from 'postal/lib/postal.loadash';
let publish = function (topic, channel) {
	return function (target, name, des) {
		let val = des.value;
		des.value = function () {
			let value = val.apply(null, arguments);
			postal.channel(channel || target.channel || '/').publish(topic, value);
		}
	}
}
class Ly {
	@publish('Ly.log', 'log')
	log(val) {
		console.log(val);
	}
}
// 在log频道触发Ly.log事件