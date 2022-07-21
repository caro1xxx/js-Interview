#### typeof

> 返回一个字符串,表示**未经计算**的操作数的类型

> 注意:typeof对null进行判断会返回object,但是null并不是object,如果需要判断null用===

#### instanceof

> 返回boolean值

> 用于判断**构造函数**的prototype属性是否出现在**某个实例对象的原型链上**

> 构造函数通过`new`可以实例对象，`instanceof `能判断这个对象是否是之前那个构造函数new出来的对象

```js
function myInstanceof(left, right) {
    // 这里先用typeof来判断基础数据类型，如果是，直接返回false
    if(typeof left !== 'object' || left === null) return false;
    // getProtypeOf是Object对象自带的API，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(left);
  	//一直在原型链上查找,直到找到目标或者null
    while(true) {                  
        if(proto === null) return false;
        if(proto === right.prototype) return true;//找到相同原型对象，返回true
     		//获取下一层原型链对象
        proto = Object.getPrototypeof(proto);
    }
}
```

#### 区别

> typeof用于判断基础数据类型(null除外),除了可以判断function以外无法再判断其他复杂引用数据类型

> instanceof用于判断复杂引用数据类型,但是无法判断基础数据类型



> 注意:如果需要通用检测数据类型，可以采用`Object.prototype.toString`，调用该方法，统一返回格式`“[object Xxx]” `的字符串

```js
Object.prototype.toString({})       // "[object Object]"
Object.prototype.toString.call({})  // 同上结果，加上call也ok
Object.prototype.toString.call(1)    // "[object Number]"
Object.prototype.toString.call('1')  // "[object String]"
Object.prototype.toString.call(true)  // "[object Boolean]"
Object.prototype.toString.call(function(){})  // "[object Function]"
Object.prototype.toString.call(null)   //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(/123/g)    //"[object RegExp]"
Object.prototype.toString.call(new Date()) //"[object Date]"
Object.prototype.toString.call([])       //"[object Array]"
Object.prototype.toString.call(document)  //"[object HTMLDocument]"
Object.prototype.toString.call(window)   //"[object Window]"
```



