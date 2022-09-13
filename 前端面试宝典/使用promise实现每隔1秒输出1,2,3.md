```js
//普通实现

//首先一个resolve状态的promise
Promise.resolve()
 //执行then
  .then((value) => {
   //这里需要return 一个function,为了让后续的then可以继续执行,所以return一个Promise,这个Promise会在1秒后执行,然后这个then的状态变为resolve
    return new Promise((reslove) => {
      setTimeout(() => reslove(console.log(1)), 1000);
    });
  })
  //等待上一个return的Promise结果出来,然后执行
  .then((value) => {
    return new Promise((reslove) => {
      setTimeout(() => reslove(console.log(2)), 1000);
    });
  })
  //等待上一个return的Promise结果出来,然后执行
  .then((value) => {
    return new Promise((reslove) => {
      setTimeout(() => reslove(console.log(3)), 1000);
    });
  });
```

```js
//简洁实现

const arr = [1, 2, 3];
//使用reduce
//prev 前一个值
// next下一个
arr.reduce((prev, next) => {
  //因为初始值是一个决定的Promise,所以可以then
  return prev.then(() => {
    //在then return一个Promise,这个Promise会在setTimeout执行完毕后决定,所以后续的then会等待状态更改
    return new Promise((resolve) => {
      //注意这里setTimeout参数1是一个箭头函数
      setTimeout(() => resolve(console.log(next)), 1000);
    });
  });
  //参数3:初始值
}, Promise.resolve());

```



