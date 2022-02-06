如果浏览器发现window.open下载文件不是由用户触发，则会拦截
解决方案，二选一：
1.将window.open放在按钮的单击事件中执行
2.动态创建一个a标签，设置url 和 target,执行click,最后移除