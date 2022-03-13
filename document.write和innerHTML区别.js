document.write() 将需要展示的内容添加到 HTML 文档流中。对于一个已经加载完成的页面，document.write() 会重新绘制整个页面。自然其性能就不是很好。

innerHTML 是替换某个元素中的内容，简单地认为是 <div></div> 标签中间的内容。也即只会影响到所指定的元素。