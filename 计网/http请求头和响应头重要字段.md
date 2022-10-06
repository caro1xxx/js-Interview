#### 通用首部字段

* `Cache-Control` 告诉所有的缓存机制是否可以缓存及哪种类型
* `Connection` 表明是否需要持久连接
* `Transfer-Encoding` 文件传输编码

#### Request header

- `Accept` 指定客户端**能够接收的内容类型**，内容类型中的**先后次序**表示客户端**接收的先后次序**
- `Range` 实体的字节范围请求
- `Authorization` web的认证信息
- `Host` 请求资源所在服务器
- `User-Agent` 客户端程序信息

#### Response header

* `Location` 令客户端重定向的URI
* `ETag` 能够表示资源唯一资源的字符串
* `Server` 服务器的信息

#### 实体首部字段

- `Last-Modified` 请求资源的最后修改时间
- `Expires` 响应过期的日期和时间
- `Allow` 资源可支持http请求的方法，不允许则返回405
- `Content-Type` 返回内容的媒体类型 `Content-Type: text/html; charset=utf-8`