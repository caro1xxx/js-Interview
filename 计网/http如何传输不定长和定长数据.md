#### 定长

如果是定长,那么传输时会带上`Content-Length`表名包体长度

#### 不定长

不定长头部字段`Transfer-Encoding: chunked`

表示*分块传输数据*,产生两个作用

* *Content-Length*字段**会被忽略**
* **基于长连接**持续推送动态内容

