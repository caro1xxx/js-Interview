js数据类型:
原始类型:String,Number,undefined,Null,Boolean
引用类型:Object

在js引擎中对变量的存储主要有两种方式,堆内存和栈内存

栈内存用于存储基本类型,堆内存存储引用类型

传递参数:
function foo(params) {
  params+=1;
  return params;
}
var num = 1;
var result = foo(num);
console.log(result); // 2
console.log(num); //1
这个demo看出参数传递(原始类型)是值传递

function bar(obj) {
  obj.name = 'jack';
  return obj;
}
var person = new Object();
person.name = 'lucy';
var result = bar(person);
console.log(bar.name); //jack
console.log(result.name); //jack
这个demo看出参数传递(引用类型)好像是引用传递,但是实际上是传递了"指针"的这个值

function baz(obj) {
  obj.name = 'jon';
  obj = new Object();
  obj.name = 'David';
  return obj;
}
var person = new Object();
person.name = 'lucy';
var result = baz(person);
console.log(result.name); //David
console.log(person.name); //lucy

当我们把person传递进去的时候,实际是传递了'指针'(就是它的内存地址)这个值,并不是person本身.
那么传递baz函数是perosn和obj相同内存地址,因此改变了obj.name的值就是改变了person.name的值
当 obj 赋于一个新的内存地址的时候 ，obj的内存地址就和person的内存地址不是同一个了，因此改
变了obj.name的时候 person.name是不会改变的


`因此，函数参数传递的是内存地址这个值，函数传递参数就是按值传递的`