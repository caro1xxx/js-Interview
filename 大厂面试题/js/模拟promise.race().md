> 接受一个promise迭代器，这个迭代器中的第一个返回的结果的promise将会是这一组promise的结果，不管是成功与否，只要不是pending

```js
Promise.race = function (promiseArray){
  return new Promise ((resolve,reject)=>{
    promiseArray.forEach(item=>{
      Promise.resolve(item).then(
      	value=>{
          resolve(value)
        },
        reason=>{
          reject(reason)
        }
      )
    })
  })
}
```

