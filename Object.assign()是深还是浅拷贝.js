如果拷贝的源对象有嵌套对象，那只是拷贝他的引用，不是拷贝整个值.
如果是普通类型，就是拷贝它的值

const target = { a: 1 };
const source = { b: {c: 5}, d: 2 };

const returnedTarget = Object.assign(target, source);

console.log(target == returnedTarget); // true 返回的是目标对象
console.log(target.b == source.b); // true 

source.b.c = 6
source.d = 3
console.log(target.b); // { c: 6 }  目标对象添加的b属性的值是源对象b属性的值的引用
console.log(target.d); // 2