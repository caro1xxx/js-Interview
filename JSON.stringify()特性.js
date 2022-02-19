JSON.stringify():
  可接收三个参数 value replacer space
  value为目标对象
  replacer 为对象中每个key进行一次的函数
  space 为缩进可提供任意字符

  undefined function symbol 三个为value值时转化为 undefined
  undefined function symbol 三个为对象的属性值时，将跳过转化
  undefined function symbol 为数组元素时，转化为null
  转化对象时，属性值的顺序是不确定的
  NaN Infinity 转化为 null
  布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
  其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。