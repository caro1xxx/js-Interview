因为HTTP协议是明文协议,非常不安全

因此产生了HTTPS,HTTPS是在HTTP下面增加了一层SSL/TSL协议

> **HTTPS = HTTP + SSL/TLS**

#### SSL/TLS

SSL(安全套接层),在OSI七层模型中的第五次(**会话层**)

SSL**出过三个**大版本,**直到SSL3.0才被标准化为TLS**(传输层安全协议),并被当做TLS1.0版本

> 所以说,TLS1.0 = SSL3.1

现在主流的是TLS1.2

TLS*1.0*&TLS*1.1*被**认为是不安全的**,会被弃用

#### 传统RSA握手

传统的TLS RSA版本就是在加解密`pre_random`时采用的是RSA算法

> **RSA算法很慢**,但是安全

#### TLS1.2握手过程

1. 浏览器发送`client_random`,`TLS版本`,`加密套件列表`
   * `client_random`用来最终 secret 的一个参数
   * `加密套件列表`
2. 服务器返回`server_random`,`确定TLS版本`,`需要使用的加密套件和证书`,`server_params`
3. 客户端验证证书,生成*secret*
   * 验证服务器传递的*证书*和*签名*,如果通过则传递`server_params`和`client_params`
   * 客户端将拥有的`client_random`,`server_random`,`pre_random`通过一个*伪随机*函数来计算出最终的secret
4. 服务器生成secret
   * 根据客户端传过来的`client_params`使用*ECDHE*算法生成`pre_random`
   * 最后和客户端一样使用*伪随机*函数生成最后的secret

#### 注意

> 事件上TLS握手是一个*双向认证*的过程,客户端通过`client_params`来验证身份

> **当客户端生成secret后**,会向服务器发送一个*收尾*消息,告诉服务器之后的都用对称加密(第一次约定的对称加密算法)
>
> **服务器生成secret后**,也会有一个*收尾*消息

*收尾*消息包含两部分

* *change cipher spec*:表名后面加密传输
* *finished*:对**之前所有发送的数据**做的*摘要*,让对方验证一样

之后http正式开始**加密**传输

#### RSA 和 ECDHE 握手过程的区别

**ECDHE 握手**，也就是**主流**的 TLS1.2 握手中

ECDHE有一个特点,就是客户端发送完收尾消息后可以*抢跑*

直接发送HTTP报文(**节省了一个RTT**),这也叫*TLS False Start*