#### 创建节点

##### createElement

> 创建一个指定标签,接受一个HTML标签名作为参数

```js
const divEl = document.createElement("div");
```

##### createTextNode

> 创建一个文本节点

```js
const textEl = document.createTextNode('content')
```

##### createDocumentFragment

> 创建一个**文档碎片**,表示一种轻量级的文档,主要是用来存储临时节点,然后把文档碎片的内**容一次性**添加到DOM中

```js
const fragment= document.createDocumentFragment()
```

##### createAttribute

> 创建属性节点,可以是自定义属性

```js
const dataAttribute = document.createAttribute('custom');
consle.log(dataAttribute);
```

#### 获取节点

##### querySelector

> 传入任何有效CSS选择器,即可选择单个DOM元素,如果出现多个同名CSS选择器,那么获取到第一个

```js
document.querySelector('.element')
document.querySelector('#element')
document.querySelector('div')
document.querySelector('[name="username"]')
document.querySelector('div + p > span')
```

##### querySelectorAll

> 返回一个**包含节点子树内所有与之相匹配**的Element**节点列表**,如果没有匹配的,则返回一个**空节点列表**

```js
const notLive = document.querySelectorAll("p");
```

> 注意:querySelectorAll返回的是一个**NodeList**静止实例,就是说它是一个**快照**,**并不是实时的**

##### getElementById  .........

#### 更新节点

##### innerHTML

> 可以**修改**一个DOM节点的**文本内容**,还可以直接通过HTML片段修改DOM节点内部的子树

```js
// 获取<p id="p">...</p >
var p = document.getElementById('p');
// 设置文本为abc:
p.innerHTML = 'ABC'; // <p id="p">ABC</p >
// 设置HTML:
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
// <p>...</p >的内部结构已修改
```

##### innerText、textContent

> 自动对字符串进行`HTML`编码，保证无法设置任何`HTML`标签

##### style

> `DOM`节点的`style`属性对应所有的`CSS`，可以直接获取或设置。遇到`-`**需要转化为驼峰命名**

```js
// 获取<p id="p-id">...</p >
const p = document.getElementById('p-id');
// 设置CSS:
p.style.color = '#ff0000';
p.style.fontSize = '20px'; // 驼峰命名
p.style.paddingTop = '2em';
```

#### 添加节点

##### innerHTML

##### appendChild

> 把一个**子节点**添加到**父节点**的**最后一个子节点**

```js
const js = document.getElementById('js')
js.innerHTML = "JavaScript"
const list = document.getElementById('list');
list.appendChild(js);
```

##### insertBefore

> 把子节点**插入**到**指定的位置**

```js
parentElement.insertBefore(newElement, referenceElement)

//子节点会插入到referenceElement之前
```

##### setAttribute

> 在指定元素中**添加一个属性节点**，如果元素中已有该属性改变属性值

```js
const div = document.getElementById('id')
div.setAttribute('class', 'white');//第一个参数属性名，第二个参数属性值。
```

#### 删除节点

> 删除一个节点，首先要**获得该节点本身以及它的父节点**，然后，**调用父节点的`removeChild`把自己删掉**

```js
const self = document.getElementById('self');
//parentElement可以拿到自己的父节点
const parent = self.parentElement;
//只有在父节点上使用removeChild方法,不能在需要删除的节点身上使用
const removeEl = parent.removeChild(self);
```

