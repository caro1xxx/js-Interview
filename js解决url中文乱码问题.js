function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

  但当参数中有中文的时候， 就会出现乱码的问题。 通过查询资料 原来是浏览器默认使用的是encodeURI 对汉字进行的编码 所以在解码的时候就需要使用decodeURI  而不是 unescape 上面的代码稍微修改下后 就能解决中文乱码的问题了 