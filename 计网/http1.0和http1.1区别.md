#### 连接方面

* http1.1默认使用持久连接,复用同一个tcp连接
* http1.0使用**非持久连接**

#### 资源请求方面

* http1.0中**无法请求一个文件的一部分**,只能将完整的文件全部传输过来,导致资源浪费.**无法实现断点续传**
* http1.1中增加**range头**,使其可以请求一个文件的某一个部分,返回状态码206

#### 缓存控制

* http1.0中使用if-modified-since||expires来控制缓存
* Http1.1中新增ETAG,If-Unmodified-Since、If-Match、If-None-Match来控制缓存策略

#### 新增

> http1.0认为网络中的每一台主机都对应一个ip,所以没有host字段,但是现在虚拟主机的技术,导致一个主机上可以绑定多个ip,所以http1.1中新增`host`来指明ip

> http1.1新增更多的请求方法:PUT,HEAD,OPTIONS

