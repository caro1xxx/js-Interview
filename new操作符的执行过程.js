function _new(fn,...args){
  let obj = Object.create(fn.prototype);//创建一个新对象,并把新对象的__proto__指向fn.prototype
  let result = fn.apply(obj,fn); //改变this指向并执行构造函数保存返回结果
  return result instanceof Object ? result : obj; //如果构造函数有返回并且结果为对象,返回该对象,否则返回新对象
}