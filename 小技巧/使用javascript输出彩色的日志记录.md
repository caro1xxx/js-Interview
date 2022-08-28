> 彩色的日志记录:即就想Vue CLI一样在npm run build的时候能够输出一行行彩色的日志

#### 实现

```js
console.success = (...args) => console.log("\x1b[32m✔\x1b[0m", ...args);
console.failure = (...args) => console.error("\x1b[31mｘ\x1b[0m", ...args);

console.success("Files copied successfully");
console.failure("Unable to delete the 'system32' directory");


..node xxx.js

//输出
✔ Files copied successfully
ｘ Unable to delete the 'system32' directory
//这个✔和ｘ就是\x1b[32m✔\x1b[0m && \x1b[31mｘ\x1b[0m

//这里其实就是因为log会输出原本的元素
//然后error方法呢会输出红色的元素,所以就完成了我们的彩色目标
//相应的吧log方法的第一个参数替换为我们需要的内容的转义即可
```



