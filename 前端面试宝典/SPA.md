> SPA它通过动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验在单页应用中，所有必要的代码（`HTML`、`JavaScript`和`CSS`）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面页面在任何时间点都不会重新加载，也不会将控制转移到其他页面,举个例子:如杯子早上装的牛奶,中午状态的水,下午装咖啡,这个杯子本身是没有变化的,变化的是杯子内的内容,可以想象一下,我们看到的页面就是内容,而内容外面还有一层包装的东西,从始至终都是因url发生变化,从而使得内容发生变化

> **多页应用MPA**（MultiPage-page application），翻译过来就是多页应用在`MPA`中，每个页面都是一个主页面，都是独立的当我们在访问另一个页面的时候，都需要重新加载`html`、`css`、`js`文件，公共文件则根据需求按需加载

#### 单页应用与多页应用的区别

SPA

* 一个主页面和多个页面片段
* 局部刷新
* url模式 | 哈希模式 | 历史模式
* SEO差
* 速度快，用户体验良好
* 良好的前后端分离，分工更明确

MPA

* 多个主页面
* 整页刷新
* SEO好
* 速度慢，用户体验差
* 维护成本低

#### 实现

1. 监听url发生的变化
2. 用`pushsate`记录浏览器的历史，驱动界面发送变化

#### 如何给SPA做SEO

* SSR服务端渲染
  * 将组件或页面通过服务器生成html，再返回给浏览器，如`nuxt.js`
* 静态化
  * 一种是通过程序将动态页面抓取并保存为静态页面，这样的页面的实际存在于服务器的硬盘中
  * 另外一种是通过WEB服务器的 `URL Rewrite`的方式，它的原理是通过web服务器内部模块按一定规则将外部的URL请求转化为内部的文件地址，一句话来说就是把外部请求的静态地址转化为实际的动态页面地址，而静态页面实际是不存在的。这两种方法都达到了实现URL静态化的效果
* 使用`Phantomjs`针对爬虫处理
  * 原理是**通过`Nginx`配置，判断访问来源是否为爬虫**，如果是则搜索引擎的爬虫请求会转发到一个`node server`，再通过`PhantomJS`来解析完整的`HTML`，返回给爬虫