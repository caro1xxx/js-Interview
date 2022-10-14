> TCP在传输时分为两个部分:**TCP头和数据数据部分**

> http是基于TCP的,所以http和TCP类似
>
> **起始行+头部+空行+实体**

但是http**分为请求报文和响应报文**,所以有点区别

#### 起始行

*注意空格*

##### 请求报文

```bash
GET /home HTTP/1.1
```

##### 响应报文

```bash
HTTP/1.1 200 ok
```

#### 头部

##### 请求头

```bash
请求行 -> Method space URL space Version crlf
			/ Field : Filed Value crlf
请求头 - ...
			\ Field : Filed Value crlf
空行 -> 
```

##### 响应头

```bash
状态行 -> Version space Status Code space Reason crlf
			/ Field : Filed Value crlf
响应头 - ...
			\ Field : Filed Value crlf
空行 -> 
```

#### 空行

> 用于区分开头部和实体
>
> *如果在头部中间故意加一个空行,那么空行后的全部内容将被视为实体*

#### 实体

> 具体请求的数据