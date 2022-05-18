// 定义
// flatten 模拟 Array.prototype.flat 实现，默认展开一层，可传递参数用以展开多层
// // [1, 2, 3, 4, [5, 6]]
// flatten([1, 2, 3, [4, [5, 6]]]);
// // [1, 2, 3, 4, 5, 6]
// flatten([1, 2, 3, [4, [5, 6]]], 2);



// ES2019之前
function flatten(arr,depth=1){
    // 这个条件就是用于结束递归的
    if(depth==1)return arr;
    return arr.reduce(
        //       concat的参数根据b的值来决定，如果b还是一个数组，那么会继续递归只想flatten，并且会讲depth-1
        (a,b)=>a.concat(Array.isArray(b) ? flatten(b,depth-1) : b),
        []
    )
}


// ES2019之后 就直接使用flat()函数

console.log(flatten([1,2,[1,2,[1,2]]],2))