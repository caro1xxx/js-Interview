```js
function F () {
 this.a = 3;
 return {
   a: 4;
 }
}

const f = new F();
console.log(f.a);
```

> 输出4
>
> new操作符默认返回this对象，但是如果手动指定了返回对象(return {...}) ，则new出来的实例指向手动return的对象