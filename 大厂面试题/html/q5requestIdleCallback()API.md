#### 什么是requestIdleCallback

> 当关注用户体验，不希望因为一些不重要的任务（如统计上报）导致用户感觉到卡顿的话，就应该考虑使用requestIdleCallback。因为requestIdleCallback回调的执行的前提条件是当前浏览器处于空闲状态

```js
requestIdelCallback(myNonEssentialWork);
    
    
function myNonEssentialWork (deadline) {

    // deadline.timeRemaining()可以获取到当前帧剩余时间
    while (deadline.timeRemaining() > 0 && tasks.length > 0) {
        doWorkIfNeeded();
    }
    if (tasks.length > 0){
        requestIdleCallback(myNonEssentialWork);
    }
}
```

#### requestIdleCallback和requestAnimationFrame有什么区别

> requestAnimationFrame的回调会在每一帧确定执行，属于**高优先级任务**，而requestIdleCallback的回调则不一定，属于**低优先级任务**。 我们所看到的网页，都是浏览器一帧一帧绘制出来的，通常认为FPS为60的时候是比较流畅的，而FPS为个位数的时候就属于用户可以感知到的卡顿了

>  假如某一帧里面要执行的任务不多，在不到16ms（1000/60)的时间内就完成了上述任务的话，那么这一帧就会有一定的空闲时间，这段时间就恰好可以用来执行requestIdleCallback的回调

> 当程序栈为空页面无需更新的时候，浏览器其实处于空闲状态，这时候留给requestIdleCallback执行的时间就可以适当拉长，最长可达到50ms，以防出现不可预测的任务（用户输入）来临时无法及时响应可能会引起用户感知到的延迟

#### Timeout

> 由于requestIdleCallback利用的是帧的空闲时间，所以就有可能出现浏览器一直处于繁忙状态，导致回调一直无法执行，这其实也并不是我们期望的结果（如上报丢失），那么这种情况我们就需要在调用requestIdleCallback的时候传入第二个配置参数timeout了

```js
requestIdleCallback(myNonEssentialWork, { timeout: 2000 });

function myNonEssentialWork (deadline) {
  // 当回调函数是由于超时才得以执行的话，deadline.didTimeout为true
  while ((deadline.timeRemaining() > 0 || deadline.didTimeout) &&
         tasks.length > 0) {
       doWorkIfNeeded();
    }
  if (tasks.length > 0) {
    requestIdleCallback(myNonEssentialWork);
  }
}>
```

#### 注意:强烈建议不要使用requestIdelCallback()进行dom操作











