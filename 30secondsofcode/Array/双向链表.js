// 定义：
// 即一个链表中有一串值，前一个值记录着前前一个值的index，并且还记录着下一个值的index


// 1.双向链表数据结构的每个元素必须具有以下属性：
// value: 元素的值
// next：指向链表中下一个元素的指针（null如果没有）
// previous：指向链表中前一个元素的指针（null如果没有）

// 2.双向链表数据结构的主要属性是：
// size：双向链表中的元素个数
// head: 双向链表中的第一个元素
// tail：双向链表中的最后一个元素

// 3.双向链表数据结构的主要操作是：
// insertAt: 在特定索引处插入一个元素
// removeAt：删除特定索引处的元素
// getAt: 检索特定索引处的元素
// clear: 清空双向链表
// reverse: 颠倒杜比链表中元素的顺序

class DoublyLinkedList {
    // 初始化一个列表
    constructor() {
        this.nodes = [];
    }
    // 定义方法返回列表长度
    get size() {
        return this.nodes.length;
    }
    // 定义获取头部值的方法
    get head() {
        return this.size ? this.nodes[0] : null;
    }
    // 定义获取尾巴值的方法
    get tail() {
        return this.size ? this.nodes[this.size - 1] : null;
    }
    // 插入值
    insertAt(index, value) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index] || null;
        const node = { value, next: nextNode, previous: previousNode };

        if (previousNode) previousNode.next = node;
        if (nextNode) nextNode.previous = node;
        this.nodes.splice(index, 0, node);
    }
    // 从第一个位置插入值
    insertFirst(value) {
        this.insertAt(0, value);
    }
    // 从最后一个位置插入值
    insertLast(value) {
        this.insertAt(this.size, value);
    }
    // 获取指定位置值
    getAt(index) {
        return this.nodes[index];
    }
    // 移除指定位置值
    removeAt(index) {
        const previousNode = this.nodes[index - 1] || null;
        const nextNode = this.nodes[index + 1] || null;

        if (previousNode) previousNode.next = nextNode;
        if (nextNode) nextNode.previous = previousNode;

        return this.nodes.splice(index, 1);
    }
    // 清除整个列表
    clear() {
        this.nodes = [];
    }
    // 颠倒整个列表
    reverse() {
        this.nodes = this.nodes.reduce((acc, { value }) => {
            const nextNode = acc[0] || null;
            const node = { value, next: nextNode, previous: null };
            if (nextNode) nextNode.previous = node;
            return [node, ...acc];
        }, []);
    }
    // 添加Symbol.iterator属性，使得此链表可以被for in 迭代
    *[Symbol.iterator]() {
        yield* this.nodes;
    }
}