var obj = {name:'jack'}
Object.defineProperties(obj,'age',{
  configurable:true, //可删除
  enumerable:true, //可枚举
  writable:true, //可配置
  value:'12',
  get(value){},
  set(value){},
})