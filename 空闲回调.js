空闲回调(requestIdleCallback):
  requestIdleCallback():插入一个函数,这个函数在浏览器空闲时间调用
语法:
  var handle = window.requestIdleCallback(callback,[options])
  返回一个id,可以传入cancelIdleCallback()方法取消回调
  