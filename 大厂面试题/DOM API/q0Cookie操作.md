> 是服务器发送到用户浏览器并保存在本地的一小块数据，它会在浏览器下次向同一服务器再发起请求时被携带**(自动携带)**并发送到服务器上

#### 设置Cookie

> **服务端**是通过 **setCookie 的响应头**来设置 cookie 的，要**设置多个 cookie 时**，得**多写几个 setCookie**。服务器如果希望在浏览器保存 Cookie，就要在 HTTP 回应的头信息里面，放置一个 Set-Cookie 字段

> 前端

```js
document.cookie="key=value"
```

#### 读取Cookie

> 通过document.cookie读取同一个域下所有的cookie
>
> 返回格式 cookie1=value; cookie2=value; cookie3=value;

#### 删除cookie

> 一般由**后端**来操作删除cookie
>
> 通过把该 `cookie` 的过期时间改为过去时即可删除成功，具体操作的话可以通过操作两个字段来完成

```js
max-age:将要过期的最大秒数,设置为-1即可删除
expires:将要过期的绝对时间,存储到cookies中需要通过date.toUTCString()处理,设置为过期时间即可删除
```

```js
document.cookie = 'a=3; max-age=-1'
```

