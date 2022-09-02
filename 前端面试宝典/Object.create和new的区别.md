> js中**创建对象的方式**一般有两种**Object.create和new**

#### create

> Object.create是**内部定义一个对象**，并且**让xxxx.prototype对象 赋值为引入的对象/函数 xxx**，并return出一个**新的对象**

#### new

> new做法是**新建一个obj对象**xxx,并且让xxx的__proto__指向了xxxxx.prototype对象

> 并且使用 **call 进行强转作用环境**。从而实现了实例的创建

#### 区别

> 所以create是内部新建一个对象,然后将这个新建对象的prototype指向引入的对象,然后return出来
>
> 而new是新建一个对象,并让这个对象的proto执行目标prototype