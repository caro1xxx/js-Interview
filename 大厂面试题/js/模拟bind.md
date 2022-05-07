```js
Function.prototype.fakeBind = function (obj, ...args) {
  return (...rest) => this.call(obj, ...args, ...rest);
};


// output: 3, 4
f.fakeBind({ a: 3 })(4);// (4)即是`...rest
```

