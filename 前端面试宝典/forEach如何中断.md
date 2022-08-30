> 在forEach内使用return 是没有效果的,依旧继续执行

#### 方法1

> 使用try监视代码块，在需要中断的地方抛出异常

#### 方法2

> 官方推荐:用**every和some替代forEach函数**

- every在碰到return false的时候，中止循环
- some在碰到return true的时候，中止循环

