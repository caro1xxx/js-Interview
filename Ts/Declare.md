在*ts中使用js库时*,如果这个*js库没有ts声明文件*,则**必须使用declare关键字**

declare关键字用于*环境声明和你要定义可能在其他位置存在的变量的方法*

假设我们使用myLibrary这个库,那么就*需要在自己的ts文件中定义*:

```ts
declare var myLibrary;
```

