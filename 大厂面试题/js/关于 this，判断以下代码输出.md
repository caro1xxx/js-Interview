```js
function foo() {
  console.log(this.a);
}

var a = 2;

(function () {
  "use strict";

  foo();
})();
```

> 输出2,只要在存在this的函数中设置严格模式，this才是undefined