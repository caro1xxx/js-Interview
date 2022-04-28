输出结果为 object
由于在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。
由于 null 代表的是空指针，因此，null的类型标签也成为了 0，typeof null就错误的返回了"object"