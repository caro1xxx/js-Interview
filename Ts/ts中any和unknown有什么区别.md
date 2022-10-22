unknow和any都是**顶级类型**

unknow比any更加严格,因为unknow属于未知类型

unknow类型的数据*只能赋值给any或者unknow的数据*

```typescript
const bar: unknown = { foo: "100" };
const baz: string = bar; //Error
const toz: unknown = bar;
const zip: any = bar;
```

> 但是unknow类型的数据可以**指定为一个更具体的类型**

#### 方式一:进行类型判断

```typescript
const bar: unknown = "hello";
if (typeof bar === "string") {
  const foo: string = bar;
}
```

#### 方式二:断言

```typescript
const bar: unknown = "hello";
const foo: string = bar as string;
```





