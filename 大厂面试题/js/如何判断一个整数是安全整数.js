// 一个安全整数是一个符合下面条件的整数：
// 可以准确地表示为一个 IEEE-754 双精度数字,
// 其 IEEE-754 表示不能是舍入任何其他整数以适应 IEEE-754 表示的结果
// 安全整数范围为 -(2^53 - 1) 到 2^53 - 1 之间的整数，包含 -(2^53 - 1) 和 2^53 - 1

console.log(Number.isSafeInteger(1.0)) //true
console.log(Number.isSafeInteger(1.1)) //false
console.log(Number.isSafeInteger(1000000000000)) //false