// 方法1
// let arr = new Array(100).fill(0)


// 注意如果使用map等会出现稀疏数组

// 方法2
// let arr2 = Array.from(Array(100),(x)=>0)
// 方法2变体
// let arr3 = Array.from({length:100},x=>0)
