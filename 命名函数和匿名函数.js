命名函数:
  通常通过函数名来调用函数

匿名函数:
  不会有函数名,通常通过事件回调或赋予变量调用;




var baz = function foo(){
  console.log(1);
}

var bar = function (){
  console.log(1);
}
console.log(baz.name); //foo
console.log(bar.name); //bar