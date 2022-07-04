// 即装饰器
// 能够在不改变原类和使用继承的情况下，动态地扩展对象功能的设计理论

// 定义一个类
// 增强
@strong
class soldier{
}

// 新增装饰器
function strong(target){
  target.AK = true
}

let P = new soldier();


// Decorator两大优点：
  // 1.代码可读性变强了，装饰器命名相当于一个注释
  // 2.在不改变原有代码情况下，对原来功能进行扩展
// Docorator修饰对象为下面两种：
//   类的装饰
//   类属性的装饰



类的装饰
// 当对类本身进行装饰的时候，能够接受一个`参数`，即`类本身`
// 分解
@decorator
class A {}
// 等同于
class A {}
A = decorator(A) || A;


// 如果想要传递参数，可以在`装饰器外层`再封装`一层函数`
// 接收一个参数
function testable(isTestable) {
  //return出去 target是目标类
  return function(target) {
    target.isTestable = isTestable;
  }
}

@testable(true)
class MyTestableClass {}
MyTestableClass.isTestable // true

@testable(false)
class MyClass {}
MyClass.isTestable // false


类属性的装饰
当对类属性进行装饰的时候，能够接受三个参数：
  // 类的`原型`对象
  // 需要装饰的属性名
  // 装饰属性名的描述对象

// target目标原型对象,name即原型对象里面的属性,descriptor即原型对象的四个描述符之一:如可枚举,可读,可迭代
function readonly(target, name, descriptor){
  descriptor.writable = false; // 将可写属性设为false
  return descriptor;
}

class Person {
  // 装饰在类内部
  @readonly
  name() { return `${this.first} ${this.last}` }
}

// 等同

readonly(Person.prototype, 'name', descriptor);


如果存在多个装饰器,那么就是从`外到内进入`,从`内到外执行`

装饰器`不能用于修饰函数`，因为函数存在变量声明情况