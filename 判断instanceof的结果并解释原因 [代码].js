判断:
function test(){ 
  return test; 
} 
new test() instanceof test;  //返回false还是true


如果函数明确返回 non-primitive 值，那么 new 运算符的结果将是这个值
所以，原表达式相当于：test instanceof test

instanceof 运算符将检测右端值的 prototype 属性是否在左端值的原型链（[[Prototype]] 属性）上


左端值 test 是一个 Function，故它的原型链为：
  Function.prototype -> Object.prototype -> null

可以看到，原型链上没有 test.prototype 出现，所以 test 并不是 test 的一个实例

所以返回false