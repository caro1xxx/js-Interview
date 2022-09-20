> 因为canvas获取**不同域下**的图片时会认为是不安全的,所以我们需要想一个办法解决

> 在img标签上添加属性**crossOrigin**

| anonymous        | use-credentials                                    |                                                              |
| ---------------- | -------------------------------------------------- | ------------------------------------------------------------ |
| 用途             | 匿名请求跨域图片资源，不会发送证书（比如cookie等） | 具名请求跨域图片资源，会携带证书数据                         |
| Request Headers  | origin                                             | origin、cookie                                               |
| Response headers | Access-Control-Allow-Origin                        | Access-Control-Allow-Origin、Access-Control-Allow-Credentials |
| 所需条件         | Access-Control-Allow-Origin 字段值需要包含请求域。 | Access-Control-Allow-Origin 字段值需要包含请求域，且不能为通配符 *。Access-Control-Allow-Credentials 字段值需要为 true，表明允许请求发送证书数据。 |

```js
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

const img = new Image();
//给img添加crossOrigin属性
img.crossOrigin = 'anonymous';
img.onload = () => {
   context.drawImage(this, 0, 0);
   context.getImageData(0, 0, img.width, img.height);
};
img.src = 'https://b.com/a.png';
```

