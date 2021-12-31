未声明:
  在调用或读取时会直接报错
未定义:
  在调用时值是undefined

var a;
console.log(a);//undefined
console.log(b);//referenceError

但是在使用typeof判断时,它们俩结果都为undefined
