ES6数组新增扩展
1.扩展运算符
2.构造函数新增方法
3.实例对象新增方法
4.空值处理
5.sort()排序算法稳定性


// 扩展运算符...

// 函数调用的时候，将一个数组变为参数序列
function add(x, y) {
    return x + y;
}

const numbers = [4, 38];
add(...numbers) // 42

// 可以将某些数据结构转为数组
[...document.querySelectorAll('div')]

// 能够更简单实现数组复制
const a1 = [1, 2];
const [...a2] = a1;
// [1,2]

注意：通过扩展运算符实现的是浅拷贝，修改了引用指向的值，会同步反映到新数组

// 将字符串转为真正的数组
[...'hello']
// [ "h", "e", "l", "l", "o" ]

// 定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

let arr = [...map.keys()]; // [1, 2, 3]


// 新增方法
Array.from()
Array.of()

// Array.from()

// 可以将类数组或者具有iterable对象转为真正的数组
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

// 接受第二个参数，用来对每个元素进行处理，将处理后的值放入返回的数组
Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]


// Array.of()

// 将一组值，转换为数组
Array.of(3, 11, 8) // [3,11,8]

// 没有参数的时候，返回一个空数组
// 当参数只有一个的时候，实际上是指定数组的长度



// 数组的空位（稀疏数组）
// 数组的空位指，数组的某一个位置没有任何值
// ES6 则是明确将空位转为undefined，包括Array.from、扩展运算符
// 、copyWithin()、fill()、entries()、keys()、values()、find()和findIndex()


// 排序稳定性

// 将sort()默认设置为稳定的排序算法
// 第二个参数接收一个对当前值的处理函数

const arr = [
    'peach',
    'straw',
    'apple',
    'spork'
  ];
  
  const stableSorting = (s1, s2) => {
    if (s1[0] < s2[0]) return -1;
    return 1;
  };
  
  arr.sort(stableSorting)
  // ["apple", "peach", "straw", "spork"]