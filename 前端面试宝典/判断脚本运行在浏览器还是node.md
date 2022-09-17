```js
this === window ? 'browser' : 'node'

//因为在node端没有window这个对象,在全局用this判断是否是node就行了
```

