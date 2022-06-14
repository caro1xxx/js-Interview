// 它被当做一个轻量版的 Document 使用
// 最大的区别是因为DocumentFragment不是真实DOM树的一部分，
// 它的变化不会引起DOM树的重新渲染的操作(reflow) ，且不会导致性能等问题


// DocumentFragment 节点不属于文档树，继承的 parentNode 属性总是 null。
// 不过它有一种特殊的行为，该行为使得它非常有用，即当请求把一个 DocumentFragment 节点插入文档树时，
// 插入的不是 DocumentFragment 自身，而是它的所有子孙节点

// 即我们可以将一些需要要插入一次的节点使用documentFragment插入，这样有助于性能