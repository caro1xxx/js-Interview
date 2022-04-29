> localStorage 生命周期是**永久**除非自主清除 
>
> sessionStorage 生命周期**为当前窗口或标签页，关闭窗口或标签页则会清除数据**

> 他们均只能存储**字符串类型的对象**

> **不同浏览器无法共享** localStorage 或 sessionStorage 中的信息。**相同浏览器的不同页面间**可以共享相同的 **localStorage**（页面属于相同域名和端口），但是**不同页面或标签页间无法共享 sessionStorage 的信息**。这里需要注意的是，页面及标 签页仅指顶级窗口，如果一个标签页包含多个 iframe 标签且他们属于同源页面，那么他们之间是可以共享 sessionStorage 的。