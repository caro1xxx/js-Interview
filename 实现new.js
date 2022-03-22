// 创建新对象
// 新对象原型[[prototype]] = 构造函数prototype
// this 指向新对象
// 执行构造函数
// 如果构造函数返回非空对象，就返回这个对象引用，不然返回创建的新对象

function _new(Fn, ...arg) {
    const obj = Object.create(Fn.prototype);
    const obj1 = Fn.apply(obj, arg);
    return obj1 instanceof Object ? obj1 : obj;
  }