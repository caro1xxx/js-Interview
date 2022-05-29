// random接收一个整数作为随机数的长度，最多生成8位数
// 题目
// Math.random(3)
// output:8x1


const random = (n) =>
    Math.random()
                // 36代表基数，即代表三十六进制，toString支持2-36
        .toString(36)
        .slice(2, 2 + n);

console.log(random(3))