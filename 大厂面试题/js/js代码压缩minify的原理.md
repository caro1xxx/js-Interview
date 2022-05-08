> uglify 包里有 ast.js 所以它一定是生成了抽象语法树 接着遍历语法树并作出优化

> 常见压缩AST方案

> 去除多余字符: 空格，换行及注释

```js
function sum(a,b){return a+b}
```

> 压缩变量名：变量名，函数名及属性名

```js
function sum (first, second) {
  return first + second;  
}

//压缩
function sum (x, y) {
  return x + y;  
}

//再压缩
function s(x,y){return x+y}
```

> 解析程序逻辑：合并声明以及布尔值简化

```js
// 压缩前
const a = 3;
const b = 4;

// 压缩后
const a = 3, b = 4;

// 压缩前
!b && !c && !d && !e

// 压缩后
!(b||c||d||e)
```

> 解析程序逻辑: 编译预计算

```js
// 压缩前
const ONE_YEAR = 365 * 24 * 60 * 60

// 压缩后
const ONE_YAAR = 31536000

// 压缩前
function hello () {
  console.log('hello, world')
}

hello()

// 压缩后
console.log('hello, world')
```











