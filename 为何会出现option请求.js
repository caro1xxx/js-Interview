OPTION:预检测请求,其作用是检测浏览器的同源策略
  浏览器限制跨域请求一般有两种方式
    1.浏览器限制跨域请求
    2.跨域请求可以正常发起,但是返回的结果被浏览器屏蔽
    一般浏览器是根据第二种情况进行同源策略,虽然数据被浏览器屏蔽了,但是请求可能已经对服务器数据产生了影响,
    为了规避这种情况,在这之前进行一次预检测请求,看服务器是否运行进行跨域请求,如果允许则携带数据进行真是请求