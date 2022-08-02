> BOM浏览器对象模型

* 把浏览器当做对象来看
* BOM顶级是window
* BOM学习的是浏览器窗口交互的一些对象
* BOM是浏览器厂商在自家浏览器上定义的,兼容性较差

#### window

> BOM的核心对象是window,它表示浏览器的一个实例

> window对象有双重身份,**1.浏览器窗口的接口,2.全局对象**

> 因此所有在全局作用域中声明的变量,函数都变成window对象的属性和方法

##### 窗口控制方法

```js
moveBy(x,y)
moveTo(x,y)
resizeBy(w,h)
resizeTo(w,h)
scrollTo(x,y)
scrollBy(x,y)
window.open()
window.close()
```

#### location

#### navigator

#### screen

> 保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息，比如像素宽度和像素高度

```js
availHeight
availLeft
availTop
availWidth
height
left
top
...
```

#### history

> 操作浏览器`URL`的历史记录

```js
history.go()接收一个整数数字或者字符串参数：向最近的一个记录中包含指定字符串的页面跳转，
history.forward()：向前跳转一个页面
history.back()：向后跳转一个页面
history.length：获取历史记录数
```

