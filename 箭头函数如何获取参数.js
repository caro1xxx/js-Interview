通过 rest 运算符来获取参数数组:
  let arrow = (...args)=>{
    console.log(args);
    }
    arrow(1,2,3); // [1,2,3]


1....放在赋值的一侧称为扩展(spread)运算符,放在被赋值的一侧称为剩余(rest)运算符;
2.普通函数可以通过arguments对象来获取参数，arguments是一个类数组对象（拥有length属性），不能使用数组的方法;