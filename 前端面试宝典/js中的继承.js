// 尽管js`能实现OOP`,但是在网页开发中还是`函数式编程居多`


// 原型链继承
// 涉及:原型对象,实例,构造函数
// 每一个构造函数都包含一个原型对象,每个原型对象又包含指向构造函数的指针,实例则包含原型对象的指针

// function Parent(){
//   this.name = 'jack';
//   this.age = 18;
// }

// function child() {
//   this.name = 'lucy';
// }

// const child1 = new child()
// child1.prototype = new Parent()
// console.log(child1)

// child { name: 'lucy', prototype: Parent { name: 'jack', age: 18 } }
// 可以看到实际上继承是继承到prototype上去了


// 构造函数继承
// 借助call

// function parent(){
//   this.name = 'jack';
// }

// parent.prototype.getName = function (){
//   return this.name;
// }

// function child(){
//   parent.call(this);
//   this.age = 18;
// }

// const child1 = new child()
// console.log(child1)
// child { name: 'jack', age: 18 }
// console.log(child1.getName())
// error:child1.getName is not a function

//由此可以看出引用属性不会被共享,优化了原型链继承的弊端,
// 但是只能继承实例属性和方法,不能继承原型链属性和方法


// 组合继承
// 即是:原型链继承+构造函数继承

// function parent(){
//   this.name = 'jack';
// }

// parent.prototype.getName = function (){
//   return this.name;
// }

// function child(){
//   parent.call(this)
//   this.age = 18
// }

// child.prototype = new parent();
// // 手动挂上构造器，指向自己的构造函数
// child.prototype.constructor = child;

// const c1 = new child();
// const c2 = new child();
// c1.name = 'lucy'

// console.log(c1)
// // child { name: 'lucy', age: 18 }
// console.log(c2)
// // child { name: 'jack', age: 18 }
// console.log(c1.getName())
// //lucy
// console.log(c2.getName())
// jack

// 通过手动指定自己的构造函数的方法来解决原型链继承和构造函数继承的弊端


// 原型式继承
// 借助Object.create方法实现普通对象的继承

// let parent = {
//   name:'jack',
//   friend:['jack'],
//   getName:function(){
//     return this.name
//   }
// }

// let c1 = Object.create(parent);
// let c2 = Object.create(parent);

// c1.name = 'lucy';
// c2.name = 'tom';
// c1.friend.push('scort')
// c2.friend.push('jessica')
// console.log(c1.friend,c2.friend)
// // [ 'jack', 'scort', 'jessica' ] [ 'jack', 'scort', 'jessica' ]
// console.log(c1,c2)
// // { name: 'lucy' } { name: 'tom' }
// console.log(c1.getName())
// // lucy
// console.log(c2.getName())
// tom

// 缺点:因为Object.create 方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存,存在篡改的可能


// 寄生式继承
// 利用原型式的基础上进行优化,用这个浅拷贝的能力再进行增强
let parent5 = {
  name: "parent5",
  friends: ["p1", "p2", "p3"],
  getName: function() {
      return this.name;
  }
};

function clone(original) {
  let clone = Object.create(original);
  clone.getFriends = function() {
      return this.friends;
  };
  return clone;
}

let person5 = clone(parent5);

console.log(person5.getName()); // parent5
console.log(person5.getFriends()); // ["p1", "p2", "p3"]

// 其缺点和原型式继承一样


//寄生组合式继承
// 最优的方法,js extends的实现就是寄生组合式继承