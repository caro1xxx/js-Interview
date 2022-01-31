var A = function() {};
var b = new A();
A.prototype = {
	n: 0,
	m: 1
}
和以下方式的声明有什么区别，为什么？

var A = function() {};
var b = new A();
A.prototype.n = 0;
A.prototype.m = 1;

前者是把原型赋值了一个新对象
而后者是在原型原有基础上添加属性