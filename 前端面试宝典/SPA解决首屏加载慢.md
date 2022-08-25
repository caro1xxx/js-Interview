#### 计算首屏加载时间

```javascript
//方法1 DOMContentLoaded
document.addEventListener('DOMContentLoaded',(e)=>{
  console.log('first contentful painting');
})

//方法2 performance
performance.getEntriesByName("first-contentful-paint")[0].startTime
// performance.getEntriesByName("first-contentful-paint")[0]
// 返回PerformancePaintTiming实例
{
  name: "first-contentful-paint",
  entryType: "paint",
  startTime: 507.80000002123415,
  duration: 0,
};
```

#### 导致慢的原因

* 资源体积过大
* 网络
* 资源重复请求加载
* 加载脚本时,渲染内容阻塞

#### 解决方案

* 减小入口文件体积
* 静态资源本地缓存
* UI框架按需加载
* 图片资源的压缩
* 组件重复打包
* 开启GZip压缩
* 使用SSR

##### 减小入口文件体积

> 常用的手段是**路由懒加载**，把不同路由对应的组件**分割成不同的代码块(chunk)**，待路由被请求的时候会单独打包路由，使得入口文件变小，加载速度大大增加

> 在`vue-router`配置路由的时候，采用动态加载路由的形式

```js
routes:[ 
    path: 'Blogs',
    name: 'ShowBlogs',
  //()=>import(....)
    component: () => import('./components/ShowBlogs.vue')
]
```

##### 静态资源本地缓存

后端返回资源问题：

- 采用`HTTP`缓存，设置`Cache-Control`，`Last-Modified`，`Etag`等响应头
- 采用`Service Worker`离线缓存

前端合理利用`localStorage`

##### UI框架按需加载

> 就是使用UI库时不要把完整的库引入,而是按需引入,用到什么UI组件引入什么组件

##### 图片资源的压缩

> 可以使用**在线字体图标，或者雪碧图**，将众多小图标合并到同一张图上，用以**减轻`http`请求压力。** 

##### 组件重复打包

> 假设`A.js`文件是一个常用的库，现在有多个路由使用了`A.js`文件，这就造成了重复下载

>  解决方案：在`webpack`的`config`文件中，修改`CommonsChunkPlugin`的配置

```js
minChunks: 3
```

> `minChunks`为3表示会**把使用3次及以上的包抽离出来，放进公共依赖文件，避免了重复加载组件**

##### 开启GZip压缩

> 拆完包之后，我们再用`gzip`做一下压缩 **安装`compression-webpack-plugin`**

```js
cnmp i compression-webpack-plugin -D
```

> 在`vue.congig.js`中引入并修改`webpack`配置

```js
const CompressionPlugin = require('compression-webpack-plugin')

configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
            return {
                plugins: [new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/, //匹配文件名
                    threshold: 10240, //对超过10k的数据进行压缩
                    deleteOriginalAssets: false //是否删除原文件
                })]
            }
        }
```

##### SSR

>  SSR（Server side ），也就是服务端渲染，组件或页面通过服务器生成html字符串，再发送到浏览器

> 当前也可以混合SPA+SSR SSR做首屏优化,后续内容使用SPA