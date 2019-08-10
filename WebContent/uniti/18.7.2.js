// for...of循环用来遍历同步的iterator接口,而for await...of用来遍历异步的遍历器
for await(let a of asyncIterator) {
	// 循环自动调用遍历器得到promise对象,await进行处理,并在resolve时候得到返回值a
	console.log(a);
}

// 如果返回的promise对象reject了,那么for await...of就会报错,需要使用try...catch捕捉
try {
	for await(let b of asyncIterator) {
		console.log(b);
	}
} catch (e) {
	console.log('reject');
}

// 在async中await可以接同步操作,所以for await...of也可以进行同步的遍历
// 注意for await...of使用了await,需要在async函数内使用