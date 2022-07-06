`操作方法`
可分为:
  * 增
  * 删
  * 该
  * 查
//字符串一旦创建,就不可变了


增
// +,${},concat
//即便使用concat连接字符串,这个字符串也不是以前的字符串了,是一个新的内存地址的字符串,然后覆盖旧的


删
// 也不是直接删原来的,而是创建一个副本
// slice()
// substr() 未来可能被移除
// substring()
let stringValue = "hello world";
console.log(stringValue.slice(3)); // "lo world"
console.log(stringValue.substring(3)); // "lo world"
console.log(stringValue.slice(3, 7)); // "lo w"
console.log(stringValue.substring(3,7)); // "lo w"


改
// 也不是直接修改原来的,而是创建一个副本
// trim()首尾空格、trimLeft()移除左边空格、trimRight()移除右边空格
// repeat()重复字符串
// padStart()从开头填充字符串、padEnd()从结尾填充字符串
// toLowerCase()转小写、 toUpperCase()转大写


查
// 通过index
// chatAt()通过索引
// indexOf()从字符串开头去搜索传入的字符串,并返回index
// startWith()从字符串中搜索传入的字符串，并返回一个表示是否包含的布尔值
// includes()从字符串中搜索传入的字符串，并返回一个表示是否包含的布尔值



`转换方法`
// split()把字符串按照指定的分割符，拆分成数组中的每一项


`模板匹配方法`
// 针对正则表达式，字符串设计了几个方法

// match()
// search()
// replace()
