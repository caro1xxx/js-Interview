1.预解析执行顺序是从上到下,函数的优先级高于变量,函数会被提升到当前作用域最顶端,在var之上
2.函数执行的时候,函数内部才会进行预解析,如果有参数,先对实参赋值再对函数内部进行预解析
3.预解析函数是声明+定义(开辟了内存空间,形参默认值是undefined)
4.函数重名时,后者覆盖前者
5.变量重名时,不会重新声明,只会在执行的时候重新赋值
6.预解析变量只会声明,不赋值,默认undefined
7.变量和函数重名时,函数优先级高于变量