> NaN (not a number)
>
> NaN === NaN   false
>
> NaN == NaN false

#### isNaN

> isNaN会**将参数转为Number**,如果**不能转为Number,那么会返回true**,因此非数字值传入也会返回 true ，会影响 NaN 的判断

#### Number.isNaN(比isNaN更好)

> Number.isNaN会**先判断参数是否为Number**,如果**是数字再继续判断是否为 NaN** ，**不会**进行**数据类型**的**转换**

