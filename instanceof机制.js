// instanceof的机制就是拿左边的对象的proto在右边对象的prototype上一层一层的比对
function _instanceof(x, y) {
  // 判断x不是null
  while (x.__proto__ !== null) {
    // try为防止传入的不是对象
    try{
      // 判断是否找到,找到就return true
      if (x.__proto__ === y.prototype) {
      return true;
      }
      // 没有找到就把下一层的__proto__赋值给x.__proto__
      x.__proto__ = x.__proto__.__proto__
    }catch{
      return false
    }
  }
  return false
}
