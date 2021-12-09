function cancelHandler(event) {
  var event = event || window.event;//兼容IE        
  //取消事件相关的默认行为    
  if (event.preventDefault)    //标准技术        
      event.preventDefault();
  if (event.returnValue)    //兼容IE9之前的IE        
      event.returnValue = false;
  return false;    //用于处理使用对象属性注册的处理程序
}