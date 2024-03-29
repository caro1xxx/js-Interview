> http的长连接和短连接其实就是**TCP**的长连接和短连接,http属于**应用层协议**

#### 短连接

浏览器和服务器**每进行一次**http通信,就会建立一次连接,**通信结束就会断开连接**

#### 长连接

**http1.1**规定了**默认**保持长连接,也称为**持久连接**

即http通信结束后**不断开连接**,(不发RST包,不四次握手),**等待在同域下继续使用这个通道**

##### 优势

1. 同域下可以重复使用该通道,减少重新连接断开的消耗
2. 服务器可以利用这个连接**向客户端主动推送消息**(非WebSocket即是数据,只是必要的静态资源)

#### keep-alive

http头部带有`connection:Keep-Alive`字样的,代表客户端期望这次是长连接.但是并不代表一定是长连接,服务器可以忽略该字段(不按规则来)

> 实现长连接的前提是:服务器和客户端都要支持长连接

##### keep-alive优势

* 运行请求和应答**管线化**
* 较少的内存和CPU使用(因为重新连接断开减少了)
* 减低拥塞控制(因为TCP减少了)
* 减少后续请求的延迟(后续无需再握手)
* 报告错误无需关闭TCP连接