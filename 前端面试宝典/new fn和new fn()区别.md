```js
function foo(){
	this.name = 'jack'
}

console.log(new foo)//输出对象 {name:'jack'}
console.log(new foo())//输出对象 {name:'jack'}
```

> 可以看到不管是foo还是foo()new出来都是输出{name:''jack"}

```js
function foo(){
	this.name = 'jack'
}

console.log(new foo.name)//报错
console.log(new foo().name)//jack
```

> 可以看到这次指定了属性名就不行了

**new foo().name**相当于(new foo()).name,这里因为foo**带()**,提升了优先级,让foo()先执行了

new foo.name:没有函数new,所以相当于new (foo.name),就导致了报错

> **总结:如果是带了()的new可以提升优先级,会让new xxx()先执行,再执行后续的**