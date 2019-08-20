// Trait也是一种修饰器,效果和Mixin类似,但是提供了更多的功能.比如防止同名方法混入冲突,排除某些方法,为混入的方法起别名
// traits-decorator模块,提供了traits修饰器,不仅可以接收对象作为参数,还可以接收es6的类作为参数
import {traits, excludes} from 'traits-decorator';
class P {
	say() {

	}
}
let O = {
	log() {

	}
}
// 通过traits方法混入P类和对象O,使得C类的实例获得say和log方法
@traits(P, O)
class C {

}
// traits混入同名的方法会报错,使用excludes可以排除某些方法
let P2 {
	say() {

	}
	log() {

	}
}
// 使用excludes排除了类P2的say方法的混入,就不会出现同名混入报错
@traits(P, P2:: excludes('say'))
class C2 {

}
// 为类P2的say方法起别名,也可以避免同名报错
@traits(P, P2::alias({say: 'p2Say'}))
class C3 {

}
// excludes和alias可以一起使用,下面将P2的say忽略并将log方法起别名
@traits(P, P2::excludes('say')::alias({log: 'p2Log'}))
class C4 {

}
// 可以使用as完成上述操作
@traits(P, P2::as({excludes: ['say'], alias: {log: 'p2Log'})})
class C5 {

}