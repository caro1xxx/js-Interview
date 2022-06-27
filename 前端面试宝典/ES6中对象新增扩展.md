#### ES6新增

1. 属性的简写
2. 属性名表达式
3. super关键字
4. 扩展运算符
5. 属性的遍历
6. 对象新增的方法

#### 属性的简写

> 当对象key：value相等时，是可以进行简写的

```js
const bar = {foo:foo}
===
const bar = {foo}
```

> 方法也可以简写

> 简写的对象方法不能用作构造函数，否则会报错

#### 属性名表达式

> 允许字面量定义对象时，将表达式放在括号内

```js
let lastWord = 'last word';

const a = {
  'first word': 'hello',
  [lastWord]: 'world'
};

a['first word'] // "hello"
a[lastWord] // "world"
a['last word'] // "world"
```

> 属性名表达式与简洁表示法，不能同时使用，会报错

#### super关键字

> 新增关键字super,指向当前对象的原型对象

```js
const proto = {
  foo: 'hello'
};

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
};

Object.setPrototypeOf(obj, proto); // 为obj设置原型对象
obj.find() // "hello"
```

#### 扩展运算符

> 未被读取的可遍历的属性，分配到指定的对象上面

```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }
```

> 解构赋值是浅拷贝

> 对象的扩展运算符等同于使用`Object.assign()`方法

#### 属性的遍历

> ES6 一共有 5 种方法可以遍历对象的属性

1. for in 遍历自身和继承的可枚举属性（排除Symbol）
2. Object.keys(obj) f返回自身的所有可枚举属性（排除symbol和继承）
3. Object.getOwnPropertyNames(obj) 返回数组，包含自身所有属性包括不可枚举（排除symbol）的键名
4. Object.getOwnPropertySymbols(obj) 包含对象自身的所有 Symbol 属性的键名
5. Reflect.ownKeys(obj) 包含自身的所有键名（排除继承）不管键名是什么

> 上面方法都**遵守同样的属性遍历的次序规则**

* 首先遍历所有**数值**键，按照数值**升序排列**
* 其次遍历所有**字符串**键，按照**加入时间**升序排列
* 最后遍历所有 **Symbol** 键，按照**加入时间**升序排

#### 新增方法

....