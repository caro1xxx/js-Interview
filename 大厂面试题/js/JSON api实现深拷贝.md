```js
const oldJson = { a: 1 };
const newJson = JSON.parse(JSON.stringify(oldJson));
oldJson.a = 2;
console.log(oldJson); // {a: 2}
console.log(newJson); // {a: 1}
```

