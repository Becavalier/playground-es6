;(function(){

	// 如何创建数组？

	// 构造
	var arr = new Array();
	for(var i = 0; i < 5; i ++){
		arr[i] = i;
	}
	console.log(arr);

	// 简写
	var arr = [];
	for(var j = 0; j < 5; j ++){
		arr[j] = j;
	}
	console.log(arr);








	// 如何遍历数组?

	// 常用方式
	var len = arr.length;
	for(var i = 0; i < len; i ++){
		console.log(arr[i]);
		if(i == 4){
			break;
		}
	}

	// ES5
	arr.forEach(function(val){
		console.log(val);
		// 不能使用 return 和 break;
	});

	// ES6
	for(var val of arr){
		console.log(val);
		if(val == 4){
			break;
		}
	}








	// 如何创建对象？

	// 简写
	var obj = {
		attr_one:"attr_one",
		func_one:function(){
			console.log(arguments.callee);
		}
	};

	// 构造
	var obj = new Object();
	obj.attr_one = "attr_one";
	obj.func_one = function(){
		console.log(arguments.callee);
	};








	// 如何构造方法？

	// 函数式声明
	var func = function(){
		console.log(arguments.callee);
	};
	func.prototype.method_one = function(){
		console.log(arguments.callee);
	};
	func.prototype.attr_one = "attr_one";

	// 普通声明
	function func(){
		console.log(arguments.callee);
	}
	func.prototype.method_one = function(){
		console.log(arguments.callee);
	};
	func.prototype.attr_one = "attr_one";
	







	// 如何遍历对象？
	for(var attrs in obj){
		console.log(attrs);
	}

	var func_obj = new func();
	for(var attrs in func_obj){
		console.log(attrs);
	}








	// 如何遍历字符串？

	// ES6
	for(var char of "STRING"){
		console.log(char);
	}






	// ES6 迭代器

	function myFunc(){
		this.attr_one = "attr_one";
		this.func_one = function(){
			console.log("func_one");
		}
	}
	myFunc.prototype.prototype_func_one = function(){
		console.log("method_one");
	}
	myFunc.prototype.prototype_attr_one = "prototype_attr_one";

	// 为 myFunc 实现迭代器
	myFunc[Symbol.iterator] = function(){
		return this;
	}

	myFunc.next = function(){
		return {
			done: true, 
			value: 1
		};
	}

	var myFuncObj = new myFunc();

	// for-of
	for(var attr of myFuncObj){
		console.log(attr);
	}



})();
