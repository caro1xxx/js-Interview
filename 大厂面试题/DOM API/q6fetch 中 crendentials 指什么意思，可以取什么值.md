> credentials` 指在使用 `fetch` 发送请求时**是否应当发送** `cookie

- `omit`: 从不发送 `cookie`.
- `same-origin`: 同源时发送 `cookie` (浏览器默认值)
- `include`: 同源与跨域时都发送 `cookie`

> **就是对发送请求是否携带cookie就行设置**