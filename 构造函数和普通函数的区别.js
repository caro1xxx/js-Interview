普通函数:
  没有this,如果使用this的话,那么this会指向全局对象window
  一般普通函数多包含return,如果没有return 返回undefined
  普通函数不需要使用new
  普通函数建议首字母小写
构造函数:
  this,指向new出来的那个对象
  不需要return
  需要使用new运算符创建对象
  构造函数默认返回this,也就是新的实例对象
  建议首字母大写