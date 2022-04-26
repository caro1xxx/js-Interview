> 在*正常情况下*，即 `<script>` 没有任何额外属性标记的情况下，有几点共识

1. JS 的脚本分为**加载、解析、执行**几个步骤，简单对应到图中就是 `fetch` (加载) 和 `execution` (解析并执行)
2. **JS 的脚本加载(fetch)且执行(execution)会阻塞 DOM 的渲染**，因此 JS 一般放到最后头

> `defer` 与 `async` 的区别如下

- 相同点: **异步加载 (fetch)**
- 不同点:
  - async 加载(fetch)完成后立即执行 (execution)，因此**可能会**阻塞 DOM 解析；
  - defer 加载(fetch)完成后延迟到 DOM 解析完成后才会执行(execution)**，但会在事件 `DomContentLoaded` 之前

> **defer 总是在 DCL (DOMContentLoaded)之前输出，但是 async 有可能之前也有可能之后**