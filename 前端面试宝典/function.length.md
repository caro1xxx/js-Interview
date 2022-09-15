> function的length怎么算?

```js
function f1(name){}
function f2(name='jack'){}
function f3(name= 'jack',age){}
function f4(name,age=18,gender){}

f1.length  == 1
f2.length  == 0
f3.length  == 0
f4.length  == 1
```

> 可以看出函数的length**是默认值参数之前的参数的个数**,默认值后面的包括默认值参数自己都不会纳入函数length内

