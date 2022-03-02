if (window.onwheel) {
  scroller.addEventListener("wheel", function(e) {
    console.log(e.deltaY > 0 ? '向下滚' : '向上滚');
  });
} else if (window.onmousewheel) {
  scroller.addEventListener("mousewheel", function(e) {
    console.log(e.wheelDelta < 0 ? '向下滚' : '向上滚');
  });
} else if (window.MouseScrollEvent) {
  scroller.addEventListener("DOMMouseScroll", function(e) { // Firefox
    console.log(e.detail > 0 ? '向下滚' : '向上滚');
  });
}