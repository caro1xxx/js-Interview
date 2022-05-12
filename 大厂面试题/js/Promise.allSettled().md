> 接收一个**可迭代对象**，其中每个成员**都是`Promise`**。在所有给定的`Promise`都已经`fulfilled`或`rejected`后返回一个`Promise`，并带有一个对象数组，每个对象表示对应的`Promise`结果 相较于`Promise.all`，后者会在任何一个`Promise`为`rejected`时立即结束

> 无论是成功的达成或被拒绝，**未决议的**promise将被异步完成

> 简单实现

```js
const _PromiseSettled = (items) => {
  const onResolved = (value) => ({ status: "fulfilled", value });
  const onRejected = (reason) => ({ status: "rejected", reason });
  return Promise.all(
    items.map((item) => Promise.resolve(item).then(onResolved, onRejected))
  );
};
```

