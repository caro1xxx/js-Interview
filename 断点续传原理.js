实现1原理:
主要依赖http协议的206返回码。前提条件是通信双方使用http1.1以上协议。
客户端使用请求头Range告知自己需要的数据范围；服务器使用响应头Content-Range说明返回的数据范围和数据长度。

实现1原理:
可以对文件进行切割,分片上传