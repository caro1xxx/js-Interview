> LRU (Least Recently Used)
>
> “最不经常使用的数据，重要性是最低的，应该优先删除”

#### 简单实现

> 假设我们有个容器用于存储我们访问的数据,但是这个容器会随着装填的内容增加而变得庞大,导致获取变慢,这里我们就可以使用LRU Cache函数,来解决,因为LRU要实现O(1)复杂度,所以推荐使用Map,并且Map的结构本来就是先进入的在前面,后进入的在后面,我们只需要维持这个逻辑即可

```js
class LRUCache{
	constructor(count){
    this.size = count //容器的大小 也就是容器的最大上限
    this.data = new Map()//初始化容器
  }
}
```

> 接下来就是完成put的逻辑了,我们需要知道的是因为先进入的数据是最先使用到的,然后排在前面,后面依次是使用到的数据

```js
class LRUCache{
	constructor(count){
    this.size = count //容器的大小 也就是容器的最大上限
    this.data = new Map()//初始化容器
  }
  
  put(data,fn){
    if(this.data.has(fn)){
      this.data.delete(fn);
      this.data.set(fn,data);
      return data
    }
    if(this.data.size >= this.size){
      // 删除最不常用数据,也就是排在Map中的第一个
      const firstKey = this.data.keys().next().value;
      this.data.delete(firstKey);
    }
    this.data.set(fn, data) // 写入数据
    return data
  }
}
```

> 接下来就是get的逻辑了,没什么好说的,根据key查找数据,如果key不存在那么退出,如果存在,那么将它移到最后面来

```js
class LRUCache{
	constructor(count){
    this.size = count //容器的大小 也就是容器的最大上限
    this.data = new Map()//初始化容器
  }
  
  put(data,fn){
    if(this.data.has(fn)){
      this.data.delete(fn);
      this.data.set(fn,data);
      return
    }
    if(this.data.size >= this.size){
      // 删除最不常用数据,也就是排在Map中的第一个
      const firstKey = this.data.keys().next().value;
      this.data.delete(firstKey);
    }
    this.data.set(fn, data) // 写入数据
  }
  
  get(fn){
		if(!this.data.has(fn)){
       return false;
    }
    const data = this.data.get(fn); //获取结果
    this.data.delete(fn); // 移除
    this.data.set(fn(),fn) // 执行fn()拿到结果,然后存入到最后一个位置
    return data
  }
}
```

