进程的切换肯定是宏任务，因为需要花费大量的资源
线程的切换是微任务，因为只需要在同一个进程中切换就可以了
更准确的说，很多微任务都是纤程的切换导致的，纤程是比线程更小的概念

微任务在执行时，它能获取到任务外的上下文
宏任务在执行时，他不能获取到任务外的上下文