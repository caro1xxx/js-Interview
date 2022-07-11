// 作用域:即变量(变量作用域又称上下文)和函数生效（能被访问）的区域或集合

换句话说,作用域决定了变量和其他资源的`可见性`

function myFunction() {
  let inVariable = "函数内部变量";
}
console.log(inVariable); // Uncaught ReferenceError: inVariable is not defined

// 我们在全局是无法获取到（闭包除外）函数内部的变量

作用域:
  全局作用域
  函数作用域
  块级作用域


// 全局作用域
// 任何不在函数内或者花括号内中声明的变量,都是全局作用域下声明的变量,可以在任意位置访问
// 如果在全局环境下进行let声明变量,那么这个变量还是全局作用域下的变量
var greeting = 'Hello World!';
function greet() {
  console.log(greeting);
}
//'Hello World!'
greet();


// 函数作用域
// 又称局部作用域,在函数中声明的变量,就只有函数内可以访问到
function foo(){
  var x = 1;
}
console.log(x)// Uncaught ReferenceError


// 块级作用域
// 在花括号内用let/const声明的变量,只有在相同的花括号内访问,其他位置访问不到
{
  let bar = 1;
}
console.log(bar)// Uncaught ReferenceError



词法作用域:
  词法作用域又称静态作用域,`变量被创建时就确定好了,而非执行阶段确定的`,即我们在编写代码时就确定好了
  JavaScript 遵循的就是词法作用域

// 该a是全局作用域下的
var a = 2;
function foo(){
    console.log(a)
}
function bar(){
    //该a是函数作用域下的
    var a = 3;
    foo();
}
n()
// 1. n()调用
// 2. bar函数内声明a变量
// 3. 调用foo()
// 4. 执行foo中的log寻找a变量,这里找的是全局作用域中的a,因为foo函数定义时就是在全局作用域下的
// 5. 相同层级的 foo 和 bar 就没有办法访问到彼此块作用域中的变量,输出 2



作用域链
  当使用一个变量是,首先js引擎在当前作用域中寻找变量,如果当前作用域中没有,则向上作用域中找,最后到了全局作用域
  还没有找到,如果在全局作用域里仍然找不到该变量,它就会在`全局范围内隐式声明该变量`(非严格模式下)或是直接报错

这个依次向上查找变量的链条就是作用域链

// 🌰
var foo = 1;
function bar() {
  console.log(foo)
  var bar = 2;
  function qux(){
    var foobar = 3;
    console.log(bar)
  }
  console.log(bar)
  function etc(){
    console.log(foobar)
  }
}

// foo 1
// bar 2
// bar 2
// foobar: Uncaught ReferenceError