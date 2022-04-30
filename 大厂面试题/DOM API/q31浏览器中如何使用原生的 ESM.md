#### Native Import: Import from URL

> 通过 `script[type=module]`，可**直接在浏览器中使用原生** `ESM`。这也使得前端不打包 (`Bundless`) 成为可能。

```html
<script type="module">
  import lodash from "https://cdn.skypack.dev/lodash";
</script>
```

> 由于前端跑在浏览器中，**因此它也只能从 URL 中引入 `Package`**

1. 绝对路径: `https://cdn.sykpack.dev/lodash`
2. 相对路径: `./lib.js`

> 现在打开浏览器控制台，把以下代码粘贴在控制台中。由于 `http import` 的引入，你发现你调试 `lodash` 此列工具库更加方便了。

#### ImportMap

> 但 `Http Import` **每次都需要输入完全的 URL**，相对以前的裸导入 (`bare import specifiers`)，很不太方便，如下例:

```js
import lodash from "lodash";
```

> 在 ESM 中，可通过 `importmap` 使得裸导入可正常工作:

```js
<script type="importmap">
  {
    "imports": {
      "lodash": "https://cdn.skypack.dev/lodash",
      "ms": "https://cdn.skypack.dev/ms"
    }
  }
</script>
```

#### Import Assertion

> 通过 `script[type=module]`，不仅可引入 Javascript 资源，**甚至可以引入 JSON/CSS**

````js
<script type="module">
  import data from "./data.json" assert { type: "json" };

  console.log(data);
</script>
````

