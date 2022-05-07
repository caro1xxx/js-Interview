> softbind定义:
>
> bind 函数**多次**调用会以第一次**绑定的 this 为准，**softbind 以**最后一次**绑定传入的 this 为准

```js
Function.prototype.softBind = function(obj, ...rest) {
    const fn = this
    const bound = function(...args) {
        const o = !this || this === (window || global) ? obj : this
        return fn.apply(o, [...rest, ...args])
    }
	//将bound的prototype连接到fn.prototype
    bound.prototype = Object.create(fn.prototype)
    return bound
}
```

