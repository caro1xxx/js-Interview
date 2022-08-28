> 我们知道<noscript>标签会在浏览器未启用js脚本功能的时候显示出来

> 那么我们如何在启用了js脚本功能的时候提示出来呢?

```css
//在<head>您的网页中添加以下内容
<noscript>
  <style>
    .js-only {
      display: none;
    }
  </style>
</noscript>
```

> 将该`js-only`类应用于您希望仅在启用 JavaScript 时显示的所有元素,即可在启用js脚本的情况下显示你所想显示的内容,其余在未启用js脚本的时候显示