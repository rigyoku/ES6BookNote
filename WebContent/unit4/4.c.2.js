// 根据标签模板的参数生成规则,可以写对应标签处理字符串
let a = 1;
let b = 2;
let logout = function(args, num1, num2) {
		console.log(args);
		console.log(num1);
		console.log(num2);
	};
logout `Hi ${a + b} ly ${a - b}`;

// 将各个变量和字符串的位置还原
let reset = function(arr) {
		let i = 0;
		let ret = '';
		while(i < arr.length){
			ret += arr[i++];
			if (i < arguments.length) {
				ret += arguments[i];
			}
		}
		console.log(ret);
	};
reset `Hi ${a + b} ly ${a - b}`;

//将各个变量和字符串的位置还原
let reset2 = function(arr,...values) {
		let i = 0;
		let ret = '';
		for (; i < values.length; i++) {
			ret += arr[i] + values[i];
		}
		ret += arr[i];
		console.log(ret);
	};
reset2 `Hi ${a + b} ly ${a - b}`;