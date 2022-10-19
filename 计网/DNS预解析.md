> 一次DNS解析大概20ms-120ms
>
> 主流两种优化方案

1. 较少DNS解析次数
2. 缩短DNS解析时间`dns-prefetch`

#### DNS-prefetch

DNS解析是一种网络优化的措施,它根据浏览器定义的规则.*提前解析之后会用到的地址,在系统中缓存下来*,进而缩短DNS解析时间

每当用户访问一个地址的时候,都会先通过DNS解析之后,浏览器拿到ip地址,然后才可以请求.

虽然DNS占用不到多少带宽,但是会产生*高延迟*

`dns-prefetch`就是解决这个问题,提前解析好,等待使用

```html
<link rel="dns-prefetch" href="https://baidu.com/"></link>
```

#### DNS-prefetch原理

DNS解析流程

1. 浏览器缓存
2. 本机缓存
3. 路由器缓存
4. ISP(运营商)DNS缓存
5. 根域名服务器
6. 顶级域名服务器
7. 主域名服务器

在这几个流程中,任意地方遇到了缓存,就可以返回

`dns-prefetch`就是将提前请求到的ip 缓存进系统

#### 浏览器与系统DNS缓存时间

>  TTL(Time-To-Live)，就是一条域名**解析记录在DNS服务器中**的`存留时间`
>
> TTL值都是**以秒为单位的**

- **浏览器DNS缓存的时间跟DNS服务器返回的TTL值无关**, 它的缓存时间取决于浏览器自身设置
- **系统缓存会参考DNS服务器响应的TTL值，但是不完全等于TTL值**

#### 缺点

缺点就是**如果大量使用**`dns-prefetch`,会带来**网络负担**

#### 最佳实践

* `dns-prefetch` 仅对[跨域](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS)域上的 DNS查找有效

* 除了link 还可以通过使用 [HTTP链接字段](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Link)将 `dns-prefetch`（以及其他资源提示）指定为 [HTTP标头](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)：

  ```bash
  Link: <https://fonts.gstatic.com/>; rel=dns-prefetch
  ```

* 将 `dns-prefetch` 与 `preconnect`(预连接)提示**配对**

  `dns-prefetch`提前建立dns解析

  `preconnect`提前**建立服务器连接**

  在两者组合的情况下(**必须是https链接**),两者的组合会涵盖**DNS解析**，**建立TCP连接以及执行TLS握手**,进一步减少跨域的延迟感知

  ```bash
  <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
  <link rel="dns-prefetch" href="https://fonts.gstatic.com/">
  ```

  

