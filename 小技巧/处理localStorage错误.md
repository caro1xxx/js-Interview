> `当`localStorage超出配额时会抛出QuotaExceededError错误
>
> 想要引发这个错误还必须得setItem

```js
try{
  localStorage.setItem('name','jack')
}catch(error){
  
}
```

> localStorage 不会**仅**在没有可用空间时抛出
>
> 还会出现**其他错误**

> 要**区分此类错误和有关配额的错误**，您可以尝试显式检测`QuotaExceededError`并采取相应措

```js
function isQuotaExceededError(err: unknown): boolean {
  return (
    err instanceof DOMException &&
    // everything except Firefox
    (err.code === 22 ||
      // Firefox
      err.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      err.name === "QuotaExceededError" ||
      // Firefox
      err.name === "NS_ERROR_DOM_QUOTA_REACHED")
  );
}


try {
    localStorage.setItem(keyName, keyValue);
  } catch (err) {
    if (isQuotaExceededError(err)) {
      ...
    } else {
      ...
    }
  }
```

