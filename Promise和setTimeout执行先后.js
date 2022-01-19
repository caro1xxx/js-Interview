Promise 和 setTimeout 都是异步代码。JS会先执行同步代码，待主线程清空后开始轮询任务队列的异步任务。
Promise 开启的异步任务在 resolve / reject 后推入到微任务队列，setTimeout 开启的异步任务会在计时结束后推入到宏任务队列。
轮询时会先将微任务队列中的待执行任务推入到主线程中执行。微任务队列清空后将宏任务队列的任务推入到主线程执行。