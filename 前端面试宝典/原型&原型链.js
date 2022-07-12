// 当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，
// 以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾


// 准确地说，这些属性和方法定义在Object的构造器函数（constructor functions）之上的`prototype属性`上，而非实例对象本身

每个函数都有一个特殊的`属性叫作原型prototype`

function doSomething(){}
console.log( doSomething.prototype );
// {
//   constructor: ƒ doSomething(),  //原型对象有一个自有属性constructor，这个属性指向自己
//   __proto__: {
//       constructor: ƒ Object(),
//       hasOwnProperty: ƒ hasOwnProperty(),
//       isPrototypeOf: ƒ isPrototypeOf(),
//       propertyIsEnumerable: ƒ propertyIsEnumerable(),
//       toLocaleString: ƒ toLocaleString(),
//       toString: ƒ toString(),
//       valueOf: ƒ valueOf()
//   }
// }


原型链
//`原型对象也可能拥有原型`，并从中继承方法和属性，一层一层、以此类推。
// 这种关系常被称为原型链 (prototype chain)，它解释了为何一个对象会拥有定义在其他对象中的属性和方法

`__proto__`作为不同对象之间的桥梁,用来`指向创建它的构造函数的原型对象的`

每个对象的__proto__都是指向它的`构造函数的原型对象prototype的`
`p`erson1.__proto__ === Person.prototype //true

构造函数是一个`函数对象`，是通过 Function 构造器产生的
`P`erson.__proto__ === Function.prototype

原型对象本身是一个`普通对象`，而`普通对象的构造函数都是Object`
`P`erson.prototype.__proto__ === Object.prototype

函数对象都是 Function 构造产生的
Object.__proto__ === Function.prototype //true

***`Object的原型对象`也有__proto__属性`指向null`,null是原型链的`顶端`***
Object.prototype.__proto__ === null //true