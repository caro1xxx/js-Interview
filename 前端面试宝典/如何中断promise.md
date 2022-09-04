> 我们需要知道是promise是无法**终止**的,但是有办法可以**中断**

> 那么如何让一个promise中断呢?

#### Try...catch

> (Try...catch)一种方法是在then中直接**抛错**, 这样就不会执行后面的then, 直接跳到catch方法打印err(**但此方法并没有实际中断**)。但如果**链路中对错误进行了捕获，后面的then函数还是会继续执行**

#### 最优解

> 因为promise.then((onFulfilled,onRejected)),这个then本质上是接受到promise返回出来的一个promise,来决定是执行onFulfilled,还是onRejected,但是如果返回的这个promise并没有决定状态,那么then将无法进行判断,自然而然的就无法往下执行了

```js
let myPromise = new Promise()
myPromise.resolve().then(()=>{
	 console.log('then 1')
  //这里的return一个新的promise就起到决定性的作用,因为这个promise并没有从pending状态改变,导致then无法进行判断,catch也不会捕获,因为没有出错嘛,只是一直在等待promise的状态改变,从而中断了promise链
   return new Promise(() => {})
}).then(()=>{
  console.log('then 2')
}).catch((err) => {
    console.log(err)
})

//output
//then 1
```

