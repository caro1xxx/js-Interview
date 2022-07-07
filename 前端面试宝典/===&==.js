// 等于操作 ==
// 等于操作符（==）在比较中会先进行类型转换(隐方)，再确定操作数是否相等

// 转换规则
1. 如果任一操作数是`布尔值`，则将其转换为数值再比较是否相等
let result1 = (true == 1); // true

2. 如果一个操作数是`字符串`，另一个操作数是`数值`，则尝试将字符串转换为数值，再比较是否相等
let result1 = ("55" == 55); // true

3. 如果一个操作数是`对象`，另一个操作数不是，则`调用对象`的 valueOf() 方法`取得其原始值`，再根据前面的规则进行比较
let obj = {valueOf:function(){return 1}}
let result1 = (obj == 1); // true

4. `null` 和`undefined`相等
let result1 = (null == undefined ); // true

5. 如果有任一操作数是`NaN`，则相等操作符返回 false
let result1 = (NaN == NaN ); // false

6. 如果`两个操作数都是对象`，则比较它们`是不是同一个对象`(出自同一个内存地址)。如果两个操作数都指向同一个对象，则相等操作符返回true
let obj1 = {name:"xxx"}
let obj2 = {name:"xxx"}
//obj2 和obj1不是来自同一个内存地址
let result1 = (obj1 == obj2 ); // false

// 全等于 ===
// 只有两个操作数在`不转换`的前提下`相等`才返回 true。即类型相同，值也需相同
undefined 和 null 与`自身严格相等`
let result1 = (null === null)  //true
let result2 = (undefined === undefined)  //true


// 区别
1. ==会类型转换,===不会类型转换
2. null 和 undefined 比较，相等操作符（==）为true，全等为false