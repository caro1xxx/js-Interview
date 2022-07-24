> ajax就是通过xmlhttprequest对象来向服务器发**异步**请求,获得数据后,用js操作dom显示数据

#### 实现步骤

1. 创建XMLHttpRequest对象
2. 使用XHR对象的open()打开连接
3. 构建好数据,通过XHR对象send()发送数据给服务器
4. 通过XHR的onreadystatechange事件监听与服务器通信状态
5. 接收并处理服务器响应数据
6. 显示数据

> XHR语法见MDN

#### 封装

```js
function request(){
	//创建xhr
	const xhr = new XMLHttpRequest()
  
  //检测是否传入配置
  const options = option || {}
  //判断请求方式 需要转大写
  options.type = (options.type || 'GET').toUpperCase()
  //检测请求数据格式
  options.dataType = options.dataType || 'json'
  const params = options.data
  
  //发送
  if(options.type === 'GET'){
    xhr.open('GET', options.url + '?' + params, true)
    //因为get请求一开始就将params写入链接了,所以不需要再单独send了
    xhr.send(null)
	}else if(options.type === 'POST'){
    xhr.open('POST', options.url, true)
    xhr.send(params)
	}
  
  //接收
  xhr.onreadystatechange = function(){
		if (xhr.readyState === 4) {
      let status = xhr.status
      if (status >= 200 && status < 300) {
        //成功回调
        options.success && options.success(xhr.responseText, xhr.responseXML)
      } else {
        //失败回调
        options.fail && options.fail(status)
      }
    }
  }
}



//调用
request({
  url:'xxxx',
  type:'GET',
  dataType:'json',
  data:'1111123123123123',
  success: function(text,xml){//请求成功后的回调函数
    console.log(text)
  },
  fail: function(status){////请求失败后的回调函数
    console.log(status)
  }
})
```

