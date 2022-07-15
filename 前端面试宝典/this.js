//函数中的this和js中的this表现略有不同
// 严格模式和非严格模式下也有些差异

// 绝大多数情况下，函数的调用方式决定了 this 的值（运行时绑定）
// this 关键字是函数运行时自动生成的一个内部对象，只能在函数内部使用，总指向调用它的对象
// 同时，this在函数执行过程中，this一旦被确定了，就不可以再更改

绑定规则: * 默认绑定 * 隐式绑定 * new绑定 * 显式绑定;

默认绑定
var name = 'Jenny';
function person() {
    return this.name;
}
//调用位置在全局,所以this指向window
console.log(person());  //Jenny

// 严格模式下,不要把this执行全局,否是this指向undefined

隐式绑定
function test() {
  console.log(this.x);
}

var obj = {};
obj.x = 1;
//将test赋值给obj.m
obj.m = test;
// 此时m就是test,但是test的调用位置变为了obj内,所以指向obj,输出obj.x
obj.m(); // 1

// this如果在一个对象内容调用,那么只会找它所在位置的上一级,如果上一级没有
// ,而上一级的上一级有,那么this会是undefined,因为只会找一级

// 特殊情况
var o = {
  a:10,
  b:{
      a:12,
      fn:function(){
          console.log(this.a); //undefined
          console.log(this); //window
      }
  }
}
// 注意:这里fn被赋值给了j,j处于全局,即便fn实在b对象中,但是调用的时候是直接调用j的,那么this还是会指向全局
// 这就是所谓的**运行时确定**
var j = o.b.fn;
// this永远指向的是最后调用它的对象
j();



new绑定
function test() {
    this.x = 1;
  }
  // 通过new实例化,this就会指向实例化对象
var obj = new test();
obj.x // 1

// 特殊情况
function fn()  
{  
    this.user = 'xxx';  
    // 因为这里return了一个对象,导致this指向了这个对象,而这个对象中没有user,所以undefined
    // 如果只是return一个简单类型数据,那么this还是只想实例化对象
    // 注意:return null 即便null是对象,但是new仍然还是可以指向实例化对象
    return {};  
}
var a = new fn();  
console.log(a.user); //undefined


显式绑定
// 通过:apply()、call()、bind()
var x = 0;
function test() {
  console.log(this.x);
}
var obj = {};
obj.x = 1;
obj.m = test;
obj.m.apply(obj) // 1


箭头函数
// 箭头函数可以让我们在书写代码时就确定this指向(编译时绑定)

优先级
new绑定优先级 > 显示绑定优先级 > 隐式绑定优先级 > 默认绑定优先级