attribute:
  是html上的属性
  元素在HTML中的键值对
  attribute 会始终保持 html 代码中的初始值(除了href)


  值永远是字符串或null
  大小写不敏感
  不存在时返回null
  对于href,返回html设置的值
  更新value,属性也更新

property:
  Dom属性
  attribute在对应的JS DOM节点上的对象属性
  Property 是有可能变化的(跟随用户操作)

  值可以是任意合法js类型
  大小写敏感
  不存在时返回undefined
  对于href返回解析后的完整url
  更新value,特性不更新