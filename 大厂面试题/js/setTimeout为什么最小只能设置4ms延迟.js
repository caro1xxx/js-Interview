// html standard
// If timeout is less than 0, then set timeout to 0.
// If nesting level is greater than 5, and timeout is less than 4, then set timeout to 4.
// Increment nesting level by one.
// Let task's timer nesting level be nesting level.

// 如果设置的 timeout 小于 0，则设置为 0
// 如果嵌套的层级超过了 5 层，并且 timeout 小于 4ms，则设置 timeout 为 4ms。


//  “需要同时满足嵌套层级超过 5 层，timeout 小于 4ms，才会设置 4ms”

// 各浏览器厂商实现也不一样
// chrome是>=5  html stamdard中是>5