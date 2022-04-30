#### 应用场景

1. base 数据
2. 生成设备指纹

#### 使用

> Data URLs 由四个部分组成：

1. 前缀(data:)
2. 指示数据类型的 MIME 类型
3. 如果二进制数据则为可选的 base64 标记，比如图片
4. 数据

```js
data:[<mediatype>][;base64],<data>
```

