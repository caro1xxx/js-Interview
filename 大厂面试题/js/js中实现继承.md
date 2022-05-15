#### 方法1:extends

```js
class Animal {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  
  say(){
    console.log(this.age);
  }
}

class Dog extends Animal {
  constructor(name,age){
    super(name,age)
  }
}
```

#### 方法2:function new

```js
function Animal(name){
  this.name = name;
}

Animal.Prototype.say = function (){
  console.log(this.name)
}

function Dog(name){
  Animal.call(this,name)
}

Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.constructor = Dog

```

