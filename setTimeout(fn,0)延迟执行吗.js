Yes
js是单线程的,所有任务都按照evenLoop顺序执行
任务队列分为宏任务队列(macrotask),微任务队列(microtask)
evenLoop执行顺序:script主线程任务(属于宏任务)->微任务->下一个宏任务
setTimeout属于宏任务
html5规定setTimeout的第二个参数的最小值,不得低于4ms,如果低于这个值,就会自动增加
所有setTimeout会在主线程最早的空闲时间执行,还是存在延迟