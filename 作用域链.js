作用域链指的是代码执行时,
查找变量的规则,
先在当前自身的作用域查找,
找不到在往上级作用域查找,
查不到的话直至全局环境,
如果还没有找到那么就会报错
当然全局环境不能访问局部作用域的变量