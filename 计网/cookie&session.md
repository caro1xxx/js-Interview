#### session

> 存放与服务器的一种数据结构

场景:用户登录淘宝,但是http又是无状态的,那么如何记录用户的购物车呢?

这是就需要记录用的信息了,就可以在服务器上用session,记录用户信息,这个session是不会传递到客户端的

#### cookie

> 存放在客户端的一种标识

标识用户是谁,这个标识可以对应用户存放于服务器的session,进而返回用户对应的信息,已经下次无需再次输入账号密码登录

#### 如果cookie被禁用

这种请求会使用:叫做**URL重写**的技术来进行会话跟踪

> 即每次HTTP交互，URL后面都会被附加上一个诸如 **sid=xxxxx 这样的参数**，服务端据此来识别用户

#### 总结

cookie:用于标识用户的一种**机制**

session:保存在服务器的一种**数据结构**,用于跟踪用户状态,可以存放于数据库,内存,文件夹