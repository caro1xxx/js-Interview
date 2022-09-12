> 解释：.then 或者 .catch 的**参数期望是函数**，传入**非函数**则会发生**值穿透**

> 当then中传入的不是函数，则这个then返回的promise的data，将会保存上一个的promise.data。这就是发生值穿透的原因。而且每一个无效的then所返回的promise的状态都为resolved

```js
//例子
Promise.resolve(1)
	.then(2)
	.then(Promise.resolve(2))
//输出1
//这里因为then接受到的不是一个函数,进而这些无效的then都没有效果,导致resolve(1)穿透到了最后,所以最后结果是1

//正确例子
Promise.resolve(1)
	.then((value)=>{
  	console.log(value)
	})
  .then((value)=>{
  		Promise.resolve(2)
      console.log(value)
  })
//输出2
```

