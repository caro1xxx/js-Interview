chrome下：

// 针对某一元素进行全屏，其他元素都被屏蔽。有点类似聚焦的效果。
document.querySelector(".类名").requestFullscreen();
// 全屏聚焦document元素
document.documentElement.requestFullscreen();

生产环境：
不同浏览器的实现方案不同，没有形成统一的标准。可以交由专门的类库———— screenFull(https://github.com/sindresorhus/screenfull)实现。