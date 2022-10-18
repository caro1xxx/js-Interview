#### 起源

**http3前身就是QUIC,**由google研发**,http3是基于UDP开发**的高速协议,因为是基于UDP,所以传输速度必然比TCP快

#### QUIC

UDP虽然效率高,但是传输不具备可靠性,*但是QUIC结合了TCP,TLS,HTTP/2的优势加以优化*

#### HTTP3新特性

http3可以将http2传输的3次`RTT`减至`1次RTT`,如果将其**缓存**，就可将RTT**减少至零**。

*核心DH秘钥交换算法*

```bash
1. 客服端请求数据
2. 服务端生成g , p ,a 三个随机数,然后这三个随机数生成A.然后服务器自己保留随机数a,最后将g,p,A传递给客户端
(g,p,A 就是server config)
3. 客户端生成随机数b,客户端保留b,然后用g, p ,b 生成B
4. 客户端再使用A,b,p 生成秘钥K,用K加密HTTP数据并于B一起发给服务器
5.服务器再使用B , a , p 得到相同秘钥K,并解密HTTP数据
```

```bash
客户端                                     服务器

请求->                                 
																			生成 a,g,p
																			A = (a,g,p)
								<- -----返回g,p,A
得到g,p,A

b = random()
B = (g,p,b)
K = (A,b,p)
						    K(数据),B	------ >
						    										  K = (A,b,p)
						    										 明文 = K(数据)
```

**至此即可完成一次RTT对连接的建立，当缓存Server Config后零RTT即可进行数据传递**

#### 连接迁移

传统连接通过源IP、源端口、目的IP、目的端口进行连接

HTTP3使用**connection id 保持连接**,只要id不变,连接可维持

#### 拥塞控制

##### **单调递增**的Packet Number

TCP在超时重传后的两次ACK接受情况并不支持的很好。导致RTT和RTO的计算有所偏差。HTTP/3对此进行改进，一旦重传后的Packet N会递增

##### **ACK Delay**

HTTP/3在计算RTT时健壮的**考虑了服务端的ACK处理时延**

#### 更多地ACK块

一般**每次请求都会对应一个ACK**，但这样也会浪费

于是可设计成**每次返回3个ACK block**。在HTTP/3将其**扩充成最多可携带256 个ACK block。**

#### 流量控制

QUIC中接收方从单条Stream和整条连接两个角度动态调整接受的窗口大小