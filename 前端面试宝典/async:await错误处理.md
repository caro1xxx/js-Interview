#### Async/await常规错误处理

```js
function async foo(){
  try{
    const result = await fetch();
    return result
  }catch(error){
    return error
  }
}
```

#### 理解

> 当我们出现要处理多个异步函数的时候我们就需要写大量的try{}catch,那么有没有更加优雅的呢?

await后面的执行函数本来就是返回的Promise,那么promise是怎么错误处理的呢?

对的就是catch,在async内同样使用

```js
function async foo(){
  const result = await fetch().catch(error){return error}
  return result
}
```

> 但是这样写了还是会出现大量的catch

#### 进阶

封装函数

```js
function awaitWrap(promise){
  return promise.then((value)=>{
    return value
  }).catch(error){
		return error
  }
}

function async foo(){
  const result = await awaitWrap(fetch)
  return result;
}
```