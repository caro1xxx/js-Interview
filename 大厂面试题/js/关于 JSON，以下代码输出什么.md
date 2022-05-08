```js
const obj = {
  a: 3,
  b: 4,
  c: null,
  // 在执行stringify时会忽略undefined的值
  d: undefined,
  //这里定义的get方法相当于重写了obj.e的get方法,但是因为没有返回值,所有是undefined被stringify忽略,然后这里有一个正常返回值,那么这个返回将作为obj.e的值定义出来
  get e() {},
};

console.log(JSON.stringify(obj));

//output

{"a":3,"b":4,"c":null}
```

