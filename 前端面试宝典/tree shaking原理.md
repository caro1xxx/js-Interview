> tree shaking很早就被提出,但是知道ES6 的 `ES6-style`才被利用

> 因为**tree shaking只能在静态modules下工作**。ECMAScript 6 模块加载是静态的,因此整个依赖树可以被静态地推导出解析语法树。所以在 ES6 中使用 tree shaking 是非常容易的

> 动态import无法进行tree shaking

#### 原理

- ES6 Module引入**进行静态分析**，故而编译的时候正确判断到底加载了那些模块
- 静态分析程序流，判断那些**模块和变量未被使用或者引用**，进而**删除**对应代码

