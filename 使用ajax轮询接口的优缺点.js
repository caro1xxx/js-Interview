ajax轮询接口:
  使用setInterval定时重复执行访问接口
优点:
  无学习成本(不用学习websocket)
  使用简单
缺点:
  相比于websocket性能较差,并且一直在使用定时器任务,对内存有消耗
  对服务器接口的访问频繁