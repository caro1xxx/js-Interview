浏览器加载的顺序是从上到下的,加载和渲染为同步进行
加载不会阻塞下载,解析会阻塞下载
js解析的时候会阻塞其他的加载
一般浏览器会在后面解析js,因为js有可能会改变dom结构
浏览器加载资源顺序:
  最高级:html,css,font
  然后:js,xhr
  然后是多媒体:图片-语音-视频
  最后是:prefetch预加载的资源
  同步的xhr请求优先级最高
  如果图片在可视化范围内,那么有限加载图片