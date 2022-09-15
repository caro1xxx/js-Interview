> document.write是写入到页面的**内容流**,如果写之前没有调用document.open,那么浏览器会自动调用
>
> **每次写完关闭之后重新调用该函数，会导致页面被重写**(性能非常垃圾)

> innerHTML**是DOM元素的一个属性**,代表该元素的html内容,可以**精确到一个具体的元素**进行更改.
>
> 如:document.elementName.innerHTML

* innerHTML是将**全部内容写到一个元素中**,**不会导致重写**