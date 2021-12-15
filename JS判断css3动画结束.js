// animationend 事件在 CSS 动画完成后触发。(IE9及更早 IE 版本不支持)
var x = document.getElementById("myDIV");
// Chrome, Safari 和 Opera 代码
x.addEventListener("webkitAnimationEnd", myStartFunction);
// 标准语法
x.addEventListener("animationend", myStartFunction);


// transitionend 事件在 CSS 完成过渡后触发。 (IE9及更早 IE 版本不支持)
// Safari 3.1 到 6.0 代码
document.getElementById("myDIV").addEventListener("webkitTransitionEnd", myFunction);
// 标准语法
document.getElementById("myDIV").addEventListener("transitionend", myFunction);

// 其他注意:
// Internet Explorer 8 及更早 IE 版本不支持 addEventListener()方法。