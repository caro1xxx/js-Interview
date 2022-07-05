1.强制转换 - 显示转换
2.自动转换 - 隐示转换


显示转换,常见方法
String()
Number()
Boolean()
parseInt()

显示转换
// Number() 将任意类型的值转化为数值
转换规则:
  undefined => NaN
  null => 0
  true => 1
  false => 0
  string => 根据语法和规则转换
  symbol => throw error
  object => 先调toPrimitive,再调toNumber
// Number转换是非常严格的,一个字符串内只要有一个无法转成数值,整个字符串都会NaN


// parseInt() parseInt函数逐个解析字符，遇到不能转换的字符就停下来
// 转换规则和Number()类似


// String() 可以将任意类型的值转化成字符串
  undefined => 'undefined'
  boolean => 'true' or 'false'
  null => 'null'
  number => 对应数值的字符串类型
  string => string
  symbol => throw error
  object => '[object Object]'



// Boolean() 将任意类型的值转为布尔值
  boolean => true or false
  string => 非空字符串为true or 空字符串为false
  number => 非零为true or 0,NaN为false
  object => 非null为true or null为false
  undefined => N/A为true or undefined为false



隐示转换
// 何时发生隐示转换?
// 归纳为两种情况:
  // 1.比较运算（==、!=、>、<）、if、while需要布尔值地方
  // 2.算术运算（+、-、*、/、%）


自动转换为布尔值
// 在`需要布尔值`的地方，就会将非布尔值的参数`自动转为布尔值`，`系统内部会调用Boolean函数`
// undefined
// null
// false
// +0
// -0
// NaN
// ""
// 以上均是false,其余非true
自动转换成字符串
// 遇到`预期为字符串`的地方，就会`将非字符串`的值自动转为字符串
// 具体规则是：先将`复合类型`的值转为`原始类型`的值，再将原始类型的值转为`字符串`
// 常发生在`+`运算中
自动转换成数值
`除了+有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值`
'1' - 1   // 0
'5' * []    // 0
false / '5' // 0
'abc' - 1   // NaN
null + 1 // 1
undefined + 1 // NaN

// null转为数值时，值为0 。undefined转为数值时，值为NaN