// loop
// async在对数组元素执行异步操作时，与for（或）
// 循环结合for...of可能是最直接的选择。
// await在循环内使用for将导致代码停止并等待异步操作完成后再继续。
// 这意味着所有的 Promise 都将按顺序运行

// 有序
const asyncUpperCase = item => 
    new Promise(resolve =>
        setTimeout(
            () => resolve(item.toUpperCase()),
            Math.floor(Math.random() * 1000)
        )
    )


const upperCaseItems = async () => {
    const items = ['a', 'b', 'c'];
    for (i of items){
        const result = await asyncUpperCase(i);
        console.log(result);
    }

    console.log("Item endy")
}

// upperCaseItems()


// Promise.all()
// Promise.all()为数组上的异步循环提供了另一种选择。
// 与前一个的主要区别Promise.all()在于并行执行所有异步操作。
// 这意味着承诺将无序执行，这在某些情况下可能是一个问题

// 无序
const promiseUpperItem = () => {
    const items = ['a', 'b', 'c'];
    return Promise.all(
        items.map(async (item) => {
            const result = await asyncUpperCase(item);
            console.log(result)
        })
    ).then(value => {
        console.log('end')
    })
}

// promiseUpperItem()


// 数组方法
// 不幸的是，数组方法（例如）Array.prototype.forEach()不适用于async/ await。
// 唯一可行的解​​决方案是使用Promise.all()前面示例中所示的方法。
// 使用async回调Array.prototype.forEach()将导致其余代码执行并且不等待异步操作
// 无序
const arrayMethodItem = async () => {
    const items = ['a', 'b', 'c'];
    await items.forEach( async item => {
        const result = await asyncUpperCase(item);
        console.log(result)
    })
    console.log('end')
}

arrayMethodItem()

// 导致其余代码执行并且不等待异步操作无序
// end
// A
// C
// B