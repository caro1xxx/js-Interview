// 纯函数：即保证相同的输入，返回相同的输出，并且没有副作用
// 随机数

// A pure function that returns a random value
const getNumber = (min = 0, max = 1, num = Math.random()) =>
  Math.max(Math.min(num, max), min);

// 在不传递参数的情况下，返回的值永远是一个随机数，
// 在由参数的情况下，那么这个函数的返回值是可预测的