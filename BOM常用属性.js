bom:
  screen
  window
  navigator
  location
  history
  document

screen
  width:屏幕宽,只读属性
  height:屏幕高,只读属性
  availWidth:屏幕有效宽,只读属性
  availHeight:屏幕有效高,只读属性

window
  name:窗口或框架名称
  top:最顶层窗口
  parent:父级窗口
  self:当前窗口
  innerWidth:浏览器的内宽
方法:
  alert:警告框
  confirm:确认框
  prompt:对话框
  close():关闭窗口
  print():打印窗口
  open([url],[name],[options]):新建一个窗口
  定时器

navigator
  appName:浏览器内核
  appVersion:内核版本
  systemLanguage:系统语言
  userLanguage:用户语言
  platform:平台

location
  href:完整的地址
  host:主机名
  hostname:主机名
  pathname:文件路径即文件名
  protocal:协议
  search:查询字符串
  hash:锚点
  reload:刷新网页

history
  length:历史记录个数
  方法
  go(n);浏览器前进或后退
    go(-1):后退一步
    go(1):前进一步
    go(0):刷新
  forward:相当于浏览器的前进按钮
  back:相当于浏览器的后退按钮
