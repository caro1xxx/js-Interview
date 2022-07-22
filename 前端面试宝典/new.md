#### 创建

> new操作符用于创建一个**给定构造函数的实例对象**

```js
function Person(){
  this.name = 'jack';
  this.age = 18;
}

const child = new Person();
child.name //jack
```

> 1. new创建的实例对象能够访问到构造函数中的属性
>
> 2. new创建的实例对象能够访问到构造函数的原型链上的属性(**代表new将实例对象和原型链连接了**)

#### 构造函数中的return

> 由new创建的实例对象的构造函数中即便**有return也无效(原始值无效,复杂类型有效)**

```js
//return基本数据类型
function Person(){
  this.name = 'jack';
  this.age = 18;
  return 1;
}

const child = new Person();
//这里并不会打印1
child.name //jack


//return复杂数据类型
function Person(){
  this.name = 'jack';
  this.age = 18;
  return {name:'lucy'};
}

const child = new Person();
child.name //lucy
child.age //undefined
```

#### new创建基本流程

1. 创建一个新的对象
2. 将对象和构造函数原型链连接起来
3. 构造函数中的this绑定到新对象上
4. 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理

```js
function Person(){
  this.name = 'jack';
  this.age = 18;
  return 1;
}

const child = new Person();

//1.开始执行new
//2.创建一个空对象{}
//3.{}.__proto__ = Person.prototype
//4.{name:'jack,age:18}
//5.判断Person函数return的是否是一个复杂类型数据
//6.创建完毕

child.name //jack
```

#### 手写new

```js
function fakeNew(fn,...args){
  //创建空对象
  let obj = {};
  //连接原型链
  obj.__proto__ == fn.prototype;
  //绑定this
  let result = fn.apply(obj, args);
  //判断return
  return result instanceof Object ? result : obj
}
```

