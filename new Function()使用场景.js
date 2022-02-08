将任意字符串转换为函数 比如从服务端拿回来一段函数语句(字符串)
需要转为函数执行 就可以用new Function()
let str = "服务端返回的语句"
new Function(str)