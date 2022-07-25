> bind,call,apply都是改变函数**运行时**的this指向

#### apply

> 接收两个参数,参数1是this的指向,参数2是传入函数的参数,为**array**

```js
function foo(..arg){
	console.log(arg)
}

const obj = {
  age:19
}

foo.apply(obj,[1,2]);
//[1,2]

foo.apply(undefined,1)
//this指向window
```

> 当apply第一个参数为undefined或者null时,this将指向window
>
> **apply改变this是临时的**

#### call

> 接收两个参数,参数1是this的指向,参数2是传入函数的参数,为**列表**

> 当call第一个参数为undefined或者null时,this将指向window

> **call改变this是临时的**

```js
function foo(..arg){
	console.log(arg)
}

const obj = {
  age:19
}
//注意:call传入的是参数列表了,不是数组
foo.call(obj,1,2,3,4);
//[1,2]

foo.apply(undefined,1)
//this指向window
```

#### bind

> 参数1:this指向,后续参数为函数参数**列表**
>
> **bind是永久改变this指向**
>
> 参数2的列表**可以分开传入**,但是**首次必须传入this指向**,否则执行window

> **bind不是立即执行,而是需要再执行一次才会真正执行**

```js
function bar(..arg){
  console.log(arg)
}

const obj = {
  name:'lucy'
}

const bindFoo = bar.bind(obj);
bindFoo(1,2,3,4)
//1,2,3,4
bindFoo(4)
//4
```

#### 实现bind

```js
Function.prototype.fakeBind = function (context){
  //splice(1)是要把参数1排除掉
  const args = [...arguments].splice(1);
  const self = this;
  let func = function (){}
  return fn(){
    return self.apply(this instanceof func ? this : context, args.concat([].slice.call(arguments)))；
  }
}
```

