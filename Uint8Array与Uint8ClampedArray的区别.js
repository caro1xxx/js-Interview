// Uint8array使用的转换逻辑是ToUint8
// 它将输入数与256取模，将8个比特位转化为正整数，它也不会进行四舍五入
// 所以 new Uint8Array([33.999]) 等价于 new Uint8Array([33.111])

//Uint8ClampedArray使用的转换逻辑是ToUint8clamp
// 它会将负数归入0，大于255的数归入255，所以取模就不用了。
// 所以new Uint8ClampedArray([-23]) 等价于 new Uint8ClampedArray([ 0 ])
// 上面说到 new Uint8Array([-23]) 等价于 new Uint8Array([ 233 ]) ，这样就看出差别了吧。
// 另外，它不是直接取整，而是会处理舍入，但并不是像Math.round()那样的四舍五入，而是采用一种叫做银行家舍入的方法。


// 版权声明：本文为CSDN博主「cuixiping」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/cuixiping/article/details/42270561