> 网络标准RFC 1738规定URL只能使用英文字母、阿拉伯数字和某些标点符号
>
> 这就代表如果使用中文,那么就需要进行转码,但是RFC 1738并没有规定转码规则,就导致各家浏览器自有转码方式.

#### 解决方案

使用Javascript**先对URL编码**，然后再向服务器提交，**不要给浏览器插手**的机会。因为Javascript的输出总是一致的，所以就保证了服务器得到的数据是格式统一的

> encodeURI()是Javascript中真正用来**对URL编码的函数**

> encodeURIComponent()主要是对一些**encodeURL()不能编码的字符**进行变化(如:; / ? : @ & =)

