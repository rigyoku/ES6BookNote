// 混入就是对象继承的一种替代方案.
let log = {
	log() {
		console.log('ly');
	}
}
class Ly {

}
Object.assign(Ly.prototype, log);
new Ly().log();
let mix = function (...list) {
	return function (target) {
		Object.assign(target.prototype, ...list);
	}
}
@mix(log)
class Ly2 {

}
new Ly2().log();
// 这种做法会修改prototype,使用继承可以不修改prototype.在目标类和父类直接使用混入类缓冲
class P {
	log() {
		console.log('P');
	}
}
let mixP1 = function (p) {
	return class extends p {
		log() {
			super.log();
			console.log('P1');
		}
	}
}
let mixP2 = function (p) {
	return class extends p {
		log() {
			super.log();
			console.log('P2');
		}
	}
}
class C extends mixP2(mixP1(P)) {
	log() {
		super.log();
		console.log('C');
	}
}
new C().log();