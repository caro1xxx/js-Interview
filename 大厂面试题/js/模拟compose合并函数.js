// 题目
// const add10 = (x) => x + 10;
// const mul10 = (x) => x * 10;
// const add100 = (x) => x + 100;

// // (10 + 100) * 10 + 10 = 1110
// compose(add10, mul10, add100)(10);




const _compose = (...fns) =>
    // 注意 f、g 的位置，如果实现从左到右计算，则置换顺序
    fns.reduce(
        (a, b) =>
            (...args) =>
                a(b(...args))
    );


console.log(_compose(
    (a) => { return a + 1 },
    (a) => { return a + 2 },
    (a) => { return a + 3 },
    )(1))