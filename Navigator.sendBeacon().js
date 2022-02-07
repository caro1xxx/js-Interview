Navigator.sendBeacon():
  主要解决的是离开页面和刷新页面数据提交问题
  如果使用xhr异步的对数据进行提交,会出现离开了页面后,xhr无法找到函数,从而报错
  function not defined
  如果使用ajax同步通信可以解决这个问题,但是会出现一个新问题,就是
  页面会等到ajax发送完毕后才会关闭当前页面,如果一致ajax得不到结果,页面就迟迟不会跳转到下个页面,会出现卡顿
  Navigator.sendBeacon()解决了这个问题