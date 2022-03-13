可以基于html2canvas 和 canvas2image 两个第三方类实现截图。
截取整个页面 可以直接设定
html2canvas(document.body).then(function (canvas) {
  document.body.appendChild(canvas);
});

截取可见区域 额外设置一下宽高即可
width: document.documentElement.clientWidth,
height: document.documentElement.clientHeight,
y: document.documentElement.scrollTop