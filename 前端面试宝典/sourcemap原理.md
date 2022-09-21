> sourcemap就是为了让项目上线后能够在**线上调试的能力**

#### source map 文件是否影响网页性能

> sourcemap**不会影响**网页性能,浏览对sourcemap的**下载做了隐藏**,所以我们无法再network中看到

#### source map 标准

> source map 是存在一个标准的，为 Google 及 Mozilla 的工程师制定

```js
//source map 格式大致如下
{
  version: 3, //版本号
  file: "min.js", //编译后的文件名
  names: ["bar", "baz", "n"], //一个优化字段,mappings字段会用到
  sources: ["one.js", "two.js"], //多个源文件名
  sourceRoot: "http://example.com/www/js/",
  mappings: "CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA" //重要!表示了源代码及编译后代码的关系
}
```

#### 浏览器怎么知道源文件和 source map 的关系

```js
//源代码
// index.js
const a = 1
console.log(a);
```

```js
//webpack打包后
console.log(1);
//# sourceMappingURL=bundle.js.map
//sourceMappingURL 就是标记了该文件的 source map 地址
```

#### source map 是如何对应到源代码的(重要)

> 核心功能

```js
{
  sources:["webpack://webpack-source-demo/./src/index.js"],
  names: ['console', 'log'],
  mappings: 'AACAA,QAAQC,IADE',
}
```

> 首先 `mappings` 的内容其实是 **Base64 VLQ** 的编码表示

1. 第一行是代表sourcemap的**地址**
2. 第二行的分割逗号是对js代码的**分割**,如console.log(a),就是console,log,a
3. 第三行的分割逗号表示**换行**

> 第三行中的mappings中的**英文代表什么?**
>
> 这是一种压缩数字内容的**编码方式**,因为如果用行号和列号来表示的话,那么**过于庞大**了,因此选择base 64来**压缩代码**
>
> 如:A代表0,C代表2,等等,所有这些**字母是和数字有映射关系的**

> 每隔逗号分隔的**字母串**是什么?
>
> **每串字母都代表了一个位置**

1. 压缩代码的第几列
2. 哪个源代码文件，毕竟可以多个文件打包成一个，对应 `sources` 字段
3. 源代码第几行
4. 源代码第几列
5. `names` 字段里的索引

> 这里就是延伸了一个问题**,base 64的大小是有限的,那么是怎么装下超大sourcemap的**,**实际上除了每个分号中的第一串英文是用来表示代码的第几行第几列的绝对位置之外，后面的都是相对于之前的位置来做加减法的**

```js
//尝试一下
//AACAA
//代表地址[0,0,1,0,0]
0:压缩代码的第一列
0:第一个源代码文件，也就是 index.js 文件了
1:源代码第二行了
0:源代码的第一列
0:names 数组中的第一个索引，也就是 console

//由此得出了代码位于文件的位置
```

> sourcemap是怎么知道**编译后**的代码位置的,因为sourcemap利用AST