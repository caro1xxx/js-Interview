url链接中如果出现多个问号
那么search会从第一个问号开始提取url参数
例子:
  url = "http://www.baidu.com/??a=1";
  location.search // ??a=1