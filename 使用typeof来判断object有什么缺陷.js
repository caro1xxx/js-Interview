1.并不能准确判断test就是一个 Object
可以通过 Object.prototype.toString.call(bar) === "[object Object]" 来避免这种弊端
2.缺陷：typeof null 返回 "object"
最好使用test && typeof test === 'object'