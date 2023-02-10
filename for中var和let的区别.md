#### 使用var

在for中使用var定义变量会导致每次循环变量的地址没变,最后输出同一个结果

```js
let arr = []
for (var i = 0; i < 5; i++) {
  arr[i] = () => {
    console.log(i)
  }
}
arr.forEach(item => {
  item()
})
//output: 5 5 5 5 5
```

**用 var 声明时，变量 i 是唯一的，每一次 i 的改变都改变了自身的栈地址**

所以*循环结束后访问 i 时*，都通过 i *最后一次存放的栈地址*，获取到其指向的值

并且我们在for*循环外部依然可以访问到var什么的i*

```js
for (var i = 0; i < 5; i++) {
  ...
}
console.log(i)//5
```

#### 使用let

使用let则不会出现这种情况

```js
let arr = []
for (let i = 0; i < 5; i++) {
  arr[i] = () => {
    console.log(i)
  }
}
arr.forEach(item => {
  item()
})
//output: 0 1 2 3 4
```

let 不存在变量提升，所以*每次循环都会执行一次，声明一个新变量*（但初始化的值不一样）

for 的每次循环都是*不同的块级作用域*，let 声明的变量是*块级作用域的*，所以也*不存在重复声明*的问题