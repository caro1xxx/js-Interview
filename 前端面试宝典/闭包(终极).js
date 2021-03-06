// 定义:
// 一个函数对其周围状态(词法环境)的引用绑定在一起(或者说函数被引用包围),这样的组合就是闭包(closure)

// 也就是说闭包可以让你在内层函数访问到外层函数的作用域

!!!`每`当创建一个函数，闭包就会在函数创建的`同时被创建出来`，作为`函数内部与外部`连接起来的一座`桥梁`



// 使用场景

// 任何闭包的使用场景都离不开以下两点
1. 创建私有变量
2. 延长变量的生命周期

// 一般函数的词法环境在函数返回后被销毁,但是闭包会保存对创建时所在词法环境的引用
// 即便创建时所在的执行上下文被销毁，但创建时所在词法环境依然存在，以达到延长变量的生命周期的目的


// 例如计数器、延迟调用、回调等闭包的应用，其核心思想还是创建私有变量和延长变量的生命周期


// 注意
// 如果不是特定任务需要闭包的话,尽量避免使用闭包,因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响