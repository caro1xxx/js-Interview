get：
1.  GET请求会将参数跟在URL后进行传递，也就是会在url中显示

2.  GET请求有数据长度限制，一般在2000个字符，而POST没有。

3. GET方式请求的数据会被浏览器缓存起来，POST没有

4.  GET在某些情况下会有安全问题，POST没有。

5. 在客户端使用get请求时,服务器端使用Request.QueryString来获取参数

6. get请求参数会在url中显示，容易被他人窃取，post在请求体中，不会被窃取
post：
1. POST请求是作为HTTP消息的实体内容发送给WEB服务器。

2. 客户端使用post请求时,服务器端使用Request.Form来获取参数。 

3. post一般用于修改服务器上的资源，对所发送的信息没有限制。
4. post比get更加安全

5. post需要设置请求头