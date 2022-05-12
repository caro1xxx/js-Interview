> 定义:

LRU (最近最少使用) 缓存机制

- 使用 Map 做数据保存
- 自建双向链表做元素使用频率保存及空间大小控制

> 实现

```js
class LRUCache(){
  constructor(limit){
    this.limit = limit;
    this.cache = new Map();
  }
  
  get(key){
    if(!this.cache.get(key)) return undefined;
    const value = this.cache.get(key);
    this.cache.delete(key)
    this.cache.set(key,value);
    return value
  }
  
  put(key){
    if(!this.cache.has(key))this.cache.delete(key);
    else if(this.cache.size >= this.limit) {
      this.cache.delete(this.cache.next().value)
    }
    this.cache.set(key,value);
  }
}

const lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, 2);
const res1 = lruCache.get(1);
```

