// const a = sum(1, 2, 3).valueOf() //6
// const b = sum(2, 3)(2).valueOf() //7
// const c = sum(1)(2)(3)(4).valueOf() //10
// const d = sum(2)(4, 1)(2).valueOf() //9
// const e = sum(1)(2)(3)(4)(5)(6).valueOf() // 21


function sum(...args) {
    // 这里主要是为了应对sum(2, 3)(2)这种情况，多次调用
    const f = (...rest) => sum(...args, ...rest);
    // valueOf将保存着这个箭头函数
    f.valueOf = () => args.reduce((x, y) => x + y, 0);
    // 返回f
    return f;
}

// 在外面调用sum函数将返回f，再对f调用valueOf()取得之前保存的箭头函数reduce
console.log(sum(1, 2, 3).valueOf())