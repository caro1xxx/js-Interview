> amd是浏览器中的模块格式(关键字define)
> cjs(commonjs)是node中的模块格式(关键字export/requeire)

> umd就是amd和cjs两种格式的兼容，能够同时运行在浏览器和node中

```amd
define(["jquery", "underscore"], function ($, _) {});
```


```umd
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    // CommonJS
    module.exports = factory(require("jquery"));
  } else {
    // 全局变量
    root.returnExports = factory(root.jQuery);
  }
})(this, function ($) {
  // ...
});
```