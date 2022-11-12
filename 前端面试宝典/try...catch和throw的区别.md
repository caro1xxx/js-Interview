首先try...catch,catch接受一个error参数,这个error参数身上会有两个属性*messgae,和stack,都是系统自带*

```js
try{
	...
}catch(e){
	console.log(e.message);
  console.log(e.stack)
}
```

当需要自定义错误时,就可以使用throw,但是*throw是无法访问到这两个属性的*

```js
try{
	...
  throw('错误')
}catch(e){
  console.log(e)  //错误
	console.log(e.message); //undefined
  console.log(e.stack)//undefined
}
```

throw new Error也是自定义错误的,但是可以访问message,stack

```js
try{
	...
  throw new Error('错误')
}catch(e){
  console.log(e)  //错误
	console.log(e.message); //错误
  console.log(e.stack)//xxx:Error:错误
}
```

