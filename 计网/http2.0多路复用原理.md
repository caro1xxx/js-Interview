#### 多路复用

http1.1 -> baseline:信息就像是管道,一次只能通过一个物体,后续才能继续

http2.0 -> multiplexing:多个消息交叉在一起通过

#### 为什么http1.1不是多路复用

在http1.1中数据是以分割的形式传递给服务器,分割标识如空行\r\n等.

这就导致了服务器每次遇到分割直接都在不断读入信息字节.

http2.0是基于*帧*来传递的

> 服务器解析http1.1的消息是**无法预知本次消息大小**的,只能不断解析,导致服务器不知道该有多大的*缓冲区*,这就是性能低下的原因

#### http2.0帧结构设计和多路复用实现

*帧*的大小是*可预知的*,可控的

为什么可预知呢?

归功于帧的设计,帧是一个数据单元，实现了对消息的封装

http2.0帧结构:

```bash
----------------------------------
|              length 24         |
----------------------------------
| type 8   |flag 8   |             
----------------------------------------------------
| R |      Stream Identifier  31                   |
----------------------------------------------------
|          Frame payload 0...                      |
```

> 帧的字节中**保存了不同的信息**，**前9个字节对于每个帧都是一致的**，“服务器”解析HTTP/2的数据帧时只需要解析这些字节，就能准确的知道整个帧期望多少字节数来进行处理信息

如何实现复用?

http2.0还有个概念就是*流*,这个流是可以进行复用的

> HTTP/2连接上独立的、**双向的帧序列交换**。*流ID*（帧首部的6-9字节）用来标识帧所属的流
>
> *因为有流ID,那么每次通信时都进行流ID验证,如果存在这个流,那么就复用它,如果不存在就另开个流*

```bash
假设下面是其中一个流
----------------------------------------------------------------
										 ---------123455555....--->
									<------123455555...------
									---------123455555....--->
									<-------123455555....-----
----------------------------------------------------------------

这个条流属于流ID`123455555`,因为这四个帧的流ID都和该流的id匹配,所以复用了这个流,并且该流是双向的,已达到请求和响应
```

