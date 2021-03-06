1. 特判，及早return
2. 如果几个条件必须同时满足，那就用多个&&拼接条件，也可以写成Validator
3. 利用 || 的短路，只要满足了某个条件，就不用执行后面的操作了，可以结合标志位flag，flag相当于一个开关的作用
4. 策略模式，如果条件都互斥独立的，可以给他们各自写个handler，放入一个map里，通过key读取到对应的处理函数执行。
    Vue里的不同配置项的merge就是这么做的，不同的配置项有不同的合并策略，Axios的不同配置项的合并策略也不同，也用的策略模式进行合并