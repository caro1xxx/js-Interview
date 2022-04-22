> 注: `onChange` **无法做到实时监听**，**因为 onChange 需要失去焦点才能触发**

> **onchange:**
>
> **Supported HTML tags:**

```html
<input type="checkbox">, <input type="file">, <input type="password">, 
<input type="radio">, <input type="range">, <input type="search">, 
<input type="text">, <select> and <textarea>
```

> 原文
>
> The onchange attribute fires the moment when the value of the element is changed.
>
> Tip: This event is similar to the oninput event. The difference is that the oninput event occurs immediately after the value of an element has changed, **while onchange occurs when the element loses focus**. The other difference is that the onchange event also works on 

> 译文
>
> onchange属性在更改元素的值时触发此刻。
>
> 提示：此事件类似于OnInput事件。不同之处在于，在元素的值发生变化后立即发生onInput事件，而元素丢失焦点时发生onchange。其他区别是onchange事件也适用