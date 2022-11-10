cjs 最初应用于nodejs

ESM 一套全新的es6 module规范

在*es6之前*,前端使用AMD模块规范

##### 区别

* cjs输出值的*拷贝*, esm输出值的*引用*
* cjs是*运行时*加载,esm是*编译时*输出接口
* cjs*单值导出*,ems可以*导出多个*
* cjs是*动态*语法,*可以写在判断里,*esm是*静态*语法,只能*写在顶层*
* cjs的this是*当前模块*,ems的this是*undefined*